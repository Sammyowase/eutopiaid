'use client'

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignupForm from '@/components/SignupForm';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SignupPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" as const}
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: "easeInOut" as const, delay: 0.2 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] overflow-hidden">
      <Header />
      
      <main className="flex-grow relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Large blue gradient blob */}
          <div className="absolute top-20 right-[-10%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-blue-50 via-blue-100/70 to-indigo-50/60 opacity-70 blur-3xl animate-float-slow"></div>
          
          {/* Red accent blob */}
          <div className="absolute bottom-40 left-[-5%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-red-50/80 via-red-100/60 to-pink-50/50 opacity-60 blur-3xl animate-float-medium"></div>
          
          {/* Small blue accent blob */}
          <div className="absolute top-[40%] left-[20%] w-[350px] h-[350px] rounded-full bg-gradient-to-r from-blue-50/70 via-indigo-50/60 to-purple-50/50 opacity-50 blur-3xl animate-float-fast"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
          
          {/* Light beam effect */}
          <div className="absolute top-0 left-[30%] w-[150px] h-[100vh] bg-gradient-to-b from-blue-100/10 via-white/5 to-transparent transform -rotate-[20deg] animate-float-slow opacity-30 blur-lg"></div>
        </div>
        
        <div className="py-8 sm:py-12 px-4 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left column - Form */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="order-2 lg:order-1 w-full"
            >
              {/* Blue section header - only visible on larger screens */}
              <motion.div 
                variants={fadeIn}
                className="hidden lg:block bg-gradient-to-r from-[var(--deep-blue-dark)] to-[var(--deep-blue-light)] text-white py-10 px-6 rounded-t-2xl shadow-lg mb-0"
              >
                <div className="text-center">
                  <motion.h1 
                    variants={fadeIn}
                    className="text-3xl md:text-4xl font-bold mb-4"
                  >
                    Join the Waitlist for Eutopia ID
                  </motion.h1>
                  <motion.p 
                    variants={fadeIn}
                    className="text-lg max-w-2xl mx-auto opacity-90"
                  >
                    Fill in your details to be first in line when we launch.
                  </motion.p>
                </div>
              </motion.div>
              
              {/* Mobile header - only visible on small screens */}
              <motion.div 
                variants={fadeIn}
                className="lg:hidden bg-gradient-to-r from-[var(--deep-blue-dark)] to-[var(--deep-blue-light)] text-white py-6 px-4 rounded-t-2xl shadow-lg mb-0"
              >
                <div className="text-center">
                  <motion.h1 
                    variants={fadeIn}
                    className="text-2xl sm:text-3xl font-bold mb-2"
                  >
                    Join the Waitlist
                  </motion.h1>
                  <motion.p 
                    variants={fadeIn}
                    className="text-base sm:text-lg max-w-2xl mx-auto opacity-90"
                  >
                    Be first in line when we launch.
                  </motion.p>
                </div>
              </motion.div>
              
              {/* White section with form */}
              <motion.div 
                variants={fadeIn}
                className="bg-white/90 backdrop-blur-sm py-8 sm:py-12 md:py-16 px-4 sm:px-6 rounded-b-2xl shadow-lg"
              >
                <SignupForm />
              </motion.div>
            </motion.div>
            
            {/* Right column - Image and info */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="order-1 lg:order-2 w-full"
            >
              <motion.div 
                className="relative"
                variants={imageAnimation}
              >
                {/* Image container - responsive sizing */}
                <div className="relative w-full aspect-square max-w-sm sm:max-w-md mx-auto">
                  {/* Main image */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm p-4 sm:p-6 shadow-xl border border-gray-100 hover-lift">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      {/* Shimmer overlay */}
                      <div className="absolute inset-0 z-20 rounded-xl animate-shimmer opacity-50 pointer-events-none"></div>
                      
                      {/* Enhanced shine effect */}
                      <div className="absolute inset-0 overflow-hidden z-20">
                        <div className="absolute top-0 left-[-100%] h-full w-[50%] bg-gradient-to-r from-transparent via-white/50 to-transparent transform skew-x-[-20deg] animate-enhanced-shine"></div>
                      </div>
                      
                      <Image
                        src="/images/camila-seves-espasandin-WgzPDDYiDLE-unsplash.jpg"
                        alt="Eutopia ID Medical Bracelet"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ 
                          objectFit: 'cover',
                          filter: 'contrast(1.05) brightness(1.02)'
                        }}
                      />
                      
                      {/* Enhanced glow effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-red-400/30 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
                    </div>
                  </div>
                  
                  {/* Floating elements - responsive positioning and sizing */}
                  <motion.div 
                    className="absolute top-[5%] sm:top-[10%] right-[-2%] sm:right-[-5%] w-24 sm:w-28 md:w-32 h-auto aspect-square bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-2 sm:p-3 md:p-5 z-10 animate-subtle-float hover-lift"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    <div className="h-full flex flex-col justify-center">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[var(--deep-blue-dark)] mb-1 sm:mb-2">Quick Access</h3>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">No app needed to access your medical information in emergencies</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute bottom-[5%] sm:bottom-[10%] left-[-2%] sm:left-[-5%] w-24 sm:w-28 md:w-32 h-auto aspect-square bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-2 sm:p-3 md:p-5 z-10 animate-subtle-float hover-lift"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="h-full flex flex-col justify-center">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[var(--professional-red)] mb-1 sm:mb-2">Life Saving</h3>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">Provides critical medical info when you can't communicate</p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Testimonial - responsive layout */}
                <motion.div 
                  className="mt-8 sm:mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover-lift relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  {/* Subtle gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-red-50/20 opacity-70"></div>
                  
                  {/* Quote icon */}
                  <div className="absolute top-3 right-3 text-blue-100 opacity-50">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-lg font-medium text-blue-800 shadow-md hover-glow">
                        DR
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 italic mb-3 text-sm sm:text-base relative">
                        "As an emergency physician, I've seen how critical immediate access to medical information can be. The Eutopia ID bracelet is a game-changer for patient care in emergencies."
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <p className="text-sm font-medium text-[var(--deep-blue-dark)]">
                          Dr. Rebecca Johnson
                        </p>
                        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                        <p className="text-xs text-gray-500">
                          Emergency Medicine, Lagos University Teaching Hospital
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}