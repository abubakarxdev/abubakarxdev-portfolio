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

const projects: Project[] = [
  {
    id: "guardrail",
    title: "GuardRail",
    status: "PRODUCTION_LIVE",
    tech: ["Next.js 14", "FastAPI", "PostgreSQL", "Framer Motion", "Render"],
    detail: "A production-grade Static Analysis & Compliance Auditing platform. Features a Next.js 14 frontend with an interactive dashboard and line-highlighting code viewer. The Python FastAPI backend uses PostgreSQL (Neon Serverless), BackgroundTasks for async auditing of Terraform/Kubernetes, and Resend for transactional emails.",
    customLink: "https://guardrail-alpha.vercel.app/",
    customLinkText: "View Platform",
    mockup: (
      <div className="w-full h-full flex flex-col justify-between p-6 font-mono text-xs text-muted/80 bg-obsidian">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span>AUDIT_ENGINE: ACTIVE</span>
          </div>
          <span className="text-[9px] text-accent-red font-bold animate-pulse">VIOLATION DETECTED</span>
        </div>

        <div className="my-auto space-y-3 py-4 flex flex-col items-start w-full">
          <div className="w-full p-2.5 bg-black/50 border border-accent-red/20 rounded font-mono text-[9px] space-y-1">
            <div className="text-muted/50"># Terraform S3 Bucket config</div>
            <div className="flex text-muted"><span className="text-muted/30 w-6 text-right mr-2">12</span><span>resource "aws_s3_bucket" "b" {"{"}</span></div>
            <div className="flex text-muted"><span className="text-muted/30 w-6 text-right mr-2">13</span><span>  bucket = "my-tf-test-bucket"</span></div>
            <div className="flex bg-accent-red/10 border-l-2 border-accent-red"><span className="text-muted/30 w-6 text-right mr-2">14</span><span className="text-accent-red">  acl    = "public-read"  <span className="text-accent-red/50">&lt;-- CRITICAL</span></span></div>
            <div className="flex text-muted"><span className="text-muted/30 w-6 text-right mr-2">15</span><span>{"}"}</span></div>
          </div>

          <div className="flex gap-2 w-full mt-2">
            <div className="flex-1 p-2 border border-white/5 bg-white/[0.01] rounded flex flex-col gap-1 items-center justify-center">
              <span className="text-muted/40 text-[8px]">SECURITY GRADE</span>
              <span className="text-accent-red font-sans font-bold text-2xl leading-none">F</span>
            </div>
            <div className="flex-1 p-2 border border-white/5 bg-white/[0.01] rounded flex flex-col gap-1 items-center justify-center">
              <span className="text-muted/40 text-[8px]">VIOLATIONS</span>
              <span className="text-accent-red font-sans font-bold text-2xl leading-none">1</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[9px] text-muted/40 border-t border-white/5 pt-2">
           <span>QUEUE: FASTAPI_BACKGROUND</span>
           <span>PARSER: HCL2 / YAML</span>
        </div>
      </div>
    )
  },
  {
    id: "hrms",
    title: "HRMS Enterprise System",
    status: "STABLE_RELEASE",
    tech: ["Node.js", "PostgreSQL", "Prisma", "React"],
    detail: "Engineered a multi-tenant HRIS with strict RBAC (Role-Based Access Control). Implemented secure user authentication pipelines utilizing JWT and Bcrypt for robust API security, protecting sensitive worker records and operational workflows.",
    customLink: "https://hrms-connect.netlify.app/",
    customLinkText: "View Deployment",
    mockup: (
      <div className="w-full h-full flex flex-col justify-between p-6 font-mono text-xs text-muted/80 bg-obsidian">
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
      <div className="w-full h-full flex flex-col justify-between p-6 font-mono text-xs text-muted/80 bg-obsidian">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span>INFERENCE_ENGINE: ONLINE</span>
          </div>
          <span className="text-[9px] text-muted/40">ACC: 92.4%</span>
        </div>

        <div className="my-auto space-y-3 py-4 flex flex-col items-center w-full">
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
      <div className="w-full h-full flex flex-col justify-between p-6 font-mono text-xs text-muted/80 bg-obsidian">
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
      <div className="w-full h-full flex flex-col justify-between p-6 font-mono text-xs text-muted/80 bg-obsidian">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span>CF_WORKER: EDGE_DEPLOYED</span>
          </div>
          <span className="text-[9px] text-muted/40">ZONE: US-EAST</span>
        </div>

        <div className="my-auto space-y-3 py-4">
          <div className="flex items-center justify-between text-[8px] bg-white/[0.01] border border-white/5 p-2 rounded">
            <span className="flex items-center gap-1"><Cpu size={10} className="text-accent-green" /> Edge Node</span>
            <span className="text-muted/30">{"--[Resend API]-->"}</span>
            <span className="text-accent-green font-bold">Client Inbox</span>
          </div>

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

function ProjectCard({ proj, index }: { proj: Project; index: number }) {
  // Alternate layout direction based on index
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-8 md:gap-16 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Visual Mockup Container */}
      <div className="w-full md:w-[50%] flex-shrink-0">
        <div className="w-full aspect-[16/10] bg-black/40 rounded-xl relative overflow-hidden border border-white/5 hover:border-white/10 transition-colors shadow-lg">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />
          <div className="relative z-10 w-full h-full p-1 opacity-90 hover:opacity-100 transition-opacity">
            <div className="w-full h-full rounded-lg overflow-hidden bg-obsidian">
              {proj.mockup}
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4 w-full md:w-[50%]">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.03] border border-white/5 text-[10px] tracking-widest font-mono text-accent-green w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
          <span>STATUS: {proj.status}</span>
        </div>
        
        <h3 className="text-3xl font-bold tracking-tight text-white font-sans">{proj.title}</h3>
        
        <p className="text-base text-muted/80 leading-relaxed">
          {proj.detail}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
           {proj.tech.map((t) => (
              <span key={t} className="font-sans font-medium text-[11px] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5 text-muted">
                {t}
              </span>
           ))}
        </div>

        <div className="mt-4">
          <a 
            href={proj.customLink || `https://github.com/abubakarxdev/${proj.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans font-medium text-sm text-primary hover:text-accent-green transition-colors group cursor-pointer"
          >
            {proj.customLinkText || "View Project"}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative w-full bg-obsidian py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sans leading-none">
            Featured Systems
          </h2>
          <p className="mt-4 text-base text-muted/70 max-w-xl leading-relaxed">
            Production-grade architectures, compliance platforms, and robust zero-trust applications built for scale.
          </p>
        </div>

        {/* Vertical Stack of Projects */}
        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((proj, idx) => (
            <ProjectCard key={proj.id} proj={proj} index={idx} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
