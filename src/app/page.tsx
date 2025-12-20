'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/features/Hero';
import Stats from '@/components/features/Stats';
import NewsSection from '@/components/features/NewsSection';
import FadeUp from '@/components/animation/FadeUp';
import ImageReveal from '@/components/animation/ImageReveal';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { newsArticles } from '@/data/newsData';
import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
function AnimatedTalentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-10 xl:py-24 bg-tertiary"
    >
      <div className="container-responsive">
        <div
          className="
            flex flex-col lg:flex-row items-start
            mb-10 md:mb-20 lg:mb-14 xl:mb-28
            gap-30 lg:gap-55   /* 👈 THIS CONTROLS GAP BETWEEN LEFT & RIGHT (increase/decrease here) */
          "
        >
          {/* LEFT TITLE */}
          <div
            className={`flex-2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2
              className="
                font-brand
                text-[42px] md:text-[48px] lg:text-[54px]
                leading-[1.1]
              "
            >
              <span className="block mb-2 md:mb-3 lg:mb-4 text-[var(--brand-green-1)]">
                Engage With
              </span>
              <span className="block text-[var(--brand-green-2)]">
                Elite Talent
              </span>
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className={`flex-3 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
         <p
  className="
    text-sm md:text-base lg:text-[17px]
    font-raleway
    mb-6 lg:mb-8
    leading-relaxed
    color-grey
    max-w-[600px] 
  "
>


              Here, the collective fuels your growth. People learn side by side,
              sharpening each other's skills and building extraordinary careers together.
            </p>

            {/* EXACT BUTTON YOU REQUESTED */}
            <div
              className={`flex ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '240ms' }}
            >
              <Link
                href="/career"
                className="
                  inline-flex items-center justify-center
                  px-8 py-3.5 text-sm font-medium
                  no-underline

                  text-white
                  border border-transparent

                  bg-[linear-gradient(90deg,var(--brand-green-1),var(--brand-green-2))]
                  hover:bg-none hover:bg-white

                  transition-all duration-300

                  hover:text-[var(--brand-green-1)]
                  hover:border-[var(--brand-green-1)]
                "
              >
                Explore Career Possibilities
              </Link>
            </div>
          </div>
        </div>

        {/* IMAGE / PLACEHOLDER */}
        <div
          className={`overflow-hidden transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-grey w-full h-[200px] md:h-[400px] lg:h-[500px] xl:h-[700px]" />
        </div>
      </div>
    </section>
  );
}
function AnimatedMeritocraticSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="pt-12 md:pt-16 lg:pt-24">
      <div className="container-responsive">
        <div
          className="
            flex flex-col md:flex-row items-start
            gap-6 lg:gap-12   /* 👈 INCREASE / DECREASE LEFT–RIGHT GAP HERE */
          "
        >
          {/* LEFT TITLE */}
          <div
            className={`flex-1 mb-4 md:mb-6 lg:mb-0 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2
              className="
                font-brand
                text-section-title
                leading-[1.1]
              "
            >
              <span className="block text-[var(--brand-green-1)]">
                The Meritocratic Code
              </span>

              <span className="block text-[var(--brand-green-2)]">
                That Shapes Our Collective
              </span>
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className={`flex-1 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p
              className="
                text-sm md:text-base lg:text-[17px]
                font-raleway
                leading-relaxed
                opacity-75
                color-grey
                max-w-[520px]
              "
            >
              A culture where every perspective strengthens our purpose. From seasoned experts to
              rising talent, each member fuels the intelligence that drives our performance. United, we
              achieve what others consider out of reach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


function AnimatedGreenSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="bg-primary py-12 md:py-16 lg:py-24 lg:mb-30 xl:h-[1180px]" style={{ color: '#f5f5f5' }}>
      <div className="container-responsive">
        <div className="flex flex-col lg:flex-row items-start mb-6 md:mb-8">
          <div className={`flex-2 mb-2 lg:mb-0 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className='flex flex-row gap-2 lg:flex-col'>
            <h2 className="font-brand text-section-title  leading-tight">Pioneering the</h2>
            <h2 className="font-brand text-section-title  leading-tight mb-1 lg:mb-8 text-green-500">Future of Finance</h2>
            </div>
          </div>
          <div className={`flex-3 lg:pl-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-section-content leading-relaxed mb-4 md:mb-6 lg:mb-8">
              Innovation is the core of our competitive advantage. We tirelessly reimagine our approach
              to the markets, systematically enhancing our trading models and execution capabilities to
              generate outsized returns in an ever-changing landscape.
            </p>
            <a href="/what-we-do"><LuxuryButton variant="white">Explore What We Do</LuxuryButton></a>
          </div>
        </div>
      </div>
      <div className="container-responsive">
        <div className={`relative transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="bg-grey w-full h-[380px] md:h-[480px] md:mb-0 lg:h-[650px] xl:mt-28 xl:h-[890px] lg:mb-[-200px] xl:mb-[-230px]"></div>
        </div>
      </div>
    </section>
  );
}


function AnimatedSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        py-12 md:py-24 bg-tertiary
        transition-opacity duration-1000
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <div className="container-responsive">
        <div className="flex flex-col lg:flex-row items-start">

          {/* LEFT LABEL */}
          <div className="w-full lg:w-[22%] mb-6 lg:mb-0">
            <h3 className="text-sm tracking-wide text-primary">
              Who We Are
            </h3>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative w-full lg:w-[78%] pl-6 lg:pl-12">

            {/* DIVIDER */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-black/20" />

            {/* PARAGRAPH */}
            <p
              className="
                font-brand
                text-[19px] md:text-[20px] lg:text-[22px]
                leading-[1.45]
                text-[#0B3E27]
                max-w-[820px]
                mb-8
              "
            >
              We aspire to establish an unprecedented legacy as the premier investment entity in
              history. Our mandate is to rigorously discern optimal capital allocation strategies,
              thereby delivering exceptional, sustainable value to an elite clientele of private
              capital stewards and global investors.
            </p>

            {/* BUTTON */}
            <Link
              href="/who-we-are"
              className="
                inline-flex items-center justify-center
                px-7 py-4 text-sm font-medium
                text-white
                bg-[linear-gradient(90deg,var(--brand-green-1),var(--brand-green-2))]
                transition-all duration-300
                hover:bg-none hover:bg-white
                hover:text-[var(--brand-green-1)]
                hover:border hover:border-[var(--brand-green-1)]
              "
            >
              Explore Who We Are
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}




export default function Home() {
  return (
    <div className="min-h-screen bg-main">
      <main>
        <div className="pt-24">
          <Hero 
            title="United, we convert aspiration into strategic execution"
            description="Built on the pursuit of identifying under-recognised market opportunities and empowering
talented individuals to execute their boldest, highest-conviction ideas with precision."
          />
        </div>

        {/* <section className="py-6 md:py-8 lg:py-16 bg-main">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-6 md:mb-8 lg:mb-0">
                <img 
                  src="/office-collage.jpg" 
                  alt="Office Collage" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="flex-1 md:pl-8 lg:pl-16">
                <h2 className="text-xl md:text-2xl lg:text-4xl  text-primary mb-3 md:mb-4 lg:mb-6">
                  Our Workspace
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-main mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="btn-primary px-4 md:px-6 lg:px-8 py-3">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section> */}

        <AnimatedSection />

        <div>
          <Stats 
            stats={[
              {
                number: "2025",
                description: "Date founded by Managing Director Jeyanandh Dhivaharan"
              },
              {
                number: "$10M",
                description: "Assets Under Management",
              },
              {
                number: "1000+",
                description: "Investor Trusts Us"
              }
            ]}
          />
        </div>

        <AnimatedGreenSection />
        
        <AnimatedMeritocraticSection />

            <Stats 
            stats={[
              {
                number: "60%+",
                description: "Professionals with cross-market trading exposure",
              },
              {
                number: "15+",
                description: "Years of Collective Expertise The combined market proficiency of our founding team, refined into a contemporary investment approach.",
              },
              {
                number: "100%",
                description: "Capital Commitment Our conviction is unequivocal — the founding partners invest alongside the portfolio, fully aligned with its performance.",
              }
            ]}
            />

        {/* <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start mb-6 md:mb-8">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-lora  leading-tight mb-3 md:mb-4 lg:mb-8 text-primary">Engage With Elite Talent</h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-base md:text-lg lg:text-xl font-raleway mb-4 md:mb-6 lg:mb-8 leading-relaxed text-main opacity-75">
                  Here, the collective fuels your growth. People learn side by side, sharpening each other’s
                  skills and building extraordinary careers together.
                </p>
                <LuxuryButton variant="primary">Explore Career Possibilities</LuxuryButton>
              </div>
            </div>
            <div className="ml-0 md:ml-4 lg:ml-8">
              <ImageReveal 
                src="/office.webp" 
                alt="Office" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section> */}

        <AnimatedTalentSection />

        <NewsSection 
          title="Insights & Perspectives"
          description="Explore firm highlights, media coverage, and perspectives on what it means to join and
grow within our organization."
          items={newsArticles.map(article => ({
            category: article.category,
            title: article.title,
            href: `/news/${article.id}`,
            date: article.date,
            source: article.source
          }))}
        />
      </main>
    </div>
  );
}
