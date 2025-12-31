'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SubHero from '@/components/features/SubHero';
import Accordion from '@/components/features/Accordion';
import FadeUp from '@/components/animation/FadeUp';
import FadeLeft from '@/components/animation/FadeLeft';
import ImageReveal from '@/components/animation/ImageReveal';
import LuxuryButton from '@/components/ui/LuxuryButton';
// import ExploreMore from '@/components/features/ExploreMore';

export default function WhoWeAre() {
  const regions = [
    {
      title: "United Arab Emirates",
      cities: [
        {
          name: "Dubai",
          address: [
            "DSO-IFZA, IFZA Properties",
            "Dubai Silicon Oasis",
            "Dubai, Dubayy (AE-DU)",
            "UAE",
          ],
          phone: "jculttrader.inquiry@gmail.com",
          image: "/images/dubai.JPG",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-[160px] md:pt-[180px]">

        {/* ================= HERO ================= */}
        <SubHero
          videoSrc="/videos/whoweare1.mp4"
          title="Who We Are"
          description="To empower our clients with expert financial guidance, innovative investment strategies, and transparent wealth management services that build lasting prosperity and financial security"
        />

        {/* ================= SECTION 1 ================= */}
        <FadeUp>
<section className="pt-8 md:pt-4 lg:pt-6 pb-6 md:pb-8 lg:pb-16 bg-[#ffffff]">
            <div className="container-responsive">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                  <FadeLeft>
                    <h2
  className="
    font-brand
    mb-3 md:mb-4 lg:mb-6
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
                </div>

                <div className="flex-1 md:pl-8 lg:pl-16">
                  <FadeLeft delay={200}>
<p
  className="
    leading-[30px]
    text-[#68717A]
    text-[18px] md:text-[18.5px] lg:text-[19px]
    opacity-100
  "
>                      As a diversified investment firm, we are engineered for outperformance. We converge
                      world-class intellect with disciplined risk management to execute on high-conviction
                      insights. Our approach is precise: we direct capital toward its highest and best use,
                      thereby fueling economic innovation and delivering superior, risk-adjusted returns to
                      our elite clientele.
                    </p>
                  </FadeLeft>
                </div>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* ================= SECTION 2 ================= */}
        <section className="py-6 md:py-8 lg:py-16 bg-[#f6f6f6]">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <FadeLeft>
                  <h2
  className="
    font-brand
    mb-3 md:mb-4 lg:mb-6
    text-[38px] md:text-[44px] lg:text-[48px]
    leading-[1.1]
  "
>
  <span className="block font-medium text-[var(--brand-green-1)]">
    Bound by Culture.
  </span>

  <span className="block font-medium text-[var(--brand-green-2)]">
    Driven by Purpose.
  </span>
</h2>

                </FadeLeft>
              </div>

              <div className="flex-1 md:pl-8 lg:pl-16">
                <FadeLeft delay={200}>
                  <p
  className="
    leading-[30px]
    text-[#68717A]
    text-[18px] md:text-[18.5px] lg:text-[19px]
    mb-4 md:mb-6 lg:mb-8
  "
>
  We’ve crafted a culture that’s unmistakably ours—one that fuels how we work, how we
  connect, and how we show up for the world around us. It’s the shared pulse that moves us
  forward, together.
</p>

                  <a href="/who-we-are/our-culture">
                    <LuxuryButton variant="primary">
                      Experience Our Culture
                    </LuxuryButton>
                  </a>
                </FadeLeft>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3 ================= */}
      <section className="py-6 md:py-8 lg:py-16 bg-[#ffffff] overflow-hidden">
  <div className="container-responsive">
    <div className="flex flex-col md:flex-row items-start">

      {/* IMAGE — STICKS LEFT */}
      <div
        className="
          flex-1
          mb-6 md:mb-0
          -ml-7 md:-ml-10 lg:-ml-12 xl:-ml-14
        "
      >
        <FadeLeft>
          <ImageReveal
            src="/images/whoweare2.jpg"
            alt="Our team"
            className="
              w-full
              h-56 md:h-72 lg:h-[420px]
              object-cover
            "
          />
        </FadeLeft>
      </div>

      {/* TEXT */}
      <div className="flex-1 md:pl-8 lg:pl-16">
        <FadeLeft delay={200}>
          <h2
            className="
              font-brand
              mb-4 md:mb-6
              text-[38px] md:text-[44px] lg:text-[48px]
              leading-[1.1]
            "
          >
            <span className="block font-medium text-[var(--brand-green-1)]">
              Rise.
            </span>
            <span className="block font-medium text-[var(--brand-green-2)]">
              Lead. Elevate.
            </span>
          </h2>

          <p
            className="
              text-[#68717A]
              text-[18px] md:text-[18.5px] lg:text-[19px]
              leading-[30px]
              mb-6 lg:mb-8
            "
          >
            Most of our leaders grew from within—earning their place through grit and vision.
            Today, they channel that same energy into building the leaders who will push us
            forward next.
          </p>

          <a href="/who-we-are/executive-leadership">
            <LuxuryButton variant="primary">
              View Executive Leadership
            </LuxuryButton>
          </a>
        </FadeLeft>
      </div>

    </div>
  </div>
</section>


        {/* ================= SECTION 4 ================= */}
        <section className="py-6 md:py-8 lg:py-16 bg-[#f6f6f6]">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <FadeLeft>
                 <h2
  className="
    font-brand
    mb-3 md:mb-4 lg:mb-6
    text-[38px] md:text-[44px] lg:text-[48px]
    leading-[1.1]
  "
>
  <span className="block font-medium text-[var(--brand-green-1)]">
    Work Across
  </span>

  <span className="block font-medium text-[var(--brand-green-2)]">
    Global Cities.
  </span>
</h2>

                </FadeLeft>
              </div>

              <div className="flex-1 md:pl-8 lg:pl-16">
                <FadeLeft delay={200}>
                 <p
  className="
    text-[#68717A]
    text-[18px] md:text-[18.5px] lg:text-[19px]
    leading-[30px]
    mb-4 md:mb-6 lg:mb-8
  "
>
  Our base is one of the world’s most vibrant financial hubs—a place where opportunity,
  culture, and ambition converge. It’s where we move fast, think big, and build with
  intention.
</p>

                  <a href="/who-we-are/our-global-base">
                    <LuxuryButton variant="primary">
                      View Our Global Base
                    </LuxuryButton>
                  </a>
                </FadeLeft>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5 ================= */}
        <section className="py-6 md:py-8 lg:py-16 bg-[#ffffff]">
          <div className="container-responsive">
            <Accordion regions={regions} />
          </div>
        </section>

      </main>
    </div>
  );
}
