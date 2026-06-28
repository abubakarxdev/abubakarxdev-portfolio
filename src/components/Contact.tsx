"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, ShieldCheck, HelpCircle, Lock } from "lucide-react";
import { playSystemSound } from "./AudioEngine";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "transmitting" | "success" | "error">("idle");
  const [transmissionLogs, setTransmissionLogs] = useState<string[]>([]);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const writeLog = (msg: string) => {
    setTransmissionLogs((prev) => [...prev, msg]);
  };

  const handleInputChange = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    playSystemSound("keypress"); // Play tactile typing keysound
  };

  const handleInputFocus = (field: string) => {
    setFocusedField(field);
    playSystemSound("click");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("transmitting");
    setTransmissionLogs([]);
    playSystemSound("click");

    const runLogSequence = async () => {
      writeLog("SYS_NET: CONNECTING TO SECURE RETRIEVAL NODE...");
      await new Promise((resolve) => setTimeout(resolve, 550));
      
      writeLog("SYS_CRYPT: PACKETIZING DATA CARGO STREAM...");
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      writeLog("SYS_CRYPT: ENCRYPTING PAYLOAD WITH AES-256-GCM...");
      await new Promise((resolve) => setTimeout(resolve, 600));
      
      writeLog("SYS_NET: DISPATCHING SECURE DATA PACKETS...");
    };

    try {
      // Run visual log sequence in parallel with fetch call
      const logPromise = runLogSequence();
      
      const fetchPromise = fetch("/api/transmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderId: formData.name,
          replyAddress: formData.email,
          payloadData: formData.message,
        }),
      });

      // Wait for both to complete
      const [, response] = await Promise.all([logPromise, fetchPromise]);

      if (!response.ok) {
        throw new Error("TRANSMISSION_FAILED");
      }

      writeLog("SYS_NET: CONFIRMED. PACKET RECEIVED BY OPERATOR INBOX // 200 OK");
      playSystemSound("success");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setStatus("idle");
        setTransmissionLogs([]);
      }, 7000);

    } catch (error) {
      writeLog("SYS_NET: CRITICAL ERROR. TRANSMISSION LINK COLLAPSED.");
      playSystemSound("error");
      setStatus("error");
      
      setTimeout(() => {
        setStatus("idle");
        setTransmissionLogs([]);
      }, 7000);
    }
  };

  const handleHoverAction = () => {
    playSystemSound("keypress");
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-obsidian px-6 md:px-12 flex flex-col items-center select-none">
      {/* Subtle lines grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <p className="font-mono text-[10px] md:text-xs text-accent-blue tracking-widest uppercase mb-2">
            // INITIATE_SECURE_CONNECTION
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary font-sans">
            Secure Cryptographic Dispatch
          </h2>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Telemetry receiver metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-8 flex flex-col gap-6 relative overflow-hidden group"
          >
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/10 group-hover:border-accent-blue/40 transition-colors" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/10 group-hover:border-accent-blue/40 transition-colors" />

            <div className="absolute top-0 right-0 w-36 h-36 bg-accent-blue/2 blur-[70px] pointer-events-none group-hover:bg-accent-blue/4 transition-colors" />
            
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-accent-blue animate-pulse" />
                <span className="font-mono text-[10px] text-accent-blue tracking-widest uppercase">
                  RECEIVER_METRICS: ACTIVE
                </span>
              </div>
              <div className="flex items-center gap-1 font-mono text-[8px] text-muted/30">
                <Lock size={9} />
                <span>TLS_1.3_ENCRYPTED</span>
              </div>
            </div>

            {/* Micro metric details list */}
            <div className="font-mono text-xs space-y-4 text-muted">
              <div>
                <span className="text-accent-blue font-bold">// SECURE_RETRIEVAL_ENDPOINT:</span>
                <p className="mt-1 text-primary break-all hover:text-accent-blue transition-colors duration-200">
                  abubakarxdev@gmail.com
                </p>
              </div>

              <div>
                <span className="text-accent-blue font-bold">// DIRECT_OPERATOR_LINE:</span>
                <p className="mt-1 text-primary">+92 314 6554602</p>
              </div>

              <div>
                <span className="text-accent-blue font-bold">// PHYSICAL_COORD:</span>
                <p className="mt-1 text-primary">Islamabad, Pakistan</p>
              </div>

              <div className="pt-5 border-t border-white/5 flex flex-col gap-3">
                <span className="text-accent-blue font-bold">// SOCIALS_DISPATCH</span>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="https://github.com/abubakarxdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={handleHoverAction}
                    className="flex items-center gap-2 text-muted hover:text-accent-blue transition-colors duration-200 w-fit"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="13" 
                      height="13" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>github.com/abubakarxdev</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/abubakarxdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={handleHoverAction}
                    className="flex items-center gap-2 text-muted hover:text-accent-blue transition-colors duration-200 w-fit"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="13" 
                      height="13" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span>linkedin.com/in/abubakarxdev</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Active cryptographic dispatcher console form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col gap-6 w-full"
          >
            {status !== "transmitting" && status !== "success" && status !== "error" ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Sender ID Input */}
                <div className="flex flex-col gap-2 relative group">
                  <label className="font-mono text-[9px] text-accent-blue tracking-widest select-none">
                    [SENDER_ID]
                  </label>
                  
                  <div className="relative flex items-center">
                    {/* Glowing Brackets */}
                    <span className={`absolute left-2.5 font-mono text-xs text-accent-blue/80 transition-all duration-300 pointer-events-none select-none ${focusedField === "name" ? "opacity-100 -translate-x-1" : "opacity-0 translate-x-0"}`}>[</span>
                    <span className={`absolute right-2.5 font-mono text-xs text-accent-blue/80 transition-all duration-300 pointer-events-none select-none ${focusedField === "name" ? "opacity-100 translate-x-1" : "opacity-0 translate-x-0"}`}>]</span>
                    
                    <input
                      type="text"
                      required
                      placeholder="IDENTIFY YOUR NAME OR SYSTEM_NODE"
                      value={formData.name}
                      onFocus={() => handleInputFocus("name")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/10 rounded px-4 py-3.5 font-mono text-[10px] text-primary placeholder:text-zinc-500 focus:outline-none focus:border-accent-blue/30 focus:shadow-[0_0_20px_rgba(0,255,204,0.12)] focus:ring-0 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Reply Address Input */}
                <div className="flex flex-col gap-2 relative group">
                  <label className="font-mono text-[9px] text-accent-blue tracking-widest select-none">
                    [REPLY_ADDRESS]
                  </label>
                  
                  <div className="relative flex items-center">
                    <span className={`absolute left-2.5 font-mono text-xs text-accent-blue/80 transition-all duration-300 pointer-events-none select-none ${focusedField === "email" ? "opacity-100 -translate-x-1" : "opacity-0 translate-x-0"}`}>[</span>
                    <span className={`absolute right-2.5 font-mono text-xs text-accent-blue/80 transition-all duration-300 pointer-events-none select-none ${focusedField === "email" ? "opacity-100 translate-x-1" : "opacity-0 translate-x-0"}`}>]</span>
                    
                    <input
                      type="email"
                      required
                      placeholder="ENTER RETRIEVAL ADDRESS (EMAIL)"
                      value={formData.email}
                      onFocus={() => handleInputFocus("email")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/10 rounded px-4 py-3.5 font-mono text-[10px] text-primary placeholder:text-zinc-500 focus:outline-none focus:border-accent-blue/30 focus:shadow-[0_0_20px_rgba(0,255,204,0.12)] focus:ring-0 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Payload Data Input */}
                <div className="flex flex-col gap-2 relative group">
                  <label className="font-mono text-[9px] text-accent-blue tracking-widest select-none">
                    [PAYLOAD_DATA]
                  </label>
                  
                  <div className="relative flex items-center">
                    <span className={`absolute left-2.5 top-3.5 font-mono text-xs text-accent-blue/80 transition-all duration-300 pointer-events-none select-none ${focusedField === "message" ? "opacity-100 -translate-x-1" : "opacity-0 translate-x-0"}`}>[</span>
                    <span className={`absolute right-2.5 bottom-3.5 font-mono text-xs text-accent-blue/80 transition-all duration-300 pointer-events-none select-none ${focusedField === "message" ? "opacity-100 translate-x-1" : "opacity-0 translate-x-0"}`}>]</span>
                    
                    <textarea
                      required
                      rows={4}
                      placeholder="WRITE SECURE DISPATCH CARGO DETAILS..."
                      value={formData.message}
                      onFocus={() => handleInputFocus("message")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/10 rounded px-4 py-3.5 font-mono text-[10px] text-primary placeholder:text-zinc-500 focus:outline-none focus:border-accent-blue/30 focus:shadow-[0_0_20px_rgba(0,255,204,0.12)] focus:ring-0 transition-all duration-300 resize-none"
                    />
                  </div>
                </div>

                {/* Transmit Button */}
                <button
                  type="submit"
                  onMouseEnter={handleHoverAction}
                  className="group relative w-full py-4 rounded font-mono text-[10px] tracking-widest bg-black border border-accent-blue/35 text-accent-blue overflow-hidden transition-all duration-300 hover:border-accent-blue hover:shadow-[0_0_20px_rgba(0,255,204,0.15)] active:scale-[0.99] cursor-pointer"
                >
                  <span className="absolute inset-0 w-full h-full bg-accent-blue/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="flex items-center justify-center gap-2">
                    TRANSMIT_SECURE_DATA <Send size={11} />
                  </span>
                </button>
              </form>
            ) : (
              /* Active terminal transmission log box screen */
              <div className="w-full p-6 bg-black border border-white/10 rounded-lg font-mono text-[10px] text-muted flex flex-col gap-3 min-h-[300px] shadow-[0_0_50px_rgba(0,0,0,0.85)] relative overflow-hidden select-none">
                
                {/* Scanning sweep inside log console */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none" />
                
                <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                    <span className="text-accent-blue tracking-widest text-[9px] uppercase">// ENCRYPTED_DISPATCH_SHELL</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[8px] text-muted/30">
                    <Lock size={9} className="text-accent-blue" />
                    <span>AES_256_ACTIVE</span>
                  </div>
                </div>

                {/* Stream logs */}
                <div className="flex-1 flex flex-col gap-2.5 text-left text-accent-blue">
                  {transmissionLogs.map((log, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex gap-2"
                    >
                      <span className="text-white/20 select-none">[{ (idx * 0.5).toFixed(1) }s]</span>
                      <span>&gt; {log}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Final status state actions */}
                <div className="border-t border-white/5 pt-3 mt-2 flex items-center justify-between">
                  {status === "transmitting" && (
                    <span className="flex items-center gap-2 text-amber-500 font-bold animate-pulse text-[9px]">
                      [TRANSMITTING PAYLOAD PACKET...]
                    </span>
                  )}
                  {status === "success" && (
                    <span className="flex items-center gap-2 text-accent-blue font-bold text-[9px] animate-pulse">
                      DISPATCH SECURELY ROUTED <ShieldCheck size={12} />
                    </span>
                  )}
                  {status === "error" && (
                    <span className="flex items-center gap-2 text-accent-red font-bold text-[9px] animate-pulse">
                      TRANSMISSION LINK FAILURE
                    </span>
                  )}
                  
                  <span className="text-[8px] text-muted/20">PORT: 443</span>
                </div>
              </div>
            )}
            
            {/* Fallback secure dispatcher failure message */}
            {status === "error" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded border border-accent-red/20 bg-accent-red/5 font-mono text-[10px] md:text-xs text-accent-red/90 leading-relaxed text-left"
              >
                Network dispatch failed. Please override manually by sending an email directly to:{" "}
                <a 
                  href="mailto:abubakarxdev@gmail.com" 
                  className="underline hover:text-white transition-colors font-bold"
                >
                  abubakarxdev@gmail.com
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
