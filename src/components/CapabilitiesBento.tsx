"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Shield, Layers, Code2, Cpu, Terminal } from "lucide-react";
import { playSystemSound } from "./AudioEngine";

export default function CapabilitiesBento() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const handleCardHover = () => {
    playSystemSound("keypress");
  };

  const handleCardClick = () => {
    playSystemSound("click");
  };

  return (
    <section id="experience" className="relative w-full py-24 bg-obsidian px-6 md:px-12 flex flex-col items-center select-none">
      {/* Delicate cyber line grid structure overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-left"
        >
          <p className="font-mono text-[10px] md:text-xs text-accent-green tracking-widest uppercase mb-2">// CAPABILITIES_MANIFEST</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary font-sans">System Architecture & Operations</h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[230px]"
        >
          {/* Card 1 (Span 2 cols) - Current Execution */}
          <motion.div
            variants={cardVariants}
            onMouseEnter={handleCardHover}
            onClick={handleCardClick}
            className="glass-panel md:col-span-2 p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,204,0.15)] hover:border-accent-green/45 transition-all duration-300 relative overflow-hidden group cursor-default"
          >
            {/* Corner Bracket Details */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/10 group-hover:border-accent-green/40 transition-colors" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/10 group-hover:border-accent-green/40 transition-colors" />

            <div className="absolute top-0 right-0 w-36 h-36 bg-accent-green/2 blur-[70px] pointer-events-none group-hover:bg-accent-green/6 transition-all duration-500" />
            
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] text-accent-green tracking-wider flex items-center gap-1">
                  <Terminal size={11} />
                  <span>// CURRENT_EXECUTION</span>
                </span>
                <h3 className="text-xl md:text-2xl font-semibold mt-2 text-primary font-sans">
                  Web Developer @ Pulse Matrix LLC
                </h3>
              </div>
              
              {/* Glowing Status badge */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green text-[9px] font-mono tracking-wider w-fit shrink-0 self-start sm:self-auto">
                <span className="w-1.5 h-1.5 bg-accent-green rounded-full animate-ping" />
                <span>ACTIVE_DEPLOYMENT</span>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-t border-white/5 pt-4">
              <p className="text-sm text-muted max-w-md leading-relaxed">
                Architecting serverless backend workflows and managing PostgreSQL/Supabase databases, maintaining 99.9% uptime.
              </p>
              <span className="font-mono text-[10px] text-muted/30 select-none hidden sm:inline">ADDR: 0x01</span>
            </div>
          </motion.div>

          {/* Card 2 (Square) - Core Tech Stack + Glowing Code Widget */}
          <motion.div
            variants={cardVariants}
            onMouseEnter={handleCardHover}
            onClick={handleCardClick}
            className="glass-panel p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,204,0.12)] hover:border-accent-green/45 transition-all duration-300 relative overflow-hidden group cursor-default"
          >
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/10 group-hover:border-accent-green/40 transition-colors" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/10 group-hover:border-accent-green/40 transition-colors" />

            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-green/2 blur-[50px] pointer-events-none group-hover:bg-accent-green/5 transition-all duration-500" />
            
            <div>
              <div className="flex items-center gap-2 text-accent-green">
                <Code2 size={14} />
                <span className="font-mono text-[10px] tracking-wider">// CORE_TECH_STACK</span>
              </div>
            </div>

            {/* Glowing Live JSON syntax highlight block */}
            <div className="p-3 bg-black/45 border border-white/5 rounded font-mono text-[8px] leading-relaxed text-left text-muted/80 my-2 select-none shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)]">
              <div className="text-white/20">// response_payload</div>
              <div>{"{"}</div>
              <div className="pl-2.5">
                <span className="text-[#ff0033]">"stack"</span>: {"{"}
              </div>
              <div className="pl-5">
                <span className="text-accent-green">"frontend"</span>: [<span className="text-amber-500">"Next.js"</span>],
              </div>
              <div className="pl-5">
                <span className="text-accent-green">"backend"</span>: [<span className="text-amber-500">"Node.js"</span>, <span className="text-amber-500">"FastAPI"</span>],
              </div>
              <div className="pl-5">
                <span className="text-accent-green">"database"</span>: [<span className="text-amber-500">"PostgreSQL"</span>, <span className="text-amber-500">"Supabase"</span>]
              </div>
              <div className="pl-2.5">{"}"}</div>
              <div>{"}"}</div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {["Next.js", "Node.js", "FastAPI", "PostgreSQL", "Supabase"].map((tech) => (
                <span 
                  key={tech}
                  className="font-mono text-[9px] tracking-wider px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-muted hover:border-accent-green/30 hover:text-accent-green transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3 (Square) - DevSecOps Amber Glow */}
          <motion.div
            variants={cardVariants}
            onMouseEnter={handleCardHover}
            onClick={handleCardClick}
            className="glass-panel p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] hover:border-amber-500/45 transition-all duration-300 relative overflow-hidden group cursor-default"
          >
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/10 group-hover:border-amber-500/40 transition-colors" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/10 group-hover:border-amber-500/40 transition-colors" />

            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/2 blur-[50px] pointer-events-none group-hover:bg-amber-500/5 transition-all duration-500" />
            
            <div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 text-amber-500">
                  <Cpu size={14} />
                  <span className="font-mono text-[10px] tracking-wider">// SYSTEM_SECURITY</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping" />
                </div>
              </div>
              <h3 className="text-base font-semibold mt-2 text-primary font-sans">Infrastructure & Sec</h3>
            </div>

            {/* Active secure clearance scanning list */}
            <div className="py-2.5 font-mono text-[9px] text-muted/60 space-y-1">
              <div className="flex justify-between border-b border-white/[0.03] pb-1">
                <span>DOCKER_CONTAINER:</span>
                <span className="text-accent-green font-bold">[READY]</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.03] pb-1">
                <span>CI_CD_WORKFLOWS:</span>
                <span className="text-accent-green font-bold">[ACTIVE]</span>
              </div>
              <div className="flex justify-between">
                <span>KUBERNETES_CORE:</span>
                <span className="text-amber-500 font-bold">[STANDBY]</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {["Docker", "CI/CD", "Linux"].map((tech) => (
                <span 
                  key={tech}
                  className="font-mono text-[9px] tracking-wider px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-muted hover:border-amber-500/30 hover:text-amber-500 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4 (Span 2 cols) - System Integrations Neon Purple */}
          <motion.div
            variants={cardVariants}
            onMouseEnter={handleCardHover}
            onClick={handleCardClick}
            className="glass-panel md:col-span-2 p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:border-purple-500/45 transition-all duration-300 relative overflow-hidden group cursor-default"
          >
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/10 group-hover:border-purple-500/40 transition-colors" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/10 group-hover:border-purple-500/40 transition-colors" />

            <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/2 blur-[70px] pointer-events-none group-hover:bg-purple-500/6 transition-all duration-500" />
            
            <div>
              <div className="flex items-center gap-2 text-purple-400">
                <Layers size={14} />
                <span className="font-mono text-[10px] tracking-wider">// SYSTEM_INTEGRATIONS</span>
              </div>
              <h3 className="text-xl font-semibold mt-2 text-primary font-sans">
                Distributed Platform Architecture
              </h3>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-t border-white/5 pt-4">
              <p className="text-sm text-muted max-w-lg leading-relaxed">
                Automating enterprise workflows and synchronizing distributed platforms utilizing REST APIs, Webhooks, and custom data transformation.
              </p>
              <span className="font-mono text-[10px] text-muted/30 select-none hidden sm:inline">ADDR: 0x02</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
