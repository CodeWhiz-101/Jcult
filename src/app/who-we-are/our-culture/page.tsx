'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CoreValuesSection from '@/components/features/CoreValuesSection';
import LuxuryButton from '@/components/ui/LuxuryButton';
import FadeLeft from '@/components/animation/FadeLeft';
import FadeUp from '@/components/animation/FadeUp';
import PageBreadcrumb from '@/components/ui/PageBreadcrumb';

export default function OurCulture() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">

        {/* ================= HERO ================= */}
        <section className="relative overflow-visible mb-20">
          <FadeUp>
            <div className="bg-primary ml-7 md:ml-10 lg:ml-12 xl:ml-14">
              <div className="container-responsive">
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

                  {/* LEFT CONTENT */}
                  <div className="flex-1 flex flex-col gap-4 md:gap-6">

                    <PageBreadcrumb
                      items={[
                        { label: 'Who We Are', href: '/who-we-are' },
                        { label: 'Our Culture', href: '/who-we-are/our-culture' },
                      ]}
                    />

                    <FadeLeft>
                      <h1 className="font-brand text-section-title text-white">
                        Our Culture
                      </h1>
                    </FadeLeft>

                    <FadeLeft delay={200}>
                      <p className="text-white text-hero-subtitle leading-relaxed max-w-md">
                        Powered by our most impactful ideas, we’re always pushing toward what’s next.
                      </p>
                    </FadeLeft>

                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="flex-1 relative min-h-[320px] md:min-h-0 md:mb-[-5rem] lg:mb-[-8rem]">
                    <img
                      src="/images/group disscusion 2.JPG"
                      alt="Our Culture"
                      className="absolute top-0 right-0 w-full h-full object-cover"
                    />
                  </div>

                </div>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* ================= INSIGHT SECTION ================= */}
        <section className="py-6 md:py-8 lg:py-16 mb-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">

              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <FadeLeft>
                  <h2 className="text-section-title font-brand text-primary">
                    Insight Over Hierarchy
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
                <h2 className="text-section-title font-brand text-primary">
                  A Headquarters Built for Collaboration
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
