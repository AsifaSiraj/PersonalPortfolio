'use client';

import { motion } from 'framer-motion';
import { education, certifications } from '@/data/portfolio-data';

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-sm font-mono text-[#6c63ff] mb-3 tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          &lt;EDUCATION /&gt;
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Academic{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #ff6b9d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Background
          </span>
        </motion.h2>

        {/* Education cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              className="relative p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -3 }}
            >
              {/* for current education */}
              {/* {i === 0 && (
                <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-[#6c63ff] text-[10px] font-bold text-white">
                  CURRENT
                </div>
              )} */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6c63ff]/20 to-[#00d4ff]/20 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6c63ff" strokeWidth="1.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-1 group-hover:text-white/90">
                {edu.institution}
              </h3>
              <p className="text-sm text-[#00d4ff]/80 mb-1">
                {edu.degree} — {edu.field}
              </p>
              <p className="text-xs text-white/30 font-mono">{edu.period}</p>
              {edu.grade && (
                <div className="mt-3 inline-block px-2 py-0.5 rounded-md bg-[#00d4ff]/10 text-[#00d4ff] text-xs border border-[#00d4ff]/20">
                  Grade: {edu.grade}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.p
          className="text-sm font-mono text-[#ff6b9d] mb-3 tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          &lt;CERTIFICATIONS /&gt;
        </motion.p>
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Certificates &{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #ff6b9d, #6c63ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Licenses
          </span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ff6b9d]/20 hover:bg-white/[0.04] transition-all group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff6b9d]/20 to-[#6c63ff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff6b9d" strokeWidth="2">
                    <path d="M12 15l-2 5l2-1l2 1l-2-5z" />
                    <circle cx="12" cy="9" r="6" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-medium text-white/80 group-hover:text-white truncate">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-white/30 mt-0.5">{cert.issuer}</p>
                  {cert.date && (
                    <p className="text-[10px] text-white/20 font-mono mt-1">{cert.date}</p>
                  )}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {cert.skills.map((s) => (
                        <span key={s} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-white/30">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
