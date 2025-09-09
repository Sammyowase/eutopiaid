import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { Suspense } from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Thank You - Eutopia ID',
  description: 'Thank you for joining the Eutopia ID waitlist',
};

function ThankYouClient({ searchParams }: { searchParams: { name?: string } }) {
  const name = searchParams.name || 'there';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Checkmark with animation - exactly as specified in design doc */}
          <div className="mb-8 inline-block">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-50 to-blue-100 rounded-full flex items-center justify-center shadow-md">
              <svg 
                className="w-12 h-12 text-[var(--deep-blue-light)]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2.5" 
                  d="M5 13l4 4L19 7"
                  className="checkmark-path"
                ></path>
              </svg>
            </div>
          </div>
          
          {/* Headline with fade-in animation */}
          <h1 className="text-4xl font-bold mb-6 text-[var(--deep-blue-dark)] fade-in">
            You're Officially on the Waitlist! 🎉
          </h1>
          
          {/* Message with elegant gradient glow behind text - as specified in design */}
          <div className="max-w-2xl mx-auto mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-blue-light)]/5 to-[var(--professional-red)]/5 rounded-xl blur-xl animate-pulse"></div>
            <p className="text-xl relative z-10 slide-up p-6 rounded-xl bg-white/80 backdrop-blur-sm" style={{ animationDelay: '150ms' }}>
              Thanks, <span className="font-semibold text-[var(--deep-blue-light)]">{name}</span>. 
              You'll be the first to know when Eutopia ID launches. 
              Until then, share this with someone you love — because their life matters too.
            </p>
          </div>
          
          {/* Share button with animation delay - as specified in design */}
          <Button 
            variant="secondary"
            className="px-8 py-3"
            animationDelay={300}
            onClick={() => {
              // Share functionality would go here
              navigator.share ? 
                navigator.share({
                  title: 'Join me on Eutopia ID',
                  text: 'I just joined the Eutopia ID waitlist. You should too!',
                  url: window.location.origin,
                }) : 
                alert('Share this link with your friends: ' + window.location.origin);
            }}
          >
            Share with Friends
          </Button>
          
          {/* Professional decorative element */}
          <div className="mt-16 opacity-30">
            <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[var(--deep-blue-light)] to-transparent"></div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default function ThankYouPage({ searchParams }: { searchParams: { name?: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouClient searchParams={searchParams} />
    </Suspense>
  );
}