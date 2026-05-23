"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootLoader() {
  const [stage, setStage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bootStrings = [
    "INITIALIZING SECURE PROTOCOLS...",
    "LOADING SYSTEM ARCHITECTURE...",
    "AUTHENTICATING OPERATOR...",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 500);
    const t2 = setTimeout(() => setStage(2), 1000);
    const t3 = setTimeout(() => setStage(3), 1500);
    const t4 = setTimeout(() => setIsVisible(false), 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#0a0a0a] z-[9999] flex flex-col items-center justify-center font-mono px-6 select-none"
        >
          <div className="flex flex-col items-start gap-3 w-full max-w-lg">
            {/* Terminal bar */}
            <div className="flex items-center gap-2 text-muted/30 text-[9px] md:text-[10px] w-full border-b border-white/5 pb-2 mb-4 tracking-wider">
              <span>● SYSTEM_BOOT_SEQUENCE</span>
              <span className="ml-auto text-accent-green/60">STAGE_0{stage + 1}</span>
            </div>

            {/* Active Output text with cursor */}
            <div className="text-accent-green text-sm md:text-base flex items-center min-h-[24px]">
              <span className="mr-2">&gt;</span>
              <motion.span
                key={stage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
              >
                {bootStrings[stage]}
              </motion.span>
              <span className="inline-block w-2 h-4 bg-accent-green ml-1 animate-cursor-blink" />
            </div>

            {/* Faint sub metrics */}
            <div className="text-[10px] text-muted/20 mt-8 space-y-1">
              <div>CORE_SYS: INTEL_CORE_v15_SECURE</div>
              <div>MEM_INIT: SUCCESS_ALLOC_1024MB</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
