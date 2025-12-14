'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageReveal({ src, alt, className = '' }: ImageRevealProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div ref={ref as any} className={`image-reveal w-full ${isVisible ? 'visible' : ''} ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
