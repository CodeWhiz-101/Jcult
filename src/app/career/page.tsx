

'use client';
import { useEffect, useRef, useState } from 'react';

import FadeUp from '@/components/animation/FadeUp';
import ImageReveal from '@/components/animation/ImageReveal';
import LuxuryButton from '@/components/ui/LuxuryButton';
import Hero from '@/components/features/Hero';
import Link from 'next/link';


export default function Career() {
  return (
    <div className="min-h-screen bg-main">
      
      <main className="pt-[160px] md:pt-[180px]">

       <div className="relative z-20">

        
        
 <Hero 
  videoSrc="/videos/career1.mp4"
  title="Career"
  description="Join our team of exceptional professionals and shape the future of finance. We offer challenging opportunities and a culture of excellence."
/>

</div>



   <FadeUp>
  <section className="relative -mt-[160px] md:-mt-[180px] pt-[160px] md:pt-[180px] pb-6 md:pb-8 lg:pb-16 bg-tertiary overflow-visible">

    {/* CONTENT WRAPPER */}
    <div className="relative z-10 flex flex-col md:flex-row">

      {/* IMAGE — FULL LEFT, OVERLAPS DOWN INTO WHITE */}
      <div
        className="
          relative
          w-full md:w-[48%]
          mb-[-96px] md:mb-[-128px] lg:mb-[-160px]
          z-20
        "
      >
        <ImageReveal
          src="/images/career2.jpg"
          alt="Career at JCULT"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
      </div>

      {/* TEXT — NORMAL FLOW */}
      <div className="w-full md:w-[52%]">
        <div className="container-responsive h-full flex items-start">
         <div className="py-12 md:py-0 md:pl-6 lg:pl-10">


  {/* HEADING */}
  <h2
  className="
    font-brand
    mb-6
    leading-[1.05]
  "
>
  <span
    className="
      block
      font-semibold
      text-[var(--brand-green-1)]
      text-[44px] md:text-[50px] lg:text-[54px]
    "
  >
    Build Your Career
  </span>

  <span
    className="
      block
      font-medium
      text-[var(--brand-green-2)]
      text-[40px] md:text-[46px] lg:text-[50px]
    "
  >
    With Us
  </span>
</h2>


  {/* DESCRIPTION */}
  <p
    className="text-section-content color-grey"
    style={{
      fontSize: '20px',
      lineHeight: '1.7',
      maxWidth: '460px',
    }}
  >
    We believe in nurturing talent and providing opportunities for growth.
    Our team members work on challenging projects that shape the future of
    financial markets.
  </p>

</div>


        </div>
      </div>

    </div>
  </section>
</FadeUp>





<FadeUp delay={100}>
   <section className="pt-[80px] md:pt-[120px] lg:pt-[150px] pb-6 md:pb-8 lg:pb-16">
    <div className="container-responsive">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {/* Internship */}
        <div className="relative pl-4 md:pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-black/20" />

          <h3
            className="
              font-brand
              text-[25px] md:text-[27px]
              fw-medium
              leading-tight
              text-primary
              mb-4
            "
          >
            Internships
          </h3>

          {/* ⬇️ NOTICEABLY BIGGER */}
          <p className="text-[16px] md:text-[18px] color-grey leading-[1.65] mb-4">
            Gain hands-on experience and work alongside industry experts. Our
            internship programs offer real-world projects and mentorship
            opportunities.
          </p>

          <Link
            href="/career/open-opportunities?experience=Internship"
            className="group inline-flex items-center gap-2 font-raleway fw-medium text-[17px] md:text-[18px]"
            style={{ color: 'var(--brand-green-2)' }}
          >
            <span className="relative inline-block">
              View Internships
              <span
                className="
                  absolute left-0 -bottom-[2px]
                  h-[1px] w-0
                  transition-all duration-300
                  group-hover:w-full
                "
                style={{ backgroundColor: 'var(--brand-green-2)' }}
              />
            </span>

            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Full Time */}
        <div className="relative pl-4 md:pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-black/20" />

          <h3
            className="
              font-brand
              text-[25px] md:text-[27px]
              fw-medium
              leading-tight
              text-primary
              mb-4
            "
          >
            Full-Time Roles
          </h3>

          {/* ⬇️ SAME SIZE HERE */}
          <p className="text-[16px] md:text-[18px] color-grey leading-[1.65] mb-4">
            Join our team of exceptional professionals. We offer challenging
            roles across trading, technology, research, and operations with
            competitive benefits.
          </p>

          <Link
            href="/career/open-opportunities?experience=Experienced Professionals,Graduates"
            className="group inline-flex items-center gap-2 font-raleway fw-medium text-[17px] md:text-[18px]"
            style={{ color: 'var(--brand-green-2)' }}
          >
            <span className="relative inline-block">
              View Full Time Roles
              <span
                className="
                  absolute left-0 -bottom-[2px]
                  h-[1px] w-0
                  transition-all duration-300
                  group-hover:w-full
                "
                style={{ backgroundColor: 'var(--brand-green-2)' }}
              />
            </span>

            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  </section>
</FadeUp>







      </main>
    </div>
  );
}