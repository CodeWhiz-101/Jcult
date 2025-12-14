'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Stats from '@/components/features/Stats';
import InvestmentTabs from '@/components/features/InvestmentTabs';
import LuxuryButton from '@/components/ui/LuxuryButton';
import FadeLeft from '@/components/animation/FadeLeft';

export default function Commodities() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        {/* Hero Section - Blue background sticking to right with gap on left */}
        <section className="relative overflow-visible mb-8 md:mb-16">
          <div className="bg-primary">
            <div className="container-responsive">
              <div className="min-h-[60vh] md:min-h-[70vh] flex items-start py-6 md:py-8 lg:py-16">
                <FadeLeft>
                  <h1 className="font-brand text-hero-title text-white">
                    Asset Management
                  </h1>
                </FadeLeft>
              </div>
            </div>
          </div>
        </section>

        {/* Title left, paragraph right */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <FadeLeft>
                  <h2 className="font-brand text-section-title text-primary">
                    Overview
                  </h2>
                </FadeLeft>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <FadeLeft delay={200}>
                <p className="text-section-content color-grey leading-relaxed">
                  We are a newly established asset management firm built on disciplined insight and a
                  structured approach to diversified portfolio management. Through both Discretionary and
                  Non Discretionary PMS services, we aim to deliver well constructed strategies that reflect
                  thorough analysis, measured decision making, and alignment with each client’s objectives.
                  Our diversified investment framework enables us to navigate evolving market conditions
                  with clarity and purpose, transforming informed perspectives into portfolios designed for
                  stability, growth, and long term value creation.
                </p>
                </FadeLeft>
              </div>
            </div>
          </div>
        </section>

        <InvestmentTabs />

        {/* Image left attached to corner, title and button right aligned top */}
        <section className="py-6 md:py-8 lg:py-16">
                  <div className="container-responsive">
                    <div className="flex flex-col md:flex-row items-start">
                      <div className="flex-1 mb-6 md:mb-0 container-responsive">
                        <FadeLeft>
                          <img 
                            src="/images/woman working.JPG"
                            alt="Join our team"
                            className="w-full h-64 md:h-80 lg:h-96 object-cover"
                          />
                        </FadeLeft>
                      </div>
                      <div className="flex-1 md:pl-8 lg:pl-16 text-center md:text-left">
                        <FadeLeft delay={200}>
                        <h2 className="font-brand text-section-title leading-tight text-primary mb-4 md:mb-6">
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
      </main>
    </div>
  );
}