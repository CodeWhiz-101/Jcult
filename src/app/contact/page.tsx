'use client';

import { useEffect, useState } from 'react';
import FadeLeft from '@/components/animation/FadeLeft';
import FadeUp from '@/components/animation/FadeUp';
import LuxuryButton from '@/components/ui/LuxuryButton';

import {
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Instagram,
} from 'lucide-react';

export default function Contact() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setReveal(true));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20">

        {/* ================= HERO ================= */}
        <section className="relative overflow-visible mb-0">
         <div
  className="ml-7 md:ml-10 lg:ml-12 xl:ml-14"
  style={{ background: 'var(--brand-green-gradient)' }}
>

            <div className="container-responsive">
              <div className="pt-22 md:pt-26 lg:pt-30 pb-38 md:pb-42 lg:pb-46">

                {/* TITLE — LEFT → RIGHT REVEAL */}
                <div style={{ overflow: 'hidden' }}>
                  <h1
                    style={{
                      fontFamily: 'Raleway, sans-serif',
                      fontWeight: 500,
                      fontSize: '60px',
                      lineHeight: '1.1',
                      letterSpacing: '-0.018em',
                      maxWidth: '860px',
                      color: '#ffffff',
                      transform: reveal
                        ? 'translateX(0)'
                        : 'translateX(-120%)',
                      opacity: reveal ? 1 : 0,
                      transition:
                        'transform 900ms cubic-bezier(0.22,1,0.36,1), opacity 600ms ease',
                    }}
                  >
                    Contact Us
                  </h1>
                </div>

                {/* SUBTITLE */}
                <FadeLeft delay={300}>
                  <p className="mt-6 max-w-[640px] text-white/80 text-[18px] leading-[1.7]">
                    For client inquiries, strategic partnerships, or institutional discussions,
                    please reach out to our team.
                  </p>
                </FadeLeft>

              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
 <section className="py-20">
  <div className="container-responsive">

    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">

      {/* ================= LEFT — CONTACT PANEL ================= */}
    <FadeUp>
  <div className="relative pl-12">

    {/* VERTICAL DIVIDER — FULL HEIGHT */}
    <div className="absolute top-0 left-0 bottom-0 w-px bg-black/10 hidden lg:block" />

    <div className="space-y-16">

      {/* ================= GENERAL INQUIRIES ================= */}
      <div>
        <h3
          className="
            mb-4
            font-brand
            font-semibold
            text-[22px] md:text-[24px]
            text-[var(--brand-green-1)]
          "
        >
          General Inquiries
        </h3>

        <a
          href="mailto:jculttrader.inquiry@gmail.com"
          className="
            relative
            inline-block
            font-medium
            text-[18px]
            text-[#8A8F93]
            group
          "
        >
          jculttrader.inquiry@gmail.com

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

      {/* ================= OFFICE ADDRESS ================= */}
      <div>
        <h3
          className="
            mb-4
            font-brand
            font-semibold
            text-[22px] md:text-[24px]
            text-[var(--brand-green-1)]
          "
        >
          Office Address
        </h3>

        <p className="text-[17px] leading-[1.7] text-[#8A8F93]">
          DSO-IFZA, IFZA Properties<br />
          Dubai Silicon Oasis<br />
          Dubai, Dubayy (AE-DU)<br />
          UAE
        </p>
      </div>

      {/* ================= CONNECT WITH US ================= */}
<div>
  <h3
    className="
      mb-6
      font-brand
      font-semibold
      text-[22px] md:text-[24px]
      text-[var(--brand-green-1)]
    "
  >
    Connect With Us
  </h3>

  <div className="space-y-4">

    {/* LinkedIn */}
    <a
      href="#"
      className="
        flex items-center gap-4
        text-[17px]
        text-[#8A8F93]
        hover:text-[var(--brand-green-1)]
        transition
      "
    >
      <span
        className="
          w-10 h-10
          flex items-center justify-center
          rounded-full
          border border-[var(--brand-green-1)]
        "
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5S1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6C22.4 7.6 24 10.1 24 14.1V24h-5v-8.5c0-2.03-.04-4.64-2.83-4.64c-2.83 0-3.27 2.21-3.27 4.5V24H8z"/>
        </svg>
      </span>
      <span>linkedin.com/company/yourcompany</span>
    </a>


    {/* Twitter / X */}
    <a
      href="#"
      className="
        flex items-center gap-4
        text-[17px]
        text-[#8A8F93]
        hover:text-[var(--brand-green-1)]
        transition
      "
    >
      <span
        className="
          w-10 h-10
          flex items-center justify-center
          rounded-full
          border border-[var(--brand-green-1)]
        "
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/>
        </svg>
      </span>
      <span>twitter.com/yourhandle</span>
    </a>

    {/* YouTube */}
    <a
      href="#"
      className="
        flex items-center gap-4
        text-[17px]
        text-[#8A8F93]
        hover:text-[var(--brand-green-1)]
        transition
      "
    >
      <span
        className="
          w-10 h-10
          flex items-center justify-center
          rounded-full
          border border-[var(--brand-green-1)]
        "
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </span>
      <span>youtube.com/@yourchannel</span>
    </a>

    {/* Facebook */}
    <a
      href="#"
      className="
        flex items-center gap-4
        text-[17px]
        text-[#8A8F93]
        hover:text-[var(--brand-green-1)]
        transition
      "
    >
      <span
        className="
          w-10 h-10
          flex items-center justify-center
          rounded-full
          border border-[var(--brand-green-1)]
        "
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </span>
      <span>facebook.com/yourpage</span>
    </a>

    {/* Instagram */}
    <a
      href="#"
      className="
        flex items-center gap-4
        text-[17px]
        text-[#8A8F93]
        hover:text-[var(--brand-green-1)]
        transition
      "
    >
      <span
        className="
          w-10 h-10
          flex items-center justify-center
          rounded-full
          border border-[var(--brand-green-1)]
        "
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"/>
        </svg>
      </span>
      <span>instagram.com/yourhandle</span>
    </a>

  </div>
</div>


    </div>
  </div>
</FadeUp>


      {/* ================= RIGHT — FORM ================= */}
      <FadeLeft delay={200}>
        <div className="border border-black/10 p-12">

          <h2 className="font-brand font-semibold text-[28px] mb-2 text-[var(--brand-green-1)]">
            Send a Message
          </h2>

          <p className="text-[15px] text-[#8A8F93] mb-10">
            Our team will respond promptly.
          </p>

          <form className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First name"
                className="px-4 py-3 border border-black/15 bg-white outline-none focus:border-[var(--brand-green-1)] transition"
              />
              <input
                type="text"
                placeholder="Last name"
                className="px-4 py-3 border border-black/15 bg-white outline-none focus:border-[var(--brand-green-1)] transition"
              />
            </div>

            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-black/15 bg-white outline-none focus:border-[var(--brand-green-1)] transition"
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="w-full px-4 py-3 border border-black/15 bg-white outline-none resize-none focus:border-[var(--brand-green-1)] transition"
            />

            <LuxuryButton
  variant="primary"
  type="submit"
  className="w-full"
>
  SUBMIT
</LuxuryButton>


          </form>
        </div>
      </FadeLeft>

    </div>

  </div>
</section>


      </main>
    </div>
  );
}
