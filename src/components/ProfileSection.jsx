import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAge } from '../hooks/useAge';
import { PROFILE } from '../utils/data';
import { playHover, playClick } from '../utils/sounds';

function NodeBox({ children, delay, style, label, boxRef }) {
  return (
    <motion.div
      ref={boxRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, type: 'spring' }}
      style={style}
      className="node-box rounded-lg p-3 absolute z-10 cursor-default"
    >
      <p className="text-cherry-600 text-xs font-mono-tech mb-1 uppercase tracking-widest">{label}</p>
      <div className="text-white">{children}</div>
    </motion.div>
  );
}

// Lines are drawn by measuring the actual rendered position of each node box
// and the center profile circle, then connecting their edges in viewport space.

export default function ProfileSection({ onKnowMore, setAvatarMood }) {
  const age = useAge(PROFILE.dob);
  const [knowHover, setKnowHover] = useState(false);
  const containerRef = useRef(null);
  const circleRef = useRef(null);

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);
  const locationRef = useRef(null);
  const statusRef = useRef(null);

  const [lines, setLines] = useState([]);

  useEffect(() => {
    function updateLines() {
      const circle = circleRef.current;
      if (!circle) return;
      const cRect = circle.getBoundingClientRect();
      const ccx = cRect.left + cRect.width / 2;
      const ccy = cRect.top + cRect.height / 2;

      const nodes = [
        { id: 'name', ref: nameRef, side: 'right' },
        { id: 'age', ref: ageRef, side: 'right' },
        { id: 'gender', ref: genderRef, side: 'right' },
        { id: 'location', ref: locationRef, side: 'left' },
        { id: 'status', ref: statusRef, side: 'left' },
      ];

      const newLines = nodes.map(({ id, ref, side }) => {
        const el = ref.current;
        if (!el) return null;
        const r = el.getBoundingClientRect();
        // Connect from the edge of the box closest to the center circle
        const x1 = side === 'right' ? r.right : r.left;
        const y1 = r.top + r.height / 2;
        return { id, x1, y1, x2: ccx, y2: ccy };
      }).filter(Boolean);

      setLines(newLines);
    }

    updateLines();
    const t = setTimeout(updateLines, 600); // after entrance animations settle
    window.addEventListener('resize', updateLines);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', updateLines);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center" style={{ minHeight: '90vh' }}>

      {/* SVG connecting lines - rendered in viewport space */}
      <svg
        className="fixed inset-0 pointer-events-none node-connections"
        style={{ width: '100vw', height: '100vh', zIndex: 5 }}
      >
        <defs>
          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {lines.map((n, i) => (
          <motion.line
            key={n.id}
            x1={n.x1}
            y1={n.y1}
            x2={n.x2}
            y2={n.y2}
            stroke="rgba(220,20,60,0.45)"
            strokeWidth="1"
            strokeDasharray="4 4"
            filter="url(#lineGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
          />
        ))}
        {/* Small dot at each node anchor */}
        {lines.map((n) => (
          <motion.circle
            key={n.id + '-dot'}
            cx={n.x1}
            cy={n.y1}
            r={3}
            fill="#dc143c"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            style={{ filter: 'drop-shadow(0 0 4px #dc143c)' }}
          />
        ))}
      </svg>

      {/* Center profile container */}
      <div ref={containerRef} className="relative z-20 flex items-center justify-center" style={{ width: 500, height: 500 }}>

        {/* Node boxes — brought closer */}
        <NodeBox boxRef={nameRef} delay={0.2} label="Name"
          style={{ width: 185, left: -100, top: -30 }}>
          <p className="font-orbitron text-sm font-bold text-white leading-tight">
            MALLURI<br/>BHASKAR HIMESH
          </p>
        </NodeBox>

        <NodeBox boxRef={ageRef} delay={0.4} label="Age"
          style={{ width: 200, left: -150, top: 90 }}>
          <p className="font-mono-tech text-cherry-400 text-sm">
            {age.years} Years {age.months} Months {age.days} Days
          </p>
        </NodeBox>

        <NodeBox boxRef={genderRef} delay={0.6} label="Gender"
          style={{ width: 110, left: -120, top: 250 }}>
          <p className="font-orbitron text-sm text-white">Male</p>
        </NodeBox>

        <NodeBox boxRef={locationRef} delay={0.8} label="Location"
          style={{ width: 185, right: -150, top: -20 }}>
          <p className="text-sm text-white">📍 Andhra Pradesh, India</p>
        </NodeBox>

        <NodeBox boxRef={statusRef} delay={1.0} label="Status"
          style={{ width: 215, right: -230, top: 120 }}>
          {PROFILE.status.map((s, i) => (
            <p key={i} className="text-xs text-cherry-300 font-mono-tech leading-5">▶ {s}</p>
          ))}
        </NodeBox>

        {/* Profile circle */}
        <motion.div
          ref={circleRef}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative profile-ring"
          style={{ width: 200, height: 200 }}
        >
          {[1,2,3].map(i => (
            <motion.div key={i}
              animate={{ scale: [1, 1.1 + i * 0.05, 1], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
              className="absolute inset-0 rounded-full border-2 border-cherry-600"
              style={{ margin: -(i * 10) }}
            />
          ))}
          <div className="rounded-full overflow-hidden border-4 border-cherry-600 animate-pulse-glow"
            style={{ width: 200, height: 200, boxShadow: '0 0 30px #dc143c, 0 0 60px rgba(220,20,60,0.4)' }}>
            <img src="/profile.png" alt="Bhaskar Himesh" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* KNOW ABOUT ME button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="relative font-orbitron text-sm font-bold py-4 px-8 rounded-sm cursor-pointer tracking-widest"
          onMouseEnter={() => { setKnowHover(true); playHover(); setAvatarMood && setAvatarMood('happy'); }}
          onMouseLeave={() => { setKnowHover(false); setAvatarMood && setAvatarMood('idle'); }}
          onClick={() => { playClick(); onKnowMore(); setAvatarMood && setAvatarMood('surprised'); }}
          style={{
            position: 'absolute', bottom: 0, left: '50%',
            width: 260,
            background: knowHover ? 'rgba(220,20,60,0.2)' : 'rgba(0,0,0,0.8)',
            border: `2px solid ${knowHover ? '#ff1744' : '#dc143c'}`,
            boxShadow: knowHover
              ? '0 0 30px #ff1744, 0 0 60px rgba(255,23,68,0.4), inset 0 0 20px rgba(255,23,68,0.1)'
              : '0 0 15px rgba(220,20,60,0.4)',
            color: knowHover ? '#ff6680' : '#dc143c',
            transform: `translateX(-50%) scale(${knowHover ? 1.05 : 1})`,
            transition: 'all 0.3s ease',
          }}
        >
          <span className="relative z-10">  CLICK HERE TO KNOW MORE ABOUT ME </span>
        </motion.button>
      </div>
    </div>
  );
}