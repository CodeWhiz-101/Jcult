"use client";

import { useState } from "react";
import Image from "next/image";

interface TabItem {
  label: string;
  title: string;
  image: string;
  content: {
    heading: string;
    text: string;
  }[];
}

export default function CultureTabs({ tabs }: { tabs: TabItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [hoverDir, setHoverDir] = useState<"left" | "right">("left");

  function handleMouseEnter(
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) {
    const rect = e.currentTarget.getBoundingClientRect();
    const fromLeft = e.clientX < rect.left + rect.width / 2;

    setHoverDir(fromLeft ? "left" : "right");
    setHoverIndex(index);
  }

  function handleMouseLeave() {
    setHoverIndex(null);
  }

  return (
    <section className="max-w-7xl mx-auto py-12 px-6">

      {/* TAB BAR */}
      <div className="flex justify-center border-b border-tertiary mb-10">
        {tabs.map((tab, i) => {
          const isActive = activeIndex === i;
          const isHovered = hoverIndex === i;

          return (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              onMouseEnter={(e) => handleMouseEnter(e, i)}
              onMouseLeave={handleMouseLeave}
              className="relative px-8 py-3 text-sm border-r last:border-r-0 overflow-hidden"
            >
              {/* BACKGROUND FILL */}
              <span
                className={`
                  absolute inset-0 bg-primary
                  transition-transform duration-300 ease-in-out
                  ${isActive || isHovered ? "scale-x-100" : "scale-x-0"}
                  ${hoverDir === "left" ? "origin-left" : "origin-right"}
                `}
              />

              {/* LABEL */}
              <span
                className={`relative z-10 font-medium ${
                  isActive || isHovered ? "text-white" : "text-charcoal"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-serif text-primary mb-6">
            {tabs[activeIndex].title}
          </h2>

          <div className="relative w-full h-[350px] overflow-hidden shadow">
            <Image
              src={tabs[activeIndex].image}
              alt={tabs[activeIndex].title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex items-center">
          <div className="space-y-6">
            {tabs[activeIndex].content.map((item, i) => (
              <div key={i}>
                <p className="font-semibold text-primary">
                  {item.heading}
                </p>
                <p className="text-charcoal leading-relaxed mt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
