'use client';

import Link from 'next/link';

interface PageBreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-[13px] tracking-wide text-white">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">

            {item.href ? (
              <Link
                href={item.href}
                className="relative group text-white"
              >
                {item.label}

                {/* underline animation */}
                <span
                  className="
                    absolute
                    left-0
                    -bottom-[2px]
                    h-[1px]
                    w-0
                    bg-white
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ) : (
              <span className="text-white">
                {item.label}
              </span>
            )}

            {i < items.length - 1 && (
              <span className="text-white">/</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
