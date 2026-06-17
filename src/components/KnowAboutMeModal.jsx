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
      className="fixed inset-0 z-50 flex items-center justify-center modal-overlay px-3"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        className="relative w-full max-w-2xl"
        style={{
          background: 'rgba(5,5,5,0.97)',
          border: '1px solid rgba(220,20,60,0.5)',
          boxShadow: '0 0 60px rgba(220,20,60,0.3)',
          borderRadius: 12,
          padding: 'clamp(1rem, 4vw, 2rem)',
          overflow: 'visible',
          /* keep avatar from overflowing viewport on mobile */
          marginTop: 'clamp(48px, 10vw, 80px)',
        }}
      >
        {/* Hanging avatar */}
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
            top: 'clamp(-50px, -10vw, -70px)',
            left: 8,
            width: 'clamp(60px, 15vw, 90px)',
            height: 'auto',
            filter: 'drop-shadow(0 0 12px rgba(220,20,60,0.6))',
            pointerEvents: 'none',
            zIndex: 5,
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-cherry-600 hover:text-cherry-400 transition-colors"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <X size={22} />
        </button>

        {/* Title */}
        <div className="flex flex-col items-center mb-2 pt-5">
          <h2
            className="font-orbitron font-bold"
            style={{
              color: '#dc143c',
              textShadow: '0 0 15px #dc143c',
              fontSize: 'clamp(1.1rem, 5vw, 1.5rem)',
            }}
          >
            EXPLORE
          </h2>
          <p className="text-xs font-mono-tech text-gray-500 tracking-widest mt-1 text-center">
            SELECT A SECTION TO NAVIGATE
          </p>
        </div>

        {/* Grid — 3 cols on md+, 3 cols on sm too but smaller padding */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
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
                className="flex flex-col items-center justify-center gap-1.5 rounded-lg cursor-pointer transition-all duration-300"
                style={{
                  background: 'rgba(220,20,60,0.05)',
                  border: '1px solid rgba(220,20,60,0.3)',
                  padding: 'clamp(0.5rem, 2.5vw, 1rem)',
                  minHeight: 'clamp(64px, 18vw, 90px)',
                }}
                whileHover={{
                  scale: 1.05,
                  background: 'rgba(220,20,60,0.15)',
                  boxShadow: '0 0 20px rgba(220,20,60,0.4)',
                  borderColor: '#dc143c',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} color={item.color} className="flex-shrink-0" />
                <span
                  className="font-orbitron text-white tracking-wider text-center leading-tight"
                  style={{ fontSize: 'clamp(0.55rem, 2vw, 0.75rem)' }}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
