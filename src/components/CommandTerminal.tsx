"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playSystemSound } from "./AudioEngine";

interface HistoryEntry {
  command?: string;
  output: string;
  isError?: boolean;
}

const AVAILABLE_COMMANDS = [
  "help",
  "whoami",
  "cat resume.pdf",
  "sudo hire",
  "cd experience",
  "cd projects",
  "cd academic",
  "cd credentials",
  "matrix",
  "clear",
];

// Matrix rain canvas helper component
function MatrixRain({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 600;
    canvas.height = canvas.parentElement?.clientHeight || 300;

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=<>!@#%^&";
    const fontSize = 11;
    const columns = Math.floor(canvas.width / fontSize);

    const rainDrops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ffcc";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 30);

    const timer = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 3500); // Run for 3.5 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="absolute inset-0 z-20 bg-black overflow-hidden rounded-b-lg">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 border border-accent-blue/30 text-accent-blue text-[10px] font-mono rounded tracking-widest animate-pulse">
        SYS_OVERRIDE: MATRIX_CASCADE_ACTIVE... [ESC TO TERMINATE]
      </div>
    </div>
  );
}

export default function CommandTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    { output: "SYSTEM PROTOCOL INTERACTIVE TERMINAL [v1.2.0]" },
    { output: "STATUS: SECURE_CONNECTION_ESTABLISHED" },
    { output: "TYPE 'help' TO INITIATE SYSTEM QUERY PROTOCOLS." },
  ]);
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const [sysStats, setSysStats] = useState({ cpu: 14, ram: 2.1 });

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Fluctuating Simulated Telemetry Header data
  useEffect(() => {
    const statInterval = setInterval(() => {
      setSysStats({
        cpu: Math.floor(Math.random() * (19 - 8) + 8),
        ram: parseFloat((Math.random() * (2.4 - 2.1) + 2.1).toFixed(2)),
      });
    }, 4000);
    return () => clearInterval(statInterval);
  }, []);

  // Listen to Global keyboard shortcut and global custom triggers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          const next = !prev;
          playSystemSound("click");
          return next;
        });
      }
      if (e.key === "Escape") {
        if (isMatrixActive) {
          setIsMatrixActive(false);
        } else {
          setIsOpen(false);
        }
      }
    };

    const handleCustomTrigger = () => {
      setIsOpen((prev) => {
        const next = !prev;
        playSystemSound("click");
        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("toggle_command_terminal", handleCustomTrigger);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("toggle_command_terminal", handleCustomTrigger);
    };
  }, [isMatrixActive]);

  // Focus caret input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Auto-scroll terminal history to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isMatrixActive]);

  // Find autocomplete matching command suggestion
  const getAutocompleteSuggestion = () => {
    if (!input) return "";
    const cleanInput = input.trim().toLowerCase();
    const match = AVAILABLE_COMMANDS.find(
      (cmd) => cmd.startsWith(cleanInput) && cmd !== cleanInput
    );
    return match ? match.slice(cleanInput.length) : "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    playSystemSound("keypress"); // Play tactical typing sound click
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Autocomplete on Tab or ArrowRight
    if (e.key === "Tab" || e.key === "ArrowRight") {
      const suggestion = getAutocompleteSuggestion();
      if (suggestion) {
        e.preventDefault();
        setInput((prev) => prev + suggestion);
        playSystemSound("keypress");
      }
    }
  };

  const executeCommand = (commandStr: string) => {
    const trimmedInput = commandStr.trim();
    if (!trimmedInput) return;

    const lowerInput = trimmedInput.toLowerCase();
    let response = "";
    let isError = false;

    // Default entry log
    const currentEntry: HistoryEntry = { command: trimmedInput, output: "" };

    switch (lowerInput) {
      case "help":
        response = `AVAILABLE_COMMANDS:\n  whoami            - Read developer operator bio\n  cat resume.pdf    - Download official resume credentials\n  sudo hire         - Route to dispatcher secure channel\n  cd experience     - Scroll to career trajectory\n  cd projects       - Scroll to featured database repositories\n  cd academic       - Scroll to academic system architecture\n  cd credentials    - Scroll to verified clearances\n  matrix            - Initiate terminal override sequence\n  clear             - Clean terminal screen outputs`;
        playSystemSound("success");
        break;
      case "whoami":
        response = "Abu Bakar // Full-Stack Systems Engineer & DevSecOps. Specialize in designing secure, hyper-performant APIs, and managing serverless deployments. Islamabad, PK.";
        playSystemSound("success");
        break;
      case "cat resume.pdf":
        response = "Access granted. Initiating secure PDF dispatch protocol...";
        playSystemSound("success");
        setTimeout(() => {
          window.open("/resume.pdf", "_blank");
        }, 850);
        break;
      case "sudo hire":
        response = "Accessing superuser authorization code... Establishing secure connection...";
        playSystemSound("success");
        setTimeout(() => {
          setIsOpen(false);
          setTimeout(() => {
            const el = document.getElementById("contact");
            el?.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }, 900);
        break;
      case "cd experience":
        response = "Navigating directories. Target: /root/experience...";
        playSystemSound("success");
        setTimeout(() => {
          setIsOpen(false);
          setTimeout(() => {
            const el = document.getElementById("experience");
            el?.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }, 600);
        break;
      case "cd projects":
        response = "Navigating directories. Target: /root/projects...";
        playSystemSound("success");
        setTimeout(() => {
          setIsOpen(false);
          setTimeout(() => {
            const el = document.getElementById("projects");
            el?.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }, 600);
        break;
      case "cd academic":
      case "cd education":
        response = "Navigating directories. Target: /root/academic...";
        playSystemSound("success");
        setTimeout(() => {
          setIsOpen(false);
          setTimeout(() => {
            const el = document.getElementById("education");
            el?.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }, 600);
        break;
      case "cd credentials":
        response = "Navigating directories. Target: /root/credentials...";
        playSystemSound("success");
        setTimeout(() => {
          setIsOpen(false);
          setTimeout(() => {
            const el = document.getElementById("credentials");
            el?.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }, 600);
        break;
      case "matrix":
        setIsMatrixActive(true);
        playSystemSound("matrix");
        setInput("");
        return; // Don't print output immediately, wait for cascade
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        response = `Command not found: '${trimmedInput}'. Type 'help' to review operational credentials.`;
        isError = true;
        playSystemSound("error");
    }

    currentEntry.output = response;
    currentEntry.isError = isError;
    setHistory((prev) => [...prev, currentEntry]);
    setInput("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  const handleQuickBadgeClick = (cmd: string) => {
    playSystemSound("click");
    executeCommand(cmd);
  };

  const activeSuggestion = getAutocompleteSuggestion();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none">
          {/* Backdrop Click Close */}
          <div className="absolute inset-0" onClick={() => { playSystemSound("click"); setIsOpen(false); }} />

          {/* Core Shell Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="relative w-full max-w-2xl h-[450px] bg-[#090909]/95 border border-white/10 rounded-lg shadow-[0_0_80px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden font-mono text-xs text-zinc-300 backdrop-blur-lg"
          >
            {/* Real-time canvas matrix overlay */}
            {isMatrixActive && (
              <MatrixRain
                onComplete={() => {
                  setIsMatrixActive(false);
                  setHistory((prev) => [
                    ...prev,
                    { command: "matrix", output: "MATRIX_INTRUSION_COMPLETE: OVERRIDE_SUCCESSFUL // ALL SYSTEM SECURITY PROTOCOLS ENFORCED" },
                  ]);
                  playSystemSound("success");
                }}
              />
            )}

            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111111] border-b border-white/5 select-none shrink-0">
              <div className="flex items-center gap-2">
                <div 
                  className="w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500 transition-colors" 
                  onClick={() => { playSystemSound("click"); setIsOpen(false); }} 
                />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                <span className="text-[10px] text-muted/50 ml-2 font-mono">operator@abubakarxdev-sys:~</span>
              </div>
              
              {/* Micro diagnostic telemetry headers */}
              <div className="hidden sm:flex items-center gap-3 text-[9px] text-muted/30">
                <span>CPU: <span className="text-accent-blue font-bold">{sysStats.cpu}%</span></span>
                <span>RAM: <span className="text-amber-500 font-bold">{sysStats.ram}GB</span></span>
                <span>PING: <span className="text-blue-400">14ms</span></span>
                <span className="text-white/10">|</span>
                <span className="text-muted/40">ESC to Exit</span>
              </div>
            </div>

            {/* Terminal Console Viewport */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 flex flex-col bg-black/10 scrollbar-thin">
              {history.map((entry, idx) => (
                <div key={idx} className="space-y-1">
                  {entry.command && (
                    <div className="flex items-center gap-2">
                      <span className="text-amber-500/80">guest@operator-node:~$</span>
                      <span className="text-white font-semibold">{entry.command}</span>
                    </div>
                  )}
                  <div 
                    className={`pl-3 border-l whitespace-pre-wrap ${
                      entry.isError 
                        ? "text-accent-red border-accent-red/20" 
                        : "text-accent-blue border-accent-blue/20"
                    }`}
                  >
                    {entry.output}
                  </div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Mobile-Friendly Quick Actions list bar */}
            <div className="px-4 py-2 border-t border-white/5 bg-[#0b0b0b] flex items-center gap-2 overflow-x-auto scrollbar-none shrink-0 select-none">
              <span className="text-[9px] text-muted/30 font-bold tracking-widest shrink-0 uppercase">// BADGE_DISPATCH:</span>
              <div className="flex gap-2.5">
                {["whoami", "sudo hire", "cat resume.pdf", "cd projects", "matrix", "clear"].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleQuickBadgeClick(cmd)}
                    className="font-mono text-[9px] text-muted/60 bg-white/[0.02] border border-white/5 rounded px-2 py-0.5 hover:text-accent-blue hover:border-accent-blue/20 cursor-pointer transition-all duration-150 whitespace-nowrap active:scale-95"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>

            {/* Main CLI Input Form */}
            <form 
              onSubmit={handleFormSubmit} 
              className="flex items-center gap-2 px-6 py-4 bg-[#070707] border-t border-white/5 font-mono shrink-0 relative"
            >
              <span className="text-amber-500 font-bold shrink-0">guest@operator-node:~$</span>
              
              <div className="flex-1 relative flex items-center font-mono">
                {/* Autocomplete Ghost shadow Overlay */}
                {input && activeSuggestion && (
                  <div className="absolute inset-0 pointer-events-none text-zinc-600 flex items-center select-none z-0">
                    <span className="text-transparent">{input}</span>
                    <span>{activeSuggestion}</span>
                  </div>
                )}
                
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent border-none outline-none text-white font-mono caret-accent-blue focus:ring-0 focus:border-none p-0 text-xs z-10"
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck="false"
                />
              </div>

              {/* Muted suggestion indicator helper */}
              {input && activeSuggestion && (
                <span className="hidden sm:inline text-[8px] text-muted/20 font-bold tracking-widest select-none">
                  [TAB / ➔]
                </span>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
