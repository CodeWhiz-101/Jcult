'use client';

import Link from 'next/link';

interface PageBreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  return (
    <nav
      style={{
        fontFamily: 'Raleway, sans-serif',
        fontSize: '16px',          // ⬅ bigger
        fontWeight: 500,           // ⬅ medium
        letterSpacing: '0.02em',   // ⬅ slightly tighter
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
      className="flex items-center text-white"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center">

          {item.href ? (
            <Link
              href={item.href}
              className="relative group text-white no-underline"
            >
              {item.label}

              {/* underline */}
              <span
                className="
                  absolute left-0 -bottom-[2px]
                  h-[1px] w-0
                  bg-white
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ) : (
            <span>{item.label}</span>
          )}

          {i < items.length - 1 && (
            <span className="mx-[10px] text-white">/</span>
          )}
        </span>
      ))}
    </nav>
  );
}
