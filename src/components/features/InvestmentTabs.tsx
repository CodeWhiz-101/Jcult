'use client';

import { useState, useEffect, useRef } from 'react';

export default function AssetManagement() {
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  /* -------------------------------
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

  // 🔒 CONTENT — UNCHANGED
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
      className="relative"
      style={{
        background: 'var(--brand-green-gradient)',
        opacity: entered ? 1 : 0,
        transform: entered ? 'translateY(0)' : 'translateY(28px)',
        transition: 'all 900ms cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* NAVBAR */}
      <div className="border-b border-white/25 pt-9">

        <div className="container-responsive flex overflow-x-auto">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`relative px-10 py-4 text-sm font-brand tracking-wide transition-all
                ${i === active
                  ? 'bg-white text-black'
                  : 'text-white/80 hover:bg-white/10'}
              `}
            >
              {tab.label} &gt;
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT — key={active} forces fade on tab switch */}
      <div key={active} className="container-responsive py-24 animate-header-reveal">
        <h1 className="font-brand text-[44px] md:text-[60px] text-white mb-8">
          {current.label}
        </h1>

        <p className="max-w-[900px] text-white/90 leading-[1.8] text-[15.5px] mb-20">
          {current.overview}
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {current.columns.map((col, idx) => (
            <div
              key={col.title}
              className="
                relative
                backdrop-blur-xl
                bg-white/10
                border border-white/20
                p-7
                transition-all duration-300
                hover:scale-[1.03]
                hover:bg-white/15
                hover:shadow-2xl
              "
            >
              <h3 className="font-brand text-[20px] mb-4 text-white">
                {col.title}
              </h3>
              <p className="text-[14.5px] leading-[1.7] text-white/90">
                {col.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
