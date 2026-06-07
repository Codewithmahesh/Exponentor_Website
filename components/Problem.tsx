"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { TrendingDown, Clock, AlertCircle, DollarSign } from "lucide-react";

const incidents = [
  {
    icon: Clock,
    label: "Month 1–3",
    title: "Project kicks off strong.",
    body: "Budgets approved. Contractors onboarded. Progress looks great on paper. No one is watching the numbers closely.",
    color: "text-gray-400",
    bar: 18,
    barColor: "#6366f1",
  },
  {
    icon: DollarSign,
    label: "Month 4–6",
    title: "Invoices pile up quietly.",
    body: "Contractors bill separately. Material costs are tracked in spreadsheets — if at all. No single source of truth exists.",
    color: "text-amber-400",
    bar: 55,
    barColor: "#f59e0b",
  },
  {
    icon: TrendingDown,
    label: "Month 7",
    title: "₹6.2 Cr spent. 55% done.",
    body: "The developer discovers the project is 55% complete but 77% of the budget is gone. Now he has to decide: delay, borrow, or cut quality.",
    color: "text-red-400",
    bar: 77,
    barColor: "#ef4444",
  },
  {
    icon: AlertCircle,
    label: "Too late.",
    title: "The damage is already done.",
    body: "There's no going back. The decision that should have happened in month 3 is now a crisis in month 7. Across India, this plays out on ₹100s of crores every year.",
    color: "text-red-500",
    bar: 100,
    barColor: "#dc2626",
  },
];

function IncidentCard({ incident, index }: { incident: typeof incidents[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex gap-6 items-start"
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center shrink-0 pt-1">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.4, ease: "backOut" }}
          className="w-10 h-10 rounded-xl bg-[#0E0E1A] border border-white/10 flex items-center justify-center group-hover:border-violet-500/30 transition-colors duration-300"
        >
          <incident.icon size={16} className={incident.color} />
        </motion.div>
        {index < incidents.length - 1 && (
          <div className="w-px flex-1 min-h-[3rem] mt-2 bg-gradient-to-b from-white/8 to-transparent" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-10 last:pb-0">
        <p className="text-[11px] text-gray-600 uppercase tracking-[0.18em] font-semibold mb-2">
          {incident.label}
        </p>
        <h3 className="text-xl font-bold text-white mb-2 leading-snug">{incident.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{incident.body}</p>

        {/* Budget bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px] text-gray-600 font-mono">
            <span>Budget consumed</span>
            <span style={{ color: incident.barColor }}>{incident.bar}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${incident.bar}%` } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full"
              style={{ background: incident.barColor }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" id="problem">
      {/* Background parallax label */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
      >
        <span className="text-[18vw] font-black text-white/[0.018] leading-none tracking-tighter whitespace-nowrap">
          THE COST
        </span>
      </motion.div>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(239,68,68,0.05) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-24">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-red-400 text-xs font-semibold tracking-[0.22em] uppercase mb-6"
            >
              The real problem
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6"
            >
              ₹8 crore project.
              <br />
              <span className="text-red-400">Month 7 crisis.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-500 text-lg leading-relaxed mb-10"
            >
              This is not a made-up scenario. This is what happens when real estate developers
              run projects without a single source of financial truth.
            </motion.p>

            {/* Stat callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 rounded-2xl border border-red-500/15 bg-red-500/5"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle size={18} className="text-red-400" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">The discovery moment</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    He&apos;s spent ₹6.2 Cr but is only 55% complete. He needed to know this in month 3,
                    not month 7. XSITE makes the discovery happen before it&apos;s a crisis.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="hidden lg:block mt-16 w-full h-px bg-gradient-to-r from-red-500/20 to-transparent" />
          </div>

          {/* Right — incident timeline */}
          <div className="pt-2">
            {incidents.map((incident, i) => (
              <IncidentCard key={i} incident={incident} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 p-8 rounded-3xl border border-violet-500/15 bg-violet-500/5 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-1">
            <p className="text-violet-300 font-bold text-xl mb-2">
              XSITE makes this visible in real time.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Every contractor invoice, material cost, and milestone payment — tracked against your
              approved budget, automatically. Section-wise. Day-wise. Always.
            </p>
          </div>
          <a
            href="/xsite"
            className="shrink-0 px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-violet-600/25"
          >
            See XSITE →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
