'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface NewsItem {
  category: string;
  title: string;
  href: string;
  date?: string;
  source?: string;
}

interface NewsSectionProps {
  title: string;
  description: string;
  items: NewsItem[];
}

export default function NewsSection({ title, description, items }: NewsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-6 md:py-8 lg:py-16">
      <div className="container-responsive">
        <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-16">

          {/* LEFT */}
          <div
            className={`
              transition-all duration-[1000ms]
              ease-[cubic-bezier(.22,.61,.36,1)]
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}
            `}
          >
            <h2
              className="
                font-brand mb-8
                text-[42px] md:text-[48px] lg:text-[54px]
                leading-[1.1]
              "
            >
              <span className="block font-medium text-[#0B3E27]">Insights</span>
              <span className="block font-medium text-[#197149]">& Perspectives</span>
            </h2>

            <p
              className="
                font-ttcommons
                text-[18px] md:text-[18.5px] lg:text-[19px]
                leading-relaxed
                text-[#68717A]
                max-w-[600px]
              "
            >
              {description}
            </p>
          </div>

          {/* RIGHT */}
          <div className="w-full">
            <div className="border-b border-black/20">
              {items.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className={`
                    group
                    flex items-center justify-between gap-10
                    pb-10
                    transition-opacity duration-700
                    ${isVisible ? 'opacity-100' : 'opacity-0'}
                  `}
                  style={{ transitionDelay: `${300 + i * 150}ms` }}
                >
                  {/* LEFT CONTENT */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-3">

                      {(item.date || item.source) && (
                        <div className="flex items-center whitespace-nowrap">
                          {item.date && (
                            <span className="text-[12px] text-primary">
                              {item.date}
                            </span>
                          )}

                          {item.date && item.source && (
                            <span className="mx-2 h-[28px] w-px bg-black/30" />
                          )}

                          {item.source && (
                            <span className="text-[14px] text-black/60">
                              {item.source}
                            </span>
                          )}
                        </div>
                      )}

                      {/* TITLE */}
                      <h3
                        className="
                          relative inline-block
                          font-brand font-medium
                          text-[22px] md:text-[24px]
                          leading-snug
                          text-[var(--brand-green-1)]
                        "
                      >
                        {item.title}

                        <span
                          className="
                            absolute left-0 -bottom-[4px]
                            h-[1px] w-0
                            transition-all duration-300
                            group-hover:w-full
                          "
                          style={{ backgroundColor: 'var(--brand-green-1)' }}
                        />
                      </h3>
                    </div>
                  </div>

                  {/* ARROW — FINAL CORRECT VERSION */}
                  <div
                    className="
                      flex items-center justify-center
                      w-10 h-10 rounded-full
                      border border-[var(--brand-green-1)]
                      text-[var(--brand-green-1)]
                      bg-none
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
                      className="
                        w-5 h-5
                        transition-transform duration-300
                        group-hover:translate-x-0.5
                      "
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
