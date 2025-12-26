'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FadeUp from '@/components/animation/FadeUp';
import FadeLeft from '@/components/animation/FadeLeft';
import LuxuryButton from '@/components/ui/LuxuryButton';
import PageBreadcrumb from '@/components/ui/PageBreadcrumb';

export default function LeadershipTeam() {
  const teamMembers = [
    { name: 'Jeyanandh Dhivaharan', title: 'Founder, CEO', image: '/images/jeyanandh-dhuvaharan.svg' },
  ];

  const leader = teamMembers[0];

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">

        {/* ================= HERO ================= */}
       {/* ================= HERO ================= */}
       <section className="relative z-10 overflow-visible mb-16 md:mb-24">
         <div className="bg-primary ml-7 md:ml-10 lg:ml-12 xl:ml-14">
           <div className="container-responsive">
       
             {/* ⛔ GREEN BOX — DO NOT TOUCH */}
             <div className="pt-22 md:pt-26 lg:pt-30 pb-38 md:pb-42 lg:pb-46">

       
               {/* BREADCRUMB */}
               <div style={{ marginBottom: '24px' }}>
                 <PageBreadcrumb
                   items={[
                     { label: 'Who We Are', href: '/who-we-are' },
                     { label: 'Leadership', href: '/who-we-are/executive-leadership' },
                   ]}
                 />
               </div>
       
               {/* TITLE */}
               <FadeLeft>
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
    }}
  >
    Executive Leadership
  </h1>
</FadeLeft>


       
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
    Defining Strategic
  </span>
  <span className="block font-semibold text-[var(--brand-green-2)]">
    Direction
  </span>
</h2>

                </FadeLeft>
              </div>

              <div className="flex-1 md:pl-8 lg:pl-16 pt-6 md:pt-7">
                <FadeLeft delay={200}>
                  <p className="text-section-content color-grey leading-[28px]">
                    Our executive leadership establishes the firm’s overarching mandate. They are responsible
                    for synthesizing our ambition into a clear, actionable strategy, providing the governance
                    required to align our exceptional talent with the firm&apos;s long-term trajectory.
                  </p>
                </FadeLeft>
              </div>

            </div>
          </div>
        </section>

        {/* ================= LEADER ================= */}
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container-responsive">

            <FadeLeft>
             <h2
  className="
    font-brand
    text-center
    mb-12 md:mb-16
    text-[46px] md:text-[50px] lg:text-[56px]
    leading-[1.1]
  "
>
  <span className="font-semibold text-[var(--brand-green-1)]">
    Our
  </span>{' '}
  <span className="font-semibold text-[var(--brand-green-2)]">
    Leader
  </span>
</h2>


            </FadeLeft>

            <FadeLeft delay={200}>
              <div className="flex justify-center">
                <div className="group max-w-[360px] text-center">

                  <div className="w-full aspect-[4/5] overflow-hidden mb-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="
                        w-full h-full object-cover
                        transition-transform duration-500
                        group-hover:scale-[1.05]
                      "
                    />
                  </div>

                  <h3 className="text-section-content font-brand text-primary mb-1">
                    {leader.name}
                  </h3>

                  <p className="text-button text-grey tracking-wide">
                    {leader.title}
                  </p>

                </div>
              </div>
            </FadeLeft>

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="pt-6 pb-16 md:pt-8 md:pb-24 lg:pt-16 lg:pb-32">

          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">

              <div className="flex-1 mb-6 md:mb-0">
                <FadeLeft>
                  <img
                    src="/images/executiveledership2.jpg"
                    alt="Leadership impact"
                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  />
                </FadeLeft>
              </div>

              <div className="flex-1 md:pl-8 lg:pl-16">
                <FadeLeft delay={200}>
                 <h2
  className="
    font-brand
    mb-4 md:mb-6
    text-[46px] md:text-[50px] lg:text-[56px]
    leading-[1.12]
  "
>
  <span className="block font-semibold text-[var(--brand-green-1)]">
    Driving Ideas Into
  </span>
  <span className="block font-normal text-[var(--brand-green-2)]">
    Real Impact
  </span>
</h2>


                  <a href="/what-we-do">
                    <LuxuryButton>
                      Explore What We Do
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
