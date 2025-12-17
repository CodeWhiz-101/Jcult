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
  requestAnimationFrame(() => setLoaded(true));
}, []);


  return (
    <section className="relative h-[480px] md:h-[530px] lg:h-[680px] xl:h-[760px] overflow-hidden">

      {/* Background grey slab */}
      <div
        className="absolute top-0 left-0 w-full bg-grey ml-7 md:ml-10 lg:ml-12 xl:ml-14"
        style={{ height: '680px' }}
      />

      {/* Background image */}
      {imageSrc && (
        <div
  className={`
    absolute inset-0 z-0
    transition-all duration-[1800ms] ease-out
    ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.08]'}
  `}
>

          <img
            src={imageSrc}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Title */}
      <div className="absolute inset-x-0 z-20">
        <div className="container-responsive pt-28 md:pt-32 lg:pt-40 xl:pt-44">
          <h1
            className={`
              text-white max-w-[340px] md:max-w-[520px] lg:max-w-[640px]
              font-brand
              text-[36px] md:text-[52px] lg:text-[64px] xl:text-[72px]
              font-medium
              leading-[1.05]
              tracking-[-0.02em]
              pl-2 drop-shadow-lg
              transition-all duration-[1200ms] ease-out
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}

            `}
          >
            {title}
          </h1>
        </div>
      </div>

      {/* Description glass panel */}
      <div
        className="
          absolute bottom-6 md:bottom-10 lg:bottom-14 xl:bottom-20
          left-0 right-0 z-10
          ml-7 md:ml-10 lg:ml-12 xl:ml-14
          mr-4 md:mr-8
        "
      >
        <div
          className={`
            relative py-4 md:py-6 lg:py-10
            transition-all duration-[1400ms] ease-out delay-300
            ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
          `}
        >
          {/* ✅ BRAND GREEN GRADIENT (SYSTEM-LEVEL) */}
          <div
            className="absolute inset-0"
            style={{
              background: 'var(--brand-green-gradient)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
            }}
          />

          <div className="container-responsive relative z-10">
            <p
              className={`
                text-white lg:max-w-[600px] text-hero-subtitle leading-relaxed
                transition-opacity duration-[1200ms] delay-700
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
