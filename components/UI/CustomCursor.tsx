import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
      const moveCursor = (e: MouseEvent) => {
        if (cursorRef.current && followerRef.current) {
          // Main dot follows instantly
          cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
          
          // Follower trails with CSS transition (handled in style/class)
          // We use a slight delay update for the follower to create the trail effect naturally or use requestAnimationFrame
          // For simplicity/performance in React, we'll update position directly
          followerRef.current.animate({
            transform: `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`
          }, {
            duration: 500,
            fill: "forwards"
          });
        }
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };

      window.addEventListener('mousemove', moveCursor);
      window.addEventListener('mouseover', handleMouseOver);

      return () => {
        window.removeEventListener('mousemove', moveCursor);
        window.removeEventListener('mouseover', handleMouseOver);
      };
    }
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      {/* Main Cursor Dot */}
      <div 
        ref={cursorRef} 
        className="absolute top-0 left-0 w-3 h-3 bg-brand-navy dark:bg-white rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform z-50 mix-blend-difference transition-colors duration-300"
      />
      
      {/* Trailing Ring */}
      <div 
        ref={followerRef}
        className={`absolute top-0 left-0 w-8 h-8 border border-brand-green dark:border-white/50 rounded-full will-change-transform transition-all duration-300 ease-out z-40 opacity-50
          ${isHovering ? 'scale-150 bg-brand-green/20 dark:bg-white/10 border-brand-green dark:border-white' : 'scale-100'}
        `}
      />
    </div>
  );
};