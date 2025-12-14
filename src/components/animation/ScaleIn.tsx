'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ReactNode } from 'react';

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
}

export default function ScaleIn({ children, delay = 0 }: ScaleInProps) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref as any}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        transition: 'opacity 800ms cubic-bezier(0.25, 1, 0.5, 1), transform 800ms cubic-bezier(0.25, 1, 0.5, 1)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
