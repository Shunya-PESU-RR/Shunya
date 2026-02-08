import React from 'react';
import { motion } from 'motion/react';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans selection:bg-purple-500/30">
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 z-0">
        <div className="mesh-bg absolute inset-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 dark:brightness-100 mix-blend-overlay"></div>
      </div>

      {/* Content Layer */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`relative z-10 container mx-auto px-6 pt-32 pb-20 ${className}`}
      >
        {children}
      </motion.main>
    </div>
  );
}
