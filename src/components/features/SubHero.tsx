'use client';

import { useEffect, useRef, useState } from 'react';

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
  description: string;
}

type Phase = 'fade' | 'wipe' | 'title' | 'box' | 'boxText';

export default function Hero({
  videoSrc,
  imageSrc,
  title,
  description,
}: HeroProps) {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
const mobileVideoRef = useRef<HTMLVideoElement>(null);

  const [phase, setPhase] = useState<Phase>('fade');

  /* ===============================
     MASTER CINEMATIC TIMELINE
  =============================== */
 useEffect(() => {
  const t1 = setTimeout(() => setPhase('wipe'), 100);
  const t2 = setTimeout(() => setPhase('title'), 200);
  const t3 = setTimeout(() => setPhase('box'), 600);
  const t4 = setTimeout(() => setPhase('boxText'), 1000);

  desktopVideoRef.current?.play();
  mobileVideoRef.current?.play();

  return () => {
    clearTimeout(t1);
    clearTimeout(t2);
    clearTimeout(t3);
    clearTimeout(t4);
  };
}, []);

  return (
    <>
    <section
      className="
      hidden md:block
        relative
        h-[480px] md:h-[530px] lg:h-[680px] xl:h-[760px]
        overflow-hidden
        -mt-20
      "
    >
      {/* ================= VIDEO ================= */}
      <div
        className="
          absolute top-0 left-0 w-full
          ml-7 md:ml-10 lg:ml-12 xl:ml-14
          overflow-hidden
        "
        style={{ height: '680px' }}
      >
        {/* BASE GREEN */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: 'var(--brand-green-gradient)' }}
        />

        {/* INTRO FADE (1️⃣) */}
        <div
          className="
            absolute inset-0 z-[50]
            transition-opacity duration-[1900ms]
            ease-out
            pointer-events-none
          "
          style={{
            background: 'var(--brand-green-gradient)',
            opacity: phase === 'fade' ? 1 : 0,
          }}
        />

        {/* VIDEO */}
        {videoSrc && (
          
           <video
  ref={desktopVideoRef}

            className="relative z-10 w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
            src={videoSrc}
            muted
            loop
            playsInline
            preload="auto"
          />
        )}

        {/* GREEN WIPE (2️⃣) */}
        <div
          className="
            absolute inset-0 z-40
            will-change-[clip-path]
            transition-[clip-path]
            duration-[700ms]
            ease-[cubic-bezier(.22,.61,.36,1)]
          "
          style={{
            background: 'var(--brand-green-gradient)',
            clipPath:
              phase === 'fade' || phase === 'wipe'
                ? 'inset(0 97% 0 0)'
                : 'inset(0 100% 0 0)',
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 z-30 bg-black/20 pointer-events-none" />
      </div>

      {/* ================= TITLE (3️⃣) ================= */}
      <div
        className="
          absolute z-30
          top-[68px] md:top-[76px] lg:top-[108px] xl:top-[116px]
          left-0
          ml-20 md:ml-23 lg:ml-25 xl:ml-27
          max-w-[300px] md:max-w-[480px] lg:max-w-[580px]
          transition-all
          duration-[1000ms]
          ease-[cubic-bezier(.22,.61,.36,1)]
        "
        style={{
          opacity:
            phase === 'title' || phase === 'box' || phase === 'boxText'
              ? 1
              : 0,
          transform:
            phase === 'title' || phase === 'box' || phase === 'boxText'
              ? 'translateX(0)'
              : 'translateX(-24px)',
        }}
      >
        <h1
          className="
            text-white
            font-brand
            font-medium
            tracking-[-0.02em]
            text-hero-title
            leading-[1.08] md:leading-[1.1] lg:leading-[1.05]
            drop-shadow-lg
          "
        >
          {title}
        </h1>
      </div>

      {/* ================= GREEN BOX (4️⃣ + 5️⃣) ================= */}
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
            pt-16 md:pt-18 lg:pt-20
            pb-4 md:pb-6 lg:pb-8
            overflow-hidden
          "
        >
          {/* BOX SLIDE */}
          <div
            className="
              absolute inset-0
              transition-transform duration-[900ms]
              ease-[cubic-bezier(.22,.61,.36,1)]
            "
            style={{
              background: 'var(--brand-green-gradient)',
              opacity: 0.75,
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              transform:
                phase === 'box' || phase === 'boxText'
                  ? 'scaleX(1)'
                  : 'scaleX(0)',
              transformOrigin: 'left',
            }}
          />

          {/* BOX TEXT */}
          <div className="container-responsive relative z-10 h-full flex items-center">
            <p
              className="
                font-ttcommons font-normal
                text-white
                max-w-[620px]
                text-[16.5px] md:text-[17.5px] lg:text-[19.5px]
                leading-relaxed
                translate-y-[-18px]
                -ml-1 md:-ml-2 lg:-ml-3
                transition-opacity duration-[600ms]
              "
              style={{
                opacity: phase === 'boxText' ? 1 : 0,
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>

   {/* ================= MOBILE HERO ================= */}
<section className="md:hidden bg-white relative -mt-16">

  {/* WHITE GUTTER WRAPPER */}
  <div className="pl-6 pr-0">


    {/* ===== MEDIA (VIDEO) ===== */}
    <div className="relative h-[560px] w-full overflow-hidden">

      {/* GREEN BASE */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'var(--brand-green-gradient)' }}
      />

      {/* VIDEO */}
      {videoSrc && (
        <video
  ref={mobileVideoRef}

          className="absolute inset-0 z-10 w-full h-full object-cover"
          style={{ objectPosition: 'center top' }}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="auto"
        />
      )}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-20 bg-black/25" />

      {/* ===== TITLE (LEFT, INSIDE MEDIA) ===== */}
     <div
  className="absolute z-30 top-[72px] left-0 pl-6 max-w-[280px]"

        style={{
          opacity:
            phase === 'title' || phase === 'box' || phase === 'boxText'
              ? 1
              : 0,
          transform:
            phase === 'title' || phase === 'box' || phase === 'boxText'
              ? 'translateX(0)'
              : 'translateX(-20px)',
          transition:
            'opacity 800ms ease, transform 800ms cubic-bezier(.22,.61,.36,1)',
        }}
      >
        <h1 className="text-white font-brand font-medium text-[34px] leading-[1.08]">
          {title}
        </h1>
      </div>

      {/* ===== GREEN GRADIENT BOX (BOTTOM, LEFT-ALIGNED) ===== */}
      <div className="absolute bottom-0 left-0 z-40 w-full">

        {/* LEFT-ALIGNED BOX (NO CENTERING) */}
        <div
          className="w-[88%] ml-0"
          style={{
            background: 'var(--brand-green-gradient)',
            opacity: 0.85,
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          }}
        >
          <div className="pt-10 pb-8 px-6">
            <p className="text-white text-[15.5px] leading-relaxed">
              {description}
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

  </>
  );
}
