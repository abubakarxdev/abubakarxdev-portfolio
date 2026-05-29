"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, Cpu, Zap, Wifi } from "lucide-react";
import Image from "next/image";
import { playSystemSound } from "./AudioEngine";

const roles = [
  "Full-Stack Systems Engineer",
  "Secure API Architect",
  "DevSecOps [Initializing]"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isVisible = useRef(true);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationFrameIdRef = useRef<number | undefined>(undefined);

  // Canvas-based interactive cybernetic grid background with IntersectionObserver performance integration
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("resize", handleResize);
    // Listen to mousemove on the whole section container
    const sectionElement = canvas.parentElement;
    sectionElement?.addEventListener("mousemove", handleMouseMove);
    sectionElement?.addEventListener("mouseleave", handleMouseLeave);

    const gridSize = 45;
    let tick = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      const mouse = mouseRef.current;
      const cols = Math.floor(width / gridSize) + 1;
      const rows = Math.floor(height / gridSize) + 1;

      // Draw faint cybernetic background grid network
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * gridSize;
          const y = r * gridSize;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const ratio = (150 - dist) / 150;
            
            // Draw localized grid highlight lines
            ctx.strokeStyle = `rgba(0, 255, 204, ${ratio * 0.05})`;
            ctx.lineWidth = 0.5;
            ctx.strokeRect(x - gridSize / 2, y - gridSize / 2, gridSize, gridSize);

            // Draw glowing node intersection point
            ctx.fillStyle = `rgba(0, 255, 204, ${0.15 + ratio * 0.45})`;
            ctx.beginPath();
            ctx.arc(x, y, 1.5 + ratio * 1.5, 0, Math.PI * 2);
            ctx.fill();

            // Crosshair lines
            ctx.strokeStyle = `rgba(0, 255, 204, ${ratio * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(x - 6, y);
            ctx.lineTo(x + 6, y);
            ctx.moveTo(x, y - 6);
            ctx.lineTo(x, y + 6);
            ctx.stroke();
          } else {
            // Idle background grid point
            ctx.fillStyle = `rgba(255, 255, 255, ${0.015 + Math.sin(tick * 0.02 + c * 0.1) * 0.005})`;
            ctx.beginPath();
            ctx.arc(x, y, 0.8, 0, Math.PI * 2);
            ctx.fill();
        }
      }
    }

      // Draw real-time high-fidelity HUD reticle cursor tracker
      if (mouse.x !== -1000 && mouse.y !== -1000) {
        // 1. Draw glowing HUD reticle ring
        ctx.strokeStyle = "rgba(0, 255, 204, 0.25)";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 16, 0, Math.PI * 2);
        ctx.stroke();

        // 2. Draw micro crosshairs targeting ticks
        ctx.strokeStyle = "rgba(0, 255, 204, 0.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(mouse.x - 22, mouse.y); ctx.lineTo(mouse.x - 12, mouse.y);
        ctx.moveTo(mouse.x + 12, mouse.y); ctx.lineTo(mouse.x + 22, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 22); ctx.lineTo(mouse.x, mouse.y - 12);
        ctx.moveTo(mouse.x, mouse.y + 12); ctx.lineTo(mouse.x, mouse.y + 22);
        ctx.stroke();

        // 3. Draw high-fidelity coordinates details
        ctx.fillStyle = "rgba(0, 255, 204, 0.75)";
        ctx.font = "8px monospace";
        ctx.fillText(`[X: ${Math.round(mouse.x)} | Y: ${Math.round(mouse.y)}]`, mouse.x + 26, mouse.y + 2);
        
        ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
        ctx.fillText("SYS_OP: ABU_BAKAR", mouse.x + 26, mouse.y + 10);
      }

      if (isVisible.current) {
        animationFrameIdRef.current = requestAnimationFrame(draw);
      }
    };

    // Initialize Intersection Observer to completely halt rendering loop off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible.current;
        isVisible.current = entry.isIntersecting;

        if (entry.isIntersecting && !wasVisible) {
          draw();
        } else if (!entry.isIntersecting) {
          if (animationFrameIdRef.current) {
            cancelAnimationFrame(animationFrameIdRef.current);
          }
        }
      },
      {
        threshold: 0,
        rootMargin: "50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      sectionElement?.removeEventListener("mousemove", handleMouseMove);
      sectionElement?.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Text role typing sequence
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
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

  const handleLaunchShell = () => {
    playSystemSound("click");
    window.dispatchEvent(new CustomEvent("toggle_command_terminal"));
  };

  const handleHoverAction = () => {
    playSystemSound("keypress");
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full bg-obsidian flex items-center justify-center overflow-hidden px-6 md:px-12 py-24 select-none">
      {/* Interactive WebGL/Canvas grid overlay */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-80" />

      {/* Radial gradient depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.035)_0%,rgba(10,10,10,1)_80%)] pointer-events-none z-0" />

      {/* Cyberpunk accent glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-green/5 blur-[100px] rounded-full pointer-events-none animate-pulse z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-red/5 blur-[100px] rounded-full pointer-events-none animate-pulse z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between text-left">
        
        {/* Left Side: Copy and Controls */}
        <div className="flex-1 flex flex-col items-start gap-6 text-left w-full">
          {/* Boot Status Pill Tag */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-black/50 backdrop-blur-md text-accent-green font-mono text-[10px] md:text-xs tracking-wider"
          >
            <Terminal size={13} className="animate-pulse" />
            <span>OPERATOR_STATUS: ONLINE</span>
            <span className="text-white/20">|</span>
            <Wifi size={12} className="text-accent-green animate-pulse" />
            <span>RTT: 14ms</span>
          </motion.div>

          {/* Core Name Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white font-sans leading-none"
          >
            Abu Bakar
          </motion.h1>

          {/* Monospace Active Role Console */}
          <div className="min-h-[40px] flex items-center font-mono text-lg md:text-xl text-muted tracking-wide">
            <span className="text-accent-green mr-2">$</span>
            <span>{displayedText}</span>
            <span className="inline-block w-2 h-5 bg-accent-green ml-1 animate-cursor-blink" />
          </div>

          {/* Subheading description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-lg text-sm md:text-base text-muted leading-relaxed font-sans"
          >
            Architecting hyper-performant, zero-trust backend systems. Merging robust full-stack engineering with native security protocols to build bulletproof web architectures.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
          >
            <button 
              onClick={() => {
                playSystemSound("click");
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={handleHoverAction}
              className="group relative px-8 py-3.5 rounded-md font-mono text-xs tracking-widest bg-black border border-accent-green/30 text-accent-green overflow-hidden transition-all duration-300 hover:border-accent-green hover:shadow-[0_0_25px_rgba(0,255,204,0.15)] active:scale-95 cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-accent-green/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              INITIALIZE_CONTACT
            </button>

            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSystemSound("click")}
              onMouseEnter={handleHoverAction}
              className="px-8 py-3.5 rounded-md font-mono text-xs tracking-widest border border-white/10 text-muted bg-transparent hover:text-muted/50 hover:border-white/20 hover:bg-white/[0.01] transition-all duration-300 active:scale-95 flex items-center justify-center"
            >
              SYS_ARCH_VIEW [Resume]
            </a>
          </motion.div>

          {/* Interactive Shell shortcut launcher */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-2 font-mono text-[10px] md:text-xs text-muted/40 mt-1 select-none"
          >
            <span>&gt; Prefer the command line?</span>
            <button
              onClick={handleLaunchShell}
              onMouseEnter={handleHoverAction}
              className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-[9px] md:text-[10px] text-muted/60 hover:text-accent-green hover:border-accent-green/20 hover:shadow-[0_0_12px_rgba(0,255,204,0.15)] cursor-pointer transition-all duration-200 flex items-center gap-1 active:scale-95"
            >
              <span className="w-1 h-1 bg-accent-green rounded-full animate-ping" />
              <span>RUN_SHELL [ ⌘K ]</span>
            </button>
          </motion.div>
        </div>

        {/* Right Side: High-End Interactive Operator ID Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full max-w-[280px] md:max-w-[320px] flex flex-col gap-3 relative group"
        >
          {/* Glass Image Container with vertical sweeping neon green laser line */}
          <div className="glass-panel p-3.5 rounded-lg border border-white/10 shadow-2xl relative overflow-hidden group hover:shadow-[0_0_40px_rgba(0,255,204,0.15)] hover:border-accent-green/30 transition-all duration-500">
            
            {/* Holographic corners visual */}
            <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-accent-green/40 group-hover:border-accent-green transition-colors" />
            <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t border-r border-accent-green/40 group-hover:border-accent-green transition-colors" />
            <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b border-l border-accent-green/40 group-hover:border-accent-green transition-colors" />
            <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-accent-green/40 group-hover:border-accent-green transition-colors" />
            
            <div className="aspect-[4/5] relative rounded w-full overflow-hidden bg-black/60">
              <Image
                src="/ab.jpg"
                alt="System Operator Abu Bakar"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover grayscale contrast-125 brightness-[85%] opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-95 transition-all duration-500"
              />
              
              {/* Sweeping scan laser line effect */}
              <div 
                className="absolute left-0 right-0 h-[1.5px] bg-accent-green/90 shadow-[0_0_10px_#00ffcc] pointer-events-none z-10" 
                style={{
                  animation: "scanline 4.5s linear infinite",
                  background: "linear-gradient(90deg, transparent, #00ffcc, transparent)"
                }}
              />
              
              <style jsx global>{`
                @keyframes scanline {
                  0% { top: 0%; }
                  50% { top: 100%; }
                  100% { top: 0%; }
                }
              `}</style>

              {/* Matrix scan grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none z-10 opacity-30" />
              {/* Radial shading */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(10,10,10,0.75)_100%)] pointer-events-none" />
            </div>
          </div>

          {/* Attached Monospace Status Badge */}
          <div className="flex items-center justify-between px-1.5 font-mono text-[9px] text-muted/40 tracking-wider">
            <span className="flex items-center gap-1">
              <Cpu size={10} className="text-accent-green/60" />
              <span>// OPERATOR_ID: ABU_BAKAR</span>
            </span>
            <span className="text-accent-green flex items-center gap-1 font-bold">
              <span className="w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse" />
              <span>LOGGED_IN</span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
