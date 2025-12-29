import Image from 'next/image';

export default function Footer() {
  return (
<footer className="bg-tertiary text-black py-11 xl:py-17">
      <div className="container-responsive">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12 xl:mb-20">

          {/* Logo */}
          <div>
            <Image
              src="/Final Logos/Transparent/Base Logo/Primary/Transparent Primary.svg"
              alt="JCULT"
              width={200}
              height={90}
              className="w-32 sm:w-36 lg:w-40 h-auto"

            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3 pr-12 xl:pr-16">
            {[
              { label: 'Who We Are', href: '/who-we-are' },
              { label: 'What We Do', href: '/what-we-do' },
              { label: 'News', href: '/news' },
              { label: 'Careers', href: '/career' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
className="text-[17px] tracking-wide text-black/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
<div className="border-t border-b border-black/30 py-6">
          <div className="relative flex flex-col gap-6 lg:flex-row justify-between items-center">

            {/* Legal Links */}
<div className="flex gap-6 text-[13px] tracking-wide text-black/70">
              <a href="/privacy" className="hover:text-primary">Privacy</a>
              <a href="/terms-of-use" className="hover:text-primary">Terms</a>
              <a href="/notices" className="hover:text-primary">Notices</a>
              <a href="/disclosure" className="hover:text-primary">Disclosure</a>
            </div>

            {/* Copyright */}
            <div className="text-[13px] text-black/60 whitespace-nowrap">
              Copyright ©️ 2026 JCULT TRADER - All Rights Reserved.
            </div>

            {/* Social Media Icons */}
        <div className="flex gap-5">
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
    </footer>
  );
}
