'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  number: string;
  description: string;
  subtitle?: string;
}

interface StatsProps {
  stats: StatItem[];
  title?: string;
  className?: string;
}

export default function Stats({ stats, title, className = "" }: StatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 lg:py-32 ${className}`}
    >
      <div className="container-responsive">

        {/* TITLE */}
        {title && (
          <div className="overflow-hidden mb-16 md:mb-20">
            <h2
              className={`
                font-brand
                text-[42px] md:text-[60px] lg:text-[72px]
                leading-[1.1]
                text-primary
                transition-[clip-path]
                duration-[900ms]
                ease-[cubic-bezier(.22,.61,.36,1)]
                ${isVisible
                  ? '[clip-path:inset(0%_0_0%_0)]'
                  : '[clip-path:inset(100%_0_0%_0)]'}
              `}
            >
              {title}
            </h2>
          </div>
        )}

        {/* STATS GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:ml-10 lg:ml-70">

  {stats.map((stat, index) => (
    <div
  key={index}
  className={`relative pl-8 md:pl-6 pb-10 ${index === 0 ? 'pt-4 md:pt-0' : ''}`}
>


      {/* DESKTOP VERTICAL DIVIDER */}
      <span
        className={`
          hidden md:block
          absolute left-0
          -top-12 -bottom-24
          w-px bg-black/25
          transition-[clip-path]
          duration-[700ms]
          ease-[cubic-bezier(.22,.61,.36,1)]
          ${isVisible
            ? '[clip-path:inset(0%_0_0%_0)]'
            : '[clip-path:inset(100%_0_0%_0)]'}
        `}
        style={{ transitionDelay: `${200 + index * 200}ms` }}
      />

      {/* CONTENT WRAPPER — THIS IS THE KEY */}
      <div className="relative">

        {/* MOBILE VERTICAL DIVIDER */}
        <span
  className="
    absolute md:hidden
    left-[calc(-2rem)]

    top-0
    bottom-0
    w-px
    bg-black/25
  "
/>


        {/* NUMBER */}
        <div className="overflow-hidden -mt-15">
          <div
            className={`
              font-brand
              font-medium
              text-[80px] md:text-[88px] lg:text-[96px]
              text-[var(--brand-green-1)]
              transition-all
              duration-[1000ms]
              ease-[cubic-bezier(.22,.61,.36,1)]
              ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-24'}
            `}
            style={{ transitionDelay: `${400 + index * 200}ms` }}
          >
            {stat.number.split('').map((char, i) =>
              char === '$' || char === '+' || char === '%' ? (
                <sup key={i} className="text-[0.6em] font-normal">
                  {char}
                </sup>
              ) : (
                char
              )
            )}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="overflow-hidden mt-10 lg:mt-14">
          <p
            className={`
              font-ttcommons
              text-[18px] md:text-[18.5px] lg:text-[19px]
              text-[#68717A]
              leading-[1.45]
              transition-all
              duration-[900ms]
              ease-[cubic-bezier(.22,.61,.36,1)]
              ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'}
            `}
            style={{ transitionDelay: `${600 + index * 200}ms` }}
          >
            {stat.description.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        {/* SUBTITLE */}
        {stat.subtitle && (
          <div className="overflow-hidden mt-3">
            <p
              className={`
                text-[17px] md:text-[17.5px] lg:text-[18px]
                text-[#68717A]
                leading-[1.4]
                transition-all
                duration-[900ms]
                ease-[cubic-bezier(.22,.61,.36,1)]
                ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-14'}
              `}
              style={{ transitionDelay: `${800 + index * 200}ms` }}
            >
              {stat.subtitle}
            </p>
          </div>
        )}

      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
