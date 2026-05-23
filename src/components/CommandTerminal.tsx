"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HistoryEntry {
  command?: string;
  output: string;
  isError?: boolean;
}

export default function CommandTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    { output: "SYSTEM PROTOCOL INTERACTIVE TERMINAL [v1.0.0]" },
    { output: "STATUS: SECURE_CONNECTION_ESTABLISHED" },
    { output: "TYPE 'help' TO INITIATE SYSTEM QUERY PROTOCOLS." },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Global event listener for Ctrl+K / Cmd+K and Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-focus input when terminal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Auto-scroll to bottom of history
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const lowerInput = trimmedInput.toLowerCase();
    let response = "";
    
    // Add command to history
    const currentEntry: HistoryEntry = { command: trimmedInput, output: "" };

    switch (lowerInput) {
      case "help":
        response = "AVAILABLE_COMMANDS: whoami, cat resume.pdf, sudo hire, cd experience, cd projects, cd academic, cd credentials, clear";
        break;
      case "whoami":
        response = "Abu Bakar // Full-Stack Systems Engineer & DevSecOps. Operating from Faisalabad, PK. Stack: Next.js, Node.js, Python, PostgreSQL.";
        break;
      case "cat resume.pdf":
        response = "Access granted. Initiating secure download protocol...";
        setTimeout(() => {
          window.open("/resume.pdf", "_blank");
        }, 800);
        break;
      case "sudo hire":
        response = "Establishing secure comms channel...";
        setTimeout(() => {
          setIsOpen(false);
          // Wait briefly for terminal exit animation to complete before redirecting
          setTimeout(() => {
            window.location.href = "#contact";
          }, 300);
        }, 800);
        break;
      case "cd experience":
        response = "Navigating to Professional Trajectory...";
        setTimeout(() => {
          setIsOpen(false);
          setTimeout(() => {
            window.location.href = "#experience";
          }, 300);
        }, 500);
        break;
      case "cd projects":
        response = "Accessing Featured Systems...";
        setTimeout(() => {
          setIsOpen(false);
          setTimeout(() => {
            window.location.href = "#projects";
          }, 300);
        }, 500);
        break;
      case "cd academic":
      case "cd education":
        response = "Fetching Academic Foundation...";
        setTimeout(() => {
          setIsOpen(false);
          setTimeout(() => {
            window.location.href = "#education";
          }, 300);
        }, 500);
        break;
      case "cd credentials":
        response = "Verifying Security Clearance...";
        setTimeout(() => {
          setIsOpen(false);
          setTimeout(() => {
            window.location.href = "#credentials";
          }, 300);
        }, 500);
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        response = `Command not found: '${trimmedInput}'. Type 'help' for available protocols.`;
        currentEntry.isError = true;
    }

    currentEntry.output = response;
    setHistory((prev) => [...prev, currentEntry]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          {/* Overlay Click-to-Close */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          {/* Terminal Box */}
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-2xl h-[420px] bg-[#0c0c0c]/95 border border-white/10 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden font-mono text-xs text-zinc-300 backdrop-blur-md"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#121212] border-b border-white/5 select-none">
              <div className="flex items-center gap-2">
                {/* Simulated window dots */}
                <div 
                  className="w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500 transition-colors" 
                  onClick={() => setIsOpen(false)} 
                />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[10px] text-muted/60 ml-2">sys_kernel // interactive_shell</span>
              </div>
              <div className="flex items-center gap-2 text-[9px] text-muted/40">
                <span>ESC to Close</span>
              </div>
            </div>

            {/* Terminal Screen Output */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 flex flex-col bg-black/20">
              {/* Output history */}
              {history.map((entry, idx) => (
                <div key={idx} className="space-y-1">
                  {entry.command && (
                    <div className="flex items-center gap-2">
                      <span className="text-amber-500/80">guest@portfolio:~$</span>
                      <span className="text-white font-semibold">{entry.command}</span>
                    </div>
                  )}
                  <div className={entry.isError ? "text-red-400 pl-2 border-l border-red-500/20 whitespace-pre-wrap" : "text-accent-green pl-2 border-l border-accent-green/20 whitespace-pre-wrap"}>
                    {entry.output}
                  </div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Prompt input field */}
            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 px-6 py-4 bg-[#0a0a0a] border-t border-white/5 font-mono">
              <span className="text-amber-500 font-bold shrink-0">guest@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white font-mono caret-accent-green focus:ring-0 focus:border-none p-0 text-xs"
                autoComplete="off"
                autoCapitalize="none"
                spellCheck="false"
              />
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
