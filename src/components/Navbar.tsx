"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        className="fixed top-0 left-0 w-full z-50 h-16 border-b border-white/5 bg-obsidian/40 backdrop-blur-md flex items-center justify-between px-6 md:px-12"
      >
        {/* Logo */}
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          className="text-xl font-bold tracking-wider text-primary hover:text-accent-green transition-colors duration-300 z-50"
        >
          AB<span className="text-accent-green">.</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-mono text-xs text-muted hover:text-accent-green transition-colors duration-200 tracking-widest uppercase"
            >
              {item.name}
            </Link>
          ))}
          {/* Muted Terminal Shortcut Hint */}
          <div className="hidden lg:flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 font-mono text-[9px] text-muted/30 select-none">
            <span className="text-accent-green/60 animate-pulse font-bold">//</span>
            <span>SYS_SHELL</span>
            <span className="text-accent-green/80 font-bold">[ ⌘K ]</span>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary hover:text-accent-green transition-colors duration-200 z-50 p-2"
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
            className="fixed top-16 left-0 w-full bg-obsidian/95 border-b border-white/5 backdrop-blur-lg py-6 px-8 flex flex-col gap-4 z-40 md:hidden shadow-2xl"
          >
            {navItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-mono text-sm text-muted hover:text-accent-green transition-colors duration-200 tracking-widest uppercase py-2 block border-b border-white/[0.02]"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

