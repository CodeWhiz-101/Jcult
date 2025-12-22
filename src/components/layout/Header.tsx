'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

export default function Header() {
  const DISCLAIMER_HEIGHT = 40;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileExpandedTabs, setMobileExpandedTabs] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
const [isDropdownVisible, setIsDropdownVisible] = useState(false);
const [dropdownKey, setDropdownKey] = useState(0);

const hasAnimatedRef = useRef(false);

  const pathname = usePathname();
  const HEADER_HEIGHT = 120;
useEffect(() => {
  // ✅ run load animation ONCE (fixes double animation in dev)
  if (!hasAnimatedRef.current) {
    setHasLoaded(true);
    hasAnimatedRef.current = true;
  }

  const handleScroll = () => {
    const current = window.scrollY;

    setIsScrolled(current > 50);
    setIsVisible(current < 100);
    setHoveredTab(null); // close dropdown on scroll
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);



  const tabContent: Record<string, string[]> = {
    'Who We Are': ['Our Culture', 'Executive Leadership', 'Our Global Base'],
    'What We Do': ['Asset Management'],
    'News': ['Featured In'],
    'Career': ['Open Opportunities']
  };

  const navItems = ['Who We Are', 'What We Do', 'News', 'Career'];

  const linkFor = (label: string) =>
    `/${label.toLowerCase().replace(/\s+/g, '-')}`;

  const isActive = (href: string) => {
    if (!pathname) return false;
    return pathname.startsWith(href);
  };

  return (
  <>
  <div
    className="fixed left-0 right-0 z-[200] transition-transform duration-500"
    style={{
      transform: isVisible ? 'translateY(0)' : `translateY(-${DISCLAIMER_HEIGHT + HEADER_HEIGHT}px)`
    }}
  >
    {/* DISCLAIMER */}
    <div
      className="text-center text-[13px] leading-relaxed px-4 py-2"
      style={{
        height: `${DISCLAIMER_HEIGHT}px`,
        background: 'linear-gradient(180deg, #F6F7F9 0%, #ECEEF1 100%)',
        color: '#1A1A1A',
        borderBottom: '1px solid #E2E4E8'
      }}
    >
      The firm does not currently operate under regulatory authorisation; however,
      all requisite measures are being undertaken to achieve regulatory compliance.
    </div>

    {/* HEADER */}
    <header
      className="w-full transition-all duration-500"
      style={{
        height: `${HEADER_HEIGHT}px`,
        backgroundColor: '#FFFFFF',
        borderBottom: isScrolled ? '1px solid #E8E8E8' : 'none'
      }}
      onMouseLeave={() => setHoveredTab(null)}
    >
      {/* 🔥 KEEP YOUR EXISTING HEADER CONTENT EXACTLY SAME */}


      {/* TOP HEADER */}
      <div
        className="relative max-w-[1600px] mx-auto px-4 lg:px-12 xl:px-16"
        style={{ height: `${HEADER_HEIGHT}px` }}
      >
      <div className="grid grid-cols-[auto_1fr_auto] items-center h-full">
          {/* LOGO */}
         <div
  className={`flex-1 flex items-center ${
    hasLoaded ? 'animate-header-reveal' : 'opacity-0'
  }`}
  style={{ animationDelay: '0ms' }}
>
            <Link href="/" aria-label="Home">
              <Image
                src="/Final Logos/Transparent/Base Logo/Primary/Transparent Primary.svg"
                alt="JCULT"
                width={140}
                height={90}
                className="w-28 lg:w-32 h-auto"
              />
            </Link>
          </div>

          {/* DESKTOP CENTER NAV */}
<nav
  className={`hidden lg:flex flex-1 justify-center pl-7 lg:pl-10 ${
    hasLoaded ? 'animate-header-reveal' : 'opacity-0'
  }`}
  style={{ animationDelay: '120ms' }}
>
          <ul className="flex items-center space-x-6">
              {navItems.map((label) => {
                const href = linkFor(label);
                const active = isActive(href);
                const hovered = hoveredTab === label;

                return (
                  <li key={label} className="relative">
                    <Link
                      href={href}
                      className="inline-block whitespace-nowrap no-underline text-[15px] tracking-wide transition-colors duration-200"
                      style={{
  color: active
    ? 'var(--brand-green-1)'
    : 'var(--brand-green-2)'
}}
onMouseEnter={() => {
  setHoveredTab(label);
  setIsDropdownVisible(true);
  setDropdownKey(prev => prev + 1); // 🔥 force re-animation
}}
                    >
                      {label}

                      {/* underline animation */}
                  <span
  className={`absolute left-0 -bottom-0 h-[1px] transition-all duration-300 ${
    active || hovered ? 'w-full' : 'w-0'
  }`}
  style={{ backgroundColor: 'var(--brand-green-1)' }}
/>


                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CONTACT US BUTTON */}
          <div
  className={`flex-1 flex justify-end ${
    hasLoaded ? 'animate-header-reveal' : 'opacity-0'
  }`}
  style={{ animationDelay: '240ms' }}
>
 <Link
  href="/contact"
  className="
    inline-flex items-center justify-center
    px-6 py-2.5 text-sm font-medium
    no-underline

    text-white
    border border-transparent

    bg-[linear-gradient(90deg,var(--brand-green-1),var(--brand-green-2))]
    hover:bg-none hover:bg-white

    transition-all duration-300

    hover:text-[var(--brand-green-1)]
    hover:border-[var(--brand-green-1)]
  "
>
  Contact Us
</Link>



          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY (behind dropdown) */}
      {hoveredTab && (
        <div
          className="hidden lg:block fixed inset-0 bg-black/20"
          style={{
  top: `calc(var(--disclaimer-offset) + ${HEADER_HEIGHT}px)`,
  zIndex: 50
}}

        />
      )}

      {/* DESKTOP DROPDOWN */}
      {/* DESKTOP DROPDOWN */}
{isDropdownVisible && hoveredTab  && (
  <div
    className={`hidden lg:block fixed left-0 right-0 bg-white z-[60]
      ${hoveredTab ? 'animate-dropdown-in' : 'animate-dropdown-out'}`}
    style={{
  top: isVisible
    ? `calc(var(--disclaimer-offset) + ${HEADER_HEIGHT}px)`
    : `-${HEADER_HEIGHT}px`,
  minHeight: '430px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
}}


    onMouseEnter={() => setIsDropdownVisible(true)}
    onMouseLeave={() => {
      setHoveredTab(null);
      setTimeout(() => setIsDropdownVisible(false), 500);
    }}
  >

          {/* GREY RIGHT SIDE PANEL — RESPONSIVE */}
          <div
            className="absolute top-0 bottom-0 bg-[#F4F4F4]"
            style={{
              left: '460px',
              right: 0
            }}
          />

          {/* DROPDOWN CONTENT */}
          <div className="relative max-w-[1600px] mx-auto px-4 lg:px-12 xl:px-16 h-full flex gap-10 pt-12 pb-16">

            {/* LEFT COLUMN */}
            <div className="w-[380px]">
             <h2
  className="text-4xl lg:text-5xl font-brand font-medium mb-6
             transition-colors duration-300"
  style={{ color: 'var(--brand-green-2)' }}
>
  {hoveredTab}
</h2>


              <Link
  href={linkFor(hoveredTab)}
  className="
    inline-flex items-center justify-center
    px-7 py-3 text-sm font-medium
    no-underline

    text-white
    border border-transparent

    transition-all duration-300
  "
  style={{
    backgroundImage: 'var(--brand-green-gradient)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundImage = 'none';
    e.currentTarget.style.backgroundColor = '#FFFFFF';
    e.currentTarget.style.color = 'var(--brand-green-1)';
    e.currentTarget.style.border = '1px solid var(--brand-green-1)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundImage = 'var(--brand-green-gradient)';
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = '#FFFFFF';
    e.currentTarget.style.border = '1px solid transparent';
  }}
>
  Learn More
</Link>

            </div>

            {/* RIGHT COLUMN LINKS */}
            <div className="flex-1 pl-6 pt-2 relative z-[10]">
              <div key={dropdownKey} className="space-y-6">
                {(tabContent[hoveredTab]|| []).map(
                  (item, index) => {
                    const base = linkFor(hoveredTab);
                    const slug = item.toLowerCase().replace(/\s+/g, '-');
                    const href = `${base}/${slug}`;

                    return (
                   <Link
  key={index}
  href={href}
  className="
    group relative block w-fit
    text-[15px] tracking-wide
    no-underline
    transition-colors duration-300
    hover:text-[var(--brand-green-1)]
  "
  style={{
    color: 'var(--brand-green-2)',
    animationName: 'slideInFromLeft',
    animationDuration: '0.45s',
    animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    animationDelay: `${160 + index * 120}ms`,
    animationFillMode: 'both'
  }}
>
  {item}

<span
  className="
    absolute left-0 -bottom-[2px]
    h-[1px]
    w-0
    transition-all duration-300
    group-hover:w-full
  "
  style={{ backgroundColor: 'var(--brand-green-1)' }}
/>


</Link>

                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE MENU (UNCHANGED) */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[200] p-6">
          <div className="flex justify-end mb-6">
            <button onClick={() => setIsMenuOpen(false)}>
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            {Object.keys(tabContent).map((tab) => (
              <div key={tab}>
                <div className="flex justify-between items-center">
                  <Link
                    href={linkFor(tab)}
                    className="text-2xl no-underline text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {tab}
                  </Link>

                  {/* Expand toggle */}
                  <button
                    onClick={() =>
                      setMobileExpandedTabs((prev) =>
                        prev.includes(tab)
                          ? prev.filter((t) => t !== tab)
                          : [...prev, tab]
                      )
                    }
                  >
                    <svg
                      className={`h-5 w-5 transition-transform ${
                        mobileExpandedTabs.includes(tab) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Mobile sublinks */}
                {mobileExpandedTabs.includes(tab) && (
                  <div className="ml-4 mt-3 space-y-2">
                    {tabContent[tab].map((item, index) => {
                      const slug = item.toLowerCase().replace(/\s+/g, '-');
                      const href = `${linkFor(tab)}/${slug}`;
                      return (
                        <Link
                          key={index}
                          href={href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-lg no-underline text-black"
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 border-t mt-6">
         <Link
  href="/contact"
  className="
    relative inline-flex items-center justify-center
    px-6 py-2.5 text-sm font-medium
    text-white no-underline
    overflow-hidden
    isolate
  "
>
  {/* GRADIENT LAYER */}
  <span
    aria-hidden
    className="absolute inset-0"
    style={{
      backgroundImage:
        'linear-gradient(90deg, var(--brand-green-1), var(--brand-green-2))',
      width: '105%',
      left: '-2.5%',
      top: 0
    }}
  />

  {/* TEXT */}
  <span className="relative z-10">
    Contact Us
  </span>
</Link>


          </div>
        </div>
      )}
    </header>
   </div>
    </>
  );
}
