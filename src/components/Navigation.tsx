'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/data/portfolio-data';

const navItems = ['About', 'Experience', 'Projects', 'Education', 'Skills', 'Contact'];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('About');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.toLowerCase()));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a1a]/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-lg font-bold tracking-wider cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              whileHover={{ scale: 1.05 }}
            >
              {personalInfo.name.split(' ')[0]}
              <span className="text-white/60 font-light">.</span>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer rounded-lg ${
                    activeSection === item
                      ? 'text-white'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === item && (
                    <motion.div
                      className="absolute inset-0 bg-white/5 rounded-lg border border-white/10"
                      layoutId="activeNav"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </motion.button>
              ))}
            </div>

            {/* Download Resume + Mobile Menu */}
            <div className="flex items-center gap-3">
              <motion.a
                href="/resume.pdf"
                download
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
                  color: 'white',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(108,99,255,0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </motion.a>

              {/* Mobile menu button */}
              <button
                className="md:hidden text-white/70 p-2 cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="w-5 flex flex-col gap-1.5">
                  <motion.span
                    className="block h-[1.5px] bg-white/70 rounded"
                    animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  />
                  <motion.span
                    className="block h-[1.5px] bg-white/70 rounded"
                    animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  />
                  <motion.span
                    className="block h-[1.5px] bg-white/70 rounded"
                    animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0a0a1a]/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`text-2xl font-medium cursor-pointer ${
                    activeSection === item ? 'text-white' : 'text-white/40'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item}
                </motion.button>
              ))}
              <motion.a
                href="/resume.pdf"
                download
                className="mt-4 px-6 py-3 text-sm font-medium rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
                  color: 'white',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
