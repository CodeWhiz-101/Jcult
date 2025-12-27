'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ReactNode } from 'react';

interface BorderRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function BorderReveal({ children, delay = 0 }: BorderRevealProps) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div className="flex-3">
      <div
  ref={ref as any}
  className="pl-4 md:border-l-1"
  style={{
    borderLeftColor: isVisible ? 'rgba(0, 0, 0, 0.2)' : 'transparent',
    transition: 'border-color 800ms cubic-bezier(0.25, 1, 0.5, 1)',
    transitionDelay: `${delay}ms`
  }}
>

        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
            transition: 'opacity 800ms cubic-bezier(0.25, 1, 0.5, 1), transform 800ms cubic-bezier(0.25, 1, 0.5, 1)',
            transitionDelay: `${delay + 400}ms`
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
