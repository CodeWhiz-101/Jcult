'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import LuxuryButton from '@/components/ui/LuxuryButton';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileExpandedTabs, setMobileExpandedTabs] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
const [isDropdownVisible, setIsDropdownVisible] = useState(false);
const [dropdownKey, setDropdownKey] = useState(0);
const disclaimerRef = useRef<HTMLDivElement>(null);
const [disclaimerHeight, setDisclaimerHeight] = useState(0);
const hasAnimatedRef = useRef(false);
   const shouldBlurPage = isDropdownVisible && !!hoveredTab;
const hoverLockRef = useRef(false);

const primaryBaseStyle: React.CSSProperties = {
  padding: '0.7rem 1.4rem',
  fontSize: '1rem',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 300ms ease',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFFFFF',
  background: 'linear-gradient(90deg,var(--brand-green-1),var(--brand-green-2))',
};
const closeDropdown = () => {
  hoverLockRef.current = true;

  setHoveredTab(null);
  setIsDropdownVisible(false);

  // unlock hover after cursor settles
  setTimeout(() => {
    hoverLockRef.current = false;
  }, 300);
};
  const pathname = usePathname();
  const isHome = pathname === '/';
useEffect(() => {
  if (isHome && disclaimerRef.current) {
    setDisclaimerHeight(disclaimerRef.current.offsetHeight);
  } else {
    setDisclaimerHeight(0);
  }
}, [isHome]);
useEffect(() => {
  const root = document.documentElement;

  if (isDropdownVisible && hoveredTab) {
    root.classList.add("dropdown-open");
  } else {
    root.classList.remove("dropdown-open");
  }

  return () => {
    root.classList.remove("dropdown-open");
  };
}, [isDropdownVisible, hoveredTab]);

