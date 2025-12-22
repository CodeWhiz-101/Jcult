'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LuxuryButton from '@/components/ui/LuxuryButton';

export default function Header() {
  const DISCLAIMER_HEIGHT = 40;
  const HEADER_HEIGHT = 120;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileExpandedTabs, setMobileExpandedTabs] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [dropdownKey, setDropdownKey] = useState(0);

  const hasAnimatedRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!hasAnimatedRef.current) {
      setHasLoaded(true);
      hasAnimatedRef.current = true;
    }

    const handleScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 50);
      setIsVisible(current < 100);
      setHoveredTab(null);
      setIsDropdownVisible(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabContent: Record<string, string[]> = {
    'Who We Are': ['Our Culture', 'Executive Leadership', 'Our Global Base'],
    'What We Do': ['Asset Management'],
    'News': ['Featured In'],
    'Career': ['Open Opportunities']
  };

  const navItems = Object.keys(tabContent);

  const linkFor = (label: string) =>
    `/${label.toLowerCase().replace(/\s+/g, '-')}`;

  const isActive = (href: string) =>
    pathname ? pathname.startsWith(href) : false;

  return (
    <>
      {/* ================= HEADER + DISCLAIMER ================= */}
      {!isMenuOpen && (
        <div
          className="fixed left-0 right-0 z-[200] transition-transform duration-500"
         style={{
  minHeight: `${DISCLAIMER_HEIGHT}px`,
  background: 'linear-gradient(180deg,#F6F7F9,#ECEEF1)',
  borderBottom: '1px solid #E2E4E8'
}}


        >
          {/* DISCLAIMER */}
        <div
  className="text-center text-[13px] px-4 py-2"
  style={{
    minHeight: `${DISCLAIMER_HEIGHT}px`,
    background: 'linear-gradient(180deg,#F6F7F9,#ECEEF1)',
    borderBottom: '1px solid #E2E4E8'
  }}
>

            The firm does not currently operate under regulatory authorisation;
            however, all requisite measures are being undertaken to achieve
            regulatory compliance.
          </div>

          {/* HEADER */}
          <header
            className="w-full transition-all duration-500 bg-white"
            style={{
              height: `${HEADER_HEIGHT}px`,
              borderBottom: isScrolled ? '1px solid #E8E8E8' : 'none'
            }}
            onMouseLeave={() => {
              setHoveredTab(null);
              setTimeout(() => setIsDropdownVisible(false), 150);
            }}
          >
            <div className="relative max-w-[1600px] mx-auto px-4 lg:px-12 xl:px-16 h-full">
              <div className="grid grid-cols-[auto_1fr_auto] items-center h-full">
                {/* LOGO */}
                <div
                  className={`flex items-center ${
                    hasLoaded ? 'animate-header-reveal' : 'opacity-0'
                  }`}
                >
                  <Link href="/">
                    <Image
                      src="/Final Logos/Transparent/Base Logo/Primary/Transparent Primary.svg"
                      alt="JCULT"
                      width={140}
                      height={90}
                      className="w-28 lg:w-32 h-auto"
                    />
                  </Link>
                </div>

                {/* DESKTOP NAV */}
                <nav
                  className={`hidden lg:flex justify-center ${
                    hasLoaded ? 'animate-header-reveal' : 'opacity-0'
                  }`}
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
                            className="text-[15px] tracking-wide"
                            style={{
                              color: active
                                ? 'var(--brand-green-1)'
                                : 'var(--brand-green-2)'
                            }}
                            onMouseEnter={() => {
                              setHoveredTab(label);
                              setIsDropdownVisible(true);
                              setDropdownKey((k) => k + 1);
                            }}
                          >
                            {label}
                            <span
                              className={`absolute left-0 -bottom-0 h-[1px] transition-all ${
                                active || hovered ? 'w-full' : 'w-0'
                              }`}
                              style={{
                                backgroundColor: 'var(--brand-green-1)'
                              }}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* CONTACT */}
                <div
                  className={`flex justify-end ${
                    hasLoaded ? 'animate-header-reveal' : 'opacity-0'
                  }`}
                >
                 <Link href="/contact" className="no-underline">
  <LuxuryButton variant="primary">
    Contact Us
  </LuxuryButton>
</Link>

                </div>

                {/* MOBILE BUTTON */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open menu"
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
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* DESKTOP DROPDOWN */}
            {isDropdownVisible && hoveredTab && (
              <div
                className="hidden lg:block fixed left-0 right-0 bg-white z-[150]"
                style={{
                  top: `${DISCLAIMER_HEIGHT + HEADER_HEIGHT}px`,
                  minHeight: '420px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.08)'
                }}
                onMouseEnter={() => setIsDropdownVisible(true)}
                onMouseLeave={() => {
                  setHoveredTab(null);
                  setIsDropdownVisible(false);
                }}
              >
                <div
                  className="absolute top-0 bottom-0 bg-[#F4F4F4]"
                  style={{ left: '460px', right: 0 }}
                />

                <div className="relative max-w-[1600px] mx-auto px-4 lg:px-12 xl:px-16 h-full flex gap-12 pt-12 pb-16">
                  <div className="w-[380px]">
                    <h2 className="text-5xl font-brand mb-6">
                      {hoveredTab}
                    </h2>

                    <Link
                      href={linkFor(hoveredTab)}
                      className="inline-flex px-7 py-3 text-sm font-medium text-white"
                      style={{
                        background:
                          'linear-gradient(90deg,var(--brand-green-1),var(--brand-green-2))'
                      }}
                    >
                      Learn More
                    </Link>
                  </div>

                  <div className="flex-1 pt-2 relative z-[10]">
                    <div key={dropdownKey} className="space-y-6">
                      {tabContent[hoveredTab].map((item, index) => (
                        <Link
  key={item}
  href={`${linkFor(hoveredTab)}/${item
    .toLowerCase()
    .replace(/\s+/g, '-')}`}
  className="
    group block
    text-[15px] tracking-wide
    no-underline
    transition-colors duration-300
    hover:text-[var(--brand-green-1)]
  "
  style={{
    color: 'var(--brand-green-2)',
    animationName: 'slideInFromLeft',
    animationDuration: '0.45s',
    animationDelay: `${120 + index * 120}ms`,
    animationFillMode: 'both'
  }}
>
  <span className="relative inline-block">
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
  </span>
</Link>

                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </header>
        </div>
      )}

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[300] p-6 lg:hidden">
          <div className="flex justify-end mb-6">
            <button onClick={() => setIsMenuOpen(false)}>
              ✕
            </button>
          </div>

          <div className="space-y-6">
            {navItems.map((tab) => (
              <div key={tab}>
                <div className="flex justify-between items-center">
                  <Link
                    href={linkFor(tab)}
                    className="text-2xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {tab}
                  </Link>
                  <button
                    onClick={() =>
                      setMobileExpandedTabs((prev) =>
                        prev.includes(tab)
                          ? prev.filter((t) => t !== tab)
                          : [...prev, tab]
                      )
                    }
                  >
                    ▼
                  </button>
                </div>

                {mobileExpandedTabs.includes(tab) && (
                  <div className="ml-4 mt-3 space-y-2">
                    {tabContent[tab].map((item) => (
                      <Link
                        key={item}
                        href={`${linkFor(tab)}/${item
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-lg"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
