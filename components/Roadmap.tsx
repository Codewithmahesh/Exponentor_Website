"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Circle, Zap, Globe, Users, BarChart3 } from "lucide-react";

const milestones = [
  {
    phase: "Phase 01",
    title: "XSITE — Live",
    subtitle: "Real Estate Cost Intelligence",
    status: "live",
    year: "2024",
    items: [
      "Real-time budget vs spend tracking",
      "Contractor invoice management",
      "Section-wise project breakdown",
      "Automated expenditure reports",
      "Milestone-linked payment alerts",
    ],
    icon: BarChart3,
    color: { primary: "#7C3AED", muted: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)" },
  },
  {
    phase: "Phase 02",
    title: "JEMS — In Development",
    subtitle: "Student × Industry Trust Platform",
    status: "building",
    year: "2025",
    items: [
      "Industry readiness scoring for students",
      "Verified skill profiles",
      "Smart recruiter-candidate matching",
      "Campus-to-company pipeline",
      "Hiring cost reduction analytics",
    ],
    icon: Users,
    color: { primary: "#F59E0B", muted: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
  },
  {
    phase: "Phase 03",
    title: "Platform Expansion",
    subtitle: "Going deeper, not wider",
    status: "horizon",
    year: "2026+",
    items: [
      "XSITE for pan-India developers",
      "JEMS institutional partnerships",
      "Data intelligence layer across products",
      "API ecosystem for integrations",
      "New problem — if one finds us",
    ],
    icon: Globe,
    color: { primary: "#6366F1", muted: "rgba(99,102,241,0.06)", border: "rgba(99,102,241,0.15)" },
  },
];

const statusConfig = {
  live: { label: "Live", dot: "bg-green-400", text: "text-green-400", ring: "border-green-500/30 bg-green-500/8" },
  building: { label: "Building", dot: "bg-amber-400 animate-pulse", text: "text-amber-400", ring: "border-amber-500/30 bg-amber-500/8" },
  horizon: { label: "On the horizon", dot: "bg-gray-500", text: "text-gray-500", ring: "border-white/10 bg-white/4" },
};

export default function Roadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" id="roadmap">
      {/* Background text */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
      >
        <span className="text-[14vw] font-black text-gray-900/[0.03] dark:text-white/[0.018] leading-none tracking-tighter whitespace-nowrap">
          ROADMAP
        </span>
      </motion.div>

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[1px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(124,58,237,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-violet-400 text-xs font-semibold tracking-[0.22em] uppercase mb-5"
          >
            Where we&apos;re going
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black text-[var(--fg)] leading-tight tracking-tight"
          >
            Built in sequence.
            <br />
            <span className="gradient-text">Not all at once.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[var(--fg-muted)] text-lg mt-6 max-w-xl mx-auto"
          >
            We don&apos;t build roadmaps for investors. We build them for ourselves — and we&apos;re
            already ahead of schedule.
          </motion.p>
        </div>

        {/* Milestone grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {milestones.map((m, i) => {
            const sc = statusConfig[m.status as keyof typeof statusConfig];
            return (
              <motion.div
                key={m.phase}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl border overflow-hidden p-8 hover:border-opacity-60 transition-all duration-500"
                style={{ background: m.color.muted, borderColor: m.color.border }}
              >
                {/* Glow overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 70% 60% at 30% 30%, ${m.color.primary}12, transparent)` }}
                />

                {/* Phase + status */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] text-[var(--fg-muted)] font-semibold tracking-[0.2em] uppercase">{m.phase}</span>
                  <span className={`flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${sc.ring} ${sc.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                    {sc.label}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${m.color.primary}20`, border: `1px solid ${m.color.primary}30` }}
                >
                  <m.icon size={20} style={{ color: m.color.primary }} />
                </div>

                {/* Year */}
                <p className="font-mono text-xs mb-2" style={{ color: m.color.primary }}>{m.year}</p>

                {/* Title */}
                <h3 className="text-2xl font-black text-[var(--fg)] mb-1 leading-tight">{m.title}</h3>
                <p className="text-[var(--fg-muted)] text-sm mb-7">{m.subtitle}</p>

                {/* Items */}
                <ul className="space-y-3">
                  {m.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      {m.status === "live" ? (
                        <CheckCircle2 size={14} className="text-green-400 mt-0.5 shrink-0" />
                      ) : m.status === "building" ? (
                        <Zap size={14} className="text-amber-400 mt-0.5 shrink-0" />
                      ) : (
                        <Circle size={14} className="text-gray-400 dark:text-gray-700 mt-0.5 shrink-0" />
                      )}
                      <span className={`text-sm leading-snug ${m.status === "live" ? "text-[var(--fg-muted)]" : m.status === "building" ? "text-[var(--fg-muted)]" : "text-gray-400 dark:text-gray-700"}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom glow line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${m.color.primary}40, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Company philosophy strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-[var(--border)]"
          style={{ background: "var(--bg-deep)" }}
        >
          {[
            { label: "We pick ONE problem at a time.", sub: "Not twelve. One. And we solve it properly." },
            { label: "We don't scale before we're right.", sub: "Right comes before fast. Always." },
            { label: "We ship when it's ready.", sub: "Not when the calendar says so." },
          ].map((item, i) => (
            <div
              key={i}
              className="px-8 py-7 border-r border-[var(--border)] last:border-r-0 bg-[var(--bg-deep)] hover:bg-[var(--bg-2)] transition-colors duration-300"
            >
              <p className="text-[var(--fg)] font-semibold mb-1.5 text-sm leading-snug">{item.label}</p>
              <p className="text-[var(--fg-muted)] text-xs leading-relaxed">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
