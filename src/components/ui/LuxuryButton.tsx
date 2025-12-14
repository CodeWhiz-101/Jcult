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
  className = 'border-1' 
}: LuxuryButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getStyles = () => {
    const baseStyle = {
      padding: '0.75rem 1.5rem',
      fontWeight: 500,
      position: 'relative' as const,
      zIndex: 10,
      cursor: 'pointer',
      transition: 'all 400ms ease'
    };

    switch (variant) {
      case 'white':
        return {
          ...baseStyle,
          backgroundColor: isHovered ? 'transparent' : '#FFFFFF',
          color: isHovered ? '#FFFFFF' : '#1B5E20',
          borderColor: '#FFFFFF'
        };
      case 'primary-outline':
        return {
          ...baseStyle,
          backgroundColor: isHovered ? 'transparent' : '#1B5E20',
          color: '#FFFFFF',
          borderColor: '#1B5E20'
        };
      case 'gold':
        return {
          ...baseStyle,
          backgroundColor: '#D4AF37',
          color: '#000000',
          borderColor: '#D4AF37'
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: isHovered ? 'transparent' : '#1B5E20',
          color: isHovered ? '#1B5E20' : '#FFFFFF',
          borderColor: '#1B5E20'
        };
    }
  };

  return (
    <button
      onClick={onClick}
      style={getStyles()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
    >
      {children}
    </button>
  );
}
