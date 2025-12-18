'use client';

import { useEffect, useState } from 'react';

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
  description: string;
}

export default function Hero({ videoSrc, imageSrc, title, description }: HeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-[480px] md:h-[530px] lg:h-[680px] xl:h-[760px] overflow-hidden">

      {/* Background Grey */}
      <div
        className="absolute top-0 left-0 w-full bg-grey ml-7 md:ml-10 lg:ml-12 xl:ml-14"
        style={{ height: '680px' }}
      />

      {/* Title */}
      <div className="absolute top-10 md:top-12 lg:top-20 xl:top-24 left-0 right-0 z-20">
        <div className="container-responsive">
          <h1
            className={`
              text-white max-w-[340px] md:max-w-[500px] lg:max-w-[600px]
              text-hero-title leading-[1.1] md:leading-snug lg:leading-[70px]
              font-brand pl-2 drop-shadow-lg
              transition-all duration-1000
              ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}
            `}
          >
            {title}
          </h1>
        </div>
      </div>

      {/* Green / Gradient Text Box */}
      <div
        className="
          absolute
          bottom-6 md:bottom-10 lg:bottom-14 xl:bottom-20
          left-0 right-0 z-10
          ml-7 md:ml-10 lg:ml-12 xl:ml-14
          mr-4 md:mr-8
        "
      >
        <div
          className={`
            relative py-4 md:py-6 lg:py-10
            transition-all duration-1000 delay-500
            ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}
          `}
        >
          {/* ✅ ONLY CHANGE: Gradient Background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'var(--brand-green-gradient)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
            }}
          />

          {/* Text */}
          <div className="container-responsive relative z-10">
            <p
              className={`
                text-white lg:max-w-[600px]
                text-hero-subtitle leading-relaxed
                transition-opacity duration-1000 delay-1000
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
