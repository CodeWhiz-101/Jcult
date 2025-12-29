'use client';

import { useEffect, useState } from 'react';
import FadeLeft from '@/components/animation/FadeLeft';
import FadeUp from '@/components/animation/FadeUp';
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
          <div className="bg-[var(--brand-green-1)] ml-7 md:ml-10 lg:ml-12 xl:ml-14">
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
      <div >
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

        <div >

          <a className="flex items-center gap-3 text-[17px] text-[#8A8F93] hover:text-[var(--brand-green-1)] transition">
            <Linkedin size={18} />
            <span>linkedin.com/company/yourcompany</span>
          </a>

          <a className="flex items-center gap-3 text-[17px] text-[#8A8F93] hover:text-[var(--brand-green-1)] transition">
            <Twitter size={18} />
            <span>twitter.com/yourhandle</span>
          </a>

          <a className="flex items-center gap-3 text-[17px] text-[#8A8F93] hover:text-[var(--brand-green-1)] transition">
            <Youtube size={18} />
            <span>youtube.com/@yourchannel</span>
          </a>

          <a className="flex items-center gap-3 text-[17px] text-[#8A8F93] hover:text-[var(--brand-green-1)] transition">
            <Facebook size={18} />
            <span>facebook.com/yourpage</span>
          </a>

          <a className="flex items-center gap-3 text-[17px] text-[#8A8F93] hover:text-[var(--brand-green-1)] transition">
            <Instagram size={18} />
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

            <button
              type="submit"
              className="
                w-full
                py-4
                text-white
                font-medium
                tracking-wide
                transition-all duration-300
                hover:opacity-90
              "
              style={{
                background: 'var(--brand-green-gradient)',
              }}
            >
              SUBMIT
            </button>

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
