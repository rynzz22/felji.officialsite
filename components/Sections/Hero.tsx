import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section } from '../Layout/Section';

export const Hero: React.FC = () => {
  return (
    <Section className="min-h-[90vh] flex items-center pt-32 pb-10 relative">
      {/* Decorative Floating Orb - Positioned BEHIND text via z-[-1] */}
      <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 hidden lg:block pointer-events-none animate-float z-[-1]">
          <div className="w-[30rem] h-[30rem] rounded-full border border-zinc-100/50 dark:border-white/5 bg-gradient-to-tr from-white/40 to-white/10 dark:from-white/10 dark:to-transparent backdrop-blur-[2px] flex items-center justify-center relative overflow-hidden opacity-60">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/5 to-transparent"></div>
              <div className="w-[20rem] h-[20rem] rounded-full border border-dashed border-brand-navy/10 dark:border-white/10 animate-spin [animation-duration:30s]"></div>
          </div>
      </div>

      <div className="w-full max-w-5xl text-left relative z-10">
        
        {/* Soft Badge - Glass Style */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass dark:glass border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 text-xs font-semibold mb-8 shadow-sm animate-fade-in-up hover:border-brand-green/50 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            System Operational v1.0
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-brand-navy dark:text-white mb-8 leading-[1.05] animate-fade-in-up [animation-delay:100ms] transition-colors duration-500">
          Innovative technology<br />
          for <span className="text-brand-green relative inline-block">
            resilient
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-green opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span> communities.
        </h1>
        
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-12 animate-fade-in-up [animation-delay:200ms] transition-colors duration-500">
          We provide practical, reliable digital solutions to help citizens work safer and with greater ease.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-start gap-5 animate-fade-in-up [animation-delay:300ms]">
          {/* Primary Button with Shimmer */}
          <a
            href="#projects"
            className="relative group px-8 py-4 bg-brand-navy dark:bg-zinc-100 text-white dark:text-brand-navy rounded-full font-semibold overflow-hidden shadow-xl shadow-brand-navy/15 dark:shadow-white/5 hover:shadow-brand-navy/30 hover:-translate-y-1 transition-all flex items-center gap-2"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative flex items-center gap-2">
              View Projects
              <ArrowRight className="w-4 h-4 text-brand-green dark:text-brand-green transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          {/* Secondary Button with Glass Effect */}
          <a
            href="#about"
            className="px-8 py-4 glass dark:bg-white/5 text-zinc-600 dark:text-zinc-300 rounded-full font-semibold hover:bg-white/90 dark:hover:bg-white/10 hover:text-brand-navy dark:hover:text-white border border-zinc-200/50 dark:border-white/10 transition-all hover:-translate-y-1 shadow-sm backdrop-blur-md"
          >
            About Us
          </a>
        </div>

      </div>
    </Section>
  );
};