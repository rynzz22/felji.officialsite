import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`relative z-10 py-20 md:py-32 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
};