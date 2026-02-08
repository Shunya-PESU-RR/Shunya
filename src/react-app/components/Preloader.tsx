import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
    onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // Fallback timeout in case video fails or takes too long
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 4500); // Adjust based on video length
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <video
                autoPlay
                muted
                playsInline
                className="max-w-[60vw] max-h-[60vh] object-contain opacity-100"
                onEnded={onComplete}
                onLoadedData={() => setIsVideoLoaded(true)}
            >
                <source src="/assets/shunya_logo_animation.mp4" type="video/mp4" />
            </video>

            {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </motion.div>
    );
}
