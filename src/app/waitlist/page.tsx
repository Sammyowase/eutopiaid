import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignupForm from '@/components/SignupForm';

export const metadata = {
  title: 'Join the Waitlist - Eutopia ID',
  description: 'Sign up to be the first to know when Eutopia ID launches',
};

export default function SignupPage() {
  // Following design doc exactly:
  // - Form Page: 50% White, 30% Deep Blue, 20% Red
  // - Sequential reveal → content flows in gracefully, not all at once
  return (
    <div className="min-h-screen flex flex-col bg-[var(--off-white)]">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Blue section - 30% */}
          <div className="bg-gradient-to-r from-[var(--deep-blue-dark)] to-[var(--deep-blue-light)] text-white py-12 px-6 rounded-t-2xl shadow-lg mb-0">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
                Join the Waitlist for Eutopia ID
              </h1>
              <p className="text-lg max-w-2xl mx-auto slide-up opacity-90" style={{ animationDelay: '150ms' }}>
                Fill in your details to be first in line when we launch.
              </p>
            </div>
          </div>
          
          {/* White section with form - 50% */}
          <div className="bg-white py-16 px-6 rounded-b-2xl shadow-lg">
            <SignupForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}