"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playSystemSound } from "./AudioEngine";

export default function SystemTelemetry() {
  const [latency, setLatency] = useState(14);
  const [uptime, setUptime] = useState("99.99%");
  const [isHovered, setIsHovered] = useState(false);

  // Simulate network micro-fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      const newLatency = Math.floor(Math.random() * (24 - 12 + 1) + 12);
      setLatency(newLatency);
      
      if (Math.random() > 0.95) {
        setUptime("99.98%");
      } else {
        setUptime("99.99%");
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    playSystemSound("click");
    // Trigger custom event to open the CLI interactive terminal
    window.dispatchEvent(new CustomEvent("toggle_command_terminal"));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playSystemSound("keypress");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="fixed bottom-4 right-4 z-40 hidden md:block cursor-pointer select-none"
    >
      <div className="relative flex flex-col items-end gap-1.5">
        
        {/* Animated Click-to-launch tooltip indicator */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="bg-black/90 border border-accent-blue/30 text-accent-blue px-2 py-1 rounded text-[8px] font-mono tracking-widest shadow-2xl"
            >
              [CLICK TO TOGGLE INTERACTIVE SHELL]
            </motion.div>
          )}
        </AnimatePresence>

        {/* Core telemetry floating pill */}
        <div className="flex items-center gap-3 rounded border border-white/10 bg-[#090909]/90 px-3.5 py-2 font-mono text-[9px] text-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.8)] backdrop-blur-md hover:border-accent-blue/30 hover:shadow-[0_0_20px_rgba(0,255,204,0.15)] transition-all duration-300">
          
          {/* Pulsing Status Dot */}
          <div className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ffcc] opacity-75"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00ffcc]"></span>
          </div>
          
          {/* Telemetry data fields */}
          <div className="flex items-center gap-3.5">
            <span className="flex gap-1.5">
              <span className="text-white/20">SYS_STATUS:</span>
              <span className="text-[#00ffcc] font-semibold">OPTIMAL</span>
            </span>
            <span className="flex gap-1.5">
              <span className="text-white/20">RTT:</span>
              <span className="w-[3ch] text-amber-400 font-semibold">{latency}ms</span> 
            </span>
            <span className="flex gap-1.5">
              <span className="text-white/20">UPTIME:</span>
              <span className="text-zinc-300">{uptime}</span>
            </span>
            <span className="flex gap-1.5">
              <span className="text-white/20">EDGE:</span>
              <span className="text-blue-400 font-semibold">LHE1</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
