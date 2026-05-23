"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Image from "next/image";

const roles = [
  "Backend API Architect",
  "Full-Stack Systems Engineer",
  "DevSecOps [Initializing]"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-screen w-full bg-obsidian flex items-center justify-center overflow-hidden px-6 md:px-12 py-24">
      {/* Radial gradient depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.03)_0%,rgba(10,10,10,1)_75%)] pointer-events-none" />

      {/* Cyberpunk accent glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-green/5 blur-[100px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-red/5 blur-[100px] rounded-full pointer-events-none animate-pulse" />

      {/* Balanced layout container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between text-left">
        
        {/* Left Side: Typography details */}
        <div className="flex-1 flex flex-col items-start gap-6 text-left w-full">
          {/* Boot Tag */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-black/40 backdrop-blur-md text-accent-green font-mono text-[10px] md:text-xs tracking-wider"
          >
            <Terminal size={14} className="animate-pulse" />
            <span>SYSTEM_INIT: SUCCESS</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white font-sans leading-none"
          >
            Abu Bakar
          </motion.h1>

          {/* Dynamic Typewriter */}
          <div className="min-h-[40px] flex items-center font-mono text-lg md:text-xl text-muted tracking-wide">
            <span className="text-accent-green mr-2">$</span>
            <span>{displayedText}</span>
            <span className="inline-block w-2 h-5 bg-accent-green ml-1 animate-cursor-blink" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-lg text-sm md:text-base text-muted leading-relaxed font-sans"
          >
            Developing secure, hyper-performant APIs and conducting rigorous security reviews. Merging frontend craftsmanship with deep system architecture.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
          >
            <button className="group relative px-8 py-3.5 rounded-md font-mono text-xs tracking-widest bg-black border border-accent-green/30 text-accent-green overflow-hidden transition-all duration-300 hover:border-accent-green hover:shadow-[0_0_20px_rgba(0,255,204,0.25),0_0_40px_rgba(255,0,51,0.1)] active:scale-95">
              <span className="absolute inset-0 w-full h-full bg-accent-green/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              INITIALIZE_CONTACT
            </button>

            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-md font-mono text-xs tracking-widest border border-white/10 text-muted bg-transparent hover:text-muted/50 hover:border-white/20 transition-all duration-300 active:scale-95 flex items-center justify-center"
            >
              SYS_ARCH_VIEW [Resume]
            </a>
          </motion.div>
        </div>

        {/* Right Side: Stylized ID Operator Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full max-w-[280px] md:max-w-[320px] flex flex-col gap-3"
        >
          {/* Glass Image Container */}
          <div className="glass-panel p-3 rounded-lg border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="aspect-[4/5] relative rounded w-full overflow-hidden bg-black/60">
              <Image
                src="/ab.jpg"
                alt="System Operator Abu Bakar"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover grayscale contrast-125 brightness-90 opacity-80 hover:opacity-100 transition-all duration-300 scale-105 group-hover:scale-100"
              />
              {/* Scanline overlay effect to make it look even more technical */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none" />
              {/* Radial vignetting overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(10,10,10,0.7)_100%)] pointer-events-none" />
            </div>
          </div>

          {/* Attached mono label */}
          <div className="flex items-center justify-between px-1 font-mono text-[10px] text-muted/50 tracking-wider">
            <span>// OPERATOR_ID: ABU_BAKAR</span>
            <span className="text-accent-green animate-pulse">● LOGGED_IN</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

