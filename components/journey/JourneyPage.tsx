"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap, Circle, BarChart3, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import Navbar from "@/components/Navbar";

/* ═══════════════════════════════════════════════════════
   SHINE CARD — simple bordered card
═══════════════════════════════════════════════════════ */
function ShineCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8 hover:border-violet-500/30 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
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
    violet: "border-violet-500/30 bg-violet-500/10 text-violet-600",
    amber:  "border-amber-500/30 bg-amber-500/10 text-amber-700",
    green:  "border-green-500/30 bg-green-500/10 text-green-700",
    red:    "border-red-500/30 bg-red-500/10 text-red-600",
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
  iconClass = "text-violet-600",
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
            <span className="text-red-600">A silent bleed.</span>
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
          <p className="text-xs text-red-600 font-semibold uppercase tracking-wider mb-4">
            The exact crisis
          </p>
          <div className="grid grid-cols-3 gap-4 mb-5">
            {[
              { label: "Total Budget", value: "₹8 Cr",   color: "text-[var(--fg)]" },
              { label: "Already Spent", value: "₹6.2 Cr", color: "text-red-600" },
              { label: "Work Done",    value: "55%",      color: "text-amber-700" },
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
              <span className="text-red-600 font-semibold">77.5%</span>
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
            <p className="text-[10px] text-red-600 mt-1">
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
                <span className="font-bold text-red-600">→</span>
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
          <p className="text-xs text-violet-600 font-semibold uppercase tracking-wider mb-4">
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
              tag: "text-violet-600",
              desc: "Obsessive about precision and outcomes, not activity. Turned a firsthand problem into product conviction.",
            },
            {
              title: "Rushikesh Shrimanwar",
              role: "Co-founder & CTO",
              color: "border-amber-500/20 bg-amber-500/5",
              tag: "text-amber-700",
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
            <span className="text-violet-600">Shipped with conviction.</span>
          </h2>
          <p className="mt-4 text-[var(--fg-muted)] leading-relaxed">
            No funding rounds. No press. No launch parties. Just two people who understood the problem
            deeply, building the exact tool that would have prevented that ₹8 Cr crisis.
          </p>
        </div>

        <ShineCard>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-violet-600/15 flex items-center justify-center">
              <BarChart3 size={18} className="text-violet-600" />
            </div>
            <div>
              <p className="font-black text-[var(--fg)]">XSITE</p>
              <p className="text-xs text-violet-600">Real Estate Cost Intelligence</p>
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
            <span className="text-green-700">Real projects. Real money.</span>
          </h2>
          <p className="mt-4 text-[var(--fg-muted)] leading-relaxed">
            Not a beta. Not a waitlist. Live tracking of crores of rupees across active construction
            sites — the way it should have been from day one.
          </p>
        </div>

        <ShineCard>
          <p className="text-xs text-green-700 font-semibold uppercase tracking-wider mb-5">
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
              <Bullet key={p} icon={CheckCircle2} iconClass="text-green-700">
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
            <span className="text-amber-700">hiring the wrong person.</span>
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
              <Users size={18} className="text-amber-700" />
            </div>
            <div>
              <p className="font-black text-[var(--fg)]">JEMS</p>
              <p className="text-xs text-amber-700">Student × Industry Trust Platform</p>
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
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-3">
                  {g.side}
                </p>
                <ul className="space-y-2">
                  {g.items.map((item) => (
                    <Bullet key={item} icon={Zap} iconClass="text-amber-700">
                      {item}
                    </Bullet>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link
            href="/jems"
            className="block w-full py-3 rounded-xl border border-amber-500/35 text-amber-700 hover:bg-amber-500/10 text-sm font-semibold text-center transition-all duration-200"
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
              <Globe size={18} className="text-indigo-600" />
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
          <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-600 text-xs font-semibold mb-8 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                The story so far
              </span>
            </motion.div>

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
