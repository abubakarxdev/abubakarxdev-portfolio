"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an analytics service for developer inspection
    console.error(error);
  }, [error]);

  return (
    <div className="relative min-h-screen bg-obsidian flex flex-col items-center justify-center overflow-hidden px-6 font-mono text-zinc-300">
      {/* Massive, muted background indicator */}
      <div className="absolute select-none pointer-events-none text-[20vw] md:text-[25vw] font-bold text-accent-red/[0.007] leading-none z-0">
        500
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center w-full max-w-xl">
        {/* Terminal Header Icon */}
        <div className="text-amber-500 animate-pulse text-xs tracking-widest uppercase">
          [!] SYS_FAULT // RUNTIME_EXCEPTION
        </div>

        {/* Display the crash trace */}
        <div className="w-full p-6 rounded-lg bg-black/60 border border-white/5 backdrop-blur-md flex flex-col gap-3 text-left">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-muted/40">
            <span>KERNEL_TRACE_LOG</span>
            <span>DIGEST: {error.digest || "N/A"}</span>
          </div>
          <pre className="text-[11px] text-accent-red/90 whitespace-pre-wrap overflow-x-auto leading-relaxed max-h-[150px]">
            {error.message || "Unknown system failure. Thread terminated."}
          </pre>
        </div>

        {/* CTA link back to root */}
        <button 
          onClick={reset}
          className="mt-4 px-6 py-2.5 border border-amber-500/30 text-amber-500 hover:border-amber-500 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] rounded-md text-xs tracking-wider transition-all duration-300 cursor-pointer"
        >
          [ REBOOT_SYSTEM ]
        </button>
      </div>
    </div>
  );
}
