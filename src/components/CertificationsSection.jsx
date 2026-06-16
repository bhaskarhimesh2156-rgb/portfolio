import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../utils/data';
import { SectionWrapper } from './ProjectsSection';

export default function CertificationsSection({ onClose }) {
  return (
    <SectionWrapper title="CERTIFICATIONS" onClose={onClose}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CERTIFICATIONS.map((cert, i) => {
          // `cert.file` should point to the certificate image/PDF in /public/certs
          // Falls back to `cert.link` (external URL) if `file` isn't provided.
          const href = cert.file || cert.link;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg p-5 card-hover"
              style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(220,20,60,0.3)' }}
            >
              <div className="flex items-start gap-3">
                <Award className="flex-shrink-0 mt-1" size={22} color="#dc143c" />
                <div className="flex-1">
                  <h3 className="font-orbitron text-sm font-bold text-white mb-1">{cert.name}</h3>
                  <p className="text-cherry-600 text-xs font-mono-tech mb-1">{cert.org}</p>
                  <p className="text-gray-500 text-xs font-mono-tech mb-3">{cert.date}</p>
                  {href && (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-orbitron px-3 py-1.5 rounded transition-all"
                      style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.4)', color: '#dc143c' }}>
                      <ExternalLink size={12} /> View Certificate
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