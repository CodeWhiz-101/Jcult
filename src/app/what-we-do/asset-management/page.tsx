'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Stats from '@/components/features/Stats';
import InvestmentTabs from '@/components/features/InvestmentTabs';
import LuxuryButton from '@/components/ui/LuxuryButton';
import FadeLeft from '@/components/animation/FadeLeft';
import PageBreadcrumb from '@/components/ui/PageBreadcrumb';

export default function Commodities() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">

         {/* ================= HERO ================= */}
               <section className="relative overflow-visible mb-16 md:mb-24">
                 <div className="bg-primary ml-7 md:ml-10 lg:ml-12 xl:ml-14">
                   <div className="container-responsive">
               
                     {/* ⛔ GREEN BOX — DO NOT TOUCH */}
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
               
                       {/* TITLE */}
                       <h1
                         style={{
                           fontFamily: 'Raleway, sans-serif',
                           fontWeight: 500,
                           fontSize: '60px',          // ⬅ slightly bigger
                           lineHeight: '1.1',         // ⬅ tighter
                           letterSpacing: '-0.018em',
                           maxWidth: '860px',
                           color: '#ffffff',
                           WebkitFontSmoothing: 'antialiased',
                           MozOsxFontSmoothing: 'grayscale',
                         }}
                       >
                         Asset Management
                       </h1>
               
                     </div>
                   </div>
                 </div>
               </section>


        {/* ================= OVERVIEW ================= */}
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

        {/* ================= INVESTMENT TABS ================= */}
        <InvestmentTabs />

        {/* ================= CTA ================= */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">

              <div className="flex-1 mb-6 md:mb-0">
                <FadeLeft>
                  <img
                    src="/images/assetmanagement1.JPG"
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
