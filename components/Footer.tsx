"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cols = [
  {
    heading: "Products",
    links: [
      { label: "XSITE", href: "/xsite", badge: "Live" },
      { label: "JEMS", href: "/jems", badge: "Soon" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Team", href: "/#team" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "hello@exponentor.com", href: "mailto:hello@exponentor.com" },
      { label: "LinkedIn", href: "#" },
      { label: "Twitter / X", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1A1A2E] overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-14 md:gap-20 mb-16">

          {/* Brand block */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-500/20">
                <span className="text-white font-black text-sm">EX</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">Exponentor</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Building focused SaaS products for real-world problems. Starting with real estate.
              Not stopping there.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-[11px] text-gray-600 uppercase tracking-[0.18em] font-semibold mb-5">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors duration-200"
                    >
                      {l.label}
                      {"badge" in l && l.badge && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                          l.badge === "Live"
                            ? "bg-green-500/15 text-green-400 border border-green-500/20"
                            : "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                        }`}>
                          {l.badge}
                        </span>
                      )}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-60 -translate-x-1 group-hover:translate-x-0 group-hover:-translate-y-0.5 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1A1A2E] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-sm">
            © 2024–{new Date().getFullYear()} Exponentor. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Building things that matter.
          </p>
        </div>
      </div>
    </footer>
  );
}
