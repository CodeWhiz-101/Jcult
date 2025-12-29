'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { newsArticles } from '@/data/newsData';
import { useRef } from 'react';


import PageBreadcrumb from '@/components/ui/PageBreadcrumb';

export default function InTheMedia() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [showMore, setShowMore] = useState(false);
  const [reveal, setReveal] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    requestAnimationFrame(() => setReveal(true));
  }, []);
  const [dropdownOpen, setDropdownOpen] = useState(false);
const dropdownRef = useRef<HTMLDivElement>(null);


  const newsDataByYear: Record<string, typeof newsArticles> = {
    '2026':newsArticles,
    '2025': newsArticles,
    '2024': [],
    '2023': [],
  };

  const currentYearData = newsDataByYear[selectedYear] || [];
  const displayedItems = showMore
    ? currentYearData
    : currentYearData.slice(0, 5);
    

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20">

        {/* ================= HERO ================= */}
        <section className="relative overflow-visible mb-0">
          <div className="bg-primary ml-7 md:ml-10 lg:ml-12 xl:ml-14">
            <div className="container-responsive">
              <div className="pt-22 md:pt-26 lg:pt-30 pb-38 md:pb-42 lg:pb-46">

                {/* BREADCRUMB */}
                <div className="mb-6">
                  <PageBreadcrumb
                    items={[
                      { label: 'News', href: '/news' },
                      { label: 'Featured In', href: '/news/featured-in' },
                    ]}
                  />
                </div>

                {/* TITLE — LEFT → RIGHT REVEAL */}
                <div style={{ overflow: 'hidden' }}>
                  <h1
                    style={{
                      fontFamily: 'Raleway, sans-serif',
                      fontWeight: 500,
                      fontSize: '60px',
                      lineHeight: '1.1',
                      letterSpacing: '-0.018em',
                      maxWidth: '860px',
                      color: '#ffffff',
                      transform: reveal
                        ? 'translateX(0)'
                        : 'translateX(-120%)',
                      opacity: reveal ? 1 : 0,
                      transition:
                        'transform 900ms cubic-bezier(0.22,1,0.36,1), opacity 600ms ease',
                    }}
                  >
                    Featured In
                  </h1>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ================= FILTER ROW ================= */}
      <section className="py-8 md:py-10">
  <div className="container-responsive">
    <div
      className="
        flex items-center gap-6
        uppercase tracking-wide
        text-[16px] md:text-[17px] lg:text-[18px]
      "
    >
      {/* RECENT */}
      <span className="font-medium text-[var(--brand-green-1)]">
        Recent
      </span>

      {/* DIVIDER */}
      <span className="text-[var(--brand-green-1)]">|</span>

      {/* PAST NEWS + YEAR */}
      <div className="flex items-center gap-3">
        <span className="font-medium text-[#8A8F93]">
          Past News:
        </span>

        {/* YEAR DROPDOWN */}
        {/* YEAR DROPDOWN */}
<div
  ref={dropdownRef}
  className="relative"
  onMouseEnter={() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  }}
  onMouseLeave={() => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180); // <-- small delay (sweet spot)
  }}
>


  <button
    onClick={() => setDropdownOpen(!dropdownOpen)}
    className="
      flex items-center gap-2
      font-medium
      text-[18px] md:text-[20px]
      text-[var(--brand-green-1)]
      focus:outline-none
    "
  >
    {selectedYear}
    <ChevronDown
      className={`
        w-5 h-5
        transition-transform duration-300
        ${dropdownOpen ? 'rotate-180' : ''}
      `}
    />
  </button>

  {dropdownOpen && (
    <div
      className="
        absolute
        top-[140%]
        left-0
        z-30
        w-[140px]
        bg-white
        shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        border border-black/5
        py-3
      "
    >
      {['2026','2025'].map((year) => (
        <button
          key={year}
          onClick={() => {
            setSelectedYear(year);
            setShowMore(false);
            setDropdownOpen(false);
          }}
          className="
            block w-full
            px-6 py-3
            text-left
            text-[22px]
            font-medium
            text-[var(--brand-green-1)]
            hover:bg-black/[0.03]
            transition
          "
        >
          {year}
        </button>
      ))}
    </div>
  )}
</div>

      </div>
    </div>
  </div>
</section>


        {/* ================= NEWS LIST ================= */}
        <section className="pb-16">
          <div className="container-responsive">
            <div className="border-t border-b border-black/10 divide-y">

              {displayedItems.map((item, i) => (
                <a
                  key={i}
                  href={`/news/${item.id}`}
                  className="group flex items-center justify-between py-6"
                >
                  {/* LEFT */}
                  <div>
                    <p
  className="
    text-[15.5px] md:text-[16px]
    leading-tight
    text-[var(--brand-green-1)]
    mb-2
  "
>
  {item.date} {item.source && <> | {item.source}</>}
</p>


                   <div style={{ overflow: 'hidden' }}>
 <h3
  className="
    relative
    inline-block
    pb-1.5
    font-brand
    font-medium
    text-[24px] md:text-[26px]
    leading-snug
    text-[var(--brand-green-1)]
  "
  style={{
    transform: reveal ? 'translateX(0)' : 'translateX(-120%)',
    opacity: reveal ? 1 : 0,
    transition: `transform 900ms cubic-bezier(0.22,1,0.36,1) ${150 + i * 80}ms,
                 opacity 600ms ease ${150 + i * 80}ms`,
  }}
>

  {item.title}

  {/* REVEAL UNDERLINE */}
 <span
  aria-hidden
  className="
    absolute
    left-0
    bottom-0
    w-full
    origin-left
  "
  style={{
    height: '0.5px',
    backgroundColor: 'rgba(20, 83, 45, 0.45)', // lighter green
    transform: reveal ? 'scaleX(1)' : 'scaleX(0)',
    opacity: reveal ? 1 : 0,
    transition: `
      transform 600ms cubic-bezier(0.22,1,0.36,1) ${450 + i * 80}ms,
      opacity 400ms ease ${450 + i * 80}ms
    `,
  }}
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
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </div>
                </a>
              ))}

            </div>

            {/* ================= MORE BAR ================= */}
            {currentYearData.length > 5 && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="
                  mt-10
                  w-full
                  py-4
                  text-white
                  font-medium
                  bg-[var(--brand-green-1)]
                  tracking-wide
                "
              >
                MORE
              </button>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}
