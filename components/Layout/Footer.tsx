import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative z-20 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-t border-brand-navy/5 dark:border-white/5 py-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-black tracking-tight text-brand-navy dark:text-white italic transition-colors" style={{ fontFamily: 'Inter, sans-serif', transform: 'skewX(-6deg)' }}>
                  FELJI
                </span>
                <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></div>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-xs mb-8 leading-relaxed transition-colors">
              Innovative technology for communities. Building safer, more efficient digital environments.
            </p>
            <p className="text-sm text-zinc-400 dark:text-zinc-500 font-medium transition-colors">
              &copy; {new Date().getFullYear()} FELJI Tech. All rights reserved.
            </p>
          </div>

          <div className="md:text-right">
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-6">Start a Conversation</h5>
            <a 
              href="mailto:felji.org@gmail.com" 
              className="text-2xl md:text-3xl font-bold text-brand-navy dark:text-white hover:text-brand-green dark:hover:text-brand-green transition-colors"
            >
              felji.org@gmail.com
            </a>
            <p className="text-zinc-400 dark:text-zinc-500 mt-4 font-light transition-colors">
              Talibon, Bohol
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};