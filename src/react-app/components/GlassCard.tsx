import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassCard({ children, className = '', hoverEffect = true }: GlassCardProps) {
    return (
        <motion.div
            className={`glass-panel p-6 rounded-2xl ${className}`}
            whileHover={hoverEffect ? { scale: 1.02, boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)" } : {}}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}
