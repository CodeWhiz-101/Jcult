'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileExpandedTabs, setMobileExpandedTabs] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const HEADER_HEIGHT = 120;

  useEffect(() => {
    setHasLoaded(true);
    const handleScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 50);
      setIsVisible(current < 100);
      setLastScrollY(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    <header
      className={`w-full fixed left-0 right-0 z-[100] transition-all duration-500 ${
        isVisible ? 'top-0' : '-top-[140px]'
      }`}
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: isScrolled ? '1px solid #E8E8E8' : 'none'
      }}
      onMouseLeave={() => setHoveredTab(null)}
    >
      {/* TOP HEADER */}
      <div
        className="relative max-w-[1600px] mx-auto px-4 lg:px-12 xl:px-16"
        style={{ height: `${HEADER_HEIGHT}px` }}
      >
        <div className="flex items-center justify-between h-full">
          {/* LOGO */}
          <div className="flex-1 flex items-center">
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
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center space-x-10">
              {navItems.map((label) => {
                const href = linkFor(label);
                const active = isActive(href);
                const hovered = hoveredTab === label;

                return (
                  <li key={label} className="relative">
                    <Link
                      href={href}
                      className="inline-block whitespace-nowrap no-underline text-[15px] tracking-wide transition-colors duration-200"
                      style={{ color: active ? '#127749' : '#000' }}
                      onMouseEnter={() => setHoveredTab(label)}
                    >
                      {label}

                      {/* underline animation */}
                      <span
                        className={`absolute left-0 -bottom-0 h-[1px] bg-[#127749] transition-all duration-300 ${
                          active || hovered ? 'w-full' : 'w-0'
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CONTACT US BUTTON */}
          <div className="flex-1 flex justify-end">
            <Link
              href="/contact"
              className="px-6 py-2.5 text-sm no-underline transition-all duration-200"
              style={{
                backgroundColor: '#1B5E20',
                border: '1px solid #1B5E20',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = '#FFFFFF';
                el.style.color = '#1B5E20';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = '#1B5E20';
                el.style.color = '#FFFFFF';
              }}
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
            top: `${HEADER_HEIGHT}px`,
            zIndex: 50
          }}
          onMouseEnter={() => setHoveredTab(hoveredTab)}
          onClick={() => setHoveredTab(null)}
        />
      )}

      {/* DESKTOP DROPDOWN */}
      {hoveredTab && (
        <div
          className="hidden lg:block fixed left-0 right-0 bg-white z-[60]"
          style={{
            top: `${HEADER_HEIGHT}px`,
            minHeight: '430px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
          }}
          onMouseEnter={() => setHoveredTab(hoveredTab)}
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
          <div className="relative max-w-[1600px] mx-auto px-10 h-full flex gap-10 pt-12 pb-16">

            {/* LEFT COLUMN */}
            <div className="w-[380px]">
              <h2 className="text-4xl font-normal text-[#1A1A1A] mb-6">
                {hoveredTab}
              </h2>

              <Link
                href={linkFor(hoveredTab)}
                className="inline-block px-7 py-3 bg-[#1B5E20] border border-[#1B5E20] text-white no-underline transition-all"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#1B5E20';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1B5E20';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Learn More
              </Link>
            </div>

            {/* RIGHT COLUMN LINKS */}
            <div className="flex-1 pl-6 pt-2 relative z-[10]">
              <div className="space-y-6">
                {(tabContent[hoveredTab as keyof typeof tabContent] || []).map(
                  (item, index) => {
                    const base = linkFor(hoveredTab);
                    const slug = item.toLowerCase().replace(/\s+/g, '-');
                    const href = `${base}/${slug}`;

                    return (
                      <Link
                        key={index}
                        href={href}
                        className="block text-[20px] text-[#1A1A1A] no-underline hover:text-[#127749] transition-colors"
                        style={{
                          animation: `slideInFromLeft 0.35s ease-out ${
                            index * 0.1
                          }s both`,
                          opacity: 0
                        }}
                      >
                        {item}
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
              className="block text-center bg-[#1B5E20] text-white px-6 py-3 no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