useEffect(() => {
  document.documentElement.style.setProperty(
    '--disclaimer-offset',
    isHome ? `${disclaimerHeight}px` : '0px'
  );
}, [isHome, disclaimerHeight]);

  const HEADER_HEIGHT = 120;useEffect(() => {
  /* ===============================
     HEADER LOAD ANIMATION (ONCE)
  =============================== */
  if (!hasAnimatedRef.current) {
    setHasLoaded(true);
    hasAnimatedRef.current = true;
  }

  /* ===============================
     MEASURE DISCLAIMER HEIGHT
  =============================== */
  const measureDisclaimer = () => {
    if (disclaimerRef.current) {
      setDisclaimerHeight(disclaimerRef.current.offsetHeight);
    }
  };


  measureDisclaimer();
  window.addEventListener('resize', measureDisclaimer);

  /* ===============================
     SCROLL HANDLER
  =============================== */
  const handleScroll = () => {
    const current = window.scrollY;

    setIsScrolled(current > 50);
    setIsVisible(current < 100);
    setHoveredTab(null); // close dropdown on scroll
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ===============================
     CLEANUP
  =============================== */
  return () => {
    window.removeEventListener('resize', measureDisclaimer);
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
  className="fixed left-0 right-0 z-[200] transition-[top] duration-500 ease-in-out"
  style={{
    top: isVisible
      ? '0px'
      : `-${disclaimerHeight + HEADER_HEIGHT}px`
  }}
>


    {/* DISCLAIMER */}
{isHome && (
  <div
    ref={disclaimerRef}
    className="text-center text-[16px] leading-snug px-4 py-2 font-ttcommons"
    style={{
      backgroundColor: '#F6F6F6',
      color: '#1A1A1A',
      fontFamily: 'TT Commons, sans-serif',
      fontWeight: 400
    }}
  >
    The firm does not currently operate under regulatory authorisation; however,
    all requisite measures are being undertaken to achieve regulatory compliance.
  </div>
)}

    {/* HEADER */}
<header
  className="w-full bg-white"
  style={{
    height: `${HEADER_HEIGHT}px`,
    borderBottom:
      isScrolled && !isHome
        ? '1px solid #E8E8E8'
        : 'none'
  }}
>



      {/* 🔥 KEEP YOUR EXISTING HEADER CONTENT EXACTLY SAME */}


      {/* TOP HEADER */}
      <div
  className="relative max-w-[1600px] mx-auto px-4 py-2 lg:py-0 lg:px-12 xl:px-16"
  style={{ height: `${HEADER_HEIGHT}px` }}
>

      <div className="grid grid-cols-[auto_1fr_auto] items-center h-full">
          {/* LOGO */}
        <div
  className="flex-1 flex items-center"
  style={{
    opacity: hasLoaded ? 1 : 0,
    transform: hasLoaded ? 'translateY(0)' : 'translateY(36px)',
    transition:
      'opacity 1.4s cubic-bezier(0.16,1,0.3,1), transform 1.4s cubic-bezier(0.16,1,0.3,1)',
    transitionDelay: '0ms',
  }}
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
  className="hidden lg:flex flex-1 justify-center pl-7 lg:pl-10"
  style={{
    opacity: hasLoaded ? 1 : 0,
    transform: hasLoaded ? 'translateY(0)' : 'translateY(36px)',
    transition:
      'opacity 1.4s cubic-bezier(0.16,1,0.3,1), transform 1.4s cubic-bezier(0.16,1,0.3,1)',
    transitionDelay: '160ms',
  }}
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
className="
  relative
  inline-block
  whitespace-nowrap
  no-underline
  text-[18px]
  tracking-[-0.01em]
  transition-colors
  duration-200
"  style={{
    color: hoveredTab
      ? hovered
        ? 'var(--brand-green-2)' // hovered tab
        : 'var(--brand-green-1)' // others while hovering
      : active
      ? 'var(--brand-green-2)' // active when no hover
      : 'var(--brand-green-1)', // default
  }}
onMouseEnter={() => {
  if (hoverLockRef.current) return;

  setHoveredTab(label);
  setIsDropdownVisible(true);
  setDropdownKey(prev => prev + 1);
}}

    onClick={closeDropdown}

>
  {label}

  {/* UNDERLINE — SAME LOGIC */}
  <span
    className="absolute left-0 -bottom-0 h-[1px] transition-all duration-300"
    style={{
      width: hoveredTab
        ? hovered
          ? '100%'
          : '0'
        : active
        ? '100%'
        : '0',
      backgroundColor: 'var(--brand-green-2)',
    }}
  />
</Link>

                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CONTACT US BUTTON */}
<div
  className="hidden lg:flex flex-1 justify-end"
  style={{
    opacity: hasLoaded ? 1 : 0,
    transform: hasLoaded ? 'translateY(0)' : 'translateY(36px)',
    transition:
      'opacity 1.4s cubic-bezier(0.16,1,0.3,1), transform 1.4s cubic-bezier(0.16,1,0.3,1)',
    transitionDelay: '320ms',
  }}
>
  <Link href="/contact" className="no-underline">
    <LuxuryButton variant="primary">
      Contact Us
    </LuxuryButton>
  </Link>
</div>





          {/* MOBILE MENU BUTTON */}
         <div className="flex flex-1 justify-end lg:hidden">
<button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  aria-label="Toggle menu"
  className="relative w-14 h-8 mt-5"
>
  {/* TOP LINE — SHORT */}
<span
  className={`
    absolute left-6 top-[6px]
    h-[3px] w-5
    bg-[var(--brand-green-1)]
    transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isMenuOpen ? 'translate-x-2' : 'translate-x-0'}
  `}
/>


  {/* BOTTOM LINE — LONG */}
  <span
    className={`
      absolute left-0 top-[14px]
      h-[3px] w-11
      bg-[var(--brand-green-1)]
      transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
      ${isMenuOpen ? '-translate-x-2' : 'translate-x-0'}
    `}
  />
</button>



          </div>
        </div>
      </div>

    

      {/* DESKTOP DROPDOWN */}
      {/* DESKTOP DROPDOWN */}
{isDropdownVisible && hoveredTab  && (
  <div
    className="hidden lg:block fixed left-0 right-0 z-[180]"
    onClick={closeDropdown}
    style={{
      backgroundColor: '#F4F4F4',
      top: isVisible
        ? `calc(var(--disclaimer-offset) + ${HEADER_HEIGHT}px)`
        : `-${HEADER_HEIGHT}px`,
      minHeight: '430px',
    }}
    onMouseLeave={() => {
      setHoveredTab(null);
      setTimeout(() => setIsDropdownVisible(false), 150);
    }}
  >
    <div
      className="relative max-w-[1600px] mx-auto min-h-[430px] flex"
      onClick={(e) => e.stopPropagation()}
    >
            {/* LEFT COLUMN */}
<div className="w-[36%] bg-white py-12">
    <div className="pl-4 lg:pl-12 xl:pl-16 pr-12 xl:pr-16">

             <h2
  className="text-4xl lg:text-5xl font-brand font-medium mb-6
             transition-colors duration-300"
  style={{ color: 'var(--brand-green-2)' }}
>
  {hoveredTab}
</h2>


             <Link
  href={linkFor(hoveredTab)}
  style={primaryBaseStyle}
  className="no-underline"
  onMouseEnter={(e) => {
    e.currentTarget.style.color = 'var(--brand-green-1)';
    e.currentTarget.style.background = 'transparent';
    e.currentTarget.style.boxShadow =
      'inset 0 0 0 1px var(--brand-green-1)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = '#FFFFFF';
    e.currentTarget.style.background =
      'linear-gradient(90deg,var(--brand-green-1),var(--brand-green-2))';
    e.currentTarget.style.boxShadow =
      'inset 0 0 0 0 transparent';
  }}

  onClick={closeDropdown}


>
  Learn More
</Link>

</div>
            </div>

            {/* RIGHT COLUMN LINKS */}
<div className="flex-1 py-8">
  <div className="px-6 xl:px-8">

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
    text-[18px] tracking-wide
    no-underline
    transition-colors duration-300
  "
  style={{
    color: 'var(--brand-green-1)', // DEFAULT = DARK
    animationName: 'slideInFromLeft',
    animationDuration: '0.45s',
    animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    animationDelay: `${160 + index * 120}ms`,
    animationFillMode: 'both'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.color = 'var(--brand-green-2)'; // HOVER = LIGHT
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = 'var(--brand-green-1)'; // RESET
  }}
  onClick={closeDropdown}
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
        </div>
        
      )}

      {/* MOBILE MENU (UNCHANGED) */}
    {isMenuOpen && (
<div className="lg:hidden fixed inset-0 bg-white z-[200] flex flex-col">

       <div className="flex justify-end pt-6 pr-6">
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


         {/* MOBILE MENU CONTENT */}
<div className="flex flex-col h-full">

  {/* TOP: MENU ITEMS */}
  {/* TOP: MENU ITEMS */}
{/* TOP: MENU ITEMS */}
<div className="px-6">
  {Object.keys(tabContent).map((tab) => {
    const isOpen = mobileExpandedTabs.includes(tab);

    return (
 <div key={tab} className="-mx-6">
  {/* HEADER ROW (ALWAYS WHITE, NEVER MOVES) */}
  <button
  type="button"
  onClick={() => {
    if (mobileExpandedTabs.includes(tab)) {
      // SECOND TAP → NAVIGATE
      setIsMenuOpen(false);
      window.location.href = linkFor(tab);
    } else {
      // FIRST TAP → OPEN DROPDOWN
      setMobileExpandedTabs([tab]);
    }
  }}
  className={`
    flex items-center gap-2
    w-full
    px-6 py-4
    font-raleway
    text-[32px]
    transition-colors duration-300
    ${mobileExpandedTabs.includes(tab)
      ? 'text-[var(--brand-green-2)]'
      : 'text-[var(--brand-green-1)]'}
  `}
>

    {/* TEXT + UNDERLINE */}
 <span className="relative leading-none">
  {tab}
  <span
    className={`
      absolute left-0 -bottom-[2px] h-[2px] w-full
      transition-opacity duration-300
      ${isOpen
        ? 'opacity-100 bg-[var(--brand-green-2)]'
        : 'opacity-0'}
    `}
  />
</span>


    {/* ARROW */}
    <svg
      className={`
        h-6 w-6
        transition-all duration-300
        ${isOpen
          ? 'rotate-180 text-[var(--brand-green-2)]'
          : 'text-[var(--brand-green-1)]'}
      `}
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

  {/* DROPDOWN (GREY ONLY HERE) */}
  {isOpen && (
    <div className="bg-[#F2F2F2] px-6 pb-6 pt-4 space-y-3">
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

    );
  })}
</div>


  {/* BOTTOM: DIVIDER + CONTACT US (CLIENT LOGIN STYLE) */}
{/* BOTTOM: DIVIDER + CONTACT US */}
<div className="mt-auto pt-4">
  {/* Divider */}
<div className="h-[1px] max-w-[380px] mx-auto bg-gray-300 opacity-70" />

  {/* Contact Us */}
  <div className="flex justify-end px-6 py-6">
    <Link
      href="/contact"
      onClick={() => setIsMenuOpen(false)}
      className="
        relative inline-flex items-center justify-center
        px-6 py-2.5 text-sm font-medium
        text-white no-underline
        overflow-hidden isolate
      "
    >
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(90deg, var(--brand-green-1), var(--brand-green-2))'
        }}
      />
      <span className="relative z-10">
        Contact Us
      </span>
    </Link>
  </div>
</div>

</div>




        </div>
      )}
    </header>


   </div>
    </>
  );
}

