"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { AlertTriangle, BookOpen, Briefcase, Star, ChevronDown, ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────
   LAYER 0 — Intro
───────────────────────────────────────── */
function IntroLayer() {
  return (
    <div
      className="h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, var(--grad-violet) 0%, var(--bg) 70%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#A78BFA 1px, transparent 1px), linear-gradient(90deg, #A78BFA 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-violet-700/12 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-600/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl px-6">
        <p className="text-violet-400 text-xs font-semibold tracking-[0.25em] uppercase mb-7">
          What we&apos;re building
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black text-[var(--fg)] leading-none tracking-tight mb-7">
          Two industries.
          <br />
          <span className="gradient-text">Solved differently.</span>
        </h2>
        <p className="text-[var(--fg-muted)] text-base md:text-xl max-w-lg mx-auto mb-12 leading-relaxed">
          Each product is a precise fix for a specific, expensive problem. No bloat. No vague promises.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            XSITE — Real Estate
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            JEMS — Education
          </div>
        </div>
        <Link
          href="/journey"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 hover:text-violet-200 text-sm font-semibold transition-all duration-200 group mb-12"
        >
          See how we got here
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>
        <div className="flex flex-col items-center gap-1.5 text-[var(--fg-muted)] text-xs tracking-widest uppercase">
          <span>Scroll to explore</span>
          <ChevronDown size={14} className="animate-bounce mt-0.5" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   LAYER 1 — XSITE
───────────────────────────────────────── */
function XsiteLayer() {
  return (
    <div
      className="h-full flex items-center overflow-hidden relative"
      style={{ background: "radial-gradient(ellipse 80% 65% at 65% 35%, var(--grad-violet) 0%, var(--grad-violet-2) 55%, var(--bg) 100%)" }}
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-700/12 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-900/12 blur-[100px] pointer-events-none" />
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-[var(--border)]" />

      <div className="max-w-7xl mx-auto w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/25 bg-green-500/8 text-green-400 text-xs font-semibold mb-7 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Live Product
          </div>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-2"
            style={{
              background: "linear-gradient(135deg, #fff 40%, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            XSITE
          </h2>
          <p className="text-violet-400 text-base md:text-lg font-semibold mb-6">Real Estate Cost Intelligence</p>
          <p className="text-[var(--fg-muted)] leading-relaxed mb-8 max-w-md text-[0.95rem]">
            Developers were discovering budget disasters in month 7 of a 12-month project — when it&apos;s
            already too late to fix. XSITE tracks every rupee against every milestone in real time, so you
            catch problems in month 2.
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "Section-wise budget tracking with live updates",
              "Contractor invoices matched against milestones",
              "Automated section-level expenditure reports",
              "Early alerts before overruns become irreversible",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-[var(--fg-muted)] text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <button className="px-7 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-violet-600/30 hover:-translate-y-0.5">
            Learn about XSITE →
          </button>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-8 bg-violet-600/12 rounded-3xl blur-3xl" />
          <div className="relative rounded-2xl border border-violet-500/20 bg-[#0A0A16]/90 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-white/5 bg-black/20">
              <div className="flex gap-1.5">
                {["#FF5F57", "#FFBD2E", "#28CA41"].map((c) => (
                  <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <span className="text-[11px] text-gray-600 font-mono ml-1">Project Overview — Sunrise Apts</span>
            </div>
            <div className="p-5 space-y-4">
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { l: "Total Budget", v: "₹8 Cr", c: "text-white" },
                  { l: "Spent", v: "₹6.2 Cr", c: "text-red-400" },
                  { l: "Complete", v: "55%", c: "text-violet-400" },
                ].map((s) => (
                  <div key={s.l} className="p-3 rounded-xl bg-white/4 border border-white/6">
                    <p className="text-[10px] text-gray-600 mb-1">{s.l}</p>
                    <p className={`text-base font-black ${s.c}`}>{s.v}</p>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="text-gray-600">Budget utilization</span>
                  <span className="text-red-400 font-semibold">77.5% used — 55% done</span>
                </div>
                <div className="h-2 rounded-full bg-white/6 overflow-hidden">
                  <div className="h-full w-[77.5%] rounded-full bg-gradient-to-r from-violet-500 via-orange-400 to-red-500" />
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  { name: "Foundation", pct: 90, over: true },
                  { name: "Structure", pct: 72, over: false },
                  { name: "Electrical", pct: 45, over: false },
                ].map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <span className="text-[11px] text-gray-600 w-20 shrink-0">{s.name}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-white/6">
                      <div
                        className={`h-full rounded-full ${s.over ? "bg-red-400" : "bg-violet-500"}`}
                        style={{ width: `${s.pct}%` }}
                      />
                    </div>
                    <span className={`text-[11px] w-8 text-right ${s.over ? "text-red-400 font-semibold" : "text-gray-600"}`}>
                      {s.pct}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/8 border border-red-500/15">
                <AlertTriangle size={12} className="text-red-400 shrink-0" />
                <span className="text-xs text-red-300">Foundation spend 18% over plan — action needed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   LAYER 2 — JEMS
───────────────────────────────────────── */
function JemsLayer() {
  return (
    <div
      className="h-full flex items-center overflow-hidden relative"
      style={{ background: "radial-gradient(ellipse 70% 60% at 30% 40%, var(--grad-amber) 0%, var(--bg) 70%)" }}
    >
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-amber-700/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-orange-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-[var(--border)]" />

      <div className="max-w-7xl mx-auto w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-7 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            In Development
          </div>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-2"
            style={{
              background: "linear-gradient(135deg, #fff 40%, #FCD34D)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            JEMS
          </h2>
          <p className="text-amber-400 text-base md:text-lg font-semibold mb-1">Student × Industry Trust Platform</p>
          <p className="text-amber-600 dark:text-amber-800 text-sm italic mb-6">JEMS means trust — and that&apos;s what we&apos;re building.</p>
          <p className="text-[var(--fg-muted)] leading-relaxed mb-8 max-w-md text-[0.95rem]">
            Students graduate without knowing what industry actually needs. Companies burn months and
            lakhs on mismatched hires. JEMS is the trust layer — readying students for real expectations,
            giving companies talent they can count on.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              { icon: BookOpen, title: "For Students", desc: "Industry standards, tech roadmaps, and a profile that actually means something." },
              { icon: Briefcase, title: "For Companies", desc: "Verified, job-ready talent. Lower hiring cost. Faster decisions." },
            ].map((c) => (
              <div key={c.title} className="p-4 rounded-2xl border border-amber-500/15 bg-amber-500/5 hover:border-amber-500/30 transition-colors duration-300">
                <c.icon size={16} className="text-amber-400 mb-2.5" />
                <p className="font-semibold text-[var(--fg)] text-sm mb-1">{c.title}</p>
                <p className="text-[var(--fg-muted)] text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <button className="px-7 py-3 rounded-full border border-amber-500/35 text-amber-400 hover:bg-amber-500/10 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5">
            Join the waitlist →
          </button>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-8 bg-amber-600/8 rounded-3xl blur-3xl" />
          <div className="relative rounded-2xl border border-amber-500/15 bg-[#0D0905]/90 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-white/5 bg-black/20">
              <div className="flex gap-1.5">
                {["#FF5F57", "#FFBD2E", "#28CA41"].map((c) => (
                  <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <span className="text-[11px] text-gray-600 font-mono ml-1">JEMS Platform Preview</span>
            </div>
            <div className="p-5 space-y-4">
              <div className="p-4 rounded-xl bg-red-500/8 border border-red-500/15">
                <div className="flex items-center gap-2 text-red-400 text-xs font-semibold mb-2.5">
                  <AlertTriangle size={12} />
                  The gap that costs everyone
                </div>
                <div className="space-y-1.5 text-xs text-gray-500">
                  {[
                    "Students graduate not knowing industry expectations",
                    "Companies spend lakhs on wrong hires",
                    "No trusted layer connecting both sides",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5 shrink-0">→</span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-amber-500/8 border border-amber-500/15">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-3">
                  <Star size={12} />
                  JEMS closes the gap
                </div>
                <div className="space-y-2.5">
                  {[
                    "Industry readiness scoring for students",
                    "Verified skill profiles employers trust",
                    "Smart recruiter-candidate matching",
                    "Reduced time-to-hire by design",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { icon: BookOpen, label: "Students", value: "Get ready" },
                  { icon: Briefcase, label: "Companies", value: "Hire right" },
                ].map((s) => (
                  <div key={s.label} className="p-3 rounded-xl bg-white/4 border border-white/6 flex items-center gap-2.5">
                    <s.icon size={14} className="text-amber-400 shrink-0" />
                    <div>
                      <p className="text-[10px] text-gray-600">{s.label}</p>
                      <p className="text-xs font-semibold text-white">{s.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN — Sticky layer container
───────────────────────────────────────── */
export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const introScale = useTransform(scrollYProgress, [0.18, 0.46], [1, 0.86]);
  const introOpacity = useTransform(scrollYProgress, [0.18, 0.46], [1, 0.15]);

  const xsiteY = useTransform(
    scrollYProgress,
    [0.18, 0.46, 0.54, 0.82],
    ["100%", "6%", "6%", "0%"]
  );
  const xsiteOpacity = useTransform(scrollYProgress, [0.54, 0.82], [1, 0.25]);

  const jemsY = useTransform(scrollYProgress, [0.54, 0.82], ["100%", "6%"]);

  return (
    <div ref={containerRef} className="relative h-[400vh]" id="products">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Layer 0 — Intro */}
        <motion.div
          style={{ scale: introScale, opacity: introOpacity }}
          className="absolute inset-0 origin-center"
        >
          <IntroLayer />
        </motion.div>

        {/* Layer 1 — XSITE */}
        <motion.div
          style={{ y: xsiteY, opacity: xsiteOpacity, boxShadow: "0 -20px 80px rgba(0,0,0,0.7)" }}
          className="absolute inset-0 rounded-t-[2rem] overflow-hidden will-change-transform"
        >
          <XsiteLayer />
        </motion.div>

        {/* Layer 2 — JEMS */}
        <motion.div
          style={{ y: jemsY, boxShadow: "0 -20px 80px rgba(0,0,0,0.7)" }}
          className="absolute inset-0 rounded-t-[2rem] overflow-hidden will-change-transform"
        >
          <JemsLayer />
        </motion.div>

      </div>
    </div>
  );
}
