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
            <div key={i} className="border-b border-[var(--brand-green-1)] pb-6">

              {/* ================= HEADER ================= */}
              <div
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex items-center justify-between cursor-pointer group"
                aria-expanded={isOpen}
              >
<h2 className="text-[34px] md:text-[38px] font-semibold font-brand text-[var(--brand-green-1)]">
                  {region.title}
                </h2>

                <div
                  className="
                    p-3 border border-[var(--brand-green-1)] rounded-full
                    transition
                    group-hover:bg-[var(--brand-green-1)]
                  "
                >
                  {isOpen ? (
                    <IoRemove
                      size={20}
                      className="text-[var(--brand-green-1)] group-hover:text-white"
                    />
                  ) : (
                    <IoAdd
                      size={20}
                      className="text-[var(--brand-green-1)] group-hover:text-white"
                    />
                  )}
                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div
                className={`
                  mt-10 grid grid-cols-12 gap-10 overflow-hidden
                  transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "max-h-[1000px] opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 translate-y-2 pointer-events-none"
                  }
                `}
              >

                {/* LEFT — CITY LIST */}
                <div className="col-span-3 flex flex-col space-y-4 text-[18px]">
                  {region.cities.map((city, idx) => {
                    const active = idx === selectedCityIndex;

                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedCityIndex(idx)}
                        className={`
                          text-left transition
                          ${
                            active
                              ? "font-semibold text-[var(--brand-green-1)]"
                              : "text-[var(--brand-green-1)] opacity-60 hover:opacity-100"
                          }
                        `}
                      >
                        {city.name}
                      </button>
                    );
                  })}
                </div>

                {/* MIDDLE — DETAILS */}
                <div className="col-span-4">
                  <h3 className="text-[30px] font-brand text-[var(--brand-green-1)] mb-6">
                    {region.cities[selectedCityIndex].name}
                  </h3>

                  <div className="mb-6">
                    <p className="uppercase tracking-wide text-sm text-[var(--brand-green-1)] opacity-60">
                      Location
                    </p>
                    {region.cities[selectedCityIndex].address.map((line, l) => (
                      <p key={l} className="text-[var(--brand-green-1)] opacity-80">
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="uppercase tracking-wide text-sm text-[var(--brand-green-1)] opacity-60">
                      Contact
                    </p>
                    <a
                      href={`tel:${region.cities[selectedCityIndex].phone}`}
                      className="text-[var(--brand-green-1)] underline"
                    >
                      {region.cities[selectedCityIndex].phone}
                    </a>
                  </div>
                </div>

                {/* RIGHT — IMAGE (SMALLER & CLEAN) */}
                <div className="col-span-5 flex justify-end">
                  <div className="relative w-[70%] aspect-[3/4] overflow-hidden rounded-md">
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
