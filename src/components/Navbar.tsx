"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Terminal, Volume2, VolumeX } from "lucide-react";
import { isSystemAudioEnabled, setSystemAudioEnabled, playSystemSound } from "./AudioEngine";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  // Sync client-side audio state on mount and via global events
  useEffect(() => {
    setAudioEnabled(isSystemAudioEnabled());

    const handleAudioChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setAudioEnabled(customEvent.detail);
    };

    window.addEventListener("sys_audio_state_change", handleAudioChange);
    return () => window.removeEventListener("sys_audio_state_change", handleAudioChange);
  }, []);

  const toggleAudio = () => {
    const nextState = !audioEnabled;
    setSystemAudioEnabled(nextState);
    setAudioEnabled(nextState);
    if (nextState) {
      setTimeout(() => {
        playSystemSound("success");
      }, 50);
    }
  };

  const handleLaunchTerminal = () => {
    playSystemSound("click");
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent("toggle_command_terminal"));
  };

  const handleLinkHover = () => {
    playSystemSound("keypress");
  };

  const handleLinkClick = () => {
    playSystemSound("click");
  };

  const navItems = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Academic", href: "#education" },
    { name: "Credentials", href: "#credentials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 h-16 border-b border-white/5 bg-obsidian/45 backdrop-blur-md flex items-center justify-between px-6 md:px-12 select-none"
      >
        {/* Logo */}
        <Link 
          href="/" 
          onClick={handleLinkClick}
          onMouseEnter={handleLinkHover}
          className="text-xl font-bold tracking-wider text-primary hover:text-accent-blue transition-colors duration-300 z-50 font-sans"
        >
          AB<span className="text-accent-blue font-bold">.</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 md:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              onMouseEnter={handleLinkHover}
              className="font-mono text-xs text-muted hover:text-accent-blue transition-colors duration-200 tracking-widest uppercase"
            >
              {item.name}
            </Link>
          ))}
          
          <span className="w-[1px] h-4 bg-white/10" />

          {/* Sound Synthesizer control button toggle */}
          <button
            onClick={toggleAudio}
            onMouseEnter={handleLinkHover}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.02] border font-mono text-[9px] cursor-pointer transition-all duration-200 active:scale-95 ${
              audioEnabled 
                ? "border-accent-blue/30 text-accent-blue hover:shadow-[0_0_10px_rgba(0,255,204,0.1)]" 
                : "border-white/5 text-muted/40 hover:text-muted/70"
            }`}
            title="Toggle Synthesizer Sound Design"
          >
            {audioEnabled ? (
              <>
                <Volume2 size={10} />
                <span>AUDIO: [ON]</span>
              </>
            ) : (
              <>
                <VolumeX size={10} />
                <span>AUDIO: [OFF]</span>
              </>
            )}
          </button>

          {/* Glowing Clickable SYS_SHELL launch button */}
          <button
            onClick={handleLaunchTerminal}
            onMouseEnter={handleLinkHover}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#090909] border border-accent-blue/30 text-[9px] font-mono text-accent-blue hover:border-accent-blue hover:shadow-[0_0_12px_rgba(0,255,204,0.2)] cursor-pointer transition-all duration-200 active:scale-95 group"
          >
            <Terminal size={11} className="group-hover:animate-pulse" />
            <span>SYS_SHELL</span>
            <span className="text-[8px] text-muted/30 font-bold group-hover:text-accent-blue/50 transition-colors">[ ⌘K ]</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => { playSystemSound("click"); setIsOpen(!isOpen); }}
          className="md:hidden text-primary hover:text-accent-blue transition-colors duration-200 z-50 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed top-16 left-0 w-full bg-obsidian/98 border-b border-white/5 backdrop-blur-lg py-6 px-8 flex flex-col gap-4 z-40 md:hidden shadow-2xl"
          >
            {navItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04 }}
              >
                <Link
                  href={item.href}
                  onClick={() => { handleLinkClick(); setIsOpen(false); }}
                  onMouseEnter={handleLinkHover}
                  className="font-mono text-xs text-muted hover:text-accent-blue transition-colors duration-200 tracking-widest uppercase py-2 block border-b border-white/[0.02]"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Sound control & launcher actions */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.04 }}
              className="flex items-center gap-3 pt-2"
            >
              {/* Sound switcher */}
              <button
                onClick={toggleAudio}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded bg-white/[0.02] border font-mono text-[10px] cursor-pointer transition-all duration-200 active:scale-95 ${
                  audioEnabled 
                    ? "border-accent-blue/30 text-accent-blue" 
                    : "border-white/5 text-muted/40"
                }`}
              >
                {audioEnabled ? (
                  <>
                    <Volume2 size={11} />
                    <span>AUDIO [ON]</span>
                  </>
                ) : (
                  <>
                    <VolumeX size={11} />
                    <span>AUDIO [OFF]</span>
                  </>
                )}
              </button>

              {/* Terminal badge launcher */}
              <button
                onClick={handleLaunchTerminal}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded bg-[#090909] border border-accent-blue/30 font-mono text-[10px] text-accent-blue cursor-pointer active:scale-95"
              >
                <Terminal size={11} />
                <span>SYS_SHELL</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
