'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { newsArticles } from '@/data/newsData';
import { useEffect, useRef, useState } from 'react';

export default function News() {
  const [activeTab, setActiveTab] = useState(0);
const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.2 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

  const newsItems = newsArticles.map(article => ({
    category: article.category,
    title: article.title,
    href: `/news/${article.id}`,
    date: article.date,
    source: article.source
  }));

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">

        {/* ================= HERO ================= */}
<section className="relative overflow-visible mb-8 md:mb-12">
  <div className="bg-primary ml-7 md:ml-10 lg:ml-12 xl:ml-14">
    <div className="container-responsive">
      <div
  ref={sectionRef}
  className="
    pt-22 md:pt-26 lg:pt-30
    pb-40 md:pb-48 lg:pb-56
  "
>
  <div
    className={`
      transition-all
      duration-[1000ms]
      ease-[cubic-bezier(.22,.61,.36,1)]
      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}
    `}
  >
    <h1
      style={{
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 500,
        fontSize: '68px',
        lineHeight: '1.1',
        letterSpacing: '-0.018em',
        maxWidth: '860px',
        color: '#ffffff',
      }}
    >
      News
    </h1>
  </div>
</div>

    </div>
  </div>
</section>




        {/* Latest Updates */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">

              {/* Left */}
              <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-8 lg:pr-16">
             <div
  className={`
    transition-all
    duration-[1000ms]
    ease-[cubic-bezier(.22,.61,.36,1)]
    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}
  `}
>
  <h2
    className="
      font-brand
      mb-6
      text-[44px] md:text-[50px] lg:text-[54px]
      leading-[1.1]
    "
  >
    <span className="block font-medium text-[var(--brand-green-1)]">
      Latest
    </span>

    <span className="block font-medium text-[var(--brand-green-2)]">
      Updates
    </span>
  </h2>
</div>


                <p
  className="
    font-ttcommons
    text-[#68717A]
    text-[18px] md:text-[18.5px] lg:text-[19px]
    leading-relaxed
    mb-6
  "
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
               <a href="/news/featured-in" className="inline-block scale-[1.1] md:scale-[1.15] ml-1 md:ml-2 lg:ml-3">
  <LuxuryButton variant="primary">
    View All News
  </LuxuryButton>
</a>

              </div>

              {/* Right */}
              <div className="w-full md:w-2/3 md:pl-8 lg:pl-16">
                <div className="border-b border-black/20">
  {newsItems.slice(0, 6).map((item, i) => (
    <a
      key={i}
      href={item.href}
      className="
        group
        flex
        items-center
        justify-between
        gap-10
        pt-0
        pb-10
        transition-all
        duration-700
      "
    >
      {/* LEFT CONTENT */}
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">

          {(item.date || item.source) && (
            <div className="flex items-center whitespace-nowrap">
              {/* DATE */}
              {item.date && (
                <span className="text-[12px] font-normal text-primary">
                  {item.date}
                </span>
              )}

              {/* DIVIDER */}
              {item.date && item.source && (
                <span className="mx-2 h-[28px] w-px bg-black/30" />
              )}

              {/* SOURCE */}
              {item.source && (
                <span className="text-[14px] font-normal text-black/60">
                  {item.source}
                </span>
              )}
            </div>
          )}

          {/* TITLE */}
          <h3
            className="
              relative
              inline-block
              font-brand
              font-medium
              text-[22px] md:text-[24px]
              leading-snug
              text-[var(--brand-green-2)]
            "
          >
            {item.title}

            <span
              className="
                absolute
                left-0
                -bottom-[4px]
                h-[1px]
                w-0
                transition-all
                duration-300
                group-hover:w-full
              "
              style={{ backgroundColor: 'var(--brand-green-1)' }}
            />
          </h3>

        </div>
      </div>

      {/* RIGHT ARROW */}
      <div
  className="
    flex items-center justify-center
    w-10 h-10
    rounded-full
    border
    border-[var(--brand-green-2)]
    text-[var(--brand-green-2)]
    transition-all duration-300

    group-hover:bg-gradient-to-r
    group-hover:from-[var(--brand-green-1)]
    group-hover:to-[var(--brand-green-2)]
    group-hover:border-transparent
    group-hover:text-white
  "
>

        <ArrowRight
          strokeWidth={1.25}
          className="
            w-5 h-5
            transition-transform duration-300
            group-hover:translate-x-0.5
          "
        />
      </div>
    </a>
  ))}
</div>

              </div>

            </div>
          </div>
        </section>

       
      </main>
    </div>
  );
}
