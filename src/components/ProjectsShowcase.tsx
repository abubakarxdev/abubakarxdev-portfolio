"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Shield, Zap, GitBranch, Cpu } from "lucide-react";

interface Project {
  id: string;
  title: string;
  status: string;
  tech: string[];
  detail: string;
  mockup: React.ReactNode;
  customLink?: string;
  customLinkText?: string;
}

export default function ProjectsShowcase() {
  const projects: Project[] = [
    {
      id: "hrms",
      title: "HRMS Enterprise System",
      status: "STABLE_RELEASE",
      tech: ["Node.js", "PostgreSQL", "Prisma", "React"],
      detail: "Engineered a multi-tenant HRIS with strict RBAC (Role-Based Access Control). Implemented secure user authentication pipelines utilizing JWT and Bcrypt for robust API security, protecting sensitive worker records and operational workflows.",
      customLink: "https://hrms-connect.netlify.app/",
      customLinkText: "View Deployment",
      mockup: (
        <div className="w-full h-full flex flex-col justify-between p-6 font-mono text-xs text-muted/80">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span>AUTH_GATEWAY: ACTIVE</span>
            </div>
            <span className="text-[9px] text-muted/40">PORT: 8080</span>
          </div>
          
          <div className="my-auto space-y-3 py-4">
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-md flex items-center justify-between">
              <span className="text-accent-green">POST /api/auth/login</span>
              <span className="text-muted/40">200 OK</span>
            </div>
            
            {/* Database Stream Diagram */}
            <div className="flex items-center justify-between px-3 py-2 border border-dashed border-white/10 rounded bg-black/20">
              <span className="flex items-center gap-1.5"><Database size={11} className="text-accent-green" /> Postgres</span>
              <span className="text-muted/30">{"[Prisma]"}</span>
              <span className="flex items-center gap-1.5"><Shield size={11} className="text-accent-red" /> Bcrypt</span>
            </div>

            <div className="p-2.5 bg-black/40 border border-white/5 rounded-md text-[9px] text-muted/50 overflow-hidden">
              <span className="text-accent-green block font-bold mb-0.5">JWT_TOKEN:</span>
              <p className="truncate text-accent-green/80">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c3JfMDEiLCJyb2xlIjoiYWRtaW4ifQ.uX8r901...</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[9px] text-muted/40 border-t border-white/5 pt-2">
            <span>SYS_LOAD: 12%</span>
            <span>Uptime: 99.98%</span>
          </div>
        </div>
      )
    },
    {
      id: "neuro",
      title: "NeuroSentinel AI Healthcare",
      status: "PRODUCTION_BETA",
      tech: ["Python (FastAPI)", "React.js", "TensorFlow"],
      detail: "Architected a state-of-the-art healthcare diagnostic system with AI-driven detection mechanisms for neurological conditions, achieving 92% diagnostic accuracy. Integrated strict AES-256 local database encryption and complex security RBAC systems.",
      customLink: "https://github.com/abubakarxdev/NeuroSentinel_FrontEnd",
      customLinkText: "View Repository",
      mockup: (
        <div className="w-full h-full flex flex-col justify-between p-6 font-mono text-xs text-muted/80">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span>INFERENCE_ENGINE: ONLINE</span>
            </div>
            <span className="text-[9px] text-muted/40">ACC: 92.4%</span>
          </div>

          <div className="my-auto space-y-3 py-4 flex flex-col items-center w-full">
            {/* Visual AI nodes representation */}
            <div className="w-full flex items-center justify-around py-3 bg-white/[0.01] border border-white/5 rounded-lg">
              <div className="flex flex-col items-center gap-1">
                <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center bg-black/40"><Cpu size={12} className="text-muted/60" /></div>
                <span className="text-[8px] text-muted/40">EEG_INPUT</span>
              </div>
              <span className="text-muted/30 text-[9px]">-&gt;</span>
              <div className="flex flex-col items-center gap-1">
                <div className="w-9 h-9 rounded-full border border-accent-green/30 flex items-center justify-center bg-black/60 shadow-[0_0_15px_rgba(0,255,204,0.15)]"><Zap size={14} className="text-accent-green" /></div>
                <span className="text-[8px] text-accent-green font-bold">TF_MODEL</span>
              </div>
              <span className="text-muted/30 text-[9px]">-&gt;</span>
              <div className="flex flex-col items-center gap-1">
                <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center bg-black/40"><Shield size={12} className="text-accent-red" /></div>
                <span className="text-[8px] text-muted/40">AES_256</span>
              </div>
            </div>
            <div className="text-center text-[8px] text-accent-green/80 animate-pulse mt-1">
              STATUS: DECRYPTING INGESTION STREAM... SUCCESS
            </div>
          </div>

          <div className="flex justify-between items-center text-[9px] text-muted/40 border-t border-white/5 pt-2">
            <span>MEM: 2.4 GB</span>
            <span>INF_LATENCY: 42ms</span>
          </div>
        </div>
      )
    },
    {
      id: "blog",
      title: "BlogApp API Architecture",
      status: "OPEN_SOURCE",
      tech: ["Python", "FastAPI", "PostgreSQL", "OAuth2"],
      detail: "Built a highly scalable full-stack content distribution API. Prioritized secure, modular API routes, seamless database schema tracking using Alembic, OAuth2 server credentials workflow management, and lightning-fast media storage integrations with Cloudinary.",
      customLink: "https://github.com/abubakarxdev/blogapp",
      customLinkText: "View Repository",
      mockup: (
        <div className="w-full h-full flex flex-col justify-between p-6 font-mono text-xs text-muted/80">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span>ALEMBIC: SYNCED</span>
            </div>
            <span className="text-[9px] text-muted/40">REV: f82d8c3e</span>
          </div>

          <div className="my-auto space-y-2 py-3 text-left">
            <div className="p-2.5 bg-black/50 border border-white/5 rounded font-mono text-[8px] space-y-0.5 overflow-hidden">
              <div className="text-muted/40">// Running upgrade None -&gt; f82d8c3e_init</div>
              <div className="text-accent-green truncate">INFO  [alembic] Context impl PostgresqlImpl.</div>
              <div className="text-accent-green truncate">INFO  [alembic] Will assume transactional DDL.</div>
              <div className="text-accent-green truncate">INFO  [alembic] Running upgrade: f82d8c3e</div>
            </div>

            <div className="flex items-center justify-between text-[9px] bg-white/[0.01] border border-white/5 p-2 rounded">
              <span className="flex items-center gap-1"><GitBranch size={10} className="text-accent-green" /> scopes:</span>
              <span className="text-accent-green/80">write:blogs, read:users</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[9px] text-muted/40 border-t border-white/5 pt-2">
            <span>DB_CONN: ACTIVE</span>
            <span>REQS/SEC: 4,200</span>
          </div>
        </div>
      )
    },
    {
      id: "ats",
      title: "AR Recruitment ATS (Applicant Tracking System)",
      status: "PRODUCTION_DEPLOYED",
      tech: ["Next.js", "Supabase", "Cloudflare", "Resend"],
      detail: "Engineered a production-ready Applicant Tracking System and client portal. Architected a secure admin dashboard for pipeline management and integrated serverless email workflows, deployed seamlessly on the Cloudflare edge network.",
      customLink: "https://www.arrecruitment.org/",
      customLinkText: "View Deployment",
      mockup: (
        <div className="w-full h-full flex flex-col justify-between p-6 font-mono text-xs text-muted/80">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span>CF_WORKER: EDGE_DEPLOYED</span>
            </div>
            <span className="text-[9px] text-muted/40">ZONE: US-EAST</span>
          </div>

          <div className="my-auto space-y-3 py-4">
            {/* Edge network routing */}
            <div className="flex items-center justify-between text-[8px] bg-white/[0.01] border border-white/5 p-2 rounded">
              <span className="flex items-center gap-1"><Cpu size={10} className="text-accent-green" /> Edge Node</span>
              <span className="text-muted/30">{"--[Resend API]-->"}</span>
              <span className="text-accent-green font-bold">Client Inbox</span>
            </div>

            {/* ATS Pipeline columns */}
            <div className="grid grid-cols-3 gap-2 text-center text-[8px] pt-1">
              <div className="p-1.5 bg-black/40 border border-white/5 rounded">
                <div className="text-muted/40 font-bold mb-1">APPLIED</div>
                <div className="text-accent-green font-mono">14 Candidates</div>
              </div>
              <div className="p-1.5 bg-black/40 border border-accent-green/20 rounded shadow-[0_0_10px_rgba(0,255,204,0.05)]">
                <div className="text-accent-green font-bold mb-1">INTERVIEW</div>
                <div className="text-accent-green font-mono">3 Active</div>
              </div>
              <div className="p-1.5 bg-black/40 border border-white/5 rounded">
                <div className="text-muted/40 font-bold mb-1">OFFERED</div>
                <div className="text-accent-green font-mono">1 Sent</div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[9px] text-muted/40 border-t border-white/5 pt-2">
            <span>RESEND: 200 OK</span>
            <span>DB: SUPABASE_REALTIME</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="projects" className="relative w-full py-24 bg-obsidian px-6 md:px-12 flex flex-col items-center">
      {/* Cyber grid lines background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-left"
        >
          <p className="font-mono text-[10px] md:text-xs text-accent-green tracking-widest uppercase mb-2">// PROJECT_ARCHIVE</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary font-sans">Featured Systems Development</h2>
        </motion.div>

        {/* Alternate case studies */}
        <div className="flex flex-col gap-48">
          {projects.map((proj, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={proj.id} 
                className={`flex flex-col lg:flex-row gap-12 items-center min-h-[400px] w-full ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Left/Right mock-up representation */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-1/2 aspect-video glass-panel rounded-lg shadow-xl relative overflow-hidden flex items-center justify-center border border-white/5 hover:border-white/10 transition-colors duration-300 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-0 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative z-10 w-full h-full">
                    {proj.mockup}
                  </div>
                </motion.div>

                {/* Left/Right Brief details */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                  className="w-full lg:w-1/2 flex flex-col gap-4 text-left justify-center"
                >
                  {/* Status Pill */}
                  <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/[0.03] border border-white/5 text-[9px] tracking-widest font-mono text-accent-green w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                    <span>SYS_STATUS: {proj.status}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-sans">
                    {proj.title}
                  </h3>

                  {/* Tech stack cluster */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {proj.tech.map((t) => (
                      <span 
                        key={t}
                        className="font-mono text-[9px] tracking-wider px-2.5 py-0.5 rounded bg-white/[0.02] border border-white/5 text-muted/80 hover:text-accent-green hover:border-accent-green/20 transition-all duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-muted/95 leading-relaxed mt-4">
                    {proj.detail}
                  </p>

                  {/* Link with animated arrow */}
                  <motion.a 
                    href={proj.customLink || `https://github.com/abubakar/${proj.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-accent-green hover:text-accent-green/80 mt-6 group cursor-pointer w-fit"
                  >
                    <span>{proj.customLinkText || "COM_LINK: DISPATCH_REPOS"}</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.2, 
                        ease: "easeInOut" 
                      }}
                      className="inline-block"
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                  </motion.a>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
