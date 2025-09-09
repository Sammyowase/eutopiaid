import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 md:py-5 px-4 md:px-8 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-[var(--deep-blue-dark)]/95 to-[var(--deep-blue-light)]/95 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-[var(--deep-blue-dark)] to-[var(--deep-blue-light)] shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-bold text-white hover:opacity-90 transition-opacity duration-300 flex items-center"
        >
          <svg 
            className={`w-7 h-7 md:w-8 md:h-8 mr-2 transition-all duration-300 ${
              scrolled ? 'transform scale-90' : ''
            }`}
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
        
        {/* Navigation links - visible on larger screens */}
        {/* <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-blue-100 transition-colors">
            Home
          </Link>
          <Link href="/waitlist" className="text-white hover:text-blue-100 transition-colors">
            Join Waitlist
          </Link>
          <Link href="#about" className="text-white hover:text-blue-100 transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-white hover:text-blue-100 transition-colors">
            Contact
          </Link>
        </nav> */}
        
        {/* Mobile menu button */}
        {/* <button className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button> */}
      </div>
    </header>
  );
};

export default Header;