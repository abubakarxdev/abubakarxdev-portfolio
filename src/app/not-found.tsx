import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-obsidian flex flex-col items-center justify-center overflow-hidden px-6 font-mono text-zinc-300">
      {/* Massive, muted background indicator */}
      <div className="absolute select-none pointer-events-none text-[20vw] md:text-[25vw] font-bold text-white/[0.01] leading-none z-0">
        404
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        {/* Terminal Header Icon */}
        <div className="text-accent-red/80 animate-pulse text-xs tracking-widest uppercase">
          [!] ERR // NODE_UNREACHABLE
        </div>

        {/* Console readout block */}
        <div className="p-6 rounded-lg bg-black/40 border border-white/5 max-w-md backdrop-blur-md">
          <p className="text-[11px] md:text-xs text-muted leading-relaxed">
            The requested protocol or system node address could not be resolved by the network kernel. Verify the URL path and re-initialize connection.
          </p>
        </div>

        {/* CTA link back to root */}
        <Link 
          href="/" 
          className="mt-4 px-6 py-2.5 border border-accent-green/30 text-accent-green hover:border-accent-green hover:shadow-[0_0_15px_rgba(0,255,204,0.15)] rounded-md text-xs tracking-wider transition-all duration-300"
        >
          &gt; return_to_root
        </Link>
      </div>
    </div>
  );
}
