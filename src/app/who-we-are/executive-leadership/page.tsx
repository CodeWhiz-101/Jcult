'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FadeUp from '@/components/animation/FadeUp';
import FadeLeft from '@/components/animation/FadeLeft';
import LuxuryButton from '@/components/ui/LuxuryButton';

export default function LeadershipTeam() {
  const teamMembers = [
    { name: "Jeyanandh Dhivaharan", title: "Founder, CEO", image: "/images/office.webp" },
    // { name: "Jeyanandh Dhivaharan", title: "Founder, CEO", image: "/images/office.webp" },
    // { name: "Jeyanandh Dhivaharan", title: "Founder, CEO", image: "/images/office.webp" },
    // { name: "Jeyanandh Dhivaharan", title: "Founder, CEO", image: "/images/office.webp" },
    // { name: "Jeyanandh Dhivaharan", title: "Founder, CEO", image: "/images/office.webp" },
    // { name: "Jeyanandh Dhivaharan", title: "Founder, CEO", image: "/images/office.webp" },
  ];
const leader = teamMembers[0];

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <section className="relative overflow-visible mb-8 md:mb-16">
          <FadeUp>
            <div className="bg-primary">
              <div className="container-responsive">
                <div className="min-h-[60vh] md:min-h-[70vh] flex items-start pt-12 md:pt-16 lg:pt-20">
                  <FadeLeft>
                    <h1 className="text-hero-title font-brand text-white">
                      Executive Leadership
                    </h1>
                  </FadeLeft>
                </div>
              </div>
            </div>
          </FadeUp>
        </section>
        
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <FadeLeft>
                  <h2 className="text-section-title font-brand text-primary">
                    Defining Strategic Direction
                  </h2>
                </FadeLeft>
              </div>
              
              <div className="flex-1 md:pl-8 lg:pl-16">
                <FadeLeft delay={200}>
                <p className="text-section-content color-grey">
                  Our executive leadership establishes the firm’s overarching mandate. They are responsible
                  for synthesizing our ambition into a clear, actionable strategy, providing the governance
                  required to align our exceptional talent with the firm's long-term trajectory.
                </p>
                </FadeLeft>
              </div>
            </div>
          </div>
        </section>
        
       <section className="py-12 md:py-16 lg:py-24">
  <div className="container-responsive">

    {/* SECTION TITLE */}
    <FadeLeft>
      <h2 className="
        text-section-title
        font-brand
        text-primary
        text-center
        mb-12 md:mb-16
      ">
        Our Leader
      </h2>
    </FadeLeft>

    {/* LEADER CARD */}
    <FadeLeft delay={200}>
      <div className="flex justify-center">
        <div
          className="
            group
            max-w-[360px]
            text-center
          "
        >
          {/* IMAGE */}
          <div className="
            w-full
            aspect-[4/5]
            overflow-hidden
            mb-6
          ">
            <img
              src={leader.image}
              alt={leader.name}
              className="
                w-full h-full
                object-cover
                transition-transform duration-500
                group-hover:scale-[1.05]
              "
            />
          </div>

          {/* NAME */}
          <h3 className="
            text-section-content
            font-brand
            text-primary
            mb-1
          ">
            {leader.name}
          </h3>

          {/* TITLE */}
          <p className="
            text-button
            text-grey
            tracking-wide
          ">
            {leader.title}
          </p>
        </div>
      </div>
    </FadeLeft>

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
                  Driving Ideas Into Real Impact  
                </h2>
                <button className="btn-primary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                  Explore What We Do
                </button>
              </div>
            </div>
          </div>
        </section> */}

         <section className="pt-6 md:pt-8 mb-4 md:mb-0 lg:pt-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <FadeLeft>
                  <img 
                    src="/images/woman smiling and handshake.JPG"
                    alt="Leadership impact"
                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  />
                </FadeLeft>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <FadeLeft delay={200}>
                <h2 className="text-section-title font-brand text-primary mb-4 md:mb-6">
                  Driving Ideas Into Real Impact 
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