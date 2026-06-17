import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../utils/data';
import { SectionWrapper } from './ProjectsSection';

export default function ExperienceSection({ onClose }) {
  return (
    <SectionWrapper title="EXPERIENCE" onClose={onClose}>
      <div className="space-y-5 sm:space-y-6">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="rounded-lg p-4 sm:p-6 relative"
            style={{
              background: 'rgba(10,10,10,0.9)',
              border: `1px solid ${exp.current ? '#dc143c' : 'rgba(220,20,60,0.3)'}`,
              boxShadow: exp.current ? '0 0 20px rgba(220,20,60,0.2)' : 'none',
            }}
          >
            {exp.current && (
              <span
                className="absolute top-3 right-3 text-xs font-mono-tech px-2 py-0.5 rounded"
                style={{ background: 'rgba(220,20,60,0.2)', color: '#ff4466', border: '1px solid rgba(220,20,60,0.5)' }}
              >
                ● CURRENT
              </span>
            )}
            <h3 className="font-orbitron text-base sm:text-lg font-bold text-white mb-1 pr-20">{exp.role}</h3>
            <p className="font-mono-tech text-sm mb-1" style={{ color: '#dc143c' }}>{exp.company}</p>
            <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4 font-mono-tech">
              <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
              <span className="flex items-center gap-1"><Calendar size={12} /> {exp.period}</span>
            </div>
            <ul className="space-y-2">
              {exp.highlights.map((h, j) => (
                <li key={j} className="text-sm text-gray-300 flex gap-2">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: '#dc143c' }}>▶</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
