'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/portfolio-data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-sm font-mono text-[#6c63ff] mb-3 tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          &lt;EXPERIENCE /&gt;
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Where I&apos;ve{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #6c63ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Worked
          </span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6c63ff] via-[#00d4ff] to-[#ff6b9d] opacity-30" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-[#6c63ff] border-2 border-[#0a0a1a] z-10 top-6 shadow-[0_0_10px_rgba(108,99,255,0.5)]" />

                {/* Date badge */}
                <div className={`md:w-1/4 pl-10 md:pl-0 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-xs font-mono text-white/40">{exp.period}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                      exp.mode === 'Remote' 
                        ? 'border-[#6c63ff]/30 text-[#6c63ff] bg-[#6c63ff]/10'
                        : exp.mode === 'Hybrid'
                        ? 'border-[#00d4ff]/30 text-[#00d4ff] bg-[#00d4ff]/10'
                        : 'border-[#ff6b9d]/30 text-[#ff6b9d] bg-[#ff6b9d]/10'
                    }`}>
                      {exp.mode}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/40 bg-white/5">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  className="md:w-3/4 pl-10 md:pl-0"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:border-white/[0.12] hover:bg-white/[0.05] transition-all group">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-[#00d4ff]/80">
                          {exp.company}{' '}
                          <span className="text-white/30">· {exp.type}</span>
                        </p>
                      </div>
                      <span className="text-xs text-white/30 mt-1">{exp.location}</span>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.slice(0, 5).map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-[#6c63ff]/10 text-[#6c63ff]/70 border border-[#6c63ff]/20"
                        >
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 5 && (
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-white/30">
                          +{exp.skills.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
