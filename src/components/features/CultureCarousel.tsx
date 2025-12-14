"use client";

import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { IoChevronBack, IoChevronForward, IoPlay } from "react-icons/io5";
import "keen-slider/keen-slider.min.css";

export default function CultureCarousel({ slides }: { slides: any[][] }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section className="max-w-7xl mx-auto px-4 pt-20 pb-10">

      {/* Carousel Wrapper */}
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, i) => (
          <div key={i} className="keen-slider__slide">
            <div className="grid grid-cols-4 gap-6">

              {slide.map((item, idx) => (
                <div key={idx} className="relative w-full h-[260px] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title || "photo"}
                    fill
                    className="object-cover"
                  />

                  {/* Overlays */}
                  {item.type === "video" && (
                    <div className="absolute top-3 right-3 bg-white text-black rounded-full p-2">
                      <IoPlay size={18} />
                    </div>
                  )}

                  {item.title && (
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-xs uppercase tracking-wide opacity-80">
                        {item.subtitle}
                      </p>
                      <div className="h-[3px] w-8 bg-primary mt-1 mb-2"></div>
                      <p className="text-xl font-serif">{item.title}</p>
                    </div>
                  )}

                </div>
              ))}

            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="flex items-center justify-between mt-6">

        {/* Left Progress Bar */}
        <div className="flex-1">
          <div className="h-0.5 bg-gray-200 w-40 relative">
            <div
              className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Right Arrows */}
        <div className="flex items-center gap-3 ml-10">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-600"
          >
            <IoChevronBack size={20} />
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-600"
          >
            <IoChevronForward size={20} />
          </button>
        </div>

      </div>

    </section>
  );
}