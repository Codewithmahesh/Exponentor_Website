"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const beliefs = [
  { n: "01", title: "Problem-first, always", body: "We don't start with a cool idea. We start with a documented, expensive, recurring pain — then build the minimum thing that kills it cleanly." },
  { n: "02", title: "Small teams move faster", body: "Two people. Zero meetings for the sake of meetings. From idea to working product while others are still naming the Slack channel." },
  { n: "03", title: "Clarity over cleverness", body: "If a user can't understand the product in 30 seconds, we redesign the product — not the onboarding. Simplicity is the hardest thing to build." },
  { n: "04", title: "No compromises on quality", body: "We'd rather ship one thing right than five things mediocre. Every feature earns its place or it doesn't exist." },
];

function AnimatedBento({ children, className = "", delay = 0, inView }: {
  children: React.ReactNode; className?: string; delay?: number; inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(124,58,237,0.05) 0%, transparent 70%)" }} />

      {/* Faded giant label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-black text-white/[0.018] select-none pointer-events-none leading-none tracking-tight whitespace-nowrap">
        ABOUT
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-violet-400 text-xs font-semibold tracking-[0.22em] uppercase mb-10"
        >
          Who we are
        </motion.p>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto] gap-4">

          {/* CELL 1 — Hero headline card (8 cols, tall) */}
          <AnimatedBento
            delay={0}
            inView={inView}
            className="lg:col-span-8 lg:row-span-2 relative overflow-hidden rounded-3xl border border-[#1F1F35] bg-[#0C0C1A] p-10 md:p-14 flex flex-col justify-between min-h-[420px]"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 80% 70% at 20% 30%, rgba(124,58,237,0.08) 0%, transparent 65%)" }} />

            <div className="relative z-10">
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-6 font-medium">Exponentor · Est. 2024</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white mb-6">
                We build the thing
                <br />
                <span className="gradient-text">you wish existed.</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
                Exponentor is a focused SaaS company with a simple mandate — find problems that cost
                people real money or real time, then build the precise fix. Not a feature. The fix.
                We started with real estate. We&apos;re not stopping there.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-6 mt-10">
              <Link href="/xsite"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors group">
                See XSITE <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link href="/jems"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors group">
                See JEMS <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Corner glow */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-violet-600/10 blur-2xl pointer-events-none" />
          </AnimatedBento>

          {/* CELL 2 — Stats card (4 cols, top right) */}
          <AnimatedBento
            delay={0.1}
            inView={inView}
            className="lg:col-span-4 rounded-3xl border border-[#1F1F35] bg-[#0C0C1A] overflow-hidden"
          >
            <div className="p-8 h-full flex flex-col justify-between">
              <p className="text-xs text-gray-600 uppercase tracking-widest font-medium">By the numbers</p>
              <div className="grid grid-cols-2 gap-6 mt-6">
                {[
                  { v: "2", l: "Products" },
                  { v: "1", l: "Live now" },
                  { v: "₹Cr+", l: "Tracked" },
                  { v: "∞", l: "Ambition" },
                ].map((s, i) => (
                  <motion.div
                    key={s.l}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                  >
                    <div className="text-3xl md:text-4xl font-black gradient-text mb-1">{s.v}</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider">{s.l}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedBento>

          {/* CELL 3 — Company DNA card (4 cols, bottom right) */}
          <AnimatedBento
            delay={0.15}
            inView={inView}
            className="lg:col-span-4 rounded-3xl border border-[#1F1F35] bg-gradient-to-br from-[#0C0C1A] to-[#10091F] overflow-hidden"
          >
            <div className="p-8 h-full">
              <p className="text-xs text-gray-600 uppercase tracking-widest font-medium mb-4">Company DNA</p>
              <div className="space-y-3">
                {["Focused", "Fast", "Precise", "Relentless"].map((tag, i) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500" />
                    <span className="text-gray-300 font-semibold text-sm">{tag}</span>
                    <div className="flex-1 h-px bg-[#1F1F35]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedBento>

          {/* CELL 4 — Beliefs row (all 12 cols, 4 cards) */}
          {beliefs.map((b, i) => (
            <AnimatedBento
              key={b.n}
              delay={0.08 + i * 0.07}
              inView={inView}
              className="lg:col-span-3"
            >
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(124,58,237,0.4)" }}
                transition={{ duration: 0.3 }}
                className="h-full p-7 rounded-3xl border border-[#1F1F35] bg-[#0C0C1A] flex flex-col gap-4 cursor-default"
              >
                <span className="text-3xl font-black text-violet-500/20 font-mono leading-none">{b.n}</span>
                <div>
                  <h3 className="font-bold text-white text-sm mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{b.body}</p>
                </div>
              </motion.div>
            </AnimatedBento>
          ))}

          {/* CELL 5 — Quote/manifesto (full width) */}
          <AnimatedBento
            delay={0.3}
            inView={inView}
            className="lg:col-span-12"
          >
            <div className="relative overflow-hidden rounded-3xl border border-violet-500/15 bg-gradient-to-r from-[#0E0B1E] via-[#120D28] to-[#0E0B1E] p-10 md:p-14 text-center">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 50% 100% at 50% 50%, rgba(124,58,237,0.07), transparent)" }} />
              <p className="relative text-2xl md:text-3xl lg:text-4xl font-black text-white leading-snug max-w-4xl mx-auto">
                &ldquo;We don&apos;t build products for everyone.
                <span className="gradient-text"> We build the exact thing for someone.&rdquo;</span>
              </p>
            </div>
          </AnimatedBento>

        </div>
      </div>
    </section>
  );
}
