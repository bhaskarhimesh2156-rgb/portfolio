import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-4"

    >
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-cherry-600" style={{ boxShadow: '0 0 6px #dc143c' }} />
        <span className="font-orbitron text-xs text-cherry-600 tracking-widest">MBH.PORTFOLIO</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500" style={{ boxShadow: '0 0 4px #22c55e' }} />
        <span className="font-mono-tech text-xs text-gray-500">ONLINE</span>
      </div>
    </motion.header>
  );
}
