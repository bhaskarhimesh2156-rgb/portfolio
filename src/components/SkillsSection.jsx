import { motion } from 'framer-motion';
import { SKILLS } from '../utils/data';
import { SectionWrapper } from './ProjectsSection';
import { playHover } from '../utils/sounds';

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => playHover()}
      className="mb-3"
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm text-white font-mono-tech">{name}</span>
        <span className="text-xs font-mono-tech" style={{ color: '#dc143c' }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: 'rgba(220,20,60,0.15)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ delay: index * 0.05 + 0.3, duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full skill-bar-fill"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection({ onClose }) {
  const categories = Object.keys(SKILLS);

  return (
    <SectionWrapper title="SKILLS" onClose={onClose}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.1 }}
            className="rounded-lg p-4 sm:p-5 card-hover"
            style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(220,20,60,0.3)' }}
          >
            <h3 className="font-orbitron text-xs sm:text-sm font-bold mb-4 tracking-wider"
              style={{ color: '#dc143c', textShadow: '0 0 8px #dc143c' }}>
              {cat.toUpperCase()}
            </h3>
            {SKILLS[cat].map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
            ))}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
