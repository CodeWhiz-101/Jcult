'use client';

import { ArrowRight } from "lucide-react";
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
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-6 md:py-8 lg:py-16">
      <div className="container-responsive">
        <div className="flex flex-col gap-5 md:flex-row items-start">
          {/* Left: Title and Description */}
          <div className={`w-2/3 md:mb-0 pr-2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="leading-[53px] font-primary  text-primary mb-8 text-section-title">
              {title}
            </h2>
            <p className="color-grey leading-relaxed text-section-content">
              {description}
            </p>
          </div>

          {/* Right: News Items */}
          <div className="w-full lg:pl-2">
            <div className="divide-y border-t border-b">
              {items.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className={`group flex justify-between py-4 md:py-6 items-start transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${300 + i * 150}ms` }}
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

                    <h3 className="text-base md:text-lg  text-primary group-hover:underline font-primary">
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
  );
}
