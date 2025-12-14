'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ReactNode } from 'react';

interface FadeLeftProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeLeft({ children, delay = 0 }: FadeLeftProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref as any}
      className={`fade-left ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
