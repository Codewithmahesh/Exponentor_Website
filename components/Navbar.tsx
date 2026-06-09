"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { FloatingNav } from "@/components/ui/floating-navbar";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { name: "About", link: "/#about" },
  { name: "XSITE", link: "/xsite" },
  { name: "JEMS", link: "/jems" },
  { name: "Team", link: "/#team" },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 pl-1 group">
    <span className="font-bold text-sm text-[var(--fg)] opacity-90 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
      Exponentor
    </span>
  </Link>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const Cta = (
    <>
      <ThemeToggle />

      <Link href="/#contact">
        <motion.span
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="block px-4 py-1.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold cursor-pointer
          transition-colors duration-200 shadow-md shadow-violet-600/30 hover:shadow-violet-500/40"
        >
          Let&apos;s talk
        </motion.span>
      </Link>

      <button
        className="md:hidden w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={14} /> : <Menu size={14} />}
      </button>
    </>
  );

  return (
    <>
      <FloatingNav navItems={navItems} logo={<Logo />} cta={Cta} />

      {/* mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-1/2 -translate-x-1/2 z-[9998] w-[calc(100%-2rem)] max-w-3xl rounded-2xl
             bg-[var(--bg-card)] backdrop-blur-2xl border border-[var(--border)] overflow-hidden shadow-2xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="flex items-center px-5 py-3.5 text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-deep)] transition-colors
                 duration-150 text-sm border-b border-[var(--border)] last:border-0"
              >
                {item.name}
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
    </>
  );
}
