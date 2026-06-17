import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../utils/data';
import { SectionWrapper } from './ProjectsSection';

export default function EducationSection({ onClose }) {
  return (
    <SectionWrapper title="EDUCATION" onClose={onClose}>
      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute top-0 bottom-0 w-px"
          style={{ left: '1.25rem', background: 'rgba(220,20,60,0.3)' }}
        />

        <div className="space-y-6 sm:space-y-8" style={{ paddingLeft: '3rem' }}>
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div
                className="absolute top-5 w-3.5 h-3.5 rounded-full border-2 border-cherry-600"
                style={{
                  left: '-1.85rem',
                  background: '#000',
                  boxShadow: '0 0 10px #dc143c',
                }}
              />

              <div
                className="rounded-lg p-4 sm:p-5 card-hover"
                style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(220,20,60,0.3)' }}
              >
                <div className="flex items-start gap-3">
                  <GraduationCap size={20} color="#dc143c" className="flex-shrink-0 mt-1" />
                  <div className="min-w-0">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-1 leading-snug">{edu.degree}</h3>
                    <p className="text-sm font-mono-tech mb-1 truncate" style={{ color: '#dc143c' }}>{edu.institution}</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs text-gray-500 font-mono-tech">{edu.period}</span>
                      <span className="text-xs font-bold font-mono-tech" style={{ color: '#ff4466' }}>{edu.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
