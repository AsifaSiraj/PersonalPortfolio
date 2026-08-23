'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/portfolio-data';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-sm font-mono text-[#6c63ff] mb-3 tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          &lt;SKILLS /&gt;
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Technical{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #6c63ff, #00d4ff, #ff6b9d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Arsenal
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15 }}
            >
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: catIdx === 0 ? '#6c63ff' : catIdx === 1 ? '#00d4ff' : catIdx === 2 ? '#ff6b9d' : '#ffffff',
                  }}
                />
                {cat.name}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-white/60">{skill.name}</span>
                      <span className="text-xs text-white/30 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${catIdx === 0 ? '#6c63ff' : catIdx === 1 ? '#00d4ff' : catIdx === 2 ? '#ff6b9d' : '#ffffff'}80, ${catIdx === 0 ? '#6c63ff' : catIdx === 1 ? '#00d4ff' : catIdx === 2 ? '#ff6b9d' : '#ffffff'})`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill cloud */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {['Three.js', 'React', 'Next.js', 'TypeScript', 'Python', 'Unity', 'Blender', 'VR/AR', 'Accessibility', 'SEO', 'Git', 'Node.js', 'Tailwind', 'Figma', 'Firebase'].map((tag, i) => (
            <motion.span
              key={tag}
              className="px-4 py-2 rounded-full text-sm text-white/40 border border-white/[0.06] hover:border-[#6c63ff]/30 hover:text-white/70 hover:bg-[#6c63ff]/5 transition-all cursor-default"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.04 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
