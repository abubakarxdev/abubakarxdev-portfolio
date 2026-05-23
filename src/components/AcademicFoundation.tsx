"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, GraduationCap } from "lucide-react";

export default function AcademicFoundation() {
  const courses = [
    "Object-Oriented Programming (OOP)",
    "Data Structures & Algorithms (DSA)",
    "Software Architecture",
    "Database Management Systems"
  ];

  return (
    <section id="education" className="relative w-full py-16 bg-obsidian px-6 md:px-12 flex flex-col items-center">
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
          className="mb-12 text-left"
        >
          <p className="font-mono text-[10px] md:text-xs text-accent-green tracking-widest uppercase mb-2">
            // BASE_SYSTEM_ARCHITECTURE
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Academic Foundation
          </h2>
        </motion.div>

        {/* Wide Glass Panel Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-8 rounded-lg relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,204,0.15)] hover:border-accent-green/30 transition-all duration-300 group"
        >
          {/* Top light glow highlights */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent-green/2 blur-[80px] pointer-events-none group-hover:bg-accent-green/4 transition-colors duration-500" />
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-green/20 group-hover:bg-accent-green/60 transition-colors duration-300 rounded-l" />

          {/* Academic descriptions */}
          <div className="flex-1 flex flex-col gap-4 text-left">
            <div className="flex items-center gap-2 text-accent-green font-mono text-[10px] tracking-wider">
              <GraduationCap size={14} />
              <span>ACADEMIC_PROTOCOL: ACTIVE</span>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-sans">
                Bachelor of Science in Software Engineering
              </h3>
              <p className="font-mono text-xs md:text-sm text-muted mt-1.5 tracking-wide">
                COMSATS University Islamabad <span className="text-muted/40">|</span> Graduated 2025
              </p>
            </div>

            <div className="w-full h-[1px] bg-white/5 my-1" />

            {/* Core Coursework Tags */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] text-muted/40 tracking-widest uppercase">// CORE_COURSEWORK:</span>
              <div className="flex flex-wrap gap-2">
                {courses.map((course) => (
                  <span 
                    key={course}
                    className="font-mono text-[9px] md:text-[10px] tracking-wider px-3 py-1 rounded bg-white/[0.02] border border-white/5 text-muted hover:border-accent-green/20 hover:text-accent-green transition-all duration-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Abstract glowing geometric icon */}
          <div className="p-4 rounded bg-white/[0.01] border border-white/5 shadow-2xl relative overflow-hidden group-hover:border-accent-green/20 transition-colors duration-300 self-center hidden md:block">
            <Cpu size={32} className="text-muted/30 group-hover:text-accent-green transition-colors duration-500 animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
