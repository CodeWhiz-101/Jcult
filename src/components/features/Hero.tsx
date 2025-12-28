'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
  description: string;
}

export default function Hero({
  videoSrc,
  imageSrc,
  title,
  description,
}: HeroProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* ===============================
     LOAD + PLAY VIDEO AFTER WIPE
  =============================== */
  useEffect(() => {
    setLoaded(true);
    const t = setTimeout(() => videoRef.current?.play(), 900);
    return () => clearTimeout(t);
  }, []);

  return (
   <section
  className="
    relative
    h-[480px] md:h-[530px] lg:h-[680px] xl:h-[760px]
  "
  style={{
    paddingTop: isHome ? 'var(--page-top-offset)' : '0px',
  }}
>

      {/* ================= VIDEO ================= */}
<div
  className="
    absolute
    top-0 left-0 right-0
    bottom-[66px] md:bottom-[96px] lg:bottom-[126px] xl:bottom-[136px]
    overflow-hidden
  "
>
        
   <div className="absolute inset-0 ml-7 md:ml-10 lg:ml-12 xl:ml-14">

  {/* ✅ GREEN FALLBACK BEHIND VIDEO */}
  <div
    className="absolute inset-0 z-0"
    style={{ background: 'var(--brand-green-gradient)' }}
  />

  {/* VIDEO */}
  {videoSrc && (
    <video
      ref={videoRef}
      className="relative z-10 w-full h-full object-cover"
      style={{ objectPosition: 'center top' }}
      src={videoSrc}
      muted
      loop
      playsInline
      preload="auto"
    />
  )}

  {/* GREEN WIPE */}
<div
  className={`
    absolute inset-0 z-20 origin-left
    transition-transform
    duration-[500ms]
    ease-[cubic-bezier(0.0,0.0,0.2,1)]
    ${loaded ? 'scale-x-0' : 'scale-x-100'}
  `}
  style={{ background: 'var(--brand-green-gradient)' }}
/>


  {/* DARK OVERLAY */}
  <div className="absolute inset-0 z-30 bg-black/20" />
</div>

      </div>

      {/* ================= TITLE ================= */}
      <div
        className="
          absolute z-30
          top-[68px] md:top-[76px] lg:top-[108px] xl:top-[116px]
          left-0
          -mt-18
          ml-20 md:ml-23 lg:ml-25 xl:ml-27
          max-w-[580px]
        "
      >
        <h1
          className={`
            text-white font-brand font-medium
            tracking-[-0.02em]
            text-hero-title
            leading-[1.08]
            drop-shadow-lg
            transition-all duration-[1000ms]
            ease-[cubic-bezier(.22,.61,.36,1)]
            ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}
          `}
        >
          {title}
        </h1>
      </div>

      {/* ================= GREEN BOX ================= */}
      <div
        className="
          absolute z-30
          bottom-6 md:bottom-10 lg:bottom-14 xl:bottom-20
          left-0 right-0
          ml-7 md:ml-10 lg:ml-12 xl:ml-14
          mr-9 md:mr-13 lg:mr-17
         -translate-y-10 md:-translate-y-12 lg:-translate-y-14
        "
      >
        <div className="relative py-10 md:py-12 lg:py-14 overflow-hidden">
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
            }}
          />

          <div
  className={`
    container-responsive relative z-10
    transition-opacity duration-[600ms]
    delay-[950ms]
    ${loaded ? 'opacity-100' : 'opacity-0'}
  `}
>
  <p className="font-ttcommons text-white max-w-[620px] text-[16.5px] md:text-[17.5px] lg:text-[19.5px] leading-relaxed">
    {description}
  </p>
</div>

        </div>
      </div>
    </section>
  );
}
