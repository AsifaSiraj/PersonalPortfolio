'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/portfolio-data';

const techColors: Record<string, string> = {
  'React.js': '#61dafb',
  'TypeScript': '#3178c6',
  'Next.js': '#ffffff',
  'Python': '#3776ab',
  'JavaScript': '#f7df1e',
  'HTML5': '#e34f26',
  'CSS': '#1572b6',
  'Unity': '#000000',
  'C#': '#68217a',
  'C++': '#00599c',
  'C': '#a8b9cc',
  'SQL': '#4479a1',
  'Blender': '#ea7600',
  'VR': '#ff6b9d',
  'AI/ML': '#6c63ff',
  'NLP': '#00d4ff',
  'Web APIs': '#00d4ff',
  'Data Visualization': '#ff6b9d',
  'Web Development': '#6c63ff',
  'Algorithms': '#00d4ff',
  'OOP': '#6c63ff',
  'Game Theory': '#ff6b9d',
  'React': '#61dafb',
  'Express.js': '#ffffff',
  'MySQL': '#4479a1',
  'URP': '#000000',
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-sm font-mono text-[#6c63ff] mb-3 tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          &lt;PROJECTS /&gt;
        </motion.p>
        <div className="flex items-end justify-between mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ff6b9d, #6c63ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Projects
            </span>
          </motion.h2>
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-white/40 hover:text-[#00d4ff] transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? 'Show Less' : `View All (${projects.length})`}
          </motion.button>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`h-full p-5 rounded-xl bg-white/[0.03] border transition-all duration-300 group cursor-pointer ${
                    hoveredId === project.id
                      ? 'border-[#6c63ff]/30 bg-white/[0.06] shadow-[0_0_30px_rgba(108,99,255,0.08)]'
                      : 'border-white/[0.06] hover:border-white/[0.12]'
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                      style={{
                        background: `linear-gradient(135deg, ${project.featured ? '#6c63ff20' : '#ffffff10'}, ${project.featured ? '#00d4ff20' : '#ffffff05'})`,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={project.featured ? '#6c63ff' : '#ffffff60'} strokeWidth="1.5">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-[#6c63ff] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-white/90">
                    {project.name}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded-md border"
                        style={{
                          borderColor: `${techColors[t] || '#6c63ff'}30`,
                          color: techColors[t] || '#6c63ff',
                          background: `${techColors[t] || '#6c63ff'}10`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link hint */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-xs text-white/30 group-hover:text-white/70 transition-colors">
                      View Source
                    </span>

                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white/30 group-hover:text-white transition-colors"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/AsifaSiraj?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white/70 border border-white/10 hover:border-[#6c63ff]/30 hover:text-white hover:bg-[#6c63ff]/5 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Repositories on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
