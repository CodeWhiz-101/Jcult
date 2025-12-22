'use client';

import LuxuryButton from '@/components/ui/LuxuryButton';
import Hero from '@/components/features/Hero';
import FadeLeft from '@/components/animation/FadeLeft';
import FadeUp from '@/components/animation/FadeUp';
import BorderReveal from '@/components/animation/BorderReveal';

export default function WhatWeDo() {
  const cards = [
    { title: "Commodities", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "/what-we-do/commodities", image: "/images/office.webp" },
    { title: "Equities", description: "Sed do eiusmod tempor incididunt ut labore et dolore.", link: "/what-we-do/equities", image: "/images/office-collage.jpg" },
    { title: "Credit & Convertibles", description: "Ut enim ad minim veniam, quis nostrud exercitation.", link: "/what-we-do/credit-and-convertibles", image: "/images/office.webp" },
    { title: "Fixed Income & Macro", description: "Duis aute irure dolor in reprehenderit in voluptate.", link: "/what-we-do/fixed-income-and-macro", image: "/images/office-collage.jpg" },
    { title: "Global Quantitative Strategies", description: "Excepteur sint occaecat cupidatat non proident.", link: "/what-we-do/global-quantitative-strategies", image: "/images/office.webp" }
  ];

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        {/* Hero Section with Image */}
        <Hero 
          imageSrc="/images/group disscusion.JPG"
          title="Capitalizing on Market Potential"
          description="Guided by a perspective that sees beyond the obvious, we illuminate opportunities hidden
                      in the deeper layers of the market and advance decisively, transforming early insights into
                      meaningful outcomes."
        />

        {/* Small blue text left, para with border right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-0">
                <FadeLeft>
                  <p className="text-xs text-primary">How We Move</p>
                </FadeLeft>
              </div>
              <BorderReveal>
                <p className="text-section-content color-grey">
                  We channel capital toward the world’s most meaningful and high-impact opportunities,
                  guided by a rare fusion of disciplined talent, intuitive technology, deep analytics, and a
                  global presence that moves with quiet strength.
                </p>
              </BorderReveal>
            </div>
          </div>
        </section>

        {/* Title left, small para right */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-0">
                <FadeLeft>
                  <h2 className="text-section-title font-brand text-primary">
                    Diversified Asset Management With a Singular Focus
                  </h2>
                </FadeLeft>
              </div>
              <div className="flex-1 mb-4 md:mb-0 md:pl-8 lg:pl-16">
                <FadeLeft delay={200}>
                <p className="text-section-content color-grey mb-2">
                  Our team explores the full spectrum of global markets, pursuing compelling ideas through
                  innovative thinking and bold, disciplined execution.
                </p>
                <p className="text-section-content color-grey mb-4">
                 Across equities, macro, real assets, virtual assets, and private wealth solutions, we
                  maintain one clear objective: generating superior, risk-adjusted returns.
                </p>
                <a href="/what-we-do/asset-management">
                  <LuxuryButton variant='primary'>
                    Explore Diversification
                  </LuxuryButton>
                </a>
                </FadeLeft>
              </div>
            </div>
          </div>
        </section>

        {/* Image left, title with 3 paras right */}
        {/* <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <img 
                  src="/images/office-collage.jpg"
                  alt="Our strategy"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16 space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl  text-primary">
                  Strategic Excellence
                </h2>
                <p className="text-sm md:text-base text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-sm md:text-base text-main leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-sm md:text-base text-main leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Title left, statement right */}
        {/* <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl  text-primary">
                  Our Mission
                </h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-lg md:text-xl lg:text-2xl text-primary m leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* 5 Cards in 3 columns with grey left border */}
        {/* <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cards.map((card, i) => (
                <div key={i} className="border-l-2 border-gray-300 pl-4 md:pl-6">
                  <h3 className="text-xl md:text-2xl  text-primary mb-3 md:mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-secondary leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <a href={card.link} className="inline-flex items-center text-primary m hover:translate-x-2 transition-transform mb-4 md:mb-6">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover mt-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Blue background with image top left hanging out, title right, 3 columns */}
        <section className="bg-primary py-6 md:py-8 lg:py-16 relative overflow-visible">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start mb-8 md:mb-12">
              <div className="flex-1 mb-6 md:mb-0 relative md:-mt-24 lg:-mt-32">
                <FadeLeft>
                <img 
                  src="/images/empty office.JPG"
                  alt="Our values"
                  className="w-full h-64 md:h-80 object-cover"
                />
                </FadeLeft>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <FadeLeft delay={200}>
                <h2 className="text-section-title font-brand text-white">
                  Our Strategic Edge
                </h2>
                </FadeLeft>
              </div>
            </div>

            {/* 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-6 md:pt-10">
              <FadeLeft delay={400}>
                <div className="relative px-6">
                <div className="absolute top-0 left-0 h-full w-px bg-white/30 hidden md:block"></div>
                <div className="absolute top-0 right-0 h-full w-px bg-white/30 hidden md:block"></div>
                <h4 className="text-section-content font-brand text-white mb-4">
                  World-Class Talent
                </h4>
                <p className="text-button text-white/90">
                  By uniting experts from the worlds of finance and technology, we foster a culture of
                  unparalleled growth. Our collaborative environment and extensive resources empower our
                  people to achieve their full potential and drive innovation.
                </p>
                </div>
              </FadeLeft>
              <FadeLeft delay={600}>
                <div className="relative pr-6">
                <div className="absolute top-0 right-0 h-full w-px bg-white/30 hidden md:block"></div>
                <h4 className="text-section-content font-brand text-white mb-4">
                  Uncompromising Risk Standards
                </h4>
                <p className="text-button text-white/90">
                Our approach to risk is disciplined and independent. With a reporting line directly to the
                CEO, our specialized risk managers monitor performance drivers and maintain strict
                tolerance levels. We utilize advanced technology for continuous tracking and real-time
                stress testing, ensuring robust protection for every position we hold.
                </p>
                </div>
              </FadeLeft>
              {/* <div className="relative pr-6">
                <h4 className="text-xl md:text-2xl  text-white mb-4">
                  Integrity
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div> */}
            </div>
          </div>
        </section>

        {/* <section className="py-6 md:py-8 lg:py-16 bg-main">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="w-full md:w-1/2 mb-4 md:mb-6 lg:mb-0">
                <img 
                  src="/images/office.webp"
                  alt="Join our team"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
              
              <div className="flex-1 md:pl-8 lg:pl-16">
                <h2 className="text-[48px] leading-[53px] font-primary  text-primary mb-4 md:mb-6">
                  In Pursuit of Minds That Redefine Possibility
                </h2>
                <button className="btn-primary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                  Discover Available Positions
                </button>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0 container-responsive">
                <FadeLeft>
                  <img 
                    src="/images/two men standing and handshake.JPG"
                    alt="Join our team"
                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  />
                </FadeLeft>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16 text-center md:text-left">
                <FadeLeft delay={200}>
                <h2 className="text-section-title font-brand text-primary mb-4 md:mb-6">
                 In Pursuit of Minds That Redefine Possibility
                </h2>
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

        <section className='pb-16'>
          <div className="container-responsive text-charcoal color-grey">
            <FadeUp>
            JCULT TRADER’s risk management framework should not be interpreted as a guarantee
            against losses. Certain risks may fall outside the scope of what JCULT TRADER monitors or
            controls, and actual risks can exceed expectations, particularly during atypical or volatile
            market conditions. Despite our risk practices and any information provided, substantial or
            even total losses may still occur due to these or other unforeseen factors.
            </FadeUp>
          </div>
        </section>
      </main>
    </div>
  );
}
