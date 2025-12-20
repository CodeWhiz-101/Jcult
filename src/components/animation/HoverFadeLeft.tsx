'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
}

export default function HoverFadeLeft({ children, delay = 0 }: Props) {
  return (
    <div
      className="group relative overflow-hidden"
    >
      <div
        className="
          opacity-0 
          translate-x-[-40px] 
          group-hover:opacity-100 
          group-hover:translate-x-0
          transition-all 
          duration-700 
          ease-out
        "
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}
