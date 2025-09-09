import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  // Following design doc exactly:
  // - Deep Blue Gradient used for headers
  // - Modern line-based icons with rounded corners
  return (
    <header className="py-6 px-4 md:px-8 bg-gradient-to-r from-[var(--deep-blue-dark)] to-[var(--deep-blue-light)] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold text-white hover:opacity-90 transition-opacity duration-300 flex items-center"
        >
          <svg 
            className="w-8 h-8 mr-2" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M12 12L12 16" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <circle 
              cx="12" 
              cy="9" 
              r="1" 
              fill="currentColor"
            />
          </svg>
          Eutopia ID
        </Link>
      </div>
    </header>
  );
};

export default Header;