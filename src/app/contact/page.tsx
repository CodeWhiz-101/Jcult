'use client';

import { useEffect, useState } from 'react';

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] min-h-[420px] md:h-[65vh] lg:h-[70vh]
 min-h-[520px] w-full overflow-hidden mt-26 md:mt-26 lg:mt-28">
        {/* VIDEO */}
        <video
          src="/videos/lp1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top"
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
{/* ================= CONTACT INFO ================= */}
<section className="py-28">
  <div className="container-responsive">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

      {/* ================= CONTACT DETAILS ================= */}
      <div>
        <h3 className="text-[26px] font-brand font-bold text-[var(--brand-green-1)] mb-6">
          Contact Details
        </h3>

        <p className="text-[17px] text-[#4B5563] mb-3">
          contact@jculttrader.com
        </p>

        <p className="text-[17px] text-[#4B5563]">
          +971 54 543 8338
        </p>
      </div>


      {/* ================= OFFICE ADDRESS ================= */}
      <div>
        <h3 className="text-[26px] font-brand font-bold text-[var(--brand-green-1)] mb-6">
          Global Headquaters
        </h3>

        <p className="text-[17px] leading-relaxed text-[#4B5563]">
          DSO-IFZA, IFZA Properties<br />
          Dubai Silicon Oasis<br />
          Dubai, UAE
        </p>
      </div>


      {/* ================= FOLLOW US ================= */}
  {/* ================= FOLLOW US ================= */}
<div>
  <h3 className="text-[26px] font-brand font-bold text-[var(--brand-green-1)] mb-6">
    Follow Us
  </h3>

  <div className="flex justify-center gap-5 flex-wrap">
    {[
      {
        label: 'YouTube',
        svg: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        ),
      },
      {
        label: 'Facebook',
        svg: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        ),
      },
      {
        label: 'Instagram',
        svg: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"/>
          </svg>
        ),
      },
      {
        label: 'X',
        svg: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/>
          </svg>
        ),
      },
      {
        label: 'LinkedIn',
        svg: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5S1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6C22.4 7.6 24 10.1 24 14.1V24h-5v-8.5c0-2.03-.04-4.64-2.83-4.64c-2.83 0-3.27 2.21-3.27 4.5V24H8z"/>
          </svg>
        ),
      },
    ].map((item, i) => (
      <a
        key={i}
        href="#"
        aria-label={item.label}
        className="
          w-10 h-10
          flex items-center justify-center
          rounded-full
          border border-[var(--brand-green-1)]
          text-black/80
          hover:text-primary
          hover:border-primary
          transition-all duration-300
        "
      >
        {item.svg}
      </a>
    ))}
  </div>
</div>

    </div>

  </div>
</section>



    </main>
  );
}
