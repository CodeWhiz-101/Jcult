'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Stats from '@/components/features/Stats';
import InvestmentTabs from '@/components/features/InvestmentTabs';
import LuxuryButton from '@/components/ui/LuxuryButton';
import FadeLeft from '@/components/animation/FadeLeft';
import PageBreadcrumb from '@/components/ui/PageBreadcrumb';
import { useEffect, useState } from 'react';


export default function Commodities() {
  const [reveal, setReveal] = useState(false);

useEffect(() => {
  requestAnimationFrame(() => setReveal(true));
}, []);

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">

         {/* ================= HERO ================= */}
               <section className="relative z-10 overflow-visible mb-16 md:mb-24">
  <div className="bg-primary ml-7 md:ml-10 lg:ml-12 xl:ml-14">
    <div className="container-responsive">
      <div className="pt-22 md:pt-26 lg:pt-30 pb-38 md:pb-42 lg:pb-46">

        {/* BREADCRUMB */}
        <div style={{ marginBottom: '24px' }}>
          <PageBreadcrumb
            items={[
              { label: 'What We Do', href: '/what-we-do' },
              { label: 'Asset Management', href: '/what-we-do/Asset Management' },
            ]}
          />
        </div>

        {/* ANIMATED TITLE */}
        <div style={{ overflow: 'hidden' }}>
  <h1
    style={{
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 500,
      fontSize: '60px',
      lineHeight: '1.1',
      letterSpacing: '-0.018em',
      maxWidth: '860px',
      color: '#ffffff',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',

      transform: reveal
        ? 'translateX(0)'
        : 'translateX(-120%)',
      opacity: reveal ? 1 : 0,
      transition:
        'transform 900ms cubic-bezier(0.22,1,0.36,1), opacity 600ms ease',
    }}
  >
    Asset Management
  </h1>
</div>


      </div>
    </div>
  </div>
</section>



        {/* ================= OVERVIEW ================= */}
       <section
  className="
    relative
    z-0
    -mt-20 md:-mt-28 lg:-mt-36
    min-h-[50vh]
    flex items-center
    bg-tertiary
  "
>
  <div className="container-responsive">
    <div className="flex flex-col md:flex-row items-center md:items-start">

      {/* LEFT — TITLE */}
      <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
        <FadeLeft>
          <h2
            className="
              font-brand
              text-[42px] md:text-[46px] lg:text-[52px]
              leading-[1.12]
            "
          >
            <span className="block font-medium text-[var(--brand-green-1)]">
              Overview
            </span>
          </h2>
        </FadeLeft>
      </div>

      {/* RIGHT — CONTENT */}
      <div className="flex-1 md:pl-8 lg:pl-16">
        <FadeLeft delay={200}>
          <p className="text-section-content color-grey leading-[28px]">
            We are a newly established asset management firm built on disciplined
            insight and a structured approach to diversified portfolio management.
            Through both Discretionary and Non Discretionary PMS services, we aim to
            deliver well constructed strategies that reflect thorough analysis,
            measured decision making, and alignment with each client’s objectives.
          </p>
        </FadeLeft>
      </div>

    </div>
  </div>
</section>


        {/* ================= INVESTMENT TABS ================= */}
        <InvestmentTabs />

        {/* ================= CTA ================= */}
        <section className="py-6 md:py-8 lg:py-16">
  <div className="flex flex-col md:flex-row">

    {/* IMAGE — FULL BLEED LEFT */}
    <div className="md:w-1/2">
      <img
        src="/images/assetmanagement1.jpg"
        alt="Join our team"
        className="w-full h-64 md:h-80 lg:h-96 object-cover"
      />
    </div>

    {/* TEXT — CONTAINED */}
    <div className="md:w-1/2">
      <div className="container-responsive md:pl-16 text-center md:text-left">
        {/* HEADING */}
<FadeLeft>
  <h2
    className="
      font-brand
      mb-6 md:mb-8 lg:mb-10
      text-[38px] md:text-[44px] lg:text-[48px]
      leading-[1.1]
    "
  >
    <span className="block font-medium text-[var(--brand-green-1)]">
      Pursuing Edge.
    </span>

    <span className="block font-medium text-[var(--brand-green-2)]">
      Rewriting Markets.
    </span>
  </h2>
</FadeLeft>

{/* BUTTON — SEPARATE ANIMATION */}
<FadeLeft delay={200}>
  <a href="/career">
    <LuxuryButton variant="primary">
      Discover Available Positions
    </LuxuryButton>
  </a>
</FadeLeft>


      </div>
    </div>

  </div>
</section>

      </main>
    </div>
  );
}
