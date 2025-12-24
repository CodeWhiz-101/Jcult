'use client';

import { useState } from 'react';

interface LuxuryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'white' | 'gold' | 'outline';
  className?: string;
}

export default function LuxuryButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
}: LuxuryButtonProps) {
  const [hovered, setHovered] = useState(false);

  const baseStyle: React.CSSProperties = {
    padding: '0.75rem 1.5rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 300ms ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const stylesByVariant: Record<string, React.CSSProperties> = {
    /* ================= PRIMARY (GRADIENT) ================= */
    primary: {
      ...baseStyle,
      color: hovered ? 'var(--brand-green-1)' : '#FFFFFF',
      background: hovered
        ? 'transparent'
        : 'linear-gradient(90deg,var(--brand-green-1),var(--brand-green-2))',
      boxShadow: hovered
        ? 'inset 0 0 0 1px var(--brand-green-1)'
        : 'inset 0 0 0 0 transparent',
    },

    /* ================= WHITE (FIXED) ================= */
    white: {
      ...baseStyle,
      color: hovered ? '#FFFFFF' : 'var(--brand-green-1)',
      background: hovered ? 'transparent' : '#FFFFFF',
      boxShadow: hovered
        ? 'inset 0 0 0 1px #FFFFFF'   // 👈 WHITE border on hover
        : 'inset 0 0 0 1px var(--brand-green-1)', // green when idle
    },

    /* ================= OUTLINE ================= */
    outline: {
      ...baseStyle,
      color: hovered ? '#FFFFFF' : 'var(--brand-green-1)',
      background: hovered
        ? 'linear-gradient(90deg,var(--brand-green-1),var(--brand-green-2))'
        : 'transparent',
      boxShadow: 'inset 0 0 0 1px var(--brand-green-1)',
    },

    /* ================= GOLD ================= */
    gold: {
      ...baseStyle,
      background: '#D4AF37',
      color: '#000000',
      boxShadow: 'inset 0 0 0 1px #D4AF37',
    },
  };

  return (
    <button
      onClick={onClick}
      style={stylesByVariant[variant]}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
    >
      {children}
    </button>
  );
}
