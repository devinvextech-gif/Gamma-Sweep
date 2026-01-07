
import React from 'react';

interface LogoProps {
  variant?: 'L' | 'M' | 'S';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'L', className = "" }) => {
  // Common styles using the brand fonts
  const textItalic = "text-akceler-bold uppercase tracking-tighter";
  const gammaColor = "text-gamma-dark dark:text-white transition-colors duration-300";
  const sweepColor = "text-gamma-aquamarine";
  const triangleColor = "fill-gamma-dark dark:fill-white transition-colors duration-300";
  
  if (variant === 'S') {
    return (
      <div className={`flex items-center gap-0.5 ${className}`}>
        <span className={`${textItalic} ${gammaColor} text-2xl`}>G</span>
        <span className={`${textItalic} ${sweepColor} text-2xl`}>S</span>
        <svg width="12" height="12" viewBox="0 0 24 24" className={`ml-0.5 ${triangleColor}`}>
          <path d="M4 4L20 12L4 20V4Z" />
        </svg>
      </div>
    );
  }

  if (variant === 'M') {
    return (
      <div className={`flex flex-col leading-none ${className}`}>
        <div className="flex items-center">
          <span className={`${textItalic} ${gammaColor} text-xl`}>Gamma</span>
        </div>
        <div className="flex items-center -mt-1 ml-4">
          <span className={`${textItalic} ${sweepColor} text-lg`}>Sweep</span>
          <svg width="10" height="10" viewBox="0 0 24 24" className={`ml-1 ${triangleColor}`}>
            <path d="M4 4L20 12L4 20V4Z" />
          </svg>
        </div>
      </div>
    );
  }

  // Variant L (Default)
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className={`${textItalic} ${gammaColor} text-2xl lg:text-3xl`}>Gamma</span>
      <span className={`${textItalic} ${sweepColor} text-2xl lg:text-3xl`}>Sweep</span>
      <svg width="14" height="14" viewBox="0 0 24 24" className={`ml-1 mt-1 ${triangleColor}`}>
        <path d="M4 4L20 12L4 20V4Z" />
      </svg>
    </div>
  );
};

export default Logo;
