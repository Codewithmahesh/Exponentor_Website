"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, BookOpen, Briefcase, Star, Users, TrendingUp, CheckCircle2, Send } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const forStudents = [
  { icon: BookOpen, title: "Industry standards", desc: "Know exactly what your target industry expects — tools, processes, terminology, and benchmarks." },
  { icon: Star, title: "Readiness scoring", desc: "Your JEMS score tells you and recruiters how ready you are for a specific role. Objective. Credible." },
  { icon: Users, title: "Profile building", desc: "Build a profile that proves what you know — not just lists what you studied." },
];

const forCompanies = [
  { icon: TrendingUp, title: "Pre-verified candidates", desc: "Every student on JEMS has a readiness score. You see qualified talent first, not resumes that guess." },
  { icon: Briefcase, title: "Reduced hiring cost", desc: "Fewer rounds, fewer bad hires. JEMS-verified candidates match your requirements before the first call." },
  { icon: CheckCircle2, title: "Faster decisions", desc: "Structured, comparable profiles. Make confident hiring decisions in half the time." },
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

export default function JemsPage() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, #201408 0%, #07070F 60%)" }}>

      {/* Back nav */}
      <div className="px-8 pt-8 max-w-[1200px] mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-400 text-sm transition-colors duration-200 group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Exponentor
        </Link>
      </div>

      {/* Hero */}
      <section className="px-8 pt-20 pb-28 max-w-[1200px] mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Badge className="mb-6 border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse mr-2 inline-block" />
            In Development — Join the waitlist
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-9xl font-black tracking-tight mb-4"
          style={{ background: "linear-gradient(135deg, #fff 40%, #FCD34D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          JEMS
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          className="text-amber-400 text-xl font-semibold mb-3">
          Student × Industry Trust Platform
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }}
          className="text-amber-700 text-base italic mb-8">
          JEMS means trust.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}
          className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed mb-12">
          Bridging the gap between students and the industry that needs them. Better readiness.
          Smarter hiring. Lower cost on both sides.
        </motion.p>

        {/* Waitlist form */}
        {!joined ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48 }}
            onSubmit={e => { e.preventDefault(); setJoined(true); }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="bg-[#1A1208]/80 border-amber-500/25 text-white placeholder:text-gray-600 focus:border-amber-500/60 focus-visible:ring-0 rounded-xl text-sm"
            />
            <motion.button
              type="submit"
              whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(245,158,11,0.35)" }}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm flex items-center gap-2 whitespace-nowrap transition-colors duration-200"
            >
              Join waitlist <Send size={13} />
            </motion.button>
          </motion.form>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-3 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center">
              <CheckCircle2 size={24} className="text-amber-400" />
            </div>
            <p className="text-white font-semibold">You&apos;re on the list!</p>
            <p className="text-gray-500 text-sm">We&apos;ll reach out to {email} when JEMS launches.</p>
          </motion.div>
        )}
      </section>

      {/* Problem */}
      <section className="px-8 py-24 max-w-[1200px] mx-auto">
        <Section>
          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8 md:p-12">
            <p className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-6">The gap we&apos;re closing</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">For students</h3>
                <div className="space-y-3 text-gray-500 text-sm">
                  <div className="flex gap-2"><span className="text-red-400 shrink-0 mt-0.5">→</span>Graduate without knowing industry benchmarks</div>
                  <div className="flex gap-2"><span className="text-red-400 shrink-0 mt-0.5">→</span>No credible way to prove job readiness</div>
                  <div className="flex gap-2"><span className="text-red-400 shrink-0 mt-0.5">→</span>Interviews feel like a guessing game</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">For companies</h3>
                <div className="space-y-3 text-gray-500 text-sm">
                  <div className="flex gap-2"><span className="text-red-400 shrink-0 mt-0.5">→</span>Spend months and lakhs on hires that don&apos;t stick</div>
                  <div className="flex gap-2"><span className="text-red-400 shrink-0 mt-0.5">→</span>Resumes lie — no reliable signal of actual readiness</div>
                  <div className="flex gap-2"><span className="text-red-400 shrink-0 mt-0.5">→</span>Hiring process is slow, expensive, and often wrong</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* For Students */}
      <section className="px-8 py-16 max-w-[1200px] mx-auto">
        <Section className="mb-12">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">For Students</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Know exactly where you stand.
          </h2>
        </Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {forStudents.map(f => (
            <Section key={f.title}>
              <motion.div whileHover={{ y: -6, borderColor: "rgba(245,158,11,0.35)" }} transition={{ duration: 0.3 }}
                className="h-full p-6 rounded-2xl border border-[#1F1F35] bg-[#0D0A07]">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center mb-4">
                  <f.icon size={18} className="text-amber-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            </Section>
          ))}
        </div>
      </section>

      {/* For Companies */}
      <section className="px-8 py-16 max-w-[1200px] mx-auto">
        <Section className="mb-12">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">For Companies</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Hire right. The first time.
          </h2>
        </Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {forCompanies.map(f => (
            <Section key={f.title}>
              <motion.div whileHover={{ y: -6, borderColor: "rgba(245,158,11,0.35)" }} transition={{ duration: 0.3 }}
                className="h-full p-6 rounded-2xl border border-[#1F1F35] bg-[#0D0A07]">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center mb-4">
                  <f.icon size={18} className="text-amber-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            </Section>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 max-w-[1200px] mx-auto">
        <Section>
          <div className="rounded-3xl border border-amber-500/20 p-12 md:p-16 text-center relative overflow-hidden"
            style={{ background: "radial-gradient(ellipse 80% 80% at 50% 0%, rgba(245,158,11,0.08), transparent)" }}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Be first to know.
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
              JEMS is in development. Join the waitlist and help shape the product.
            </p>
            {!joined ? (
              <form onSubmit={e => { e.preventDefault(); setJoined(true); }}
                className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                <Input type="email" placeholder="your@email.com" value={email}
                  onChange={e => setEmail(e.target.value)} required
                  className="bg-[#1A1208]/80 border-amber-500/25 text-white placeholder:text-gray-600 focus-visible:ring-0 rounded-xl text-sm" />
                <button type="submit"
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm whitespace-nowrap transition-colors duration-200">
                  Join →
                </button>
              </form>
            ) : (
              <p className="text-amber-400 font-semibold">You&apos;re on the list! We&apos;ll be in touch.</p>
            )}
          </div>
        </Section>
      </section>
    </main>
  );
}
