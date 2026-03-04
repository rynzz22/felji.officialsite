import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Sections/Hero';
import { Mission } from './components/Sections/Mission';
import { Projects } from './components/Sections/Projects';
import { About } from './components/Sections/About';
import { Footer } from './components/Layout/Footer';
import { CustomCursor } from './components/UI/CustomCursor';
import { TechBackground } from './components/UI/TechBackground';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  useEffect(() => {
    // Initialize Lenis for smooth momentum scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simple intersection observer for scroll reveal effects
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-500">
      <CustomCursor />
      <TechBackground />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;