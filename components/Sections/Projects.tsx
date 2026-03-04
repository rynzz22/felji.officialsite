import React from 'react';
import { Smartphone, Zap, Server, ArrowUpRight } from 'lucide-react';
import { Section } from '../Layout/Section';

export const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col items-start mb-12 relative z-10">
        <span className="px-3 py-1 rounded-full bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-sm text-brand-navy dark:text-zinc-200 text-xs font-bold mb-4 border border-zinc-200 dark:border-zinc-700 transition-colors">
           Current Development
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white transition-colors duration-500">
          Projects & Initiatives
        </h2>
      </div>

      {/* Adaptive Glass Project Card */}
      {/* Using 'group' to trigger hover effects on children */}
      <div className="group relative rounded-[2.5rem] p-[1px] bg-gradient-to-b from-white/20 to-transparent hover:from-brand-green/50 hover:to-brand-navy/50 dark:from-white/10 transition-all duration-700 shadow-2xl shadow-zinc-200/50 dark:shadow-black/50 hover:shadow-brand-green/10">
        
        {/* Inner Card Content */}
        <div className="relative rounded-[2.5rem] p-8 md:p-16 bg-zinc-900 overflow-hidden isolate h-full">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[100px] group-hover:bg-brand-green/20 transition-all duration-700"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-navy/40 rounded-full blur-[100px]"></div>

            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="flex items-center gap-3 mb-6">
                <div className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
                </div>
                <span className="text-brand-green font-bold text-sm tracking-wide uppercase shadow-green-glow">Active Status</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Talibon Respo App</h3>
                <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-md group-hover:text-white transition-colors duration-500">
                A community-focused application designed to support safety, emergency response, and local services in real-time.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                {['Safety', 'Real-time', 'Community'].map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-zinc-300 group-hover:border-white/20 transition-colors cursor-default">
                    {tag}
                    </span>
                ))}
                </div>

                <button className="flex items-center gap-2 text-white font-semibold hover:text-brand-green transition-colors group/btn">
                View Technical Specs 
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
            </div>

            {/* Feature Grid inside Card - Glass Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-dark p-6 rounded-3xl hover:bg-white/10 transition-colors duration-300 transform group-hover:translate-x-2 transition-transform delay-75">
                    <Smartphone className="w-8 h-8 text-brand-green mb-4" />
                    <h4 className="font-bold text-lg mb-2 text-white">Mobile First</h4>
                    <p className="text-zinc-400 text-sm">Accessible across all devices for maximum reach.</p>
                </div>
                <div className="glass-dark p-6 rounded-3xl hover:bg-white/10 transition-colors duration-300 transform group-hover:translate-x-2 transition-transform delay-100">
                    <Server className="w-8 h-8 text-brand-green mb-4" />
                    <h4 className="font-bold text-lg mb-2 text-white">Scalable</h4>
                    <p className="text-zinc-400 text-sm">Built to expand to neighboring regions.</p>
                </div>
                <div className="glass-dark p-6 rounded-3xl hover:bg-white/10 transition-colors duration-300 sm:col-span-2 transform group-hover:translate-x-2 transition-transform delay-150">
                    <Zap className="w-8 h-8 text-brand-green mb-4" />
                    <h4 className="font-bold text-lg mb-2 text-white">Rapid Response</h4>
                    <p className="text-zinc-400 text-sm">Direct communication channels for emergency situations.</p>
                </div>
            </div>
            </div>
        </div>
      </div>
    </Section>
  );
};