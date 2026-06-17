import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ChevronDown, ChevronUp, X, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../utils/data';
import { playHover } from '../utils/sounds';

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => playHover()}
      className="rounded-lg p-4 sm:p-5 card-hover"
      style={{
        background: 'rgba(10,10,10,0.9)',
        border: '1px solid rgba(220,20,60,0.4)',
        boxShadow: '0 0 15px rgba(220,20,60,0.1)',
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <span className="text-xs font-mono-tech px-2 py-0.5 rounded mb-2 inline-block"
            style={{ background: 'rgba(220,20,60,0.2)', color: '#ff4466', border: '1px solid rgba(220,20,60,0.4)' }}>
            {project.category}
          </span>
          <h3 className="font-orbitron text-sm sm:text-base font-bold text-white mt-1">{project.title}</h3>
          <p className="text-cherry-600 text-xs font-mono-tech">{project.subtitle}</p>
        </div>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-3">{project.description}</p>

      <div className="flex flex-wrap gap-1 mb-3">
        {project.tech.map(t => (
          <span key={t} className="text-xs px-2 py-0.5 rounded font-mono-tech"
            style={{ background: 'rgba(220,20,60,0.1)', color: '#ff6680', border: '1px solid rgba(220,20,60,0.3)' }}>
            {t}
          </span>
        ))}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mb-3 overflow-hidden"
          >
            <p className="text-xs font-mono-tech text-cherry-600 mb-2 tracking-widest">FEATURES</p>
            <ul className="space-y-1">
              {project.features.map(f => (
                <li key={f} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="text-cherry-600">▶</span> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-3 mt-3">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded text-xs font-orbitron transition-all duration-300"
          style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.4)', color: '#dc143c' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(220,20,60,0.25)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(220,20,60,0.1)'; }}>
          <Github size={14} /> GitHub
        </a>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 px-3 py-2 rounded text-xs font-orbitron transition-all duration-300"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#aaa', cursor: 'pointer' }}>
          {expanded ? <><ChevronUp size={14} /> Less</> : <><ChevronDown size={14} /> Details</>}
        </button>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection({ onClose }) {
  return (
    <SectionWrapper title="PROJECTS" onClose={onClose}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </div>
    </SectionWrapper>
  );
}

export function SectionWrapper({ title, onClose, children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto modal-overlay"
    >
      <div className="min-h-screen py-5 sm:py-8 px-3 sm:px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-5 sm:mb-8">
            <h2
              className="font-orbitron font-bold"
              style={{
                color: '#dc143c',
                textShadow: '0 0 20px #dc143c',
                fontSize: 'clamp(1.1rem, 5vw, 1.75rem)',
              }}
            >
              ◈ {title} ◈
            </h2>
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded font-orbitron text-xs sm:text-sm transition-all flex-shrink-0"
              style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.4)', color: '#dc143c', cursor: 'pointer' }}
            >
              <X size={14} /> CLOSE
            </button>
          </div>
          {children}
        </div>
      </div>
    </motion.div>
  );
}
