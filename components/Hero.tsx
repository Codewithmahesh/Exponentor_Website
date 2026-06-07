"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, AlertTriangle, TrendingUp } from "lucide-react";

const sections = [
  { name: "Foundation", pct: 90, over: true },
  { name: "Structure", pct: 72, over: false },
  { name: "Electrical", pct: 45, over: false },
  { name: "Plumbing", pct: 60, over: false },
];

function MockDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[480px] ml-auto"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-violet-600/12 rounded-3xl blur-3xl pointer-events-none" />

      {/* Main window card */}
      <div className="relative rounded-2xl border border-[#2A2A40] bg-[#0D0D1A] shadow-2xl overflow-hidden">
        {/* Titlebar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1A1A2E] bg-[#09090F]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
          </div>
          <span className="text-[11px] text-gray-600 font-mono">XSITE — Project Dashboard</span>
        </div>

        <div className="p-5 space-y-5">
          {/* Project header */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] text-gray-600 mb-0.5 uppercase tracking-wider">Active Project</p>
              <p className="font-bold text-white text-sm">Sunrise Apartments, Phase 2</p>
            </div>
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-500/12 border border-red-500/20 text-red-400 text-[11px] font-semibold"
            >
              <AlertTriangle size={10} />
              Budget Alert
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { label: "Total Budget", value: "₹8 Cr", color: "text-white" },
              { label: "Spent", value: "₹6.2 Cr", color: "text-red-400" },
              { label: "Complete", value: "55%", color: "text-violet-400" },
            ].map((s) => (
              <div key={s.label} className="p-3 rounded-xl bg-[#111122] border border-[#1F1F35]">
                <p className="text-[10px] text-gray-600 mb-1">{s.label}</p>
                <p className={`text-base font-black ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Utilization bar */}
          <div>
            <div className="flex justify-between text-[11px] mb-1.5">
              <span className="text-gray-600">Budget utilization</span>
              <span className="text-red-400 font-semibold">77.5% used — only 55% done</span>
            </div>
            <div className="h-2 rounded-full bg-[#1F1F35] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 via-orange-400 to-red-500"
                initial={{ width: "0%" }}
                animate={{ width: "77.5%" }}
                transition={{ duration: 1.6, delay: 0.9, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Section bars */}
          <div className="space-y-2.5">
            {sections.map((s, i) => (
              <div key={s.name} className="flex items-center gap-3">
                <span className="text-[11px] text-gray-600 w-20 shrink-0">{s.name}</span>
                <div className="flex-1 h-1.5 rounded-full bg-[#1F1F35] overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${s.over ? "bg-red-400" : "bg-violet-500"}`}
                    initial={{ width: "0%" }}
                    animate={{ width: `${s.pct}%` }}
                    transition={{ duration: 1, delay: 1 + i * 0.1, ease: "easeOut" }}
                  />
                </div>
                <span className={`text-[11px] w-8 text-right ${s.over ? "text-red-400" : "text-gray-600"}`}>
                  {s.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating mini-card */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute -bottom-5 -left-8 w-44 rounded-xl border border-[#2A2A40] bg-[#0D0D1A]/95 backdrop-blur-sm p-3 shadow-xl"
      >
        <p className="text-[10px] text-gray-600 mb-1.5 uppercase tracking-wider">Reports</p>
        <div className="flex items-center gap-2">
          <TrendingUp size={13} className="text-violet-400" />
          <span className="text-sm font-bold text-white">3 pending</span>
        </div>
        <p className="text-[10px] text-violet-400 mt-1">Section-wise ready</p>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24 pb-16">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-[8%] w-[420px] h-[420px] rounded-full bg-violet-600/8 blur-[120px]" />
        <div className="absolute bottom-10 right-[5%] w-[340px] h-[340px] rounded-full bg-purple-900/10 blur-[100px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#A78BFA 1px, transparent 1px), linear-gradient(90deg, #A78BFA 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left: Text ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-400 text-xs font-semibold mb-7 uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              SaaS built for the real world
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-[3.6rem] font-black leading-[1.1] mb-5 tracking-tight"
            >
              Stop finding out
              <br />
              <span className="gradient-text">too late.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-400 text-[1.05rem] leading-relaxed mb-9 max-w-[400px]"
            >
              Exponentor builds focused SaaS products that give people the right
              data before a small problem becomes an expensive crisis. Real
              estate first. Education next.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.44 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#products"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
              >
                See our products
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 rounded-full border border-[#2A2A40] text-gray-400 hover:text-white hover:border-violet-500/35 font-semibold text-sm transition-all duration-200"
              >
                Who we are
              </a>
            </motion.div>

            {/* Micro-stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center gap-8"
            >
              {[
                { n: "2", label: "Products building" },
                { n: "1", label: "Live & growing" },
                { n: "0", label: "Compromises made" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-8 bg-[#1F1F35]" />}
                  <div>
                    <div className={`text-2xl font-black ${i === 0 ? "gradient-text" : "text-white"}`}>{s.n}</div>
                    <div className="text-[11px] text-gray-600 mt-0.5 whitespace-nowrap">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Mock Dashboard ── */}
          <div className="hidden lg:flex items-center justify-end pr-4">
            <MockDashboard />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
