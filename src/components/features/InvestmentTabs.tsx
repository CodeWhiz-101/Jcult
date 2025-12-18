'use client';

import { useState, useEffect, useRef } from 'react';

export default function AssetManagement() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [inView, setInView] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  // ✅ SCROLL-BASED ANIMATION (IntersectionObserver)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
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
        'Our Global Macro strategy takes a top-down view of the financial world. We analyze the complex interplay between geopolitics, central bank policies, economic indicators, and global trade flows. By understanding the big picture, we position capital to benefit from systemic trends and macroeconomic dislocations.',
      columns: [
        { title: 'Foreign Exchange (FX)', text: 'Currencies are the lifeblood of the global economy. We trade major and cross-currency pairs to capitalize on interest rate differentials, purchasing power parity, and geopolitical shifts.' },
        { title: 'Commodities', text: 'We view commodities as an essential hedge against inflation and a portfolio diversifier. Our exposure spans energy and metals.' },
        { title: 'Equity Indices', text: 'We utilize equity indices to express views on entire economies or sectors.' },
        { title: 'Fixed Income', text: 'We navigate the global debt markets with a focus on yield generation and capital preservation.' },
      ],
    },
    {
      label: 'Virtual Assets',
      overview:
        'As finance undergoes a digital revolution, we provide institutional-grade access to the digital asset ecosystem.',
      columns: [
        { title: 'Cryptocurrencies', text: 'We offer exposure to established digital currencies such as Bitcoin and Ethereum.' },
      ],
    },
    {
      label: 'Real Assets',
      overview: 'Tangible assets are the bedrock of wealth preservation.',
      columns: [
        { title: 'Real Estate Advisory', text: 'We provide bespoke consultancy services for property acquisition, development, and divestment.' },
        { title: 'Real Estate Investments', text: 'We actively manage direct investments across asset classes.' },
      ],
    },
    {
      label: 'Private Wealth',
      overview:
        'True wealth management extends beyond investment returns; it is about securing a legacy.',
      columns: [
        { title: 'Wealth Planning', text: 'We build comprehensive roadmaps covering liquidity and retirement planning.' },
        { title: 'Portfolio Structuring', text: 'Every individual has a unique risk tolerance and liquidity requirement.' },
      ],
    },
  ];

  const current = tabs[active];

  return (
    <section
      ref={sectionRef}
      className="relative text-white"
      style={{ background: 'var(--brand-green-gradient)' }}
    >
      {/* NAV */}
      <div className="container-responsive pt-16">
        <nav className="flex gap-10 border-b border-white/30">
          {tabs.map((tab, i) => {
            const isActive = i === active;
            const isHovered = hovered === i;

            return (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative pb-4 text-sm tracking-wide font-brand text-white/80 hover:text-white transition-colors"
              >
                {tab.label}

                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-[1px] h-[1px] transition-all duration-300
                    ${isActive || isHovered ? 'w-full' : 'w-0'}
                  `}
                  style={{
                    /* 👇 CHANGE COLOR HERE LATER */
                    backgroundColor: 'rgba(255,255,255,0.85)',
                  }}
                />
              </button>
            );
          })}
        </nav>
      </div>

      {/* CONTENT */}
      <div className="container-responsive py-24">
        {/* Title */}
        <h2
          className={`font-brand text-[44px] md:text-[60px] leading-tight mb-10 transition-all duration-700
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          {current.label}
        </h2>

        {/* Overview */}
        <p
          className={`max-w-[920px] text-white/90 leading-[1.8] text-[15.5px] mb-24 transition-all duration-700 delay-150
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          {current.overview}
        </p>

        {/* Columns */}
        <div
          className="grid gap-16"
          style={{
            gridTemplateColumns: `repeat(${current.columns.length}, minmax(0, 1fr))`,
          }}
        >
          {current.columns.map((col, idx) => (
            <div
              key={col.title}
              className={`
                pr-12
                transition-all duration-700
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                ${idx !== current.columns.length - 1 ? 'border-r border-white/25' : ''}
              `}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <h3 className="font-brand text-[18px] mb-5">
                {col.title}
              </h3>
              <p className="text-white/85 leading-[1.7] text-[14.5px]">
                {col.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
