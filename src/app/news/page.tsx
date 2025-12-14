'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { newsArticles } from '@/data/newsData';

export default function News() {
  const [activeTab, setActiveTab] = useState(0);

  const newsItems = newsArticles.map(article => ({
    category: article.category,
    title: article.title,
    href: `/news/${article.id}`,
    date: article.date,
    source: article.source
  }));

  const tabs = [
    {
      label: "Industry Insights",
      title: "Industry Insights",
      content: ["Market Analysis Reports", "Economic Forecasts", "Sector Performance Reviews", "Competitive Intelligence"]
    },
    {
      label: "Company Updates",
      title: "Company Updates",
      content: ["Quarterly Results", "Strategic Initiatives", "Leadership Changes", "Product Launches"]
    },
    {
      label: "Media Coverage",
      title: "Media Coverage",
      content: ["Press Mentions", "Interview Features", "Award Recognition", "Industry Rankings"]
    },
    {
      label: "Research Papers",
      title: "Research Papers",
      content: ["White Papers", "Case Studies", "Technical Reports", "Market Research"]
    }
  ];

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-visible mb-8 md:mb-16">
          <div className="bg-primary">
            <div className="container-responsive">
              <div className="min-h-[60vh] md:min-h-[70vh] flex items-start pt-12 md:pt-16 lg:pt-20">
                <h1 className="font-brand text-section-title text-white">
                  News
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Title, Para, Button left + 6 News Items right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-8 lg:pr-16">
                <h2 className="font-brand text-section-title text-primary mb-4">
                  Latest Updates
                </h2>
                <p className="text-section-content color-grey leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="/news/featured-in">
                <LuxuryButton variant="primary">
                   View All News  
                </LuxuryButton>
                </a>
              </div>

              <div className="w-full md:w-2/3 md:pl-8 lg:pl-16">
                <div className="divide-y border-t border-b">
                  {newsItems.slice(0, 6).map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="group flex justify-between py-4 md:py-6 items-start transition"
                    >
                      <div className="space-y-1 flex-1">
                        <p className="text-xs md:text-sm text-charcoal uppercase tracking-wide">
                          {item.category}
                        </p>
                        {(item.date || item.source) && (
                          <p className="text-xs text-charcoal/70">
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
              </div>
            </div>
          </div>
        </section>

        {/* Blue background - Title left, one line right */}
        <section className="bg-primary py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl  text-white">
                  Stay Informed
                </h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-sm md:text-base lg:text-lg text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Title right, Para + Button left */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0 md:pr-8 lg:pr-16">
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="btn-primary px-6 py-3 text-sm md:text-base">
                  Subscribe to Updates
                </button>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl  text-primary">
                  Media Resources
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            {/* Tab Bar */}
            <div className="flex justify-center border-b border-gray-300 mb-8 md:mb-10">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 md:px-8 py-3 text-xs md:text-sm m border-r last:border-r-0 transition ${
                    activeTab === i ? "bg-primary text-white" : "text-charcoal hover:bg-tertiary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0 md:pr-8 lg:pr-16 md:border-r border-gray-300">
                <h3 className="text-xl md:text-2xl lg:text-3xl  text-primary mb-4">
                  {tabs[activeTab].title}
                </h3>
                <p className="text-sm md:text-base text-charcoal leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <ul className="space-y-3">
                  {tabs[activeTab].content.map((item, i) => (
                    <li key={i} className="text-sm md:text-base text-primary m">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
