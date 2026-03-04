import React from 'react';
import { Section } from '../Layout/Section';

export const About: React.FC = () => {
  return (
    <Section id="about" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative z-10">
           <div className="w-12 h-1 bg-brand-green rounded-full mb-8 animate-pulse-slow"></div>
           <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-8 leading-tight transition-colors duration-500">
             Engineered by the next generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-green dark:from-white dark:to-brand-green">innovators.</span>
           </h2>
           <div className="space-y-6 text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed transition-colors duration-500">
             
             {/* Main Description - Floating White Card */}
             <div className="bg-white dark:bg-zinc-900/80 p-8 rounded-[2rem] shadow-2xl shadow-zinc-200/50 dark:shadow-black/30 border border-white/50 dark:border-white/5 relative group hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-brand-green/30 to-transparent"></div>
                <p className="relative z-10 text-zinc-800 dark:text-zinc-200">
                   FELJI Tech is an early-stage startup founded by two 19-year-old innovators. We move beyond theoretical concepts to address real-world problems.
                </p>
                <div className="absolute bottom-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                    <svg className="w-12 h-12 text-brand-navy dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01732V12H13.0173V7H5.01732V12C5.01732 16.4183 8.59903 20 13.0173 20H14.017V21ZM21.0173 21V18C21.0173 16.8954 20.1219 16 19.0173 16H16.0173V12H20.0173V7H12.0173V12C12.0173 16.4183 15.599 20 20.0173 20H21.0173V21Z" />
                    </svg>
                </div>
             </div>

             <p className="pl-4">
               Our focus lies strictly on safety, efficiency, and accessibility, ensuring that our digital solutions translate into tangible community benefits.
             </p>
           </div>
        </div>

        <div className="relative">
            {/* Background decorative element connecting cards */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/10 to-transparent rounded-[3rem] -rotate-3 scale-105 blur-2xl z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {[
                { name: "Felecito Caturza Jr.", role: "Co-Founder", initial: "F" },
                { name: "Aj Rienze Josol", role: "Co-Founder", initial: "A" }
            ].map((person, i) => (
                <div key={i} className="group relative bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner border border-zinc-100 dark:border-zinc-800 group-hover:scale-110 transition-transform duration-500">
                            <span className="text-3xl font-black text-brand-navy dark:text-white group-hover:text-brand-green transition-colors">{person.initial}</span>
                        </div>
                        <h4 className="text-xl font-bold text-brand-navy dark:text-white mb-1 transition-colors">{person.name}</h4>
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 group-hover:text-brand-green transition-colors">{person.role}</span>
                    </div>
                </div>
            ))}
            
            {/* Quote Card - Updated to floating white card style */}
            <div className="col-span-1 sm:col-span-2 bg-white dark:bg-zinc-900 p-8 rounded-[2rem] text-center shadow-xl shadow-zinc-200/50 dark:shadow-black/30 border border-white/60 dark:border-white/5 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-zinc-50/50 dark:to-black/20 pointer-events-none"></div>
                <p className="relative z-10 text-brand-navy/80 dark:text-zinc-300 font-medium italic text-lg transition-colors">
                    "Dedicated to providing reliable technology for Talibon and beyond."
                </p>
            </div>
            </div>
        </div>

      </div>
    </Section>
  );
};