"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, ShieldCheck } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "transmitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("transmitting");
    
    try {
      const response = await fetch("/api/transmit", {
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

      if (!response.ok) {
        throw new Error("TRANSMISSION_FAILED");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-obsidian px-6 md:px-12 flex flex-col items-center">
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
          <p className="font-mono text-[10px] md:text-xs text-accent-green tracking-widest uppercase mb-2">
            // INITIATE_SECURE_CONNECTION
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary font-sans">
            Secure Cryptographic Dispatch
          </h2>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: System Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-8 flex flex-col gap-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/2 blur-[60px] pointer-events-none" />
            
            <div className="flex items-center gap-2 border-b border-white/5 pb-4">
              <Terminal size={15} className="text-accent-green" />
              <span className="font-mono text-[10px] text-accent-green tracking-wider">
                RECEIVER_METRICS: OPERATIONAL
              </span>
            </div>

            {/* Metrics data */}
            <div className="font-mono text-xs space-y-4 text-muted">
              <div>
                <span className="text-accent-green font-bold">EMAIL_ADDRESS:</span>
                <p className="mt-1 text-primary break-all hover:text-accent-green transition-colors duration-200">
                  abubakarxdev@gmail.com
                </p>
              </div>

              <div>
                <span className="text-accent-green font-bold">ENCRYPTED_LINE:</span>
                <p className="mt-1 text-primary">+92 314 6554602</p>
              </div>

              <div>
                <span className="text-accent-green font-bold">BASE_LOCATION:</span>
                <p className="mt-1 text-primary">Islamabad, Pakistan</p>
              </div>

              <div className="pt-5 border-t border-white/5 flex flex-col gap-3">
                <span className="text-accent-green font-bold">// SOCIALS_DISPATCH</span>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/abubakarxdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted hover:text-accent-green transition-colors duration-200 w-fit"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="14" 
                      height="14" 
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
                    className="flex items-center gap-2 text-muted hover:text-accent-green transition-colors duration-200 w-fit"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="14" 
                      height="14" 
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


          {/* Right Column: Encrypted Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Sender ID */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] text-accent-green tracking-widest">
                  [SENDER_ID]
                </label>
                <input
                  type="text"
                  required
                  placeholder="IDENTIFY YOUR SYSTEM OR NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={status !== "idle"}
                  className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3.5 font-mono text-[11px] text-primary focus:outline-none focus:border-accent-green focus:shadow-[0_0_12px_rgba(0,255,204,0.12)] transition-all duration-300 disabled:opacity-50"
                />
              </div>

              {/* Reply Address */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] text-accent-green tracking-widest">
                  [REPLY_ADDRESS]
                </label>
                <input
                  type="email"
                  required
                  placeholder="ENTER RETRIEVAL ADDRESS (EMAIL)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={status !== "idle"}
                  className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3.5 font-mono text-[11px] text-primary focus:outline-none focus:border-accent-green focus:shadow-[0_0_12px_rgba(0,255,204,0.12)] transition-all duration-300 disabled:opacity-50"
                />
              </div>

              {/* Payload Data */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] text-accent-green tracking-widest">
                  [PAYLOAD_DATA]
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="WRITE CIPHERTEXT PACKET DETAILS..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={status !== "idle"}
                  className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3.5 font-mono text-[11px] text-primary focus:outline-none focus:border-accent-green focus:shadow-[0_0_12px_rgba(0,255,204,0.12)] transition-all duration-300 resize-none disabled:opacity-50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status !== "idle"}
                className="group relative w-full py-4 rounded font-mono text-[10px] tracking-widest bg-black border border-accent-green/30 text-accent-green overflow-hidden transition-all duration-300 hover:border-accent-green hover:shadow-[0_0_20px_rgba(0,255,204,0.25)] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 w-full h-full bg-accent-green/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                {status === "idle" && (
                  <span className="flex items-center justify-center gap-2">
                    TRANSMIT_DATA <Send size={11} />
                  </span>
                )}

                {status === "transmitting" && (
                  <span className="flex items-center justify-center gap-2 animate-pulse text-accent-green">
                    ENCRYPTING_PAYLOAD...
                  </span>
                )}

                {status === "success" && (
                  <span className="flex items-center justify-center gap-2 text-accent-green font-bold">
                    TRANSMISSION_SUCCESS <ShieldCheck size={13} />
                  </span>
                )}

                {status === "error" && (
                  <span className="flex items-center justify-center gap-2 text-accent-red font-bold">
                    ERROR_RETRY
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
