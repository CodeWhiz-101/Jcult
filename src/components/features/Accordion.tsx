"use client";

import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import Image from "next/image";
import FadeUp from "@/components/animation/FadeUp";

interface City {
  name: string;
  address: string[];
  phone: string;
  buttonText?: string;
  image: string;
}

interface Region {
  title: string;
  cities: City[];
}

export default function Accordion({ regions }: { regions: Region[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);

  return (
    <FadeUp>
      <div className="w-full max-w-7xl mx-auto mt-10 space-y-12">
        {regions.map((region, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={i} className="border-b border-primary pb-6">
              {/* HEADER */}
              <div className="flex items-center justify-between">
                <h2 className="text-4xl font-serif text-primary">
                  {region.title}
                </h2>

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`region-${i}-content`}
                  aria-label={
                    isOpen
                      ? `Collapse ${region.title}`
                      : `Expand ${region.title}`
                  }
                  className="
                    p-3 border-2 border-[#1B5E20] rounded-full 
                    transition group 
                    hover:bg-[#1B5E20] hover:border-[#1B5E20]
                  "
                >
                  {isOpen ? (
                    <IoRemove
                      size={22}
                      className="text-primary group-hover:!text-white transition-colors"
                    />
                  ) : (
                    <IoAdd
                      size={22}
                      className="text-primary group-hover:!text-white transition-colors"
                    />
                  )}
                </button>
              </div>

              {/* EXPANDED CONTENT */}
              <div
                id={`region-${i}-content`}
                className={`
                  mt-10 grid grid-cols-12 gap-10 overflow-hidden 
                  transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "max-h-[1200px] opacity-100 translate-y-0 pointer-events-auto"
                      : "max-h-0 opacity-0 translate-y-2 pointer-events-none"
                  }
                `}
                aria-hidden={!isOpen}
              >
                {/* LEFT COLUMN — CITIES LIST */}
                <div className="col-span-3 flex flex-col space-y-4 text-lg">
                  {region.cities.map((city, idx) => {
                    const active = idx === selectedCityIndex;

                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedCityIndex(idx)}
                        className={`
                          text-left hover:text-primary transition 
                          ${
                            active
                              ? "text-primary font-semibold"
                              : "text-charcoal"
                          }
                        `}
                      >
                        {city.name}
                      </button>
                    );
                  })}
                </div>

                {/* MIDDLE COLUMN — CITY DETAILS */}
                <div className="col-span-4">
                  <h3 className="text-3xl font-serif text-primary mb-6">
                    {region.cities[selectedCityIndex].name}
                  </h3>

                  <div className="mb-6">
                    <p className="uppercase text-charcoal/70 tracking-wide text-sm">
                      Location
                    </p>
                    {region.cities[selectedCityIndex].address.map((line, l) => (
                      <p key={l} className="text-charcoal">
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="uppercase text-charcoal/70 tracking-wide text-sm">
                      Contact
                    </p>
                    <a
                      href={`tel:${region.cities[selectedCityIndex].phone}`}
                      className="text-primary underline hover:text-primary"
                    >
                      {region.cities[selectedCityIndex].phone}
                    </a>
                  </div>

                  {region.cities[selectedCityIndex].buttonText && (
                    <button className="
                      bg-primary text-white px-6 py-3 border-2 border-primary 
                      hover:bg-gold hover:border-gold hover:text-charcoal transition
                    ">
                      {region.cities[selectedCityIndex].buttonText}
                    </button>
                  )}
                </div>

                {/* RIGHT COLUMN — IMAGE */}
                <div className="col-span-5">
                  <div className="w-full h-[420px] relative rounded-lg overflow-hidden">
                    <Image
                      src={region.cities[selectedCityIndex].image}
                      alt="city"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </FadeUp>
  );
}
