'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Chatbot from '@/components/chatbot/Chatbot';

const ThreeScene = dynamic(() => import('@/components/three/ThreeScene'), {
  ssr: false,
});

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0a0a1a]">
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      <ThreeScene />

      {loaded && <Navigation />}

      <div
        className={`relative z-10 transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <section className="min-h-[40vh] flex items-center justify-center pt-20" />

        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </div>

      {loaded && <Chatbot />}
    </main>
  );
}
