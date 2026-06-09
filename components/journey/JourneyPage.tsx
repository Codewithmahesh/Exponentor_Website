"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { ArrowLeft, CheckCircle2, Zap, Circle, BarChart3, Users, Globe } from "lucide-react";
import { motion, useAnimationFrame } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import Navbar from "@/components/Navbar";

/* ═══════════════════════════════════════════════════════
   SPARKLE FIELD — pre-positioned ✦ glyphs
═══════════════════════════════════════════════════════ */
const SPARKLES = [
  { x: "7%",  y: "13%", delay: 0,    d: 2.8, size: 14 },
  { x: "89%", y: "9%",  delay: 0.7,  d: 2.3, size: 12 },
  { x: "22%", y: "71%", delay: 1.2,  d: 3.1, size: 10 },
  { x: "76%", y: "57%", delay: 0.3,  d: 2.5, size: 16 },
  { x: "47%", y: "83%", delay: 1.8,  d: 2.0, size: 10 },
  { x: "13%", y: "43%", delay: 2.1,  d: 2.7, size: 8  },
  { x: "92%", y: "74%", delay: 0.9,  d: 3.3, size: 12 },
  { x: "39%", y: "21%", delay: 1.5,  d: 2.4, size: 10 },
  { x: "63%", y: "37%", delay: 0.4,  d: 2.9, size: 14 },
  { x: "28%", y: "89%", delay: 2.4,  d: 2.1, size: 8  },
  { x: "70%", y: "16%", delay: 1.1,  d: 3.0, size: 12 },
  { x: "5%",  y: "58%", delay: 0.6,  d: 2.6, size: 10 },
  { x: "54%", y: "47%", delay: 1.7,  d: 2.2, size: 8  },
  { x: "32%", y: "7%",  delay: 2.9,  d: 2.7, size: 10 },
  { x: "83%", y: "46%", delay: 0.2,  d: 3.5, size: 8  },
];

function SparkleField() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {SPARKLES.map((s, i) => (
        <motion.span
          key={i}
          className="absolute text-violet-400"
          style={{ left: s.x, top: s.y, fontSize: s.size }}
          initial={{ opacity: 0, scale: 0.2, rotate: 0 }}
          animate={{
            opacity: [0, 0.85, 0],
            scale: [0.2, 1.3, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: s.d,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.span>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   CURSOR GLOW — soft radial that follows the mouse
═══════════════════════════════════════════════════════ */
function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useAnimationFrame(() => {
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${mouseRef.current.x - 220}px, ${mouseRef.current.y - 220}px)`;
    }
  });

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[440px] h-[440px] rounded-full pointer-events-none z-0"
      style={{
        background:
          "radial-gradient(circle, rgba(139,92,246,0.13) 0%, rgba(124,58,237,0.06) 45%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════
   ANIMATED FLOATING ORBS
═══════════════════════════════════════════════════════ */
function FloatingOrbs() {
  return (
    <>
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-700/10 blur-[130px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/5 w-[380px] h-[380px] rounded-full bg-purple-600/8 blur-[110px] pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-2/3 left-1/2 w-[300px] h-[300px] rounded-full bg-indigo-500/6 blur-[90px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   SHINE CARD — card with shimmer sweep on hover
═══════════════════════════════════════════════════════ */
function ShineCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8 group ${className}`}
      whileHover="hover"
    >
      {children}
      {/* Shine sweep */}
      <motion.div
        variants={{
          hover: { x: ["−150%", "250%"], opacity: [0, 0.6, 0] },
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
      />
      {/* Glow border on hover */}
      <motion.div
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(139,92,246,0.35)" }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════ */
function Tag({
  children,
  color = "violet",
}: {
  children: React.ReactNode;
  color?: "violet" | "amber" | "green" | "red" | "gray";
}) {
  const styles = {
    violet: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    amber:  "border-amber-500/30 bg-amber-500/10 text-amber-400",
    green:  "border-green-500/30 bg-green-500/10 text-green-400",
    red:    "border-red-500/30 bg-red-500/10 text-red-400",
    gray:   "border-[var(--border)] bg-[var(--bg-2)] text-[var(--fg-muted)]",
  };
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold border tracking-wide ${styles[color]}`}
    >
      {children}
    </span>
  );
}

function Bullet({
  children,
  icon: Icon = CheckCircle2,
  iconClass = "text-violet-400",
}: {
  children: React.ReactNode;
  icon?: React.ElementType;
  iconClass?: string;
}) {
  return (
    <li className="flex items-start gap-3 text-sm text-[var(--fg-muted)] leading-relaxed">
      <Icon size={14} className={`mt-0.5 shrink-0 ${iconClass}`} />
      {children}
    </li>
  );
}

/* ═══════════════════════════════════════════════════════
   TIMELINE DATA
═══════════════════════════════════════════════════════ */
const timelineData = [
  {
    title: "2023",
    content: (
      <div className="space-y-6">
        <div>
          <Tag color="gray">The Origin</Tag>
          <h2 className="mt-4 text-2xl md:text-3xl font-black text-[var(--fg)] leading-tight">
            A ₹8 Cr project.
            <br />
            <span className="text-red-400">A silent bleed.</span>
          </h2>
          <p className="mt-4 text-[var(--fg-muted)] leading-relaxed">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta assumenda amet
            aut est commodi non officia molestias mollitia dignissimos. Quae asperiores tempore, 
            consequuntur amet ullam animi, et nobis quos aliquam nostrum dolores architecto temporibus dignissimos?
          </p>
          <p className="mt-3 text-[var(--fg-muted)] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis reiciendis hic corrupti?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, accusantium eius dolorum placeat,
             deleniti nulla animi sequi eligendi amet aut repudiandae vel at quisquam facere omnis laudantium culpa voluptas illo?
          </p>
        </div>

        <ShineCard>
          <p className="text-xs text-red-400 font-semibold uppercase tracking-wider mb-4">
            The exact crisis
          </p>
          <div className="grid grid-cols-3 gap-4 mb-5">
            {[
              { label: "Total Budget", value: "₹8 Cr",   color: "text-[var(--fg)]" },
              { label: "Already Spent", value: "₹6.2 Cr", color: "text-red-400" },
              { label: "Work Done",    value: "55%",      color: "text-amber-400" },
            ].map((s) => (
              <div key={s.label} className="text-center p-3 rounded-xl bg-[var(--bg-2)]">
                <p className="text-[10px] text-[var(--fg-muted)] mb-1">{s.label}</p>
                <p className={`text-xl font-black ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] text-[var(--fg-muted)]">
              <span>Budget consumed</span>
              <span className="text-red-400 font-semibold">77.5%</span>
            </div>
            <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 via-orange-400 to-red-500"
                initial={{ width: 0 }}
                whileInView={{ width: "77.5%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <p className="text-[10px] text-red-400 mt-1">
              77.5% of budget gone — only 55% of work done. Discovered in month 7.
            </p>
          </div>
        </ShineCard>

        <ShineCard>
          <p className="text-xs text-[var(--fg-muted)] font-semibold uppercase tracking-wider mb-3">
            What the developer had to choose from
          </p>
          <ul className="space-y-2.5">
            {[
              "Delay the project",
              "Borrow more money at high cost",
              "Cut scope, cut quality, cut reputation",
            ].map((opt) => (
              <li key={opt} className="flex items-center gap-3 text-sm text-[var(--fg-muted)]">
                <span className="font-bold text-red-400">→</span>
                {opt}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-[var(--fg-muted)] italic">
            All three were bad. All three were avoidable. That&apos;s when the question became unavoidable.
          </p>
        </ShineCard>
      </div>
    ),
  },

  {
    title: "Late 2023",
    content: (
      <div className="space-y-6">
        <div>
          <Tag color="violet">The Idea</Tag>
          <h2 className="mt-4 text-2xl md:text-3xl font-black text-[var(--fg)] leading-tight">
            What if you knew
            <br />
            <span className="gradient-text">before it broke?</span>
          </h2>
          <p className="mt-4 text-[var(--fg-muted)] leading-relaxed">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum 
            dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
            lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum
            lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum
          </p>
        </div>

        <ShineCard>
          <p className="text-xs text-violet-400 font-semibold uppercase tracking-wider mb-4">
            The founding belief
          </p>
          <blockquote className="text-lg md:text-xl font-black text-[var(--fg)] leading-snug">
            &ldquo;We don&apos;t build for the market. We build for the person losing sleep over the problem.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-[var(--fg-muted)]">
            If we can&apos;t measure the cost of the problem in rupees, we don&apos;t build the product.
          </p>
        </ShineCard>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "Mahessh Giri",
              role: "Co-founder & CEO",
              color: "border-violet-500/20 bg-violet-500/5",
              tag: "text-violet-400",
              desc: "Obsessive about precision and outcomes, not activity. Turned a firsthand problem into product conviction.",
            },
            {
              title: "Rushikesh Shrimanwar",
              role: "Co-founder & CTO",
              color: "border-amber-500/20 bg-amber-500/5",
              tag: "text-amber-400",
              desc: "Ships things that shouldn't be possible in the time it takes others to write a brief.",
            },
          ].map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className={`p-5 rounded-2xl border ${f.color}`}
            >
              <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${f.tag}`}>
                {f.role}
              </p>
              <p className="font-black text-[var(--fg)] mb-2">{f.title}</p>
              <p className="text-xs text-[var(--fg-muted)] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },

  {
    title: "Early 2024",
    content: (
      <div className="space-y-6">
        <div>
          <Tag color="violet">Building</Tag>
          <h2 className="mt-4 text-2xl md:text-3xl font-black text-[var(--fg)] leading-tight">
            XSITE: built in silence.
            <br />
            <span className="text-violet-400">Shipped with conviction.</span>
          </h2>
          <p className="mt-4 text-[var(--fg-muted)] leading-relaxed">
            No funding rounds. No press. No launch parties. Just two people who understood the problem
            deeply, building the exact tool that would have prevented that ₹8 Cr crisis.
          </p>
        </div>

        <ShineCard>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-violet-600/15 flex items-center justify-center">
              <BarChart3 size={18} className="text-violet-400" />
            </div>
            <div>
              <p className="font-black text-[var(--fg)]">XSITE</p>
              <p className="text-xs text-violet-400">Real Estate Cost Intelligence</p>
            </div>
          </div>
          <ul className="space-y-3">
            {[
              "Section-wise budget tracking — foundation, structure, electrical, plumbing",
              "Every contractor invoice logged against a milestone in real time",
              "Spend-vs-completion ratio tracked daily, not monthly",
              "Automated section-level expenditure reports, one click",
              "Early alert system: warned in week 3, not month 7",
            ].map((f) => (
              <Bullet key={f}>{f}</Bullet>
            ))}
          </ul>
        </ShineCard>

        <ShineCard>
          <p className="text-xs text-[var(--fg-muted)] font-semibold uppercase tracking-wider mb-4">
            The rules we built by
          </p>
          <div className="space-y-3">
            {[
              "Problem-first, always. Never a feature for a feature's sake.",
              "Clarity over cleverness. If a user can't understand it in 30 seconds, redesign.",
              "Ship when it's ready. Not when the calendar says so.",
            ].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.2, duration: 0.5 }}
                className="flex items-start gap-3 text-sm text-[var(--fg-muted)]"
              >
                <span className="text-violet-500 font-black shrink-0 font-mono text-xs mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {r}
              </motion.div>
            ))}
          </div>
        </ShineCard>
      </div>
    ),
  },

  {
    title: "2024",
    content: (
      <div className="space-y-6">
        <div>
          <Tag color="green">Live</Tag>
          <h2 className="mt-4 text-2xl md:text-3xl font-black text-[var(--fg)] leading-tight">
            XSITE goes live.
            <br />
            <span className="text-green-400">Real projects. Real money.</span>
          </h2>
          <p className="mt-4 text-[var(--fg-muted)] leading-relaxed">
            Not a beta. Not a waitlist. Live tracking of crores of rupees across active construction
            sites — the way it should have been from day one.
          </p>
        </div>

        <ShineCard>
          <p className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-5">
            What XSITE does today
          </p>
          <div className="grid grid-cols-2 gap-4 mb-5">
            {[
              { v: "₹Cr+",   l: "Tracked live" },
              { v: "100%",   l: "Budget visibility" },
              { v: "Week 3", l: "Early detection" },
              { v: "1-click",l: "Reports" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="text-center p-4 rounded-xl bg-[var(--bg-2)]"
              >
                <p className="text-2xl font-black gradient-text mb-1">{s.v}</p>
                <p className="text-[10px] text-[var(--fg-muted)] uppercase tracking-wider">{s.l}</p>
              </motion.div>
            ))}
          </div>
          <Link
            href="/xsite"
            className="block w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold text-center transition-all duration-200 hover:-translate-y-0.5"
          >
            Explore XSITE →
          </Link>
        </ShineCard>

        <ShineCard>
          <p className="text-xs text-[var(--fg-muted)] font-semibold uppercase tracking-wider mb-3">
            What shipping proved
          </p>
          <ul className="space-y-3">
            {[
              "Two people who deeply understand a problem move faster than a team that doesn't.",
              "No outside money means every decision is made to build something real.",
              "The best validation isn't a survey — it's a developer tracking crores on your platform.",
            ].map((p) => (
              <Bullet key={p} icon={CheckCircle2} iconClass="text-green-400">
                {p}
              </Bullet>
            ))}
          </ul>
        </ShineCard>
      </div>
    ),
  },

  {
    title: "2025",
    content: (
      <div className="space-y-6">
        <div>
          <Tag color="amber">Building</Tag>
          <h2 className="mt-4 text-2xl md:text-3xl font-black text-[var(--fg)] leading-tight">
            The next expensive problem:
            <br />
            <span className="text-amber-400">hiring the wrong person.</span>
          </h2>
          <p className="mt-4 text-[var(--fg-muted)] leading-relaxed">
            Students graduating without knowing what industry actually needs. Companies burning months
            and lakhs on hires that don&apos;t stick. No trusted layer between them.
          </p>
          <p className="mt-3 text-[var(--fg-muted)] leading-relaxed">
            Same filter as always: measurable, expensive, recurring. JEMS cleared it immediately.
          </p>
        </div>

        <ShineCard>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center">
              <Users size={18} className="text-amber-400" />
            </div>
            <div>
              <p className="font-black text-[var(--fg)]">JEMS</p>
              <p className="text-xs text-amber-400">Student × Industry Trust Platform</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {[
              {
                side: "For Students",
                items: [
                  "Know what industry actually expects",
                  "Build a profile that proves readiness",
                  "Get a JEMS score that means something",
                ],
              },
              {
                side: "For Companies",
                items: [
                  "Verified, job-ready talent first",
                  "Fewer rounds, fewer bad hires",
                  "Lower cost-per-hire by design",
                ],
              },
            ].map((g) => (
              <div key={g.side} className="p-4 rounded-xl bg-[var(--bg-2)]">
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3">
                  {g.side}
                </p>
                <ul className="space-y-2">
                  {g.items.map((item) => (
                    <Bullet key={item} icon={Zap} iconClass="text-amber-400">
                      {item}
                    </Bullet>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link
            href="/jems"
            className="block w-full py-3 rounded-xl border border-amber-500/35 text-amber-400 hover:bg-amber-500/10 text-sm font-semibold text-center transition-all duration-200"
          >
            Join the JEMS waitlist →
          </Link>
        </ShineCard>
      </div>
    ),
  },

  {
    title: "2026+",
    content: (
      <div className="space-y-6">
        <div>
          <Tag color="gray">What&apos;s next</Tag>
          <h2 className="mt-4 text-2xl md:text-3xl font-black text-[var(--fg)] leading-tight">
            Going deeper,
            <br />
            <span className="gradient-text">not wider.</span>
          </h2>
          <p className="mt-4 text-[var(--fg-muted)] leading-relaxed">
            The plan isn&apos;t to launch 10 products. It&apos;s to make XSITE the default for real
            estate cost intelligence across India, and JEMS the trusted layer between students and
            every company that hires.
          </p>
        </div>

        <ShineCard>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center">
              <Globe size={18} className="text-indigo-400" />
            </div>
            <p className="font-black text-[var(--fg)]">Platform Expansion</p>
          </div>
          <ul className="space-y-3">
            {[
              "XSITE for pan-India developers — every crore tracked",
              "JEMS institutional partnerships with universities and companies",
              "A shared data intelligence layer across both products",
              "API ecosystem for integrations with existing ERP and HR tools",
              "The next problem — when one finds us, we'll know",
            ].map((item) => (
              <Bullet key={item} icon={Circle} iconClass="text-gray-400">
                {item}
              </Bullet>
            ))}
          </ul>
        </ShineCard>

        <ShineCard className="border-violet-500/20 bg-violet-500/5 text-center">
          <p className="text-lg md:text-xl font-black text-[var(--fg)] leading-snug mb-4">
            &ldquo;We don&apos;t build products for everyone.
            <span className="gradient-text"> We build the exact thing for someone.&rdquo;</span>
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200"
            >
              Get in touch →
            </Link>
          </motion.div>
        </ShineCard>
      </div>
    ),
  },
];

/* ═══════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════ */
export default function JourneyPage() {
  return (
    <>
      <CursorGlow />

      <div
        className="relative min-h-screen overflow-x-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, var(--grad-violet) 0%, var(--bg) 55%)",
        }}
      >
        <Navbar />

        {/* ── Hero ─────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          {/* Sparkles confined to the hero */}
          <SparkleField />
          <FloatingOrbs />

          {/* Animated grid */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(167,139,250,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.06) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
            animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-400 text-xs font-semibold mb-8 uppercase tracking-wider">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-violet-400"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                The story so far
              </span>
            </motion.div>

            {/* Headline with shimmer sweep */}
            <div className="relative inline-block overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[var(--fg)] leading-[1.05] mb-0"
              >
                From one problem
                <br />
                <span className="gradient-text">to two products.</span>
              </motion.h1>
              {/* Shimmer sweep */}
              <motion.div
                className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                animate={{ x: ["-160%", "260%"] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut", delay: 1.5 }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="text-[var(--fg-muted)] text-lg max-w-xl mx-auto leading-relaxed mb-10 mt-6"
            >
              A real crisis on a real construction site. Two founders who refused to look away.
              The unfiltered story of how Exponentor was built.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors group"
              >
                <ArrowLeft
                  size={14}
                  className="group-hover:-translate-x-1 transition-transform duration-200"
                />
                Back to Exponentor
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="flex flex-col items-center gap-2 mt-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-[var(--fg-muted)] text-xs uppercase tracking-widest">
                Scroll the story
              </span>
              <div className="w-px h-8 bg-gradient-to-b from-[var(--border)] to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
        </div>

        {/* Timeline */}
        <section className="py-16">
          <Timeline data={timelineData} />
        </section>
      </div>
    </>
  );
}
