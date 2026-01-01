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
            <div key={i} className="border-b border-black/20 pb-6">

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
    p-3 rounded-full
    border
    transition-all duration-300

    border-[var(--brand-green-1)]
    bg-transparent

    group-hover:bg-gradient-to-r
    group-hover:from-[var(--brand-green-1)]
    group-hover:to-[var(--brand-green-2)]
    group-hover:border-white
  "
>

               {isOpen ? (
  <IoRemove
    size={20}
    className="
      text-[var(--brand-green-1)]
      transition-colors duration-300
      group-hover:text-white
    "
  />
) : (
  <IoAdd
    size={20}
    className="
      text-[var(--brand-green-1)]
      transition-colors duration-300
      group-hover:text-white
    "
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
               {/* ================= MIDDLE — DETAILS ================= */}
<div className="col-span-4 space-y-12">

  {/* CITY NAME */}
  <h3 className="
    font-brand
    text-[30px]
    leading-tight
    font-semibold
    text-[var(--brand-green-1)]
  ">
    {region.cities[selectedCityIndex].name}
  </h3>

  {/* LOCATION */}
  <div className="space-y-3">
    <p className="
      text-[18px]
      font-medium
      text-[var(--brand-green-1)]
    ">
      Location
    </p>

    <div className="space-y-1">
      {region.cities[selectedCityIndex].address.map((line, l) => (
        <p
          key={l}
          className="
            text-[16px]
            leading-relaxed
            text-[#6B7280]
          "
        >
          {line}
        </p>
      ))}
    </div>
  </div>

  {/* CONTACT */}
  <div className="space-y-3">
    <p className="
      text-[18px]
      font-medium
      text-[var(--brand-green-1)]
    ">
      Contact
    </p>

<a
  href={`tel:${region.cities[selectedCityIndex].phone}`}
  className="
    group
    relative inline-block
    leading-none
    text-[16px]
    font-medium
    text-[#6B7280]
    transition-colors duration-300
    hover:text-[var(--brand-green-1)]
  "
>
  {region.cities[selectedCityIndex].phone}

  <span
    className="
      pointer-events-none
      absolute left-0 -bottom-[4px]
      block
      h-[1px]
      w-0
      bg-[var(--brand-green-1)]
      transition-all duration-300
      group-hover:w-full
    "
  />
</a>



  </div>

</div>


                {/* RIGHT — IMAGE (SMALLER & CLEAN) */}
                <div className="col-span-5 flex justify-end">
<div className="relative w-[85%] aspect-[4/3] overflow-hidden ">
                    <Image
                      src="/images/ourculture3.jpg"
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
