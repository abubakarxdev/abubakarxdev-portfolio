"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Shield, Layers, Code2, Cpu } from "lucide-react";

export default function CapabilitiesBento() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="experience" className="relative w-full py-24 bg-obsidian px-6 md:px-12 flex flex-col items-center">
      {/* Subtle cybernetic line texture overlay */}
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]"
        >
          {/* Box 1 (Span 2 cols) - Current Execution */}
          <motion.div
            variants={cardVariants}
            className="glass-panel md:col-span-2 p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,204,0.15)] hover:border-accent-green/30 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/2 blur-[60px] pointer-events-none group-hover:bg-accent-green/5 transition-all duration-500" />
            
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-[10px] text-accent-green tracking-wider">// CURRENT_EXECUTION</span>
                <h3 className="text-xl md:text-2xl font-semibold mt-2 text-primary font-sans">
                  Web Developer @ Pulse Matrix LLC
                </h3>
              </div>
              {/* Glowing Status Dot */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green text-[9px] font-mono tracking-wider">
                <span className="w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse" />
                <span>ACTIVE_DEPLOYMENT</span>
              </div>
            </div>

            <div className="mt-4 flex items-end justify-between border-t border-white/5 pt-4">
              <p className="text-sm text-muted max-w-md leading-relaxed">
                Architecting serverless backend workflows and managing PostgreSQL/Supabase databases, maintaining 99.9% uptime.
              </p>
              <span className="font-mono text-[10px] text-muted/30 select-none hidden sm:inline">ADDR: 0x01</span>
            </div>
          </motion.div>

          {/* Box 2 (Square) - Core Stack */}
          <motion.div
            variants={cardVariants}
            className="glass-panel p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,204,0.15)] hover:border-accent-green/30 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-green/2 blur-[50px] pointer-events-none group-hover:bg-accent-green/5 transition-all duration-500" />
            
            <div>
              <div className="flex items-center gap-2 text-accent-green">
                <Code2 size={15} />
                <span className="font-mono text-[10px] tracking-wider">// TECH_STACK</span>
              </div>
              <h3 className="text-lg font-semibold mt-2 text-primary font-sans">Core Stack</h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Node.js", "Next.js", "Python (FastAPI)", "PostgreSQL"].map((tech) => (
                <span 
                  key={tech}
                  className="font-mono text-[10px] tracking-wider px-2.5 py-1 rounded bg-white/[0.03] border border-white/5 text-muted hover:border-accent-green/20 hover:text-accent-green transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Box 3 (Square) - DevSecOps */}
          <motion.div
            variants={cardVariants}
            className="glass-panel p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/2 blur-[50px] pointer-events-none group-hover:bg-amber-500/5 transition-all duration-500" />
            
            <div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 text-amber-500">
                  <Cpu size={15} />
                  <span className="font-mono text-[10px] tracking-wider">// INFRASTRUCTURE</span>
                </div>
                {/* Yellow/Amber pulsing indicator */}
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mt-2 text-primary font-sans">DevSecOps [Initializing]</h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Linux CLI", "Docker", "CI/CD Pipelines", "Kubernetes"].map((tech) => (
                <span 
                  key={tech}
                  className="font-mono text-[9px] tracking-wider px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-muted hover:border-amber-500/20 hover:text-amber-500 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Box 4 (Span 2 cols) - System Integrations */}
          <motion.div
            variants={cardVariants}
            className="glass-panel md:col-span-2 p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,204,0.15)] hover:border-accent-green/30 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/2 blur-[60px] pointer-events-none group-hover:bg-accent-green/5 transition-all duration-500" />
            
            <div>
              <div className="flex items-center gap-2 text-accent-green">
                <Layers size={15} />
                <span className="font-mono text-[10px] tracking-wider">// SYSTEM_INTEGRATION</span>
              </div>
              <h3 className="text-xl font-semibold mt-2 text-primary font-sans">
                System Integrations
              </h3>
            </div>

            <div className="mt-4 flex items-end justify-between border-t border-white/5 pt-4">
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
