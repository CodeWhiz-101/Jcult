'use client';

import { useEffect, useState } from 'react';
import LuxuryButton from '@/components/ui/LuxuryButton';

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[100vh] min-h-[520px] w-full overflow-hidden">
        {/* VIDEO */}
        <video
          src="/videos/lp1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45" />

        {/* TITLE */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1
            className={`
              text-white font-brand font-semibold
              text-[48px] md:text-[72px] lg:text-[84px]
              tracking-wide
              transition-all duration-700
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            CONTACT&nbsp;US
          </h1>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
  <section className="py-28">
  <div className="container-responsive">

    {/* ================= TOP ROW ================= */}
    <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-y-20
      gap-x-32
      text-center
      items-start
    ">

      {/* CLIENT & PARTNER */}
      <div className="flex flex-col items-center">
        <h3
          className="
            text-[30px]
            font-brand
            font-bold
            text-[var(--brand-green-1)]
            mb-6
          "
        >
          Contact Number
        </h3>

        <p className="text-[17px] text-[#4B5563] mb-2">
          jculttrader.inquiry@gmail.com
        </p>

        <p className="text-[17px] text-[#4B5563]">
          +1 (312) 395-3146
        </p>
      </div>

      {/* COUNTERPARTY */}
      <div className="flex flex-col items-center">
        <h3
          className="
            text-[30px]
            font-brand
            font-bold
            text-[var(--brand-green-1)]
            mb-6
          "
        >
          Enquiry Email
        </h3>

        <p className="text-[17px] text-[#4B5563]">
          jculttrader.inquiry@gmail.com
        </p>
      </div>
    </div>

    {/* ================= GLOBAL HQ ================= */}
    <div className="mt-22 flex flex-col items-center text-center">
      <h3
        className="
          text-[34px]
          font-brand
          font-bold
          text-[var(--brand-green-1)]
          mb-6
        "
      >
        Global Headquarters
      </h3>

      <p className="text-[18px] text-[#4B5563] leading-relaxed">
        DSO-IFZA, IFZA Properties<br />
        Dubai Silicon Oasis<br />
        Dubai, UAE
      </p>

  
    </div>

  </div>
</section>



    </main>
  );
}
