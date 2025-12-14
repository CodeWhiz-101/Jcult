'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ReactNode } from 'react';

interface FadeDownProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeDown({ children, delay = 0 }: FadeDownProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref as any}
      className={`fade-down ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
