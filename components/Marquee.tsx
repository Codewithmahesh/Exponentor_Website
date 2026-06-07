"use client";

import { motion } from "framer-motion";

const items = [
  "Real Estate Intelligence",
  "Student × Industry",
  "Precision Software",
  "No Compromises",
  "Built to Last",
  "Problem First",
  "XSITE",
  "JEMS",
  "Real Problems",
  "Real Solutions",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative py-5 border-y border-[#1A1A2E] overflow-hidden select-none bg-[#07070F]">
      {/* Left/right fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07070F] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07070F] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex gap-0 whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className={`text-xs font-semibold uppercase tracking-[0.18em] px-6 ${
              item === "XSITE"
                ? "text-violet-400"
                : item === "JEMS"
                ? "text-amber-400"
                : "text-gray-700"
            }`}>
              {item}
            </span>
            <span className="text-[#1F1F35] text-xs">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
