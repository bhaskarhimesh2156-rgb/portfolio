import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../utils/data';
import { SectionWrapper } from './ProjectsSection';

export default function CertificationsSection({ onClose }) {
  return (
    <SectionWrapper title="CERTIFICATIONS" onClose={onClose}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {CERTIFICATIONS.map((cert, i) => {
          const href = cert.file || cert.link;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg p-4 sm:p-5 card-hover"
              style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(220,20,60,0.3)' }}
            >
              <div className="flex items-start gap-3">
                <Award className="flex-shrink-0 mt-1" size={20} color="#dc143c" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-orbitron text-xs sm:text-sm font-bold text-white mb-1 leading-snug">{cert.name}</h3>
                  <p className="text-xs font-mono-tech mb-1 truncate" style={{ color: '#dc143c' }}>{cert.org}</p>
                  <p className="text-gray-500 text-xs font-mono-tech mb-3">{cert.date}</p>
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-orbitron px-3 py-1.5 rounded transition-all"
                      style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.4)', color: '#dc143c' }}
                    >
                      <ExternalLink size={11} /> View Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
