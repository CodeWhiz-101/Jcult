'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/features/Hero';
import Accordion from '@/components/features/Accordion';
import FadeUp from '@/components/animation/FadeUp';
import FadeLeft from '@/components/animation/FadeLeft';
import ImageReveal from '@/components/animation/ImageReveal';
import LuxuryButton from '@/components/ui/LuxuryButton';
import ExploreMore from '@/components/features/ExploreMore';

export default function WhoWeAre() {
  const regions = [
    {
      title: "United Arab Emirates",
      cities: [
        {
          name: "Dubai",
          address: ["DSO-IFZA, IFZA Properties", "Dubai Silicon Oasis","Dubai, Dubayy (AE-DU)","UAE"],
          phone: "jculttrader.inquiry@gmail.com",
          image: "/images/dubai.JPG",
        },
      
        // add more cities...
      ]
    },

  ];

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        <Hero 
          imageSrc="/images/building.JPG"
          title="Who We Are"
          description="To empower our clients with expert financial guidance, innovative investment strategies, and transparent wealth management services that build lasting prosperity and financial security"
        />
        
        <FadeUp>
          <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
            <div className="container-responsive">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                  <FadeLeft>
                    <h2 className="leading-[53px] font-primary font-brand text-primary mb-3 md:mb-4 lg:mb-6 text-section-title">
                      Pursuing Edge. Rewriting Markets.
                    </h2>
                  </FadeLeft>
                </div>
                
                <div className="flex-1 md:pl-8 lg:pl-16 space-y-4 md:space-y-6">
                  <FadeLeft delay={200}>
                    <p className="leading-[28px] opacity-75 text-gray text-section-content">
                    As a diversified investment firm, we are engineered for outperformance. We converge
world-class intellect with disciplined risk management to execute on high-conviction
insights. Our approach is precise: we direct capital toward its highest and best use, thereby
fueling economic innovation and delivering superior, risk-adjusted returns to our elite
clientele.
                    </p>
                  </FadeLeft>
                </div>
              </div>
            </div>
          </section>
        </FadeUp>
        
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <FadeLeft>
                  <h2 className="leading-[53px] font-primary  font-brand text-primary text-section-title">
                    Bound by Culture. Driven by Purpose.
                  </h2>
                </FadeLeft>
              </div>
              
              <div className="flex-1 md:pl-8 lg:pl-16">
                <FadeLeft delay={200}>
                  <p className="leading-[28px] text-gray text-section-content mb-4 md:mb-6 lg:mb-8">
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

        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0 w-full md:w-auto">
                <FadeLeft>
                  <ImageReveal 
                    src="/images/leader standup.JPG"
                    alt="Our team"
                    className="w-full h-48 md:h-64 lg:h-80"
                  />
                </FadeLeft>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <FadeLeft delay={200}>
                  <h2 className="leading-[53px] font-primary  font-brand text-primary text-section-title mb-4 md:mb-6">
                  Rise. Lead. Elevate.
                </h2>
                <p className="leading-[28px] opacity-75 text-gray text-section-content mb-4 md:mb-6 lg:mb-8">
                  Most of our leaders grew from within—earning their place through grit and vision. Today,
                  they channel that same energy into building the leaders who will push us forward next.
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

        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <FadeLeft>
                  <h2 className="leading-[53px] font-primary  font-brand text-primary text-section-title">
                    Work Across Global Cities.
                  </h2>
                </FadeLeft>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <FadeLeft delay={200}>
                  <p className="leading-[28px] opacity-75 text-gray text-section-content mb-4 md:mb-6 lg:mb-8">
                  Our base is one of the world’s most vibrant financial hubs—a place where opportunity,
                  culture, and ambition converge. It’s where we move fast, think big, and build with intention.
                  This city pushes us forward every day, giving us the energy, diversity, and edge to operate
                  on a global level.
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

        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <Accordion regions={regions} />
          </div>
        </section>

        {/* <ExploreMore /> */}
      </main>
    </div>
  );
}