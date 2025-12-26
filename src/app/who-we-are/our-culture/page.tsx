'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CoreValuesSection from '@/components/features/CoreValuesSection';
import LuxuryButton from '@/components/ui/LuxuryButton';
import FadeLeft from '@/components/animation/FadeLeft';
import FadeUp from '@/components/animation/FadeUp';
import PageBreadcrumb from '@/components/ui/PageBreadcrumb';
import { useEffect, useRef, useState } from 'react';

export default function OurCulture() {
  const sectionRef = useRef<HTMLDivElement>(null);
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    },
    { threshold: 0.3 }
  );

  if (sectionRef.current) observer.observe(sectionRef.current);
  return () => observer.disconnect();
}, []);

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">

        {/* ================= HERO ================= */}
        
<section className="relative mb-32 overflow-visible">

  <div className="relative bg-primary ml-6 md:ml-10 lg:ml-14">

    {/* FIXED HEIGHT PANEL */}
    <div className="relative h-[600px] md:h-[680px] lg:h-[720px]">
      <div className="container-responsive h-full">

        <div className="flex h-full items-center">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl text-white">
            <PageBreadcrumb
              items={[
                { label: 'Who We Are', href: '/who-we-are' },
                { label: 'Our Culture', href: '/who-we-are/our-culture' },
              ]}
            />

            <div
  ref={sectionRef}
  className={`
    mt-6
    transition-all
    duration-[1000ms]
    ease-[cubic-bezier(.22,.61,.36,1)]
    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}
  `}
>
  <h1
    style={{
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 500,
      fontSize: '68px',
      lineHeight: '1.1',
      letterSpacing: '-0.018em',
      maxWidth: '860px',
      color: '#ffffff',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    }}
  >
    Our Culture
  </h1>
</div>


            <p className="mt-6 text-hero-subtitle leading-relaxed">
              Powered by our most impactful ideas, we’re always pushing toward what’s next.
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE – BLEEDING */}
     {/* RIGHT IMAGE – OVERLAPPING */}
{/* RIGHT IMAGE – TRUE OVERLAP */}
<div className="hidden md:block absolute top-25 right-0 w-[50%] lg:w-[52%] h-[640px] lg:h-[700px] xl:h-[740px] z-10">

  <img
    src="/images/ourculture1.jpg"
    alt="Our Culture"
    className="w-full h-full object-cover"
  />
</div>



{/* SPACER to allow image overlap */}



    </div>
  </div>
</section>

        {/* ================= INSIGHT SECTION ================= */}
        <section className="py-6 md:py-8 lg:py-16 mb-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">

              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <FadeLeft>
                  <h2
  className="
    font-brand
    text-[46px] md:text-[50px] lg:text-[56px]
    leading-[1.12]
  "
>
  <span className="block font-semibold text-[var(--brand-green-1)]">
    Insight Over
  </span>
  <span className="block font-semibold text-[var(--brand-green-2)]">
    Hierarchy
  </span>
</h2>

                </FadeLeft>
              </div>

              <div className="flex-1 md:pl-8 lg:pl-16 space-y-4 md:space-y-6">
                <FadeLeft delay={200}>
                  <p className="text-section-content color-grey leading-[28px]">
                    From the moment you arrive, your thinking has influence. You are invited to share your
                    ideas openly, and your contribution is valued regardless of your position or experience.
                  </p>

                  <p className="text-section-content color-grey leading-[28px]">
                    We encourage one another to look beyond what is familiar and to search for the next
                    breakthrough. A wide range of viewpoints strengthens our creativity and sharpens our
                    position in the industry.
                  </p>

                  <p className="text-section-content color-grey leading-[28px]">
                    We explore ideas through open dialogue, strengthening them through challenge and
                    improvement, always aiming to exceed prior achievements.
                  </p>
                </FadeLeft>
              </div>

            </div>
          </div>
        </section>

        {/* ================= CORE VALUES ================= */}
        <CoreValuesSection />

        {/* ================= HQ SECTION ================= */}
        <section className="py-6 md:py-8 lg:py-16 container-responsive">
          <div className="flex flex-col md:flex-row items-start">

            <div className="flex-1 mb-6 md:mb-0">
              <FadeLeft>
                <h2
  className="
    font-brand
    text-[46px] md:text-[50px] lg:text-[56px]
    leading-[1.12]
  "
>
  <span className="block font-semibold text-[var(--brand-green-1)]">
    A Headquarters Built
  </span>
  <span className="block font-semibold text-[var(--brand-green-2)]">
    for Collaboration
  </span>
</h2>

              </FadeLeft>
            </div>

            <div className="flex-1 md:pl-16">
              <FadeLeft delay={200}>
                <p className="text-section-content color-grey leading-[28px] mb-6">
                  Our workspace is meticulously designed to foster real-time teamwork, rigorous discussion,
                  and debate. We have created an environment where physical barriers are removed to ensure
                  constant intellectual exchange.
                </p>

                <p className="text-section-content color-grey leading-[28px] mb-6">
                  Unified in our mission to achieve what no individual could alone.
                </p>

                <a href="/who-we-are/our-global-base">
                  <LuxuryButton variant="primary">
                    View Our Headquarters
                  </LuxuryButton>
                </a>
              </FadeLeft>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
