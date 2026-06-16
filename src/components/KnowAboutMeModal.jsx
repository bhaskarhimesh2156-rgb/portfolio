import { motion, AnimatePresence } from 'framer-motion';
import { X, FolderOpen, Zap, Award, GraduationCap, Linkedin, Github, Mail, FileText, Briefcase } from 'lucide-react';
import { playHover, playOpen } from '../utils/sounds';

const MENU_ITEMS = [
  { id: 'projects',       label: 'Projects',       icon: FolderOpen,    color: '#dc143c' },
  { id: 'skills',         label: 'Skills',          icon: Zap,           color: '#ff4444' },
  { id: 'experience',     label: 'Experience',      icon: Briefcase,     color: '#cc1133' },
  { id: 'certifications', label: 'Certifications',  icon: Award,         color: '#e01a40' },
  { id: 'education',      label: 'Education',       icon: GraduationCap, color: '#dc143c' },
  { id: 'linkedin',       label: 'LinkedIn',        icon: Linkedin,      color: '#ff2244' },
  { id: 'github',         label: 'GitHub',          icon: Github,        color: '#cc0033' },
  { id: 'email',          label: 'Email',           icon: Mail,          color: '#ee1133' },
  { id: 'resume',         label: 'Resume',          icon: FileText,      color: '#dc143c' },
];

export default function KnowAboutMeModal({ onClose, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        className="relative w-full max-w-2xl mx-4"
        style={{
          background: 'rgba(5,5,5,0.97)',
          border: '1px solid rgba(220,20,60,0.5)',
          boxShadow: '0 0 60px rgba(220,20,60,0.3)',
          borderRadius: 12,
          padding: '2rem',
          overflow: 'visible',
        }}
      >
        {/* Hanging avatar - positioned above the top-left of the box, no circle */}
        <motion.img
          src="avatar-idle.png"
          alt="Avatar"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.4 },
            y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            position: 'absolute',
            top: -70,
            left: 8,
            width: 90,
            height: 'auto',
            filter: 'drop-shadow(0 0 12px rgba(220,20,60,0.6))',
            pointerEvents: 'none',
            zIndex: 5,
          }}
        />

        {/* Close button */}
        <button onClick={onClose}
          className="absolute top-4 right-4 text-cherry-600 hover:text-cherry-400 transition-colors"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <X size={22} />
        </button>

        {/* Title */}
        <div className="flex flex-col items-center mb-2 pt-6">
          <h2 className="font-orbitron text-2xl font-bold"
            style={{ color: '#dc143c', textShadow: '0 0 15px #dc143c' }}>
              EXPLORE 
          </h2>
          <p className="text-xs font-mono-tech text-gray-500 tracking-widest mt-1">
            SELECT A SECTION TO NAVIGATE
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4">
          {MENU_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onMouseEnter={() => playHover()}
                onClick={() => { playOpen(); onSelect(item.id); onClose(); }}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg cursor-pointer transition-all duration-300"
                style={{
                  background: 'rgba(220,20,60,0.05)',
                  border: '1px solid rgba(220,20,60,0.3)',
                }}
                whileHover={{
                  scale: 1.05,
                  background: 'rgba(220,20,60,0.15)',
                  boxShadow: '0 0 20px rgba(220,20,60,0.4)',
                  borderColor: '#dc143c',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} color={item.color} />
                <span className="font-orbitron text-xs text-white tracking-wider">{item.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}