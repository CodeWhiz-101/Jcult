'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const isHome = pathname === '/';

  const desktopVideoRef = useRef<HTMLVideoElement>(null);
const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>('fade');

  /* ===============================
     MASTER CINEMATIC TIMELINE
  =============================== */
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('wipe'), 100);     // fade ends
    const t2 = setTimeout(() => setPhase('title'), 200);  // wipe ends
    const t3 = setTimeout(() => setPhase('box'), 600);    // title ends
    const t4 = setTimeout(() => setPhase('boxText'), 1000);// box ends

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
     {/* ================= DESKTOP HERO ================= */}
<section
  className="hidden md:block relative h-[480px] md:h-[530px] lg:h-[680px] xl:h-[760px]"
  style={{
    paddingTop: isHome ? 'var(--page-top-offset)' : '0px',
  }}
  
>
  <div
  className="
    absolute
    bottom-6 md:bottom-10 lg:bottom-14 xl:bottom-20
    left-0
    w-full
     lg:h-[205px]   /* adjust to match box height */
    bg-[#F6F6F6]
    z-10
  "
/>
  {/* ================= VIDEO ================= */}
  <div className="absolute top-0 left-0 right-0 bottom-[10px] md:bottom-[40px] lg:bottom-[70px] xl:bottom-[80px] overflow-hidden">
    <div className="absolute inset-0 ml-7 md:ml-10 lg:ml-12 xl:ml-14">

      {/* BASE GREEN */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'var(--brand-green-gradient)' }}
      />

      {/* INTRO FADE */}
      <div
        className="
          absolute inset-0 z-[50]
          transition-opacity duration-[1900ms] ease-out
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

      {/* GREEN WIPE */}
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
      <div className="absolute inset-0 z-30 bg-black/20" />
    </div>
  </div>

  {/* ================= TITLE ================= */}
  <div
    className={`
      absolute z-30
      top-[68px] md:top-[76px] lg:top-[108px] xl:top-[116px]
      left-0 -mt-18
      ml-20 md:ml-23 lg:ml-25 xl:ml-27
      max-w-[600px]

      transition-all
      duration-[1000ms]
      ease-[cubic-bezier(.22,.61,.36,1)]

      ${
        phase === 'title' || phase === 'box' || phase === 'boxText'
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-24'
      }
    `}
  >
    <h1
      className="
        text-white font-brand font-medium
        tracking-[-0.02em]
        text-hero-title
        leading-[1.08]
        drop-shadow-lg
      "
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
    "
  >
    <div className="relative py-10 md:py-12 lg:py-14 overflow-hidden">

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
          transform:
            phase === 'box' || phase === 'boxText'
              ? 'scaleX(1)'
              : 'scaleX(0)',
          transformOrigin: 'left',
        }}
      />

      {/* BOX TEXT */}
      <div
        className="
          container-responsive relative z-10
          transition-opacity duration-[600ms]
        "
        style={{
          opacity: phase === 'boxText' ? 1 : 0,
        }}
      >
        <p className="font-ttcommons text-white max-w-[620px] text-[16.5px] md:text-[17.5px] lg:text-[19.5px] leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  </div>
</section>

    {/* ================= MOBILE HERO ================= */}
<section className="md:hidden bg-white relative -mt-3">
{/* MOBILE GREY STRIP BEHIND GREEN BOX */}
<div
  className="
    absolute
    bottom-0
    left-0
    w-full
    h-[238px]   /* adjust to match mobile green box height */
    bg-[#F6F6F6]
    z-0
  "
/>

  {/* LEFT WHITE GUTTER ONLY */}
  <div className="pl-6 pr-0 ">

    {/* ===== MEDIA ===== */}
    <div className="relative h-[677px] w-full overflow-hidden">
      {/* MOBILE INTRO FADE (match desktop) */}
<div
  className="
    absolute inset-0 z-[50]
    transition-opacity duration-[1900ms] ease-out
    pointer-events-none
  "
  style={{
    background: 'var(--brand-green-gradient)',
    opacity: phase === 'fade' ? 1 : 0,
  }}
/>

{/* ===== MOBILE GREEN WIPE (TITLE REVEAL) ===== */}
<div
  className="
    absolute z-25
    left-0
    h-[677px]
    w-[20px]
    overflow-hidden
    pointer-events-none
  "
>
  <div
    className="
      absolute inset-0
      transition-[clip-path]
      duration-[700ms]
      ease-[cubic-bezier(.22,.61,.36,1)]
    "
    style={{
      background: 'var(--brand-green-gradient)',
clipPath:
  phase === 'fade'
    ? 'inset(0 0 0 0)'        // fully visible
    : 'inset(0 100% 0 0)',   // hidden from right → left

    }}
  />
</div>

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

      {/* ===== TITLE ===== */}
      <div
        className="absolute z-30 top-[40px] left-0 pl-6 max-w-[380px]"
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
        <h1 className="text-white font-brand font-medium 
 text-[38px] leading-[1.2]">
          {title}
        </h1>
      </div>

      {/* ===== GREEN BOX ===== */}
      <div className="absolute bottom-0 left-0 z-40 w-full">
        <div
          className="w-[88%]"
          style={{
            background: 'var(--brand-green-gradient)',
            opacity: 0.85,
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          }}
        >
          <div className="pt-10 pb-8 px-6">
            <p className="text-white text-[20.5px] leading-relaxed">
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
