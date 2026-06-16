import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../utils/data';
import { SectionWrapper } from './ProjectsSection';

export default function EducationSection({ onClose }) {
  return (
    <SectionWrapper title="EDUCATION" onClose={onClose}>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px" style={{ background: 'rgba(220,20,60,0.3)' }} />

        <div className="space-y-8 pl-20">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-14 top-5 w-4 h-4 rounded-full border-2 border-cherry-600"
                style={{ background: '#000', boxShadow: '0 0 10px #dc143c' }} />

              <div className="rounded-lg p-5 card-hover"
                style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(220,20,60,0.3)' }}>
                <div className="flex items-start gap-3">
                  <GraduationCap size={20} color="#dc143c" className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-orbitron text-sm font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-cherry-500 text-sm font-mono-tech mb-1">{edu.institution}</p>
                    <div className="flex gap-4 mt-2">
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
