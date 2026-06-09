"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, BarChart3, AlertTriangle, Clock, TrendingDown, FileText, Bell } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const steps = [
  { n: "01", title: "Add your project", desc: "Set total budget and define sections — foundation, structure, electrical, plumbing. Takes 5 minutes." },
  { n: "02", title: "Log invoices & milestones", desc: "Every contractor invoice gets logged against a project section and milestone. Real-time running totals update instantly." },
  { n: "03", title: "Get alerted early", desc: "XSITE flags when any section's spend is outpacing completion. You know in week 3, not month 7." },
  { n: "04", title: "Generate reports", desc: "One-click expenditure reports per project, per section, per period. Client-ready or internal — your call." },
];

const features = [
  { icon: BarChart3, title: "Section-wise tracking", desc: "Budget split by foundation, structure, electrical, plumbing — never lose sight of which section is running hot." },
  { icon: AlertTriangle, title: "Milestone alerts", desc: "Contractor invoices matched against project milestones. Flag mismatches before they compound." },
  { icon: FileText, title: "Automated reports", desc: "Section-wise expenditure reports generated automatically. Share with stakeholders in one click." },
  { icon: Bell, title: "Early warnings", desc: "Spend-vs-completion ratio tracked daily. You're warned weeks before a crisis, not days after." },
  { icon: TrendingDown, title: "Overrun prevention", desc: "The whole point. Know early enough to adjust scope, timeline, or contractor — before it's forced on you." },
  { icon: Clock, title: "Real-time visibility", desc: "Every rupee logged shows up instantly. No end-of-month reconciliation surprises." },
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function XsitePage() {
  return (
    <main className="min-h-screen" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, var(--grad-violet) 0%, var(--bg) 60%)" }}>

      {/* Back nav */}
      <div className="px-8 pt-8 max-w-[1200px] mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-violet-400 text-sm transition-colors duration-200 group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Exponentor
        </Link>
      </div>

      {/* Hero */}
      <section className="px-5 sm:px-8 pt-16 sm:pt-20 pb-20 sm:pb-28 max-w-[1200px] mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge className="mb-6 border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse mr-2 inline-block" />
            Live Product
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4"
          style={{ background: "linear-gradient(135deg, #fff 40%, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          XSITE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-violet-400 text-xl font-semibold mb-6"
        >
          Real Estate Cost Intelligence
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-[var(--fg-muted)] text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Track every rupee against every milestone in real time. Never discover a budget overrun
          in month 7 when you could have caught it in month 2.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="flex flex-wrap gap-4 justify-center">
          <Link href="#contact" className="px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5">
            Request a demo →
          </Link>
          <Link href="#how-it-works" className="px-7 py-3.5 rounded-full border border-[var(--border-2)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-violet-500/40 font-semibold text-sm transition-all duration-200">
            How it works
          </Link>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="px-8 py-24 max-w-[1200px] mx-auto">
        <Section>
          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 overflow-hidden">
            <div className="flex items-center gap-3 px-8 py-5 border-b border-red-500/15">
              <AlertTriangle size={16} className="text-red-400" />
              <span className="text-red-400 text-sm font-semibold">The problem XSITE solves</span>
            </div>
            <div className="p-8 md:p-12">
              <blockquote className="text-2xl md:text-3xl text-[var(--fg)] font-medium leading-snug mb-8 max-w-3xl">
                &ldquo;A developer running a{" "}
                <span className="text-red-400 font-black">₹8 Cr project</span>{" "}
                discovers in month 7 that he&apos;s already spent{" "}
                <span className="text-red-400 font-black">₹6.2 Cr</span>{" "}
                — but is only{" "}
                <span className="text-red-400 font-black">55% complete.</span>&rdquo;
              </blockquote>
              <p className="text-[var(--fg-muted)] text-base leading-relaxed max-w-2xl mb-6">
                No one was tracking contractor invoices against milestones in real time. He now has
                three options: delay the project, borrow more money at high cost, or cut quality and
                reputation. All three are bad. All three were avoidable.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Delayed project", "Emergency borrowing", "Quality compromise", "Reputation damage"].map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-8 py-24 max-w-[1200px] mx-auto">
        <Section className="text-center mb-16">
          <p className="text-violet-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">How it works</p>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--fg)] tracking-tight">
            Four steps to full control.
          </h2>
        </Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <Section key={s.n}>
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(124,58,237,0.4)" }}
                transition={{ duration: 0.3 }}
                className="h-full p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] flex gap-6"
              >
                <span className="text-4xl font-black text-violet-500/20 font-mono shrink-0 leading-none mt-1">{s.n}</span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--fg)] mb-2">{s.title}</h3>
                  <p className="text-[var(--fg-muted)] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            </Section>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-24 max-w-[1200px] mx-auto">
        <Section className="text-center mb-16">
          <p className="text-violet-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Features</p>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--fg)] tracking-tight">
            Everything you need.
            <br /><span className="gradient-text">Nothing you don&apos;t.</span>
          </h2>
        </Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <Section key={f.title}>
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(124,58,237,0.4)" }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-600/15 flex items-center justify-center mb-4">
                  <f.icon size={18} className="text-violet-400" />
                </div>
                <h3 className="font-bold text-[var(--fg)] mb-2 text-sm">{f.title}</h3>
                <p className="text-[var(--fg-muted)] text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            </Section>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 max-w-[1200px] mx-auto">
        <Section>
          <div className="rounded-3xl border border-violet-500/25 bg-[var(--bg-card)] p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(124,58,237,0.12), transparent)" }} />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-[var(--fg)] mb-4 tracking-tight">
                Ready to stop guessing?
              </h2>
              <p className="text-[var(--fg-muted)] text-lg max-w-md mx-auto mb-8">
                Get XSITE for your next project. Know exactly where every rupee is going, before it goes wrong.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5">
                Request early access →
              </Link>
            </div>
          </div>
        </Section>
      </section>
    </main>
  );
}
