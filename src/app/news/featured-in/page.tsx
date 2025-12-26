'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { newsArticles } from '@/data/newsData';

import PageBreadcrumb from '@/components/ui/PageBreadcrumb';

export default function InTheMedia() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [showMore, setShowMore] = useState(false);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setReveal(true));
  }, []);

  const newsDataByYear: Record<string, typeof newsArticles> = {
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
          <div className="bg-[var(--brand-green-1)] ml-7 md:ml-10 lg:ml-12 xl:ml-14">
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
        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value);
              setShowMore(false);
            }}
            className="
              appearance-none
              bg-transparent
              pr-8
              cursor-pointer
              font-medium
              text-[18px] md:text-[20px]
              text-[var(--brand-green-1)]
              focus:outline-none
            "
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>

          <ChevronDown
            className="
              absolute right-0 top-1/2 -translate-y-1/2
              h-5 w-5
              text-[var(--brand-green-1)]
              pointer-events-none
            "
          />
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
      font-brand
      text-[24px] md:text-[26px]
      text-medium
      leading-snug

      text-[var(--brand-green-1)]
      max-w-[820px]
    "
    style={{
      transform: reveal ? 'translateX(0)' : 'translateX(-120%)',
      opacity: reveal ? 1 : 0,
      transition: `transform 900ms cubic-bezier(0.22,1,0.36,1) ${150 + i * 80}ms,
                   opacity 600ms ease ${150 + i * 80}ms`,
    }}
  >
    {item.title}
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
                      transition-all duration-300
                      text-[var(--brand-green-1)]
                      border-[var(--brand-green-1)]
                      group-hover:bg-[var(--brand-green-1)]
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
