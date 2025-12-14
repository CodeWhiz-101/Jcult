'use client';

import { useState, useEffect, useRef } from 'react';

export default function InvestmentTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<HTMLButtonElement[]>([]);

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

  /* -------------------------------
     DATA
  -------------------------------- */
  const tabs = [
    {
      label: 'Global Equities',
      overview:
        'Our Global Equities practice is built on deep fundamental research and a bottom-up security selection process.',
      columns: [
        { title: 'International Markets', text: 'We look beyond domestic borders to capture growth.' },
        { title: 'Emerging Markets', text: 'The next wave of global growth is driven by developing economies.' },
        { title: 'Event & Sector Trades', text: 'Markets misprice securities during periods of change.' },
      ],
    },
    {
      label: 'Global Macro',
      overview:
        'Our Global Macro strategy takes a top-down view of the financial world.',
      columns: [
        { title: 'Foreign Exchange', text: 'We trade major currency pairs.' },
        { title: 'Commodities', text: 'We view commodities as an inflation hedge.' },
        { title: 'Fixed Income', text: 'We actively manage duration and credit risk.' },
      ],
    },
  ];

  /* -------------------------------
     RENDER
  -------------------------------- */
  return (
    <section
      ref={sectionRef}
      className="py-6 md:py-8 lg:py-16"
      style={{
        opacity: hasEnteredView ? 1 : 0,
        transform: hasEnteredView ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 900ms cubic-bezier(0.22,1,0.36,1), transform 900ms cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      <div className="container-responsive">
        <div className="flex flex-col md:flex-row gap-8">

          {/* TABS */}
          <div className="w-full md:w-64">
            <div
              ref={scrollContainerRef}
              className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible space-x-2 md:space-y-2 scrollbar-hide"
            >
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  ref={(el) => {
                    if (el) tabRefs.current[i] = el;
                  }}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-3 text-left text-sm whitespace-nowrap transition border-b-4 md:border-b-0 md:border-l-4 ${
                    activeTab === i
                      ? 'border-green-700 text-primary'
                      : 'border-transparent text-main hover:border-green-500/50'
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
              transition: 'opacity 600ms cubic-bezier(0.25,1,0.5,1), transform 600ms cubic-bezier(0.25,1,0.5,1)',
            }}
          >
            <p className="text-stat-disc color-grey mb-8">
              {tabs[activeTab].overview}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tabs[activeTab].columns.map((col) => (
                <div key={col.title}>
                  <h3 className="font-brand text-primary mb-2">{col.title}</h3>
                  <p className="text-stat-disc color-grey">{col.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
