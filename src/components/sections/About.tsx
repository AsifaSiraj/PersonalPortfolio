'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio-data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-start pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left - Visual */}
          <motion.div className="relative" custom={0} variants={fadeUp}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Rotating border ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #6c63ff, #00d4ff, #ff6b9d, #6c63ff)',
                  animation: 'spin 4s linear infinite',
                }}
              />
              <div className="absolute inset-[3px] rounded-full bg-[#0a0a1a]" />
              {/* Avatar placeholder with initials */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#6c63ff]/20 to-[#00d4ff]/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                <span
                  className="text-5xl md:text-6xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  AS
                </span>
              </div>
              {/* Floating badges */}
              {['Frontend Dev', 'VR/3D', 'AI/ML'].map((label, i) => (
                <motion.div
                  key={label}
                  className="absolute px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 backdrop-blur-sm"
                  style={{
                    top: i === 0 ? '5%' : i === 1 ? '50%' : '85%',
                    left: i === 0 ? '-10%' : i === 1 ? '-15%' : '0%',
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.p
              className="text-sm font-mono text-[#6c63ff] mb-3 tracking-widest"
              custom={1}
              variants={fadeUp}
            >
              &lt;ABOUT ME /&gt;
            </motion.p>
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight"
              custom={2}
              variants={fadeUp}
            >
              Hi, I&apos;m{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {personalInfo.name}
              </span>
            </motion.h2>
            <motion.p
              className="text-lg text-white/60 mb-6"
              custom={3}
              variants={fadeUp}
            >
              {personalInfo.title}
            </motion.p>
            <motion.p
              className="text-white/40 leading-relaxed mb-8"
              custom={4}
              variants={fadeUp}
            >
              {personalInfo.bio}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              custom={5}
              variants={fadeUp}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-[#6c63ff]/50 hover:bg-[#6c63ff]/10 transition-all text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 transition-all text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={personalInfo.location}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-[#ff6b9d]/50 hover:bg-[#ff6b9d]/10 transition-all text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {personalInfo.location}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
