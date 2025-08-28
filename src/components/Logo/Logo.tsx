import React from 'react';
import './Logo.css';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'white' | 'gradient';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  variant = 'primary',
  animated = true
}) => {
  const sizeMap = {
    small: 32,
    medium: 48,
    large: 64
  } as const;

  const logoSize = sizeMap[size];

  return (
    <div className={`logo logo--${size} logo--${variant} ${animated ? 'logo--animated' : ''}`}>
      <svg
        width={logoSize}
        height={logoSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo__svg"
      >
        <defs>
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent-dark)" />
            <stop offset="50%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-accent-light)" />
          </linearGradient>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent-light)" />
            <stop offset="100%" stopColor="var(--color-secondary)" />
          </linearGradient>
        </defs>

        {/* Circular arc ring (open circle), inspired by reference */}
        <g className="logo__ring">
          <circle cx="50" cy="50" r="34" className="logo__arc-bg" fill="none" />
          {/* Main arc */}
          <path d="M20,50 a30,30 0 1,1 60,0" className="logo__arc" strokeWidth="7" fill="none" strokeLinecap="round" />
          {/* Small gap then closing arc */}
          <path d="M76,78 a34,34 0 0,0 14,-28" className="logo__arc-tail" strokeWidth="7" fill="none" strokeLinecap="round" />
        </g>

        {/* Text ALGB */}
        <text x="50" y="58" textAnchor="middle" className="logo__text" style={{fontWeight:800}} fontSize="32">ALGB</text>
      </svg>
    </div>
  );
};

export default Logo;
