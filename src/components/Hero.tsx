import React from 'react';
import Button from './Button';
import Image from 'next/image';

type HeroProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  // Following design doc exactly with advanced animations:
  // - Deep Blue Gradient for hero backgrounds
  // - Hero Headline: Gentle fade-in with slight upward motion (300ms)
  // - CTA Button: fade + slight scale-in (1.03x) on page load
  // - Professional Red for CTA buttons
  // - Landing Page: 40% Deep Blue, 40% White, 20% Red accents
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[var(--deep-blue-dark)] to-[var(--deep-blue-light)] text-white py-20 px-4 md:px-8 rounded-2xl shadow-lg">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[var(--professional-red)]/5 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-blue-300/10 rounded-full blur-2xl animate-float-fast"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          {/* Animated title with letter-by-letter reveal */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            {title.split('').map((char, index) => (
              <span 
                key={index} 
                className="inline-block animate-letter-fade" 
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          
          {/* Subtitle with staggered line reveal */}
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl slide-up" style={{ animationDelay: '150ms' }}>
            {subtitle}
          </p>
          
          {/* CTA with enhanced animation */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--professional-red)]/60 to-[var(--professional-red)]/20 rounded-full blur-md animate-pulse-slow"></div>
            <Button 
              href={ctaLink} 
              variant="secondary" // Professional Red for CTA buttons
              className="text-lg px-8 py-4 relative z-10"
              animationDelay={300}
            >
              <span className="mr-2">{ctaText}</span>
              <svg className="w-5 h-5 inline-block animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Button>
          </div>
          
          {/* Trust indicators with fade-in animation */}
          <div className="mt-8 flex items-center space-x-4 slide-up" style={{ animationDelay: '450ms' }}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-white flex items-center justify-center text-xs font-bold">
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm opacity-90">Join <span className="font-bold">1,000+</span> people already on the waitlist</p>
          </div>
        </div>
        
        {/* Animated product image */}
        <div className="md:w-2/5 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-[var(--professional-red)]/20 rounded-xl blur-xl animate-pulse-slow"></div>
          <div className="relative z-10 scale-in" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2830&auto=format&fit=crop')] bg-cover bg-center animate-slow-zoom"></div>
              
              {/* Product overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <h3 className="text-[var(--deep-blue-dark)] font-bold">Eutopia ID Bracelet</h3>
                  <p className="text-gray-700 text-sm">Life-saving medical information at a glance</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-[var(--professional-red)] font-bold">₦3,500</span>
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Pre-order</span>
                  </div>
                </div>
              </div>
              
              {/* Animated shine effect */}
              <div className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-shine z-10"></div>
            </div>
          </div>
          
          {/* Floating medical icons */}
          <div className="absolute -top-5 -right-5 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-[var(--professional-red)] animate-float-medium">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-[var(--deep-blue-light)] animate-float-slow">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;