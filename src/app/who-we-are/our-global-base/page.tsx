'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import dynamic from 'next/dynamic';
import FadeUp from '@/components/animation/FadeUp';
import FadeLeft from '@/components/animation/FadeLeft';
import ScaleIn from '@/components/animation/ScaleIn';
import PageBreadcrumb from '@/components/ui/PageBreadcrumb';
import { useEffect, useRef, useState } from 'react';


const OfficeMap = dynamic(() => import('@/components/map/OfficeMap'), {
  ssr: false,
  loading: () => (
    <div className="h-96 rounded-lg flex items-center justify-center">
      Loading map...
    </div>
  ),
});

export default function OfficeLocations() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
const heroRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsHeroVisible(entry.isIntersecting);
    },
    { threshold: 0.2 }
  );

  if (heroRef.current) {
    observer.observe(heroRef.current);
  }

  return () => observer.disconnect();
}, []);

  const locations = [
    { name: 'New York', lat: 40.7128, lng: -74.006, address: '123 Wall Street, New York, NY 10005' },
    { name: 'London', lat: 51.5074, lng: -0.1278, address: '456 Canary Wharf, London E14 5AB, UK' },
    { name: 'Tokyo', lat: 35.6762, lng: 139.6503, address: '789 Shibuya, Tokyo 150-0002, Japan' },
    { name: 'Singapore', lat: 1.3521, lng: 103.8198, address: '321 Marina Bay, Singapore 018956' },
  ];

  return (
    <div className="min-h-screen w-full bg-main">
      <main className="pt-20">

   {/* ================= HERO ================= */}
<section className="relative overflow-visible mb-16 md:mb-24">
  <div className="bg-primary ml-7 md:ml-10 lg:ml-12 xl:ml-14">
    <div className="container-responsive">

      {/* ⛔ GREEN BOX — DO NOT TOUCH */}
      <div
  ref={heroRef}
  className="pt-22 md:pt-26 lg:pt-30 pb-38 md:pb-42 lg:pb-46"
>

        {/* BREADCRUMB */}
        <div
  className={`
    transition-all
    duration-[1000ms]
    ease-[cubic-bezier(.22,.61,.36,1)]
    ${isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}
  `}
>
  {/* BREADCRUMB */}
  <div style={{ marginBottom: '24px' }}>
    <PageBreadcrumb
      items={[
        { label: 'Who We Are', href: '/who-we-are' },
        { label: 'Our Global Base', href: '/who-we-are/our-global-base' },
      ]}
    />
  </div>

  {/* TITLE */}
  <h1
    style={{
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 500,
      fontSize: '60px',
      lineHeight: '1.1',
      letterSpacing: '-0.018em',
      maxWidth: '860px',
      color: '#ffffff',
    }}
  >
    Our Global Base
  </h1>
</div>

      </div>
    </div>
  </div>
</section>



        {/* ================= OVERVIEW ================= */}
        <section className="bg-tertiary pt-10 md:pt-14 lg:pt-18 pb-2 md:pb-3 -mt-12 md:-mt-20 lg:-mt-28">


          <div className="container-responsive pt-6 md:pt-8 lg:pt-10">

            <div className="flex flex-col md:flex-row items-start">

              <div className="flex-1 mb-6 md:mb-0">
                <FadeLeft>
  <h2
  className="
    font-brand
    mb-8
    text-[48px] md:text-[54px] lg:text-[60px]
    leading-[1.18]
  "
>

    <span className="block font-semibold text-[var(--brand-green-1)]">
      Explore Our
    </span>

    <span className="block font-semibold text-[var(--brand-green-2)]">
      Headquarters
    </span>
  </h2>
</FadeLeft>
              </div>

              <div className="flex-1 md:pl-16">
                <FadeLeft delay={200}>
                  <p className="text-section-content color-grey leading-[30px]">
                    Our firm is rooted in a city defined by opportunity, culture, and momentum,
                    making it an outstanding place to build a career.
                  </p>
                </FadeLeft>
              </div>

            </div>
          </div>
        </section>

        {/* ================= MAP ================= */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <ScaleIn>
              <OfficeMap locations={locations} />
            </ScaleIn>
          </div>
        </section>

        {/* ================= ADDRESS ================= */}
        <section className="py-8 md:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">

              <div className="flex-1 mb-6 md:mb-0">
                <FadeLeft>
  <h2
    className="
      font-brand
      mb-6
      text-[44px] md:text-[50px] lg:text-[54px]
      leading-[1.1]
    "
  >
    <span className="block font-semibold text-[var(--brand-green-1)]">
      Headquarters
    </span>

    <span className="block font-semibold text-[var(--brand-green-2)]">
      Presence
    </span>
  </h2>
</FadeLeft>

              </div>

              <div className="flex-1 md:pl-16">
                <FadeLeft delay={200}>
                  <p className="text-section-content color-grey mb-2">
                    United Arab Emirates
                  </p>
                  <p className="text-section-content color-grey mb-2">
                    Dubai
                  </p>
                  <p className="text-section-content color-grey mb-2 leading-[30px]">
                    DSO-IFZA, IFZA Properties <br />
                    Dubai Silicon Oasis <br />
                    Dubai, Dubayy (AE-DU) <br />
                    UAE
                  </p>
                  <p className="text-section-content color-grey">
                    jculttrader.inquiry@gmail.com
                  </p>
                </FadeLeft>
              </div>

            </div>
          </div>
        </section>

        {/* ================= IMAGE ================= */}
        <section className="py-6 md:py-8 lg:py-16 bg-white">
          <div className="container-responsive">
            <ScaleIn>
              <video
  src="/videos/globalbase1.mp4"
  className="w-full h-48 md:h-64 lg:h-96 object-cover"
  autoPlay
  muted
  loop
  playsInline
/>

            </ScaleIn>
          </div>
        </section>

      </main>
    </div>
  );
}
