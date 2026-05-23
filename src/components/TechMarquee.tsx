"use client";

import React from "react";

export default function TechMarquee() {
  const techs = [
    "Next.js",
    "Node.js",
    "Python (FastAPI)",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Cloudflare",
    "React.js",
    "Linux CLI",
    "REST APIs",
    "OAuth2"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-obsidian border-y border-white/5 py-4.5 flex items-center">
      {/* Faint Gradient Mask on Left/Right Edges to fade smooth in and out of the void */}
      <div className="absolute top-0 left-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-obsidian via-obsidian/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-obsidian via-obsidian/70 to-transparent z-10 pointer-events-none" />

      {/* Endless Ribbon */}
      <div className="flex w-max">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] cursor-default">
          {/* Render 3 repetitions to ensure perfect infinite wrap coverage */}
          {[...techs, ...techs, ...techs].map((tech, idx) => (
            <React.Fragment key={idx}>
              <span className="font-mono text-[10px] md:text-xs text-muted/30 hover:text-accent-green hover:shadow-[0_0_10px_rgba(0,255,204,0.15)] transition-all duration-300 select-none tracking-widest uppercase">
                {tech}
              </span>
              <span className="font-mono text-[10px] text-muted/10 select-none font-bold">
                //
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
