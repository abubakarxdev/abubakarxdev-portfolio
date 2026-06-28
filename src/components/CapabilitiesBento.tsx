"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Shield, Layers, Code2, Cpu, Terminal, Network } from "lucide-react";

export default function CapabilitiesBento() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="experience" className="relative w-full py-24 bg-obsidian px-6 md:px-12 flex flex-col items-center select-none border-t border-white/5">
      <div className="relative z-10 max-w-5xl w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-left"
        >
          <p className="font-mono text-[10px] md:text-xs text-accent-blue tracking-[0.2em] uppercase mb-2">// CAPABILITIES_MANIFEST</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary font-sans">System Architecture</h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[280px]"
        >
          {/* Card 1 (Span 2 cols) - Secure API Architecture */}
          <motion.div
            variants={cardVariants}
            tabIndex={0}
            className="md:col-span-2 p-8 flex flex-col justify-between bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden group cursor-pointer md:cursor-default shadow-lg"
          >
            <div className="relative z-10">
              <span className="font-mono text-[10px] text-accent-blue tracking-wider flex items-center gap-2 mb-4">
                <Shield size={12} />
                <span>API SECURITY & AUTH</span>
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-sans">
                Zero-Trust Data Pipelines
              </h3>
              <p className="mt-4 text-sm text-muted max-w-md leading-relaxed">
                Architecting serverless backend workflows with rigorous RBAC, token rotation, and end-to-end payload encryption. 
              </p>
            </div>

            {/* Hover Frosted Glass Reveal */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-500 z-20 flex flex-col justify-end p-8 border-t border-accent-blue/30">
               <div className="font-mono text-[10px] text-muted space-y-2">
                 <div className="flex justify-between border-b border-white/10 pb-2">
                   <span className="text-accent-blue">POST /api/v1/auth/verify</span>
                   <span>HTTP 200 OK</span>
                 </div>
                 <div className="flex justify-between border-b border-white/10 pb-2">
                   <span className="text-accent-blue">JWT_SIGNATURE:</span>
                   <span>ED25519_VALIDATED</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-accent-blue">RATE_LIMIT:</span>
                   <span>42 req/s [HEALTHY]</span>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Card 2 (Square) - Core Tech Stack */}
          <motion.div
            variants={cardVariants}
            tabIndex={0}
            className="p-8 flex flex-col justify-between bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden group cursor-pointer md:cursor-default shadow-lg"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Code2 size={12} />
                  <span className="font-mono text-[10px] tracking-wider text-muted">STACK</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Node.js", "FastAPI", "PostgreSQL", "Supabase", "Redis"].map((tech) => (
                    <span 
                      key={tech}
                      className="font-mono text-[10px] px-2 py-1 bg-white/[0.03] border border-white/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover Frosted Glass Reveal */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-all duration-500 z-20 p-6 flex flex-col justify-center border border-white/10">
               <span className="font-mono text-[10px] text-accent-blue mb-4">~ cat package.json | grep deps</span>
               <div className="font-mono text-[9px] text-muted space-y-2">
                 <div className="flex justify-between border-b border-white/5 pb-1"><span>"next"</span><span className="text-primary">"^14.x"</span></div>
                 <div className="flex justify-between border-b border-white/5 pb-1"><span>"fastapi"</span><span className="text-primary">"^0.103.x"</span></div>
                 <div className="flex justify-between border-b border-white/5 pb-1"><span>"framer-motion"</span><span className="text-primary">"^11.x"</span></div>
                 <div className="flex justify-between"><span>"supabase-js"</span><span className="text-primary">"^2.x"</span></div>
               </div>
            </div>
          </motion.div>

          {/* Card 3 (Square) - Infra */}
          <motion.div
            variants={cardVariants}
            tabIndex={0}
            className="p-8 flex flex-col justify-between bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden group cursor-pointer md:cursor-default shadow-lg"
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 text-primary">
                  <Cpu size={12} />
                  <span className="font-mono text-[10px] tracking-wider text-muted">INFRASTRUCTURE</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary font-sans">Cloud Native</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Terraform, Docker, and Kubernetes for scalable edge deployments.
              </p>
            </div>

            <div className="absolute inset-0 bg-black/80 backdrop-blur-md opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-all duration-500 z-20 p-6 flex flex-col justify-center border border-white/10">
               <span className="font-mono text-[10px] text-accent-blue mb-2">~ kubectl get pods</span>
               <div className="font-mono text-[9px] text-muted space-y-1">
                 <div className="flex justify-between"><span>auth-service-v2</span><span className="text-primary">Running</span></div>
                 <div className="flex justify-between"><span>db-pool-manager</span><span className="text-primary">Running</span></div>
                 <div className="flex justify-between"><span>cache-node-01</span><span className="text-primary">Running</span></div>
               </div>
            </div>
          </motion.div>

          {/* Card 4 (Span 2 cols) - System Integrations */}
          <motion.div
            variants={cardVariants}
            tabIndex={0}
            className="md:col-span-2 p-8 flex flex-col justify-between bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden group cursor-pointer md:cursor-default shadow-lg"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Network size={12} />
                <span className="font-mono text-[10px] tracking-wider text-muted">INTEGRATIONS</span>
              </div>
              <h3 className="text-2xl font-bold text-primary font-sans">
                Distributed Async Workflows
              </h3>
              <p className="mt-4 text-sm text-muted max-w-lg leading-relaxed">
                Automating enterprise tasks and synchronizing platforms using REST APIs, webhooks, and robust background queues.
              </p>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />
            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 group-focus:translate-x-0 group-active:translate-x-0 z-20">
               <Layers size={64} className="text-accent-blue/30" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
