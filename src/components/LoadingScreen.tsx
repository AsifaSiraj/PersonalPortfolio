'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/data/portfolio-data';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);
  const nameParts = personalInfo.name.toUpperCase().split(' ');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowContent(false);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a1a]"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Name reveal */}
          <div className="mb-12 flex flex-col items-center gap-2">
            {nameParts.map((part, i) => (
              <motion.h1
                key={i}
                className="text-6xl md:text-8xl font-bold tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, #6c63ff, #00d4ff, #ff6b9d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: i * 0.3, ease: 'easeOut' }}
              >
                {part}
              </motion.h1>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-64 md:w-80">
            <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #6c63ff, #00d4ff, #ff6b9d)',
                }}
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="mt-3 flex justify-between text-xs text-white/40 font-mono">
              <span>LOADING</span>
              <span>{Math.min(Math.floor(progress), 100)}%</span>
            </div>
          </div>

          {/* Floating dots decoration */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 2 === 0 ? '#6c63ff' : '#00d4ff',
                left: `${20 + i * 15}%`,
                top: `${30 + Math.sin(i) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
