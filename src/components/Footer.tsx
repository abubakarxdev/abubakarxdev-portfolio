"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-obsidian py-8 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-5xl w-full border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-mono text-muted/60">
        {/* Left Status dot */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
          <span>SYS_STATUS: ONLINE</span>
        </div>

        {/* Right copyright info */}
        <div className="text-center md:text-right">
          <span>© 2026 Abu Bakar. All protocols initialized.</span>
        </div>
      </div>

      <div className="mt-8 flex justify-center text-xs text-zinc-500 font-mono">
        <a 
          href="/api/engineer" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-[#00ffcc] transition-colors"
        >
          {">"} GET /api/engineer
        </a>
      </div>
    </footer>
  );
}
