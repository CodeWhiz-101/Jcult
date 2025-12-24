'use client';

import { useEffect, useState } from 'react';

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
  description: string;
  className?: string; // ✅ ADDED
}

export default function Hero({
  videoSrc,
  imageSrc,
  title,
  description,
  className = '', // ✅ ADDED
}: HeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
       className={`relative h-[420px] md:h-[460px] lg:h-[520px] xl:h-[560px]
 overflow-hidden ${className}`}
    >
      {/* Background Grey */}
      <div
        className="absolute top-0 left-0 w-full bg-grey ml-7 md:ml-10 lg:ml-12 xl:ml-14 overflow-hidden"
        style={{ height: '680px' }}
      />

      {/* TITLE — CITADEL-LOCKED POSITION */}
      <div
        className="
          absolute
          top-[68px] md:top-[76px] lg:top-[108px] xl:top-[116px]
          left-0 z-20
          ml-20 md:ml-23 lg:ml-25 xl:ml-27
          max-w-[300px] md:max-w-[480px] lg:max-w-[580px]
        "
      >
        <h1
          className={`
            text-white
            font-brand
            text-hero-title
            leading-[1.08] md:leading-[1.1] lg:leading-[1.05]
            drop-shadow-lg
            transition-all duration-[1000ms]
            ease-[cubic-bezier(.22,.61,.36,1)]
            ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}
          `}
        >
          {title}
        </h1>
      </div>

      {/* Green / Gradient Text Box */}
      <div
        className="
          absolute
          bottom-6 md:bottom-10 lg:bottom-14 xl:bottom-20
          left-0 right-0 z-10
          ml-7 md:ml-10 lg:ml-12 xl:ml-14
          mr-9 md:mr-13 lg:mr-17
        "
      >
        <div
          className="
            relative
           pt-6 md:pt-7 lg:pt-8
pb-2 md:pb-3 lg:pb-4

            overflow-hidden
          "
        >
          <div
            className={`
              absolute inset-0 origin-left
              transition-transform duration-[900ms]
              ease-[cubic-bezier(.22,.61,.36,1)]
              ${loaded ? 'scale-x-100' : 'scale-x-0'}
            `}
            style={{
              background: 'var(--brand-green-gradient)',
              opacity: 0.75,
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            }}
          />

          <div className="container-responsive relative z-10 flex items-center">
            <p
              className={`
                text-white
                max-w-[620px]
                text-hero-subtitle
                leading-relaxed
                leading-[1.4]

                transition-opacity duration-700
                delay-[900ms]
                ${loaded ? 'opacity-100' : 'opacity-0'}
              `}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}