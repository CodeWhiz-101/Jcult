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
        
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <FadeLeft>
              <h2 className="text-section-title font-brand text-primary mb-8 md:mb-10 lg:mb-12">
                Our Team
              </h2>
            </FadeLeft>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <FadeLeft key={index} delay={index * 200}>
                  <div className="border-l-2 border-secondary pl-4 md:pl-6">
                  <h3 className="text-section-content font-brand text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-button text-main mb-3 md:mb-4 color-grey">
                    {member.title}
                  </p>
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-40 md:h-48 object-cover"
                  />
                  </div>
                </FadeLeft>
              ))}
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