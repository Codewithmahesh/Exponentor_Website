"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const links = [
  { label: "About", href: "/#about" },
  { label: "XSITE", href: "/xsite" },
  { label: "JEMS", href: "/jems" },
  { label: "Team", href: "/#team" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const lastY = useRef(0);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (y < 80) {
        setVisible(true);
      } else if (y > lastY.current + 6) {
        setVisible(false);
      } else if (y < lastY.current - 6) {
        setVisible(true);
      }
      lastY.current = y;
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
      pauseTimer.current = setTimeout(() => setVisible(true), 900);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{ y: visible ? 0 : -110, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-3xl px-4"
      >
        <div
          className={cn(
            "relative flex items-center justify-between px-3 py-2 rounded-full transition-all duration-500",
            scrolled
              ? "bg-[#09090F]/85 backdrop-blur-2xl border border-white/8 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.6)]"
              : "bg-[#09090F]/50 backdrop-blur-xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          )}
        >
          {/* Top glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px w-32 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent pointer-events-none" />

          {/* LEFT — Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 pl-1 shrink-0 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow duration-300">
                <span className="text-white font-black text-[11px]">EX</span>
              </div>
              <span className="font-bold text-sm text-white/90 group-hover:text-white transition-colors duration-200 hidden sm:block">
                Exponentor
              </span>
            </Link>
          </div>

          {/* CENTER — Nav links (absolutely centered in pill) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onMouseEnter={() => setActiveLink(l.label)}
                onMouseLeave={() => setActiveLink(null)}
                className="relative px-3.5 py-1.5 rounded-full text-sm transition-colors duration-200"
              >
                <AnimatePresence>
                  {activeLink === l.label && (
                    <motion.span
                      layoutId="nav-hover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute inset-0 rounded-full bg-white/6"
                    />
                  )}
                </AnimatePresence>
                <span
                  className={cn(
                    "relative z-10 transition-colors duration-200",
                    activeLink === l.label ? "text-white" : "text-gray-400"
                  )}
                >
                  {l.label}
                </span>
              </Link>
            ))}
          </div>

          {/* RIGHT — CTA */}
          <div className="flex items-center gap-2">
            <Link href="/#contact">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="block px-4 py-1.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold cursor-pointer transition-colors duration-200 shadow-md shadow-violet-600/30 hover:shadow-violet-500/40"
              >
                Let&apos;s talk
              </motion.span>
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden w-8 h-8 rounded-full bg-white/6 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-2xl bg-[#0E0E1A]/95 backdrop-blur-2xl border border-white/8 overflow-hidden shadow-2xl"
            >
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-5 py-3.5 text-gray-300 hover:text-white hover:bg-white/4 transition-colors duration-150 text-sm border-b border-white/5 last:border-0"
                >
                  {l.label}
                </Link>
              ))}
              <div className="p-3">
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="block w-full py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold text-center"
                >
                  Let&apos;s talk
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
