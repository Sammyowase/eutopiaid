'use client'

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'there';
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  
  const checkmarkAnimation = {
    hidden: { opacity: 0, scale: 0.5, pathLength: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      pathLength: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeInOut" as const,
        delay: 0.2
      }
    }
  };

  const pulseAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: [1, 1.05, 1],
      opacity: 1,
      transition: { 
        scale: {
          repeat: Infinity,
          repeatType: "reverse" as const,
          duration: 2,
          ease: "easeInOut" as const
        },
        opacity: {
          duration: 0.4
        }
      }
    }
  };

  const floatAnimation = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse" as const,
          duration: 3,
          ease: "easeInOut" as const
        },
        opacity: {
          duration: 0.4
        }
      }
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
          
          {/* Green success blob */}
          <div className="absolute bottom-40 left-[-5%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-green-50/80 via-green-100/60 to-emerald-50/50 opacity-60 blur-3xl animate-float-medium"></div>
          
          {/* Small blue accent blob */}
          <div className="absolute top-[40%] left-[20%] w-[350px] h-[350px] rounded-full bg-gradient-to-r from-blue-50/70 via-indigo-50/60 to-purple-50/50 opacity-50 blur-3xl animate-float-fast"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
          
          {/* Light beam effect */}
          <div className="absolute top-0 left-[30%] w-[150px] h-[100vh] bg-gradient-to-b from-green-100/10 via-white/5 to-transparent transform -rotate-[20deg] animate-float-slow opacity-30 blur-lg"></div>
          
          {/* Confetti effect */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['#4F46E5', '#10B981', '#3B82F6', '#EC4899', '#F59E0B'][i % 5],
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.6,
                  animation: `fall ${3 + Math.random() * 5}s linear infinite ${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="py-16 px-4 max-w-7xl mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            {/* Success checkmark */}
            <motion.div 
              className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden hover-glow"
              variants={pulseAnimation}
            >
              {/* Decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-green-200/40 to-green-300/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-tr from-blue-100/30 to-blue-200/20 rounded-full blur-xl"></div>
              </div>
              
              {/* Enhanced shine effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-[-100%] h-full w-[50%] bg-gradient-to-r from-transparent via-white/70 to-transparent transform skew-x-[-20deg] animate-enhanced-shine"></div>
              </div>
              
              {/* Checkmark */}
              <svg className="w-16 h-16 text-green-500 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                  d="M5 13l4 4L19 7" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  variants={checkmarkAnimation}
                  initial="hidden"
                  animate="visible"
                />
              </svg>
              
              {/* Subtle ring */}
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-green-200 animate-spin-slow opacity-70"></div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-[var(--deep-blue-dark)] mb-6"
              variants={fadeIn}
            >
              You're Officially on the Waitlist! 🎉
            </motion.h1>
            
            {/* Message with elegant gradient glow */}
            <motion.div 
              className="max-w-2xl mx-auto mb-12 relative"
              variants={fadeIn}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-blue-light)]/10 to-[var(--professional-red)]/10 rounded-xl blur-xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-blue-400/5 rounded-xl"></div>
              <div className="relative z-10 p-6 sm:p-8 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-100 shadow-lg hover-lift">
                <div className="absolute top-3 right-3 text-green-100 opacity-30">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl">
                  Thanks, <span className="font-semibold text-[var(--deep-blue-light)]">{name}</span>! 
                  <span className="block mt-2">You'll be the first to know when Eutopia ID launches.</span>
                  <span className="block mt-2 text-gray-600">Until then, share this with someone you love — because their life matters too.</span>
                </p>
              </div>
            </motion.div>
            
            {/* Bracelet image */}
            <motion.div 
              className="mb-12 relative"
              variants={floatAnimation}
            >
              <div className="relative w-full max-w-md h-64 mx-auto rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm p-4 shadow-xl border border-gray-100 hover-lift">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-green-400/30 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute top-[5%] right-[-2%] w-28 h-auto aspect-square bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-3 z-10 animate-subtle-float hover-lift"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-base font-semibold text-green-600 mb-1">Coming Soon</h3>
                    <p className="text-xs text-gray-600 line-clamp-3">We're preparing for launch!</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Share button */}
            <motion.div variants={fadeIn}>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--professional-red)] to-[var(--professional-red-dark)] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Button 
                  variant="secondary"
                  className="relative px-8 py-4 text-lg font-medium transition-all duration-200 transform group-hover:scale-[1.01]"
                  onClick={() => {
                    // Share functionality
                    navigator.share ? 
                      navigator.share({
                        title: 'Join me on Eutopia ID',
                        text: 'I just joined the Eutopia ID waitlist. You should too!',
                        url: window.location.origin,
                      }) : 
                      alert('Share this link with your friends: ' + window.location.origin);
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                    </svg>
                    Share with Friends
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </div>
            </motion.div>
            
            {/* Return home link */}
            <motion.div 
              className="mt-8"
              variants={fadeIn}
            >
              <a href="/" className="inline-flex items-center text-[var(--deep-blue-light)] hover:text-[var(--professional-red)] transition-colors py-2 px-4 rounded-lg hover:bg-blue-50/50">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Return to Home
              </a>
            </motion.div>
            
            {/* Professional decorative element */}
            <motion.div 
              className="mt-16 opacity-30"
              variants={fadeIn}
            >
              <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[var(--deep-blue-light)] to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}