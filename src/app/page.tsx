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
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <div className="h-full bg-gradient-to-r from-[var(--deep-blue-light)] to-[var(--professional-red)] w-0 scroll-progress"></div>
      </div>
      
      <Header />
      
      <main className="flex-grow relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-50 to-blue-100 opacity-60 blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-40 left-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-red-50 to-red-100 opacity-50 blur-3xl animate-float-medium"></div>
          <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 opacity-40 blur-3xl animate-float-fast"></div>
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
                {/* Main bracelet image */}
                <motion.div
                  className="absolute inset-0 z-20"
                  variants={braceletAnimation}
                  whileHover="hover"
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.1, 0.25, 1.0],
                    delay: 0.3
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/bracelet-premium.jpg"
                      alt="Eutopia ID Medical Bracelet"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                    
                    {/* Animated glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
                  </div>
                </motion.div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute top-[10%] right-[5%] w-20 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center z-10"
                  initial={{ opacity: 0, y: 20, rotate: -5 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotate: 0,
                    transition: { delay: 0.6, duration: 0.5 } 
                  }}
                  style={{ transformOrigin: "center center" }}
                >
                  <svg className="w-10 h-10 text-[var(--deep-blue-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-[15%] left-[5%] w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center z-10"
                  initial={{ opacity: 0, y: 20, rotate: 5 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotate: 0,
                    transition: { delay: 0.8, duration: 0.5 } 
                  }}
                  style={{ transformOrigin: "center center" }}
                >
                  <svg className="w-12 h-12 text-[var(--professional-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </motion.div>
                
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                  <div className="w-[80%] h-[80%] rounded-full border-2 border-dashed border-blue-200 animate-spin-slow"></div>
                  <div className="absolute w-[60%] h-[60%] rounded-full border-2 border-dashed border-red-200 animate-spin-reverse-slow"></div>
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
