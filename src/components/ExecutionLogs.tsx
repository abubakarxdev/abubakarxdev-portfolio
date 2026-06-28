"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface CareerLog {
  company: string;
  role: string;
  date: string;
  location: string;
  detail: string;
}

export default function ExecutionLogs() {
  const logs: CareerLog[] = [
    {
      company: "Pulse Matrix LLC",
      role: "Web Developer",
      date: "Sep 2025 - Present",
      location: "Remote (USA)",
      detail: "Developed serverless backend architectures (Next.js, Node.js) and managed Supabase databases. Maintained 99.9% uptime for 10+ enterprise clients."
    },
    {
      company: "GHL Success Path",
      role: "Implementation Specialist",
      date: "Jan 2026 - Feb 2026",
      location: "Islamabad, Pakistan",
      detail: "Integrated third-party systems and automated cross-channel workflows utilizing REST APIs, Webhooks, and complex JSON data transformation."
    },
    {
      company: "Codeaza Technologies",
      role: "Software Engineer Intern",
      date: "Feb 2025 - Jun 2025",
      location: "Rawalpindi, Pakistan",
      detail: "Engineered a scalable multi-tenant platform serving 12+ chains in Python (FastAPI). Developed 20+ RESTful API endpoints with strict RBAC."
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="experience-logs" className="relative w-full py-20 bg-obsidian px-6 md:px-12 flex flex-col items-center">
      {/* Delicate line background grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl w-full"
      >
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <p className="font-mono text-[10px] md:text-xs text-accent-blue tracking-widest uppercase mb-2">
            // CAREER_EXECUTION_LOGS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Professional Trajectory
          </h2>
        </motion.div>

        {/* Timeline Log List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6"
        >
          {logs.map((log, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 md:p-8 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 rounded-lg transition-all duration-300 relative group flex flex-col md:flex-row justify-between gap-6"
            >
              {/* Timeline Indicator border */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-blue/20 group-hover:bg-accent-blue/60 transition-colors duration-300 rounded-l" />

              {/* Job Title and detail metrics */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight font-sans">
                    {log.role}
                  </h3>
                  <span className="text-muted/40 hidden sm:inline">|</span>
                  <span className="text-accent-blue font-mono text-xs md:text-sm tracking-wide">
                    {log.company}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed max-w-3xl">
                  {log.detail}
                </p>
              </div>

              {/* Metadata: Date & Location details */}
              <div className="flex flex-row md:flex-col items-start md:items-end justify-between md:justify-center gap-4 md:gap-2 font-mono text-[10px] md:text-xs text-muted/50 whitespace-nowrap pt-4 md:pt-0 border-t md:border-t-0 border-white/5">
                <div className="flex items-center gap-1.5 group-hover:text-muted/80 transition-colors duration-300">
                  <Calendar size={12} className="text-accent-blue/80" />
                  <span>{log.date}</span>
                </div>
                <div className="flex items-center gap-1.5 group-hover:text-muted/80 transition-colors duration-300">
                  <MapPin size={12} className="text-accent-blue/80" />
                  <span>{log.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
