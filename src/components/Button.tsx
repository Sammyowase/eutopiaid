import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  animationDelay?: number;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  type = 'button',
  onClick,
  className = '',
  animationDelay = 0,
  disabled = false,
}) => {
  // Following design doc exactly:
  // - Blue CTA → hover = slightly lighter gradient, soft shadow glow, scale (1.02x)
  // - Red CTA → hover = deeper shade, clean underline glow, no bounce
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const animationClass = 'scale-in'; // fade + slight scale-in (1.03x) on page load
  const cursorClass = 'cursor-glow'; // subtle hover glow rings for CTAs
  const disabledClass = disabled ? 'opacity-70 cursor-not-allowed' : '';
  const style = animationDelay ? { animationDelay: `${animationDelay}ms` } : {};
  
  if (href && !disabled) {
    return (
      <Link 
        href={href}
        className={`${baseClasses} ${animationClass} ${cursorClass} inline-flex items-center justify-center ${className}`}
        style={style}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${animationClass} ${cursorClass} inline-flex items-center justify-center ${className} ${disabledClass}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;