'use client';

import { useState, useEffect, useRef } from 'react';

export default function InvestmentTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /* -------------------------------
     TAB CONTENT FADE (EXISTING)
  -------------------------------- */
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  useEffect(() => {
    if (scrollContainerRef.current && tabRefs.current[activeTab]) {
      const container = scrollContainerRef.current;
      const activeButton = tabRefs.current[activeTab];
      const containerWidth = container.offsetWidth;
      const buttonLeft = activeButton.offsetLeft;
      const buttonWidth = activeButton.offsetWidth;
      const scrollPosition =
        buttonLeft - containerWidth / 2 + buttonWidth / 2;

      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }, [activeTab]);

  /* -------------------------------
     SCROLL REVEAL (NEW)
  -------------------------------- */
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.unobserve(node); // run once
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // 🔒 ORIGINAL CONTENT — UNTOUCHED
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
            'Currencies are the lifeblood of the global economy. We trade major and cross-currency pairs to capitalize on interest rate differentials, purchasing power parity, and geopolitical shifts. Our FX strategies are used both for speculative profit generation and to hedge the currency risk inherent in our global equity portfolios.',
        },
        {
          title: 'Commodities',
          text:
            'We view commodities as an essential hedge against inflation and a portfolio diversifier. Our exposure spans energy (oil, natural gas) and metals (gold, silver, copper). We analyze supply chain constraints, and industrial demand to forecast price movements in real assets.',
        },
        {
          title: 'Equity Indices',
          text:
            'Rather than betting on single stocks, we utilize equity indices to express views on entire economies or sectors. This allows us to swiftly adjust our exposure to bullish or bearish market conditions, providing liquidity and broad market beta when macroeconomic conditions are favorable.',
        },
        {
          title: 'Fixed Income',
          text:
            'We navigate the global debt markets with a focus on yield generation and capital preservation. Our mandate covers sovereign bonds, investment-grade corporate credit, and high-yield opportunities. We actively manage duration and credit risk to navigate changing interest rate environments.',
        },
      ],
    },
    {
      label: 'Virtual Assets',
      overview:
        'As finance undergoes a digital revolution, we provide institutional-grade access to the digital asset ecosystem. We view blockchain not merely as a speculative vehicle, but as a transformative technology that is reshaping the transfer of value. Our approach is highly disciplined, prioritizing security, custody, and regulatory compliance.',
      columns: [
        {
          title: 'Cryptocurrencies',
          text:
            'We offer exposure to established digital currencies such as Bitcoin and Ethereum, as well as select high-potential altcoins. Our analysis combines on-chain metrics with network activity data to value these assets. We focus on tokens with robust utility, strong developer communities, and long-term viability, bridging the gap between traditional finance and the decentralized web.',
        },
      ],
    },
    {
      label: 'Real Assets',
      overview:
        'Tangible assets are the bedrock of wealth preservation. Our Real Assets division focuses on investments that provide intrinsic value, inflation protection, and consistent income streams. We combine local market intelligence with global capital reach to unlock value in the property sector.',
      columns: [
        {
          title: 'Real Estate Advisory',
          text:
            'We provide bespoke consultancy services for clients looking to acquire, develop, or divest property. From valuation and feasibility studies to market analysis and deal structuring, we guide clients through the complex lifecycle of real estate transactions to ensure optimal outcomes.',
        },
        {
          title: 'Real Estate Investments',
          text:
            'Our firm actively manages direct investments in residential, commercial, and industrial properties. We seek assets with strong cash flow potential and value-add opportunities through renovation or repositioning. Our portfolio is constructed to deliver yield and capital appreciation independent of stock market volatility.',
        },
      ],
    },
    {
      label: 'Private Wealth',
      overview:
        'True wealth management extends beyond investment returns; it is about securing a legacy. Our Private Wealth division serves high-net-worth individuals and families, acting as a trusted partner in navigating the complexities of significant capital. We take a holistic view of your financial life, aligning your assets with your personal values and long-term goals.',
      columns: [
        {
          title: 'Wealth Planning',
          text:
            'We build comprehensive roadmaps that cover liquidity management, retirement planning, and multi-generational wealth transfer. We work closely with tax and legal experts to ensure that your wealth is preserved efficiently, minimizing tax liabilities and ensuring that your estate plan reflects your wishes.',
        },
        {
          title: 'Portfolio Structuring',
          text:
            'Every individual has a unique risk tolerance and liquidity requirement. We design bespoke investment portfolios that balance growth, income, and safety. By allocating assets across the spectrum—from liquid public markets to private equity and real estate—we create robust structures designed to weather market cycles and fund your lifestyle.',
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
          {/* Tabs */}
          <div className="w-full md:w-64">
            <div
              ref={scrollContainerRef}
              className="flex flex-row md:flex-col w-full overflow-x-auto md:overflow-x-visible space-x-2 md:space-x-0 md:space-y-2 scrollbar-hide scroll-smooth"
            >
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  ref={(el) => (tabRefs.current[i] = el)}
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

          {/* Content */}
          <div
            className="flex-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition:
                'opacity 600ms cubic-bezier(0.25, 1, 0.5, 1), transform 600ms cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          >
            <p className="text-stat-disc color-grey leading-relaxed mb-8 md:mb-12">
              {tabs[activeTab].overview}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {tabs[activeTab].columns.map((column, i) => (
                <div
                  key={i}
                  className="
                    group pl-4 md:pl-6
                    transition-transform duration-[800ms]
                    [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                    hover:-translate-y-1
                  "
                >
                  <h3
                    className="
                      font-brand text-section-content text-primary mb-3 md:mb-4
                      transition-transform duration-[600ms]
                      [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                      group-hover:-translate-y-1
                    "
                  >
                    {column.title}
                  </h3>

                  <p
                    className="
                      text-stat-disc color-grey leading-relaxed
                      transition-all duration-[900ms] delay-75
                      [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                      group-hover:opacity-95
                      group-hover:-translate-y-[2px]
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
