"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const lines = [
  "We don't build for the market.",
  "We build for the person",
  "losing sleep over the problem.",
  "If we can't measure the cost,",
  "we don't build the product.",
];

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const l0 = useTransform(scrollYProgress, [0.00, 0.03, 0.12, 0.15], [0.13, 1, 1, 0.36]);
  const l1 = useTransform(scrollYProgress, [0.15, 0.18, 0.27, 0.30], [0.13, 1, 1, 0.36]);
  const l2 = useTransform(scrollYProgress, [0.30, 0.33, 0.42, 0.45], [0.13, 1, 1, 0.36]);
  const l3 = useTransform(scrollYProgress, [0.45, 0.48, 0.57, 0.60], [0.13, 1, 1, 0.36]);
  const l4 = useTransform(scrollYProgress, [0.60, 0.63, 0.72, 0.75], [0.13, 1, 1, 0.92]);
  const lineOpacities = [l0, l1, l2, l3, l4];

  const bgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <div ref={containerRef} className="relative h-[320vh]" id="manifesto">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center pt-24 pb-10">

        {/* Faint background label */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        >
          <span className="text-[18vw] font-black text-gray-900/[0.03] dark:text-white/[0.018] leading-none tracking-tighter whitespace-nowrap">
            MANIFESTO
          </span>
        </motion.div>

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 60% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
          <p className="text-violet-400 text-xs font-semibold tracking-[0.25em] uppercase mb-8">
            Our belief
          </p>

          <div className="space-y-2 sm:space-y-3 text-center w-full">
            {lines.map((text, i) => (
              <motion.p
                key={i}
                style={{
                  opacity: lineOpacities[i],
                  fontSize: "clamp(1.9rem, 4.8vw, 4.5rem)",
                }}
                className="font-black text-[var(--fg)] leading-[1.1] tracking-tight will-change-transform"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
