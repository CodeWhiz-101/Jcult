'use client';

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
    imageSrc="/images/group table conference.JPG"
    title="Career"
    description="Join our team of exceptional professionals and shape the future of finance. We offer challenging opportunities and a culture of excellence."
  />
</div>



    <FadeUp>
 <section className="relative pt-2 md:pt-4 lg:pt-6 pb-6 md:pb-8 lg:pb-16 bg-tertiary">

    {/* Grey background extender */}
    <div
  className="
    min-h-[60vh]
    md:min-h-[70vh]
    flex
    flex-col
    items-start
    pt-36          /* 👈 more breathing room on mobile */
    sm:pt-32
    md:pt-36
    lg:pt-40
  "
>

    {/* Centered content */}
    <div className="relative z-10 container-responsive">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-6 md:mb-0">
          <ImageReveal
            src="/images/group disscusion.JPG"
            alt="Our workplace"
            className="w-full h-64 md:h-80 lg:h-96"
          />
        </div>

        <div className="flex-1 md:pl-8 lg:pl-16 self-start">
          <h2 className="text-section-title fw-semibold leading-[1.15] tracking-tight text-primary mb-4 md:mb-6">
            Build Your Career With Us
          </h2>
          <p className="text-section-content color-grey leading-relaxed">
            We believe in nurturing talent and providing opportunities for growth. Our team members work on challenging projects that shape the future of financial markets.
          </p>
        </div>
      </div>
    </div>
  </section>
</FadeUp>




     <FadeUp delay={100}>
  <section className="py-6 md:py-8 lg:py-16">
    <div className="container-responsive">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {/* Internship */}
        <div className="relative pl-4 md:pl-6">
          {/* Divider — thin grey hairline */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-black/20" />

          {/* TITLE */}
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

          {/* SUB CONTENT */}
          <p className="text-[14px] md:text-[15px] color-grey leading-[1.5] mb-3">
            Gain hands-on experience and work alongside industry experts. Our
            internship programs offer real-world projects and mentorship
            opportunities.
          </p>

          <Link
            href="/career/open-opportunities?experience=Internship"
            className="group inline-flex items-center gap-2 font-raleway fw-medium text-[15px]"
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
          {/* Divider — thin grey hairline */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-black/20" />

          {/* TITLE */}
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

          {/* SUB CONTENT */}
          <p className="text-[14px] md:text-[15px] color-grey leading-[1.5] mb-3">
            Join our team of exceptional professionals. We offer challenging
            roles across trading, technology, research, and operations with
            competitive benefits.
          </p>

          <Link
            href="/career/open-opportunities?experience=Experienced Professionals,Graduates"
            className="group inline-flex items-center gap-2 font-raleway fw-medium text-[15px]"
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