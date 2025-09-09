
"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScroll(scrolled);
      
      // Show progress bar only when scrolling starts
      if (window.scrollY > 50 && !isVisible) {
        setIsVisible(true);
        controls.start({ 
          opacity: 1,
          transition: { duration: 0.3 }
        });
      } else if (window.scrollY <= 50 && isVisible) {
        setIsVisible(false);
        controls.start({ 
          opacity: 0,
          transition: { duration: 0.3 }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, controls]);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-2 z-50"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {/* Background track */}
      <div className="absolute inset-0 bg-gray-100/30 backdrop-blur-sm"></div>
      
      {/* Progress indicator */}
      <div
        className="h-full bg-gradient-to-r from-[var(--deep-blue-light)] to-[var(--professional-red)] relative"
        style={{ width: `${scroll}%` }}
      >
        {/* Animated glow effect */}
        <div className="absolute top-0 right-0 h-full w-8 bg-white/30 blur-sm"></div>
        
        {/* Animated dot at the end */}
        <div 
          className="absolute top-1/2 right-0 w-3 h-3 rounded-full bg-white shadow-md transform -translate-y-1/2 translate-x-1/2"
          style={{
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)"
          }}
        ></div>
      </div>
    </motion.div>
  );
}
