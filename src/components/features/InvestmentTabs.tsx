'use client';

import { useState, useEffect, useRef } from 'react';

export default function InvestmentTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  /* -------------------------------
     TAB CONTENT FADE
  -------------------------------- */
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  /* -------------------------------
     AUTO-CENTER ACTIVE TAB
  -------------------------------- */
  useEffect(() => {
    const container = scrollContainerRef.current;
    const activeButton = tabRefs.current[activeTab];
    if (!container || !activeButton) return;

    const containerWidth = container.offsetWidth;
    const buttonLeft = activeButton.offsetLeft;
    const buttonWidth = activeButton.offsetWidth;

    container.scrollTo({
      left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
      behavior: 'smooth',
    });
  }, [activeTab]);

  /* -------------------------------
     SCROLL REVEAL
  -------------------------------- */
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // 🔒 CONTENT UNTOUCHED
  const tabs = [
  {
    label: 'Global Equities',
    overview:
      'Our Global Equities practice is built on deep fundamental research and a bottom-up security selection process. We believe that despite market efficiency, information asymmetry and behavioral biases create pockets of value. Our teams analyze corporate balance sheets, management quality, and industry dynamics to identify high-quality businesses trading at a discount to their intrinsic value.',
    columns: [
      {
        title: 'International Markets',
        text:
          'We look beyond domestic borders to capture growth in developed economies across Europe, Asia-Pacific, and North America. By diversifying across mature markets, we mitigate single-country risk while accessing established global leaders in technology, healthcare, and industrials.',
      },
      {
        title: 'Emerging Markets',
        text:
          'The next wave of global growth is driven by developing economies. Our specialized team navigates the volatility of emerging markets to identify nations and sectors undergoing structural transformation. We focus on demographic shifts, urbanization, and the rising middle class to capture high-alpha opportunities in regions that are often under-researched.',
      },
      {
        title: 'Event & Sector Trades',
        text:
          'Markets often misprice securities during periods of corporate change or specific industry cycles. We utilize tactical strategies to capitalize on distinct catalysts such as mergers and acquisitions, spin-offs, regulatory shifts, and sector-specific rotation. This opportunistic approach allows us to generate returns that are uncorrelated to the broader market indices.',
      },
    ],
  },
  {
    label: 'Global Macro',
    overview:
      'Our Global Macro strategy takes a top-down view of the financial world. We analyze the complex interplay between geopolitics, central bank policies, economic indicators, and global trade flows. By understanding the "big picture," we position capital to benefit from systemic trends and macroeconomic dislocations.',
    columns: [
      {
        title: 'Foreign Exchange (FX)',
        text:
          'Currencies are the lifeblood of the global economy. We trade major and cross-currency pairs to capitalize on interest rate differentials, purchasing power parity, and geopolitical shifts.',
      },
      {
        title: 'Commodities',
        text:
          'We view commodities as an essential hedge against inflation and a portfolio diversifier. Our exposure spans energy (oil, natural gas) and metals (gold, silver, copper).',
      },
      {
        title: 'Equity Indices',
        text:
          'Rather than betting on single stocks, we utilize equity indices to express views on entire economies or sectors.',
      },
      {
        title: 'Fixed Income',
        text:
          'We navigate the global debt markets with a focus on yield generation and capital preservation.',
      },
    ],
  },
  {
    label: 'Virtual Assets',
    overview:
      'As finance undergoes a digital revolution, we provide institutional-grade access to the digital asset ecosystem.',
    columns: [
      {
        title: 'Cryptocurrencies',
        text:
          'We offer exposure to established digital currencies such as Bitcoin and Ethereum.',
      },
    ],
  },
  {
    label: 'Real Assets',
    overview:
      'Tangible assets are the bedrock of wealth preservation.',
    columns: [
      {
        title: 'Real Estate Advisory',
        text:
          'We provide bespoke consultancy services for clients looking to acquire, develop, or divest property.',
      },
      {
        title: 'Real Estate Investments',
        text:
          'Our firm actively manages direct investments in residential, commercial, and industrial properties.',
      },
    ],
  },
  {
    label: 'Private Wealth',
    overview:
      'True wealth management extends beyond investment returns; it is about securing a legacy.',
    columns: [
      {
        title: 'Wealth Planning',
        text:
          'We build comprehensive roadmaps that cover liquidity management and retirement planning.',
      },
      {
        title: 'Portfolio Structuring',
        text:
          'Every individual has a unique risk tolerance and liquidity requirement.',
      },
    ],
  },
];


  return (
    <section
      ref={sectionRef}
      className="py-6 md:py-8 lg:py-16"
      style={{
        opacity: hasEnteredView ? 1 : 0,
        transform: hasEnteredView ? 'translateY(0)' : 'translateY(24px)',
        transition:
          'opacity 900ms cubic-bezier(0.22,1,0.36,1), transform 900ms cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      <div className="container-responsive">
        <div className="flex flex-col md:flex-row gap-8">

          {/* TABS */}
          <div className="w-full md:w-64">
            <div
              ref={scrollContainerRef}
              className="flex flex-row md:flex-col w-full overflow-x-auto md:overflow-x-visible space-x-2 md:space-x-0 md:space-y-2 scrollbar-hide scroll-smooth"
            >
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-3 text-left text-sm whitespace-nowrap border-b-4 md:border-b-0 md:border-l-4 transition ${
                    activeTab === i
                      ? 'border-green-700 bg-gradient-to-r from-green-900/20 to-green-700/10 text-primary'
                      : 'border-transparent hover:border-green-500/50 hover:bg-gradient-to-r hover:from-green-900/10 hover:to-green-700/5 text-main'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div
            className="flex-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition:
                'opacity 600ms cubic-bezier(0.25,1,0.5,1), transform 600ms cubic-bezier(0.25,1,0.5,1)',
            }}
          >
            <p className="text-stat-disc color-grey leading-relaxed mb-8 md:mb-12">
              {tabs[activeTab].overview}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {tabs[activeTab].columns.map((column) => (
                <div
                  key={column.title}
                  className="
                    relative group
                    pl-4 md:pl-6
                  "
                >
                  {/* background motion layer */}
                  <div
                    className="
                      absolute inset-0 -z-10
                      translate-y-2 opacity-0
                      transition-all duration-[900ms]
                      [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                      group-hover:translate-y-0 group-hover:opacity-100
                    "
                  />

                  {/* title */}
                  <h3
                    className="
                      font-brand text-section-content text-primary mb-3 md:mb-4
                      transition-transform duration-[700ms]
                      [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                      group-hover:-translate-y-2
                    "
                  >
                    {column.title}
                  </h3>

                  {/* body */}
                  <p
                    className="
                      text-stat-disc color-grey leading-relaxed
                      transition-all duration-[900ms] delay-100
                      [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                      group-hover:-translate-y-1 group-hover:opacity-95
                    "
                  >
                    {column.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
