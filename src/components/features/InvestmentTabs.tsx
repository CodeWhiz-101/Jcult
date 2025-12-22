'use client';

import { useEffect, useRef, useState } from 'react';

export default function AssetManagement() {
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);

  /* --------------------------------
     SCROLL REVEAL (ONCE)
  -------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* --------------------------------
     DATA — UNCHANGED
  -------------------------------- */
    const tabs = [
  {
    label: 'Global Equities',
    overview:
      'Our Global Equities practice is built on deep fundamental research and a bottom-up security selection process. We believe that despite market efficiency, information asymmetry and behavioral biases create pockets of value. Our teams analyze corporate balance sheets, management quality, and industry dynamics to identify high-quality businesses trading at a discount to their intrinsic value.',
    columns: [
      {
        title: 'International Markets',
        text: 'We look beyond domestic borders to capture growth in developed economies across Europe, Asia-Pacific, and North America. By diversifying across mature markets, we mitigate single-country risk while accessing established global leaders in technology, healthcare, and industrials.',
      },
      {
        title: 'Emerging Markets',
        text: 'The next wave of global growth is driven by developing economies. Our specialized team navigates the volatility of emerging markets to identify nations and sectors undergoing structural transformation. We focus on demographic shifts, urbanization, and the rising middle class to capture high-alpha opportunities in regions that are often under-researched.',
      },
      {
        title: 'Event & Sector Trades',
        text: 'Markets often misprice securities during periods of corporate change or specific industry cycles. We utilize tactical strategies to capitalize on distinct catalysts such as mergers and acquisitions, spin-offs, regulatory shifts, and sector-specific rotation. This opportunistic approach allows us to generate returns that are uncorrelated to the broader market indices.',
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
        text: 'Currencies are the lifeblood of the global economy. We trade major and cross-currency pairs to capitalize on interest rate differentials, purchasing power parity, and geopolitical shifts. Our FX strategies are used both for speculative profit generation and to hedge the currency risk inherent in our global equity portfolios.',
      },
      {
        title: 'Commodities',
        text: 'We view commodities as an essential hedge against inflation and a portfolio diversifier. Our exposure spans energy (oil, natural gas) and metals (gold, silver, copper). We analyze supply chain constraints and industrial demand to forecast price movements in real assets.',
      },
      {
        title: 'Equity Indices',
        text: 'Rather than betting on single stocks, we utilize equity indices to express views on entire economies or sectors. This allows us to swiftly adjust our exposure to bullish or bearish market conditions, providing liquidity and broad market beta when macroeconomic conditions are favorable.',
      },
      {
        title: 'Fixed Income',
        text: 'We navigate the global debt markets with a focus on yield generation and capital preservation. Our mandate covers sovereign bonds, investment-grade corporate credit, and high-yield opportunities. We actively manage duration and credit risk to navigate changing interest rate environments.',
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
        text: 'We offer exposure to established digital currencies such as Bitcoin and Ethereum, as well as select high-potential altcoins. Our analysis combines on-chain metrics with network activity data to value these assets. We focus on tokens with robust utility, strong developer communities, and long-term viability, bridging the gap between traditional finance and the decentralized web.',
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
        text: 'We provide bespoke consultancy services for clients looking to acquire, develop, or divest property. From valuation and feasibility studies to market analysis and deal structuring, we guide clients through the complex lifecycle of real estate transactions to ensure optimal outcomes.',
      },
      {
        title: 'Real Estate Investments',
        text: 'Our firm actively manages direct investments in residential, commercial, and industrial properties. We seek assets with strong cash flow potential and value-add opportunities through renovation or repositioning. Our portfolio is constructed to deliver yield and capital appreciation independent of stock market volatility.',
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
        text: 'We build comprehensive roadmaps that cover liquidity management, retirement planning, and multi-generational wealth transfer. We work closely with tax and legal experts to ensure that your wealth is preserved efficiently, minimizing tax liabilities and ensuring that your estate plan reflects your wishes.',
      },
      {
        title: 'Portfolio Structuring',
        text: 'Every individual has a unique risk tolerance and liquidity requirement. We design bespoke investment portfolios that balance growth, income, and safety. By allocating assets across the spectrum—from liquid public markets to private equity and real estate—we create robust structures designed to weather market cycles and fund your lifestyle.',
      },
    ],
  },
];


  const current = tabs[active];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'var(--brand-green-gradient)',
        opacity: entered ? 1 : 0,
        transform: entered ? 'translateY(0)' : 'translateY(36px)',
        transition: 'all 900ms cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* ======================================================
          TOP — CENTERED SEGMENTED NAV (RESPONSIVE)
      ====================================================== */}
      <div className="container-responsive pt-20 pb-24">
        <div className="flex justify-center">
          <div
            className="
              relative
              inline-flex
              bg-white/10
              backdrop-blur-xl
              rounded-full
              p-1
              overflow-x-auto
              max-w-full
            "
          >
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => {
                  setActive(i);
                  setHoveredIndex(null);
                }}
                className={`
                  relative z-10
                  px-5 md:px-8
                  py-3
                  text-xs md:text-sm
                  font-brand
                  whitespace-nowrap
                  transition-colors duration-300
                  rounded-full
                  ${i === active ? 'text-black' : 'text-white/80'}
                `}
              >
                {tab.label}
              </button>
            ))}

            {/* ACTIVE PILL */}
            <span
              className="
                absolute
                top-1
                bottom-1
                bg-white
                rounded-full
                transition-all
                duration-500
                pointer-events-none
              "
              style={{
                width: `${100 / tabs.length}%`,
                left: `${(100 / tabs.length) * active}%`,
                minWidth: '120px',
              }}
            />
          </div>
        </div>
      </div>

      {/* ======================================================
          MAIN CONTENT GRID
      ====================================================== */}
      <div
        key={active}
        className="
          container-responsive
          grid
          grid-cols-1
          lg:grid-cols-[1.15fr_1fr]
          gap-24
          pb-36
          animate-header-reveal
        "
      >
        {/* ---------------- LEFT COLUMN ---------------- */}
        <div>
          <h1 className="font-brand text-[48px] md:text-[64px] leading-[1.05] text-white mb-10">
            {current.label}
          </h1>

          <p className="max-w-[720px] text-white/85 leading-[1.9] text-[16px]">
            {current.overview}
          </p>
        </div>

        {/* ---------------- RIGHT COLUMN (VERTICAL TOGGLE) ---------------- */}
        <div className="space-y-6">
          {current.columns.map((col, index) => {
            const isActiveItem = hoveredIndex === index;

            return (
              <div
                key={col.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() =>
                  setHoveredIndex(isActiveItem ? null : index)
                }
                className="
                  relative
                  cursor-pointer
                  border-l
                  border-white/25
                  pl-8
                  py-6
                  transition-all
                  duration-500
                  hover:border-white
                "
              >
                {/* TITLE */}
                <div className="flex items-center justify-between">
                  <h3
                    className="
                      font-brand
                      text-[22px]
                      text-white
                      transition-transform
                      duration-300
                    "
                    style={{
                      transform: isActiveItem
                        ? 'translateX(4px)'
                        : 'translateX(0)',
                    }}
                  >
                    {col.title}
                  </h3>

                  <span
                    className="
                      text-white/60
                      text-sm
                      transition-transform
                      duration-300
                    "
                    style={{
                      transform: isActiveItem
                        ? 'rotate(90deg)'
                        : 'rotate(0deg)',
                    }}
                  >
                    ›
                  </span>
                </div>

                {/* CONTENT */}
                <div
                  className="
                    overflow-hidden
                    transition-all
                    duration-500
                    ease-out
                  "
                  style={{
                    maxHeight: isActiveItem ? '440px' : '0px',
                    opacity: isActiveItem ? 1 : 0,
                  }}
                >
                  <p className="mt-4 text-[14.8px] leading-[1.85] text-white/85">
                    {col.text}
                  </p>
                </div>

                {/* ACTIVE BAR */}
                <span
                  className="
                    absolute
                    left-[-1px]
                    top-0
                    h-full
                    w-[2px]
                    bg-white
                    transition-transform
                    duration-500
                    origin-top
                  "
                  style={{
                    transform: isActiveItem
                      ? 'scaleY(1)'
                      : 'scaleY(0)',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ======================================================
          BOTTOM FADE (POLISH)
      ====================================================== */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
