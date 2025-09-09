import React from 'react';

type StorySectionProps = {
  items: {
    text: string;
  }[];
};

const StorySection: React.FC<StorySectionProps> = ({ items }) => {
  // Following design doc exactly with advanced animations:
  // - Sequential reveal → content flows in gracefully, not all at once
  // - Cards/Sections: Hover = lift with soft shadow (Apple card hover effect)
  // - White & Off-White as the canvas to let blue + red breathe
  return (
    <div className="py-16 px-4 md:px-8 bg-[var(--off-white)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 animate-float-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-40 animate-float-medium"></div>
      
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--deep-blue-light)]/0 via-[var(--deep-blue-light)]/30 to-[var(--deep-blue-light)]/0 hidden md:block"></div>
      
      <div className="max-w-5xl mx-auto relative">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`mb-16 relative ${index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'} md:w-[calc(50%-2rem)] slide-up`}
            style={{ animationDelay: `${index * 250}ms` }}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-white rounded-full border-2 border-[var(--professional-red)] transform -translate-x-1/2 -translate-y-1/2 hidden md:block z-10">
              <div className="absolute inset-1 bg-[var(--professional-red)] rounded-full animate-pulse"></div>
            </div>
            
            {/* Card with enhanced hover effects */}
            <div className="relative group">
              {/* Animated gradient border on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--deep-blue-light)] to-[var(--professional-red)] rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
              
              <div className="relative bg-white rounded-xl shadow-lg p-8 transition-all duration-500 
                            hover:shadow-2xl hover:-translate-y-1 overflow-hidden z-0">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--deep-blue-light)]/10 to-[var(--professional-red)]/10 rounded-bl-3xl"></div>
                
                {/* Animated icon based on index */}
                <div className="mb-4 text-[var(--professional-red)]">
                  {index === 0 ? (
                    <svg className="w-12 h-12 animate-float-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-12 h-12 animate-float-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                </div>
                
                {/* Text with enhanced typography */}
                <p className="text-lg md:text-xl leading-relaxed text-[var(--foreground)] relative z-10">
                  {item.text.split(' ').map((word, wordIndex) => (
                    <span 
                      key={wordIndex} 
                      className={wordIndex % 7 === 0 ? 'text-[var(--deep-blue-light)] font-semibold' : ''}
                    >
                      {word}{' '}
                    </span>
                  ))}
                </p>
                
                {/* Animated shine effect on hover */}
                <div className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:animate-shine"></div>
              </div>
            </div>
            
            {/* Timeline connector line */}
            <div className={`absolute top-1/2 ${index % 2 === 0 ? 'right-full' : 'left-full'} w-8 h-0.5 bg-[var(--deep-blue-light)]/30 hidden md:block`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorySection;