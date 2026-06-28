"use client";

import React, { useRef } from "react";
import { motion, Variants, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Terminal, ArrowRight, Code } from "lucide-react";
import Image from "next/image";

const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const springConfig = { damping: 30, stiffness: 200, mass: 1 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleContactScroll = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] w-full bg-obsidian flex items-center justify-center overflow-hidden px-6 md:px-12 py-24 select-none">
      
      {/* Refined subtle ambient glow */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Main Container */}
      <motion.div 
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="relative z-10 max-w-5xl w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between text-left"
      >
        
        {/* Left Side: Copy and Controls */}
        <div className="flex-1 flex flex-col items-start gap-8 text-left w-full">
          
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 font-mono text-[11px] text-accent-blue tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
              Full-Stack Systems Engineer
            </span>
          </motion.div>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white font-sans leading-[1.1]">
              Architecting secure,<br className="hidden md:block" /> performant systems.
            </h1>
            <p className="max-w-lg text-base md:text-lg text-muted/80 leading-relaxed font-sans">
              Merging robust full-stack engineering with native security protocols to build bulletproof web architectures and enterprise platforms.
            </p>
          </motion.div>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
            <button 
              onClick={handleContactScroll}
              className="px-6 py-3 rounded-md font-sans font-medium text-sm bg-primary text-obsidian hover:bg-white/90 transition-colors active:scale-95 flex items-center justify-center gap-2"
            >
              Start a project
              <ArrowRight size={16} />
            </button>
            
            <a 
              href="https://github.com/abubakarxdev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md font-sans font-medium text-sm bg-white/[0.03] text-white border border-white/10 hover:bg-white/[0.08] transition-colors active:scale-95 flex items-center justify-center gap-2"
            >
              <Code size={16} />
              View GitHub
            </a>
          </motion.div>

        </div>

        {/* Right Side: Elegant Operator Portrait */}
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="w-full max-w-[320px] lg:max-w-[360px] flex flex-col items-center lg:items-end justify-center perspective-[2000px]">
          <motion.div 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
            }}
            className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-[0_0_40px_rgba(0,102,255,0.05)] transform-gpu"
          >
            <Image
              src="/ab.jpg"
              alt="Abu Bakar"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-105"
            />
            {/* Soft inner shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none shadow-inner" />
          </motion.div>
          
          <div className="w-full mt-4 flex items-center justify-between px-2 font-mono text-[10px] text-muted/50 tracking-wider">
            <span>SYS_ID: ABU_BAKAR</span>
            <span className="flex items-center gap-1.5 text-accent-blue">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
              ONLINE
            </span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
