'use client';

import { useEffect, useState } from 'react';
import LuxuryButton from '@/components/ui/LuxuryButton';
import {
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Instagram,
} from 'lucide-react';

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
      <div>
        <h3 className="text-[26px] font-brand font-bold text-[var(--brand-green-1)] mb-6">
          Follow Us
        </h3>

        <div className="flex justify-center gap-5 flex-wrap">

          {[
            { Icon: Linkedin, link: "#" },
            { Icon: Twitter, link: "#" },
            { Icon: Youtube, link: "#" },
            { Icon: Facebook, link: "#" },
            { Icon: Instagram, link: "#" },
          ].map(({ Icon, link }, i) => (
            <a
              key={i}
              href={link}
              className="
                w-11 h-11
                flex items-center justify-center
                rounded-full
                bg-black/5
                text-[#4B5563]
                transition-all duration-300
                hover:bg-[var(--brand-green-1)]
                hover:text-white
              "
            >
              <Icon size={18} />
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
