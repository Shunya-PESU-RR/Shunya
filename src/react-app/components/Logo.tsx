import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'lg' }: LogoProps) {
    const [isHovered, setIsHovered] = useState(false);

    const sizeClasses = {
        sm: 'text-3xl md:text-4xl',
        md: 'text-5xl md:text-6xl lg:text-8xl',
        lg: 'text-5xl sm:text-6xl md:text-7xl lg:text-9xl'
    };

    const letters = 'SHUNYA'.split('');

    return (
        <motion.h1
            className={`font-bold tracking-tighter leading-none ${sizeClasses[size]} ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="relative inline-block">
                {/* Glitch layers */}
                <span className="absolute inset-0 text-[#0070f3] opacity-0 animate-glitch-1" aria-hidden="true">
                    SHUNYA
                </span>
                <span className="absolute inset-0 text-[#7928ca] opacity-0 animate-glitch-2" aria-hidden="true">
                    SHUNYA
                </span>

                {/* Main text with staggered letter animation */}
                <span className="relative z-10">
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            className="inline-block text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{
                                scale: 1.1,
                                textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                                transition: { duration: 0.2 }
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </span>

                {/* Underline effect */}
                <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#0070f3] to-[#7928ca] rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: isHovered ? '100%' : '0%' }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                />
            </span>
        </motion.h1>
    );
}
