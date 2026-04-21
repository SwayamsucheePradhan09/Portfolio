'use client'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const CHARS = '!<>-_\\/[]{}—=+*^?#________'

export default function ScrambleText({ text, className = '' }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Only animate once
  const isAnimating = useRef(false);

  useEffect(() => {
    // Fill text with spaces initially
    setDisplayText(text.replace(/./g, ' '));
  }, [text]);

  useEffect(() => {
    if (!isInView || isAnimating.current) return;
    isAnimating.current = true;
    
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() => 
        text.split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === ' ') return ' ';
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
        isAnimating.current = false;
      }
      
      iteration += 1 / 3; // Adjust speed (lower increases speed)
    }, 30);
    
    return () => clearInterval(interval);
  }, [text, isInView]);

  return <span ref={ref} className={className}>{displayText}</span>;
}
