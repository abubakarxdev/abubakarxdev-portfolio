"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Manifesto() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Massive Kinetic scroll transforms
  const textX1 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const textX2 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-[70vh] overflow-hidden bg-obsidian py-32 flex flex-col justify-center border-t border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="flex flex-col gap-2 md:gap-4 w-full select-none cursor-default overflow-hidden px-6 md:px-0 perspective-[1000px]">
        <motion.div 
          style={{ rotateX, scale, opacity }}
          className="flex flex-col w-full items-center md:items-start"
        >
          <motion.div 
            style={{ x: textX1 }}
            className="flex flex-col md:flex-row md:items-center font-bold font-sans tracking-tighter leading-[0.85] text-primary whitespace-nowrap"
          >
            <span className="text-[22vw] md:text-[12vw]">ZERO</span>
            <span className="text-[22vw] md:text-[12vw] md:ml-6">TRUST.</span>
          </motion.div>
          
          <motion.div 
            style={{ x: textX2 }}
            className="flex flex-col md:flex-row md:items-center font-bold font-sans tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-blue/80 to-white/20 whitespace-nowrap md:pl-[10vw]"
          >
            <span className="text-[17vw] md:text-[12vw]">INFINITE</span>
            <span className="text-[17vw] md:text-[12vw] md:ml-6">SCALE.</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-xl mx-auto px-6 text-center mt-24 z-10 relative">
        <p className="text-sm md:text-base font-mono text-muted/80 uppercase tracking-[0.25em] mb-8">
          // The Engineering Mandate
        </p>
        <p className="text-base md:text-lg text-muted/60 leading-relaxed font-sans">
          Modern infrastructure demands uncompromising security paired with unyielding performance. We architect systems that assume breach, verify explicitly, and deliver flawlessly across the global edge. No fragile dependencies, no assumptions. Just bulletproof architecture.
        </p>
      </div>
      
      {/* Decorative hardware lines */}
      <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center opacity-30 pointer-events-none">
         <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent to-accent-blue/50" />
         <div className="w-1.5 h-1.5 bg-accent-blue rotate-45 mx-2" />
         <div className="h-[1px] w-1/3 bg-gradient-to-l from-transparent to-accent-blue/50" />
      </div>
    </section>
  );
}
