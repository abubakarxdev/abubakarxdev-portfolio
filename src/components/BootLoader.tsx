"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playSystemSound } from "./AudioEngine";

const systemLogs = [
  "BIOS_INIT: INTEL_CORE_V15_SECURE OK",
  "CPU_THREAD_POOL: 16 LOGICAL_CORES MOUNTED",
  "MEM_CHECK: 16384MB SYS_RAM ALLOCATED... OK",
  "STORAGE_DRIVE: /sys/operator/root... MOUNTED",
  "SECRETS_VAULT: AUTH_TOKEN_DECRYPTION... PASS",
  "PORT_SECURITY: TARGET_PORT_80_BOUND... ACTIVE",
  "FIREWALL_RULES: SECURE_INBOUND_FILTER... LOADED",
  "DNS_EDGE_RESOLVER: CDN_LINK_LHE1... CONNECTED",
  "API_INGRESS: /api/engineer... SYNCED",
  "API_DISPATCH: /api/transmit... STABLE",
  "SHELL_CORE: PROTOCOL_INTERACTIVE_V1... DEPLOYED",
  "HOLOGRAPHIC_ASSET: DECRYPT_OPERATOR_ID... 100%",
  "SYS_KERNEL: BOOT_SEQUENCE_SUCCESSFUL",
];

export default function BootLoader() {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0); // 0: booting, 1: access granted, 2: completed
  const [isVisible, setIsVisible] = useState(true);
  const logsContainerRef = useRef<HTMLDivElement>(null);

  // Rapidly stream diagnostic logs
  useEffect(() => {
    let logIndex = 0;
    const interval = setInterval(() => {
      if (logIndex < systemLogs.length) {
        setVisibleLogs((prev) => [...prev, systemLogs[logIndex]]);
        logIndex++;
      } else {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  // Animate the progress bar tick-up synchronously
  useEffect(() => {
    const duration = 1200; // 1.2s rapid boot
    const steps = 100;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      if (current <= steps) {
        setProgress(current);
      } else {
        clearInterval(timer);
        setStage(1); // Trigger Access Granted!
        playSystemSound("boot"); // Play synthesized 8-bit startup sound
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // Auto-scroll logs to bottom as they print
  useEffect(() => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [visibleLogs]);

  // Fade out of system view
  useEffect(() => {
    if (stage === 1) {
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
      }, 700); // Access Granted message shows for 700ms
      return () => clearTimeout(exitTimer);
    }
  }, [stage]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#060606] z-[9999] flex flex-col items-center justify-center font-mono px-6 select-none"
        >
          <div className="flex flex-col items-start gap-4 w-full max-w-lg relative bg-[#090909]/80 border border-white/5 p-6 rounded-lg backdrop-blur-md shadow-[0_0_80px_rgba(0,0,0,0.9)]">
            
            {/* Header telemetry info bar */}
            <div className="flex items-center gap-2 text-muted/30 text-[9px] w-full border-b border-white/5 pb-2 mb-2 tracking-widest uppercase">
              <span>● SYSTEM_BOOT_SEQUENCE</span>
              <span className="ml-auto text-accent-green/60 animate-pulse">KERN_V16.2.6</span>
            </div>

            {/* Diagnostic Logs Stream Box */}
            <div 
              ref={logsContainerRef}
              className="w-full h-36 overflow-y-auto font-mono text-[10px] text-muted/60 space-y-1 scrollbar-none scroll-smooth select-none border-b border-white/5 pb-4 mb-2"
            >
              {visibleLogs.map((log, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="text-white/20 select-none">[{ (idx * 0.05).toFixed(2) }]</span>
                  <span className="text-accent-green/80">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>

            {/* Progress bar container */}
            <div className="w-full flex flex-col gap-2">
              {stage === 0 ? (
                <>
                  <div className="flex items-center justify-between text-[10px] font-mono text-muted/40 font-semibold tracking-wider">
                    <span>SYS_LOAD_MODULES...</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/[0.02] border border-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent-green transition-all duration-75 shadow-[0_0_10px_rgba(0,255,204,0.5)]" 
                      style={{ width: `${progress}%` }} 
                    />
                  </div>
                </>
              ) : (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-full text-center py-2 border border-accent-green/30 bg-accent-green/5 text-accent-green font-bold text-xs md:text-sm tracking-widest rounded-md animate-pulse shadow-[0_0_20px_rgba(0,255,204,0.1)]"
                >
                  ACCESS GRANTED // OPERATOR_ID: ABU_BAKAR
                </motion.div>
              )}
            </div>

            {/* Micro details at bottom */}
            <div className="flex items-center justify-between w-full text-[8px] text-muted/20 font-mono tracking-widest pt-2">
              <span>CORE_ALLOC: SUCCESS_1024MB</span>
              <span>GEO_NODE: PK-LHE1</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
