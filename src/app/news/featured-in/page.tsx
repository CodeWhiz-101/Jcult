'use client';

import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { newsArticles } from '@/data/newsData';

export default function InTheMedia() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [showMore, setShowMore] = useState(false);

  const newsDataByYear: Record<string, typeof newsArticles> = {
    '2024': newsArticles,
    '2023': [],
    '2022': []
  };

  const currentYearData = newsDataByYear[selectedYear] || [];
  const displayedItems = showMore ? currentYearData : currentYearData.slice(0, 4);

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-visible mb-8 md:mb-16">
          <div className="bg-primary">
            <div className="container-responsive">
              <div className="min-h-[60vh] md:min-h-[70vh] flex items-start pt-12 md:pt-16 lg:pt-20">
                <h1 className="text-section-title font-brand text-white">
                  Featured In
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Year Dropdown and News Items */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            {/* Year Dropdown */}
            <div className="mb-8 md:mb-12">
              <div className="relative inline-block">
                <select
                  value={selectedYear}
                  onChange={(e) => {
                    setSelectedYear(e.target.value);
                    setShowMore(false);
                  }}
                  className="appearance-none bg-white border-2 border-primary text-primary  px-6 py-3 pr-12 text-base md:text-lg cursor-pointer hover:bg-tertiary transition"
                >
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary pointer-events-none" />
              </div>
            </div>

            {/* News Items */}
            <div className="divide-y border-t border-b">
              {displayedItems.map((item, i) => (
                <a
                  key={i}
                  href={`/news/${item.id}`}
                  className="group flex justify-between py-4 md:py-6 items-start transition"
                >
                  <div className="space-y-1 flex-1">
                    <p className="text-xs md:text-sm text-secondary uppercase tracking-wide">
                      {item.category}
                    </p>
                    {(item.date || item.source) && (
                      <p className="text-xs text-secondary/70">
                        {item.date}
                        {item.source && <> | {item.source}</>}
                      </p>
                    )}
                    <h3 className="text-base md:text-lg  text-primary group-hover:underline">
                      {item.title}
                    </h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition ml-4" />
                </a>
              ))}
            </div>

            {/* Load More Button */}
            {currentYearData.length > 4 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="btn-primary px-6 md:px-8 py-3 text-sm md:text-base"
                >
                  {showMore ? 'Show Less' : 'Load More'}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
