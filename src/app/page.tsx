'use client'

import Header from "@/components/Header";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ScrollProgress from "@/components/scrollProgress";

export default function Home() {
  // Hero content
  const heroTitle = "Every Second Counts. Protect Your Life with Eutopia ID.";
  const heroSubtitle = "Join the waitlist today and be the first to get the life-saving bracelet that ensures doctors know who you are when it matters most.";
  const heroCta = "Join the Waitlist";
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0
    },
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1.0] // easeOut
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    },
    transition: {
      staggerChildren: 0.2
    }
  };
  
  const braceletAnimation = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0
    },
    hover: {
      scale: 1.05,
      rotate: 2
    },
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1.0], // easeOut
      delay: 0.3
    }
  };
  
  return (
    <div>
      <ScrollProgress />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] overflow-hidden">
      
      <Header />
      
      <main className="flex-grow relative pt-16 md:pt-20">
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Large blue gradient blob */}
          <div className="absolute top-20 right-[-10%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-blue-50 via-blue-100/70 to-indigo-50/60 opacity-70 blur-3xl animate-float-slow"></div>
          
          {/* Red accent blob */}
          <div className="absolute bottom-40 left-[-5%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-red-50/80 via-red-100/60 to-pink-50/50 opacity-60 blur-3xl animate-float-medium"></div>
          
          {/* Small blue accent blob */}
          <div className="absolute top-[40%] left-[20%] w-[350px] h-[350px] rounded-full bg-gradient-to-r from-blue-50/70 via-indigo-50/60 to-purple-50/50 opacity-50 blur-3xl animate-float-fast"></div>
          
          {/* Additional subtle blobs */}
          <div className="absolute top-[70%] right-[15%] w-[250px] h-[250px] rounded-full bg-gradient-to-tl from-green-50/40 to-blue-50/30 opacity-40 blur-3xl animate-float-medium" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute top-[15%] left-[40%] w-[200px] h-[200px] rounded-full bg-gradient-to-br from-yellow-50/30 to-orange-50/20 opacity-30 blur-3xl animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
          
          {/* Light beam effect */}
          <div className="absolute top-0 left-[30%] w-[150px] h-[100vh] bg-gradient-to-b from-blue-100/10 via-white/5 to-transparent transform -rotate-[20deg] animate-float-slow opacity-30 blur-lg"></div>
        </div>
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Left column - Text content */}
            <motion.div 
              variants={fadeIn} 
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="order-2 md:order-1"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--deep-blue-dark)] leading-tight mb-6"
                variants={fadeIn}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <span className="relative inline-block">
                  <span className="relative z-10">{heroTitle}</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--professional-red)]/10 rounded-lg -z-10"></span>
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl"
                variants={fadeIn}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                {heroSubtitle}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                variants={fadeIn}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <Button 
                  href="/waitlist" 
                  variant="secondary"
                  className="text-lg px-8 py-4 relative group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <span>{heroCta}</span>
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--professional-red)] to-[var(--professional-red-dark)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
                
                <div className="flex items-center text-gray-600 text-sm mt-2 sm:mt-0">
                  <div className="flex -space-x-2 mr-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-white flex items-center justify-center text-xs font-medium text-blue-800">
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span>Join <b>2,500+</b> on the waitlist</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-12 grid grid-cols-3 gap-4"
                variants={fadeIn}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                {[
                  { label: "Instant Access", value: "No App Needed" },
                  { label: "One-time Fee", value: "₦3,500" },
                  { label: "Nationwide", value: "Delivery" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="text-sm text-gray-500">{stat.label}</div>
                    <div className="text-lg font-semibold text-[var(--deep-blue-dark)]">{stat.value}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Right column - Image */}
            <motion.div 
              className="order-1 md:order-2 relative"
              variants={fadeIn}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Elegant circular animation elements - more proportional to the image */}
                <div className="absolute inset-[-5%] flex items-center justify-center">
                  {/* Outer rotating circle with gradient border and shimmer */}
                  <div className="absolute w-[120%] h-[120%] rounded-full border-[1px] border-blue-300/40 animate-spin-slow overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300/5 via-indigo-300/5 to-purple-300/5 opacity-30 animate-circle-shimmer"></div>
                    <div className="absolute top-0 left-[-100%] h-full w-[50%] bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-[-20deg] animate-enhanced-shine" style={{ animationDelay: '3s' }}></div>
                  </div>
                  
                  {/* Second outer circle with dots */}
                  <div className="absolute w-[115%] h-[115%] rounded-full animate-reverse-spin">
                    {/* Decorative dots along the circle */}
                    {[...Array(24)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`absolute rounded-full bg-gradient-to-r ${
                          i % 3 === 0 
                            ? "from-blue-400/60 to-indigo-400/60 animate-glow-pulse" 
                            : i % 3 === 1 
                              ? "from-red-400/50 to-pink-400/50" 
                              : "from-green-400/40 to-emerald-400/40"
                        }`}
                        style={{ 
                          // Use toFixed(5) to ensure consistent string formatting between server and client
                          top: `${(50 + 47 * Math.sin(i * (Math.PI / 12))).toFixed(5)}%`,
                          left: `${(50 + 47 * Math.cos(i * (Math.PI / 12))).toFixed(5)}%`,
                          width: i % 6 === 0 ? '5px' : i % 4 === 0 ? '3px' : '2px',
                          height: i % 6 === 0 ? '5px' : i % 4 === 0 ? '3px' : '2px',
                          // Convert numbers to strings for consistent rendering
                          opacity: i % 2 === 0 ? '0.9' : '0.5',
                          // Use CSS custom property for animation delay
                          '--animation-delay': `${(i * 0.2).toFixed(1)}s`,
                          animationDelay: `var(--animation-delay)`
                        } as React.CSSProperties}
                      />
                    ))}
                  </div>
                  
                  {/* Middle rotating circle with gradient */}
                  <div className="absolute w-[110%] h-[110%] rounded-full border-[1px] border-red-200/30 animate-spin-slow" style={{ animationDuration: '25s' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-300/5 via-transparent to-red-200/5 opacity-20 animate-circle-shimmer" style={{ animationDelay: '2s' }}></div>
                    
                    {/* Additional decorative elements */}
                    <div className="absolute top-[10%] right-[10%] w-3 h-3 rounded-full bg-red-400/20 blur-sm animate-float-slow"></div>
                    <div className="absolute bottom-[15%] left-[20%] w-4 h-4 rounded-full bg-blue-400/20 blur-sm animate-float-medium" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  {/* Inner pulsing circle with elegant gradient */}
                  <div className="absolute w-[105%] h-[105%] rounded-full border-[1px] border-blue-300/30 animate-pulse-slow">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/5 via-transparent to-indigo-300/5 opacity-20 animate-circle-shimmer" style={{ animationDelay: '1.5s' }}></div>
                    
                    {/* Subtle dashed inner border */}
                    <div className="absolute w-[95%] h-[95%] top-[2.5%] left-[2.5%] rounded-full border-[1px] border-dashed border-white/20 animate-reverse-spin" style={{ animationDuration: '30s' }}></div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute w-[120%] h-[120%]">
                    {/* Orbiting elegant element 1 - Blue orb with inner glow */}
                    <div className="absolute top-[5%] left-[50%] animate-orbit-clockwise">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400/80 to-indigo-500/80 shadow-lg shadow-blue-400/30 flex items-center justify-center animate-glow-pulse">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-white/90 to-blue-100/80 animate-pulse-slow"></div>
                        <div className="absolute inset-0 rounded-full border border-white/40 animate-spin-slow" style={{ animationDuration: '10s' }}></div>
                      </div>
                    </div>
                    
                    {/* Orbiting elegant element 2 - Red orb with rings */}
                    <div className="absolute top-[50%] right-[5%] animate-orbit-counter z-10" style={{ animationDelay: '0.5s' }}>
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-400/70 to-pink-500/70 shadow-lg shadow-red-400/30 flex items-center justify-center p-1 animate-glow-pulse" style={{ animationDelay: '1s' }}>
                        <div className="w-full h-full rounded-full border-2 border-white/40 animate-reverse-spin" style={{ animationDuration: '10s' }}></div>
                        <div className="absolute w-[130%] h-[130%] rounded-full border border-red-200/30 animate-spin-slow" style={{ animationDuration: '15s' }}></div>
                        <div className="absolute w-[160%] h-[160%] rounded-full border border-dashed border-red-200/20 animate-reverse-spin" style={{ animationDuration: '20s' }}></div>
                      </div>
                    </div>
                    
                    {/* Orbiting elegant element 3 - Green orb with pulsing effect */}
                    <div className="absolute bottom-[10%] left-[20%] animate-orbit-clockwise" style={{ animationDelay: '1s' }}>
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400/70 to-emerald-500/70 shadow-lg shadow-green-400/30 animate-glow-pulse" style={{ animationDelay: '2s' }}>
                        <div className="absolute inset-0 rounded-full border border-white/40 animate-pulse-slow"></div>
                        <div className="absolute w-[120%] h-[120%] rounded-full border border-green-200/30 animate-spin-slow" style={{ animationDuration: '12s' }}></div>
                        <div className="absolute w-2 h-2 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                    
                    {/* Additional orbiting element 4 - Purple diamond */}
                    <div className="absolute top-[30%] left-[10%] animate-orbit-counter" style={{ animationDelay: '1.5s' }}>
                      <div className="w-4 h-4 bg-gradient-to-br from-purple-400/70 to-indigo-500/70 shadow-lg shadow-purple-400/30 animate-glow-pulse rotate-45" style={{ animationDelay: '3s' }}>
                        <div className="absolute inset-0 border border-white/40 animate-spin-slow" style={{ animationDuration: '8s' }}></div>
                        <div className="absolute w-1.5 h-1.5 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white/80 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Floating glowing elements */}
                    <div className="absolute top-[15%] right-[20%] w-8 h-8 rounded-full bg-purple-300/30 blur-md animate-float-fast"></div>
                    <div className="absolute bottom-[25%] right-[25%] w-6 h-6 rounded-full bg-yellow-300/30 blur-md animate-float-medium" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute top-[40%] left-[15%] w-9 h-9 rounded-full bg-blue-300/20 blur-md animate-float-slow" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-[40%] right-[10%] w-10 h-10 rounded-full bg-green-300/20 blur-md animate-float-medium" style={{ animationDelay: '2.5s' }}></div>
                  </div>
                </div>
                
                {/* Main bracelet image */}
                <motion.div
                  className="absolute inset-[5%] z-20"
                  variants={braceletAnimation}
                  whileHover="hover"
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeInOut" as const,
                    delay: 0.3
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm p-6 shadow-xl border border-gray-100">
                    {/* Enhanced image container with frame effect */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      {/* Shimmer overlay */}
                      <div className="absolute inset-0 z-20 rounded-xl animate-shimmer opacity-50 pointer-events-none"></div>
                      
                      <Image
                        src="/images/bracelet-premium.jpg"
                        alt="Eutopia ID Medical Bracelet"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ 
                          objectFit: 'contain',
                          transform: 'scale(0.9)',
                          filter: 'contrast(1.05) brightness(1.02)'
                        }}
                      />
                      
                      {/* Enhanced glow effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-red-400/30 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/20 to-indigo-400/20 rounded-full blur-2xl animate-pulse-slow -z-10" style={{ animationDelay: '1s' }}></div>
                      
                      {/* Enhanced shine effect */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-[-100%] h-full w-[50%] bg-gradient-to-r from-transparent via-white/50 to-transparent transform skew-x-[-20deg] animate-enhanced-shine"></div>
                      </div>
                      
                      {/* Subtle breathing effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 to-red-100/10 rounded-full animate-breathing"></div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Enhanced Floating elements */}
                <motion.div 
                  className="absolute top-[5%] right-[2%] w-24 h-24 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl flex items-center justify-center z-10 overflow-hidden animate-subtle-float"
                  initial={{ opacity: 0, y: 20, rotate: -5, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotate: 0,
                    scale: 1,
                    transition: { delay: 0.6, duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } 
                  }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformOrigin: "center center" }}
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-blue-100/50 rounded-bl-3xl"></div>
                  
                  {/* Icon with subtle animation */}
                  <div className="relative z-10">
                    <svg className="w-12 h-12 text-[var(--deep-blue-light)] animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-[-100%] h-full w-[50%] bg-gradient-to-r from-transparent via-white/50 to-transparent transform skew-x-[-20deg] animate-shine" style={{ animationDelay: '1s' }}></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-[10%] left-[2%] w-28 h-28 bg-gradient-to-br from-white to-red-50 rounded-2xl shadow-xl flex items-center justify-center z-10 overflow-hidden animate-subtle-float"
                  initial={{ opacity: 0, y: 20, rotate: 5, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotate: 0,
                    scale: 1,
                    transition: { delay: 0.8, duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } 
                  }}
                  whileHover={{ 
                    y: 5, 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformOrigin: "center center" }}
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 left-0 w-12 h-12 bg-red-100/50 rounded-br-3xl"></div>
                  
                  {/* Icon with subtle animation */}
                  <div className="relative z-10">
                    <svg className="w-14 h-14 text-[var(--professional-red)] animate-pulse-slow" style={{ animationDelay: '0.5s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-[-100%] h-full w-[50%] bg-gradient-to-r from-transparent via-white/50 to-transparent transform skew-x-[-20deg] animate-shine" style={{ animationDelay: '2s' }}></div>
                  </div>
                </motion.div>
                
                {/* New floating element - medical cross */}
                <motion.div 
                  className="absolute top-[40%] right-[-5%] w-20 h-20 bg-gradient-to-br from-white to-blue-50/80 rounded-full shadow-lg flex items-center justify-center z-10 overflow-hidden animate-subtle-float"
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    transition: { delay: 1.0, duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } 
                  }}
                  style={{ transformOrigin: "center center" }}
                >
                  <div className="relative z-10">
                    <svg className="w-10 h-10 text-[var(--professional-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </motion.div>
                
                {/* Enhanced animated rings */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                  {/* Outer ring with gradient */}
                  <div className="w-[85%] h-[85%] rounded-full border-2 border-dashed border-blue-200 animate-spin-slow overflow-hidden">
                    {/* Gradient overlay on ring */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* Middle ring */}
                  <div className="absolute w-[65%] h-[65%] rounded-full border-2 border-dashed border-red-200 animate-spin-reverse-slow overflow-hidden">
                    {/* Gradient overlay on ring */}
                    <div className="absolute inset-0 bg-gradient-to-bl from-red-200/30 to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* Inner ring - new */}
                  <div className="absolute w-[45%] h-[45%] rounded-full border-2 border-dotted border-indigo-200 animate-spin-slow overflow-hidden" style={{ animationDuration: '25s' }}>
                    {/* Gradient overlay on ring */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/30 to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* Decorative dots at intersections */}
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 shadow-sm"
                      style={{ 
                        transform: `rotate(${(i * 45).toFixed(1)}deg) translateX(42.5%) translateY(-50%)`,
                        transformOrigin: 'center center',
                        opacity: '0.7',
                        '--animation-delay': `${(i * 0.2).toFixed(1)}s`,
                        animationDelay: 'var(--animation-delay)',
                        animationName: 'pulse',
                        animationDuration: '3s',
                        animationTimingFunction: 'ease-in-out',
                        animationIterationCount: 'infinite'
                      } as React.CSSProperties}
                    />
                  ))}
                  
                  {/* Decorative dots on middle ring */}
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-red-300 to-red-400 shadow-sm"
                      style={{ 
                        transform: `rotate(${(i * 60).toFixed(1)}deg) translateX(32.5%) translateY(-50%)`,
                        transformOrigin: 'center center',
                        opacity: '0.7',
                        '--animation-delay': `${(i * 0.3 + 0.5).toFixed(1)}s`,
                        animationDelay: 'var(--animation-delay)',
                        animationName: 'pulse',
                        animationDuration: '3s',
                        animationTimingFunction: 'ease-in-out',
                        animationIterationCount: 'infinite'
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4 md:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue-dark)] mb-4">
                Why Choose Eutopia ID?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our medical ID bracelet is designed to save lives by providing critical information when every second counts.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Instant Access",
                  description: "Critical medical information available instantly in emergencies, no internet or app required."
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Life-Saving Information",
                  description: "Blood type, medical conditions, allergies, and emergency contacts - all in one place."
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Affordable",
                  description: "Just ₦3,500 one-time payment. No subscriptions, no hidden fees, nationwide delivery."
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 group hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
                >
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[var(--professional-red)]/10 to-transparent transform origin-top-right scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  </div>
                  
                  <div className="relative">
                    <div className="text-[var(--professional-red)] mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-[var(--deep-blue-dark)]">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-[var(--deep-blue-dark)] to-[var(--deep-blue-light)] text-white relative">
          {/* Decorative pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="max-w-7xl mx-auto relative">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Problem & Our Solution
              </h2>
              <div className="h-1 w-20 bg-[var(--professional-red)] mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="order-2 md:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 relative">
                    <div className="absolute top-0 left-0 w-12 h-12 bg-[var(--professional-red)] rounded-tl-xl rounded-br-xl flex items-center justify-center -translate-x-4 -translate-y-4 shadow-lg">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <p className="text-xl ml-6 mt-2">
                      What kills Nigerians isn't always the injury. It's the <span className="text-[var(--professional-red)] font-semibold">guesswork</span>. Eutopia ID changes that.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 relative">
                    <div className="absolute top-0 left-0 w-12 h-12 bg-[var(--professional-red)] rounded-tl-xl rounded-br-xl flex items-center justify-center -translate-x-4 -translate-y-4 shadow-lg">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <p className="text-xl ml-6 mt-2">
                      For just ₦3,500, you get a bracelet that carries your <span className="text-[var(--professional-red)] font-semibold">vital information</span> — blood type, medical conditions, and emergency contact — no app, no internet, no excuses.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="order-1 md:order-2 relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <div className="relative aspect-square max-w-md mx-auto">
                  <Image
                    src="/images/emergency-scene.png"
                    alt="Emergency medical situation"
                    fill
                    className="object-cover rounded-2xl"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-blue-dark)]/80 to-transparent rounded-2xl"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="text-2xl font-bold mb-2">Every Second Counts</div>
                    <div className="text-white/80">When medical professionals have the right information immediately, they can make better decisions faster.</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8">
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100 to-blue-50 rounded-full blur-3xl opacity-70 -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-100 to-red-50 rounded-full blur-3xl opacity-70 translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="relative p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue-dark)] mb-6">
                Ready to secure your health information?
              </h2>
              
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Join thousands of Nigerians who are taking control of their emergency medical information with Eutopia ID.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                <Button 
                  href="/waitlist" 
                  variant="secondary"
                  className="text-lg px-10 py-4 relative group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <span>{heroCta}</span>
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--professional-red)] to-[var(--professional-red-dark)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
                
                <Button 
                  href="/learn-more" 
                  variant="primary"
                  className="text-lg px-10 py-4"
                >
                  Learn More
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  "Secure & Private",
                  "No Subscription",
                  "Nationwide Delivery",
                  "One-time Payment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
      
      {/* Add scroll-based animation script */}
      {/* <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            window.addEventListener('scroll', function() {
              const scrollProgress = document.querySelector('.scroll-progress');
              const totalHeight = document.body.scrollHeight - window.innerHeight;
              const progress = (window.pageYOffset / totalHeight) * 100;
              scrollProgress.style.width = progress + '%';
              
              // Reveal animations on scroll
              const animatedElements = document.querySelectorAll('.reveal-on-scroll');
              animatedElements.forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                const elementVisible = 150;
                if (elementTop < window.innerHeight - elementVisible) {
                  el.classList.add('active');
                }
              });
            });
          });
        `
      }} /> */}
    </div>
    </div>
  );
}
