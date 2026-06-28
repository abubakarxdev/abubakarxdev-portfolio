"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

interface Credential {
  title: string;
  issuer: string;
  date: string;
  id: string;
  link: string;
  tags: string[];
}

export default function VerifiedCredentials() {
  const credentials: Credential[] = [
    {
      title: "IBM Cloud Essentials V3",
      issuer: "IBM",
      date: "Jan 2025",
      id: "582fc86fb977",
      link: "https://courses.cognitiveclass.ai/certificates/582fc86fb9774c0eae3cac3652286587",
      tags: ["Kubernetes", "IBM Cloud", "Architecture"]
    },
    {
      title: "Professional Diploma in Software Testing",
      issuer: "MTF Institute",
      date: "Feb 2025",
      id: "UC-47b4a32a",
      link: "https://www.udemy.com/certificate/UC-47b4a32a-93d8-4a5a-b13a-44047235f274/",
      tags: ["QA", "Automated Testing"]
    },
    {
      title: "Practical Next.js & React",
      issuer: "Udemy",
      date: "Jan 2025",
      id: "UC-f726fbc0",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-f726fbc0-d1bb-480d-b0d1-535e03027558.jpg",
      tags: ["Next.js", "React.js"]
    },
    {
      title: "Introduction to Cyber Security",
      issuer: "HP",
      date: "Dec 2024",
      id: "0f03b9e7",
      link: "https://api.life-global.org/learning/api/certificates/0f03b9e7-886c-4d66-8e94-f87db3cf4470",
      tags: ["Risk Management", "Security Protocols"]
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="credentials" className="relative w-full py-24 bg-obsidian px-6 md:px-12 flex flex-col items-center">
      {/* Delicate line background grid overlay */}
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
            // SECURITY_&_SYSTEM_CERTIFICATIONS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Verified Credentials
          </h2>
        </motion.div>

        {/* Minimalist Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {credentials.map((cred, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-panel p-6 flex flex-col justify-between gap-6 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,204,0.15)] hover:border-accent-blue/30 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top Accent line simulating ticket cut */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-accent-blue/25 group-hover:bg-accent-blue/60 transition-colors duration-300" />
              
              <div className="flex flex-col gap-4">
                {/* System Tag */}
                <div className="flex items-center justify-between font-mono text-[9px] text-muted/40">
                  <div className="flex items-center gap-1">
                    <ShieldCheck size={11} className="text-accent-blue/80" />
                    <span>NODE_SECURED</span>
                  </div>
                  <span>TICKET_ID: {cred.id}</span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-bold tracking-tight text-white font-sans leading-snug">
                  {cred.title}
                </h3>

                {/* Issuer, Date details */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] text-muted">
                  <span>ISSUER: {cred.issuer}</span>
                  <span>DATE: {cred.date}</span>
                </div>
              </div>

              {/* Bottom Row: Tags & Verification Link */}
              <div className="flex items-end justify-between border-t border-white/5 pt-4 mt-2">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cred.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="font-mono text-[9px] tracking-wider px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-muted/70 group-hover:border-accent-blue/10 group-hover:text-accent-blue transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Verify Node Link */}
                <a
                  href={cred.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-[10px] text-accent-blue hover:text-accent-blue/80 hover:shadow-[0_0_10px_rgba(0,255,204,0.1)] transition-all duration-200 group-hover:translate-x-0.5"
                >
                  <span>Verify Node</span>
                  <ArrowUpRight size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
