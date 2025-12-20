'use client';

import { useState } from 'react';

interface LuxuryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'gold' | 'outline' | 'white' | 'primary-outline';
  className?: string;
}

export default function LuxuryButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
}: LuxuryButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    padding: '0.75rem 1.5rem',
    fontWeight: 500,
    position: 'relative' as const,
    zIndex: 10,
    cursor: 'pointer',
    transition: 'all 400ms ease',
  };

  const getInlineStyles = () => {
    switch (variant) {
      case 'white':
  return {
    ...baseStyle,
     color: isHovered ? '#FFFFFF' : '#1B5E20',
    border: `1px solid ${isHovered ? '#FFFFFF' : '#1B5E20'}`,
    backgroundColor: isHovered ? 'transparent' : '#FFFFFF',
  };


      case 'gold':
        return {
          ...baseStyle,
          backgroundColor: '#D4AF37',
          color: '#000000',
          border: '1px solid #D4AF37',
        };

      case 'outline':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          color: '#1B5E20',
          border: '1px solid #1B5E20',
        };

      case 'primary-outline':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          color: '#1B5E20',
          border: '1px solid #1B5E20',
        };

      default:
        // PRIMARY — inline styles only for text/border
        return {
          ...baseStyle,
          color: isHovered ? '#1B5E20' : '#FFFFFF',
          border: '1px solid #1B5E20',
          backgroundColor: isHovered ? '#FFFFFF' : 'transparent',
        };
    }
  };

  return (
    <button
      onClick={onClick}
      style={getInlineStyles()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        ${variant === 'primary' && !isHovered ? 'bg-primary' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
