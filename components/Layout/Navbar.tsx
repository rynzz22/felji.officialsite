import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-white/20 dark:border-white/5 shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3 select-none">
          <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-500 group-hover:rotate-180">
             <svg viewBox="0 0 60 60" fill="none" className="w-full h-full overflow-visible">
                <circle cx="30" cy="30" r="28" className="stroke-brand-navy dark:stroke-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" strokeWidth="2" />
                <path d="M24 16 L24 44" className="stroke-brand-navy dark:stroke-white" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M36 16 L36 44" className="stroke-brand-navy dark:stroke-white" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M16 30 L44 30" className="stroke-brand-navy dark:stroke-white" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="48" cy="12" r="4" fill="#84cc16" className="animate-pulse" />
             </svg>
          </div>
          
          <span className="text-xl font-bold tracking-tight text-brand-navy dark:text-white transition-colors">
            FELJI<span className="text-brand-green">.</span>
          </span>
        </a>

        {/* Desktop Nav - Clean & Minimal */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-brand-navy dark:hover:text-white transition-colors rounded-full hover:bg-white/50 dark:hover:bg-white/5 hover:backdrop-blur-sm"
            >
              {link.name}
            </a>
          ))}
          
          <div className="h-6 w-[1px] bg-zinc-200 dark:bg-zinc-800 mx-2"></div>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="#contact" className="group relative ml-4 px-6 py-2.5 text-sm font-semibold text-white bg-brand-navy dark:bg-zinc-100 dark:text-brand-navy overflow-hidden rounded-full shadow-lg shadow-brand-navy/10 hover:shadow-brand-green/20 transition-all hover:-translate-y-0.5">
             <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
             <span className="relative">Get in Touch</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
            className="text-brand-navy dark:text-white p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-800 md:hidden flex flex-col items-center py-8 space-y-6 shadow-xl rounded-b-3xl animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-zinc-800 dark:text-zinc-200 hover:text-brand-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};