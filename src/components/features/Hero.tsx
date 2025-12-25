'use client';

import { useEffect, useRef, useState } from 'react';

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
  description: string;
}

export default function Hero({ videoSrc, imageSrc, title, description }: HeroProps) {
  const [loaded, setLoaded] = useState(false);
const videoRef = useRef<HTMLVideoElement>(null);
const [revealDone, setRevealDone] = useState(false);
const [videoRevealed, setVideoRevealed] = useState(false);
const [contentVisible, setContentVisible] = useState(false);
  useEffect(() => {
  setLoaded(true);

  // wait for green wipe animation to finish
  const timer = setTimeout(() => {
    setRevealDone(true);
    videoRef.current?.play();
  }, 900); // MUST match animation duration

  return () => clearTimeout(timer);
}, []);


  return (
 <section className="
  relative
  h-[480px] md:h-[530px] lg:h-[680px] xl:h-[760px]
  overflow-hidden
  -mt-20        /* 🔥 removes white space above grey box */
">

  {/* Background Grey */}
  {/* Background Video */}
<div
  className="
    absolute top-0 left-0 w-full
    ml-7 md:ml-10 lg:ml-12 xl:ml-14
    overflow-hidden
  "
  style={{ height: '680px' }}
>
  {/* VIDEO */}
  {videoSrc && (
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      src={videoSrc}
      muted
      loop
      playsInline
      preload="auto"
    />
  )}

  {/* GREEN WIPE OVERLAY */}
  <div
    className={`
      absolute inset-0 z-20
      origin-left
      transition-transform duration-[650ms]
      ease-[cubic-bezier(.22,.61,.36,1)]
      ${loaded ? 'scale-x-0' : 'scale-x-100'}
    `}
    style={{
      background: 'var(--brand-green-gradient)',
    }}
  />

  {/* DARK OVERLAY (optional, cinematic) */}
  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
</div>



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
        font-medium
        tracking-[-0.02em]
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

  {/* GREEN / GRADIENT TEXT BOX */}
 {/* GREEN / GRADIENT TEXT BOX */}
<div
  className="
    absolute
    bottom-6 md:bottom-10 lg:bottom-14 xl:bottom-20
    left-0 right-0 z-10
    ml-7 md:ml-10 lg:ml-12 xl:ml-14
    mr-9 md:mr-13 lg:mr-17
      /* ✅ Citadel grey */
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

      <div className="container-responsive relative z-10 h-full flex items-center">
       <p
  className={`
    font-ttcommons font-normal
    text-white
    max-w-[620px]
text-[16.5px] md:text-[17.5px] lg:text-[19.5px]
    leading-relaxed
    translate-y-[-18px]
    -ml-1 md:-ml-2 lg:-ml-3
    transition-opacity duration-700
    delay-[900ms]
    ${loaded ? 'opacity-100' : 'opacity-0'}
  `}
  style={{ fontFamily: 'TT Commons, sans-serif' }}
>

          {description}
        </p>
      </div>
    </div>
  </div>

</section>

  );
}
