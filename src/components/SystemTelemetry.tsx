"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SystemTelemetry() {
  const [latency, setLatency] = useState(14);
  const [uptime, setUptime] = useState("99.99%");

  // Simulate network micro-fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate latency between 12ms and 28ms
      const newLatency = Math.floor(Math.random() * (28 - 12 + 1) + 12);
      setLatency(newLatency);
      
      // Occasionally simulate a 99.98% drop just to make it look real
      if (Math.random() > 0.9) {
        setUptime("99.98%");
      } else {
        setUptime("99.99%");
      }
    }, 3500); // Update every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }} // Load after the main hero sequence
      className="fixed bottom-4 right-4 z-40 hidden md:block"
    >
      <div className="flex items-center gap-3 rounded-md border border-white/10 bg-[#0a0a0a]/80 px-3 py-1.5 font-mono text-[10px] text-white/50 shadow-lg backdrop-blur-md">
        
        {/* Pulsing Status Dot */}
        <div className="relative flex h-2 w-2 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ffcc] opacity-75"></span>
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00ffcc]"></span>
        </div>
        
        {/* Telemetry Data streams */}
        <div className="flex items-center gap-3">
          <span className="flex gap-1">
            <span className="text-white/30">SYS_STATUS:</span>
            <span className="text-[#00ffcc]">OPTIMAL</span>
          </span>
          <span className="flex gap-1">
            <span className="text-white/30">LATENCY:</span>
            <span className="w-[3ch] text-amber-400">{latency}ms</span> 
          </span>
          <span className="flex gap-1">
            <span className="text-white/30">UPTIME:</span>
            <span>{uptime}</span>
          </span>
          <span className="flex gap-1">
            <span className="text-white/30">EDGE_NODE:</span>
            <span className="text-blue-400 font-semibold">LHE1</span> {/* Localized to Lahore/PK region for authenticity */}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
