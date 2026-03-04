import React, { useEffect, useRef } from 'react';

export const TechBackground: React.FC = () => {
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);
  const shape4Ref = useRef<HTMLDivElement>(null);
  const shape5Ref = useRef<HTMLDivElement>(null);
  const shape6Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      window.requestAnimationFrame(() => {
        // Parallax factors: varying speeds and directions
        if (shape1Ref.current) shape1Ref.current.style.transform = `translate3d(0, ${scrollY * 0.1}px, 0)`;
        if (shape2Ref.current) shape2Ref.current.style.transform = `translate3d(0, ${scrollY * -0.15}px, 0)`;
        if (shape3Ref.current) shape3Ref.current.style.transform = `translate3d(0, ${scrollY * 0.08}px, 0)`;
        if (shape4Ref.current) shape4Ref.current.style.transform = `translate3d(0, ${scrollY * -0.2}px, 0)`;
        if (shape5Ref.current) shape5Ref.current.style.transform = `translate3d(0, ${scrollY * 0.05}px, 0)`;
        if (shape6Ref.current) shape6Ref.current.style.transform = `translate3d(0, ${scrollY * -0.1}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-50/50 dark:bg-zinc-950 transition-colors duration-500">
      {/* Soft Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>
      
      {/* Base Gradient Blobs (The colors behind the glass) */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-navy/5 dark:bg-brand-green/5 rounded-full blur-[100px] animate-pulse-slow transition-colors duration-500"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-brand-green/10 dark:bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow [animation-delay:2s] transition-colors duration-500"></div>
      <div className="absolute top-[40%] left-[20%] w-[600px] h-[600px] bg-blue-100/30 dark:bg-brand-navy/20 rounded-full blur-[80px] animate-pulse-slow [animation-delay:4s] transition-colors duration-500"></div>

      {/* LIQUID GLASS SHAPES with Parallax Containers */}
      
      {/* Shape 1: Top Left Floating Organic Glass */}
      <div ref={shape1Ref} className="absolute top-32 left-[10%] w-48 h-48 opacity-80 mix-blend-normal will-change-transform">
         <div className="w-full h-full animate-blob">
            <div className="w-full h-full rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-white/40 to-white/5 dark:from-white/10 dark:to-transparent border border-white/60 dark:border-white/10 backdrop-blur-[8px] shadow-lg shadow-zinc-200/20 dark:shadow-black/20 transition-all duration-500"></div>
         </div>
      </div>

      {/* Shape 2: Bottom Right Large Glass Bubble */}
      <div ref={shape2Ref} className="absolute bottom-1/4 right-[5%] w-64 h-64 opacity-70 will-change-transform">
         <div className="w-full h-full animate-float [animation-delay:1s]">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-white/40 via-white/10 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent border border-white/50 dark:border-white/10 backdrop-blur-[6px] shadow-xl shadow-brand-navy/5 dark:shadow-black/20 transition-all duration-500"></div>
            {/* Highlight reflection */}
            <div className="absolute top-[15%] right-[15%] w-12 h-12 bg-white/40 dark:bg-white/10 rounded-full blur-xl"></div>
         </div>
      </div>

      {/* Shape 3: Center Left Morphing Blob */}
      <div ref={shape3Ref} className="absolute top-[60%] left-[5%] w-40 h-40 opacity-60 will-change-transform">
         <div className="w-full h-full animate-blob [animation-delay:3s]">
            <div className="w-full h-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-white/10 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-[4px] transition-all duration-500"></div>
         </div>
      </div>

      {/* Shape 4: Small detail bubbles */}
      <div ref={shape4Ref} className="absolute top-[20%] right-[30%] w-12 h-12 will-change-transform">
        <div className="w-full h-full animate-float [animation-delay:1.5s]">
           <div className="w-full h-full rounded-full bg-white/20 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-[2px] transition-all duration-500"></div>
        </div>
      </div>

      <div ref={shape5Ref} className="absolute bottom-[20%] left-[40%] w-8 h-8 will-change-transform">
        <div className="w-full h-full animate-float [animation-delay:3.5s]">
           <div className="w-full h-full rounded-full bg-brand-green/10 dark:bg-brand-green/20 border border-white/30 dark:border-white/10 backdrop-blur-[2px] transition-all duration-500"></div>
        </div>
      </div>

      {/* Shape 5 (Ref 6): Large translucent overlay shape */}
      <div ref={shape6Ref} className="absolute top-1/4 right-[20%] w-56 h-56 opacity-50 will-change-transform">
        <div className="w-full h-full animate-blob [animation-delay:5s]">
          <div className="w-full h-full rounded-[50%_50%_40%_60%/50%_50%_60%_40%] bg-gradient-to-b from-white/30 to-transparent dark:from-white/10 dark:to-transparent border border-white/30 dark:border-white/10 backdrop-blur-[10px] shadow-lg transition-all duration-500"></div>
        </div>
      </div>

    </div>
  );
};