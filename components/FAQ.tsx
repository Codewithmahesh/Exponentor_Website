"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What exactly does XSITE do?",
    a: "XSITE is a cost management platform for real estate developers. It tracks every contractor invoice, material purchase, and milestone payment against your approved project budget — section by section, in real time. You always know where your money is, not just where it was.",
  },
  {
    q: "Who is XSITE built for?",
    a: "Primarily real estate developers running mid-to-large residential or commercial projects — anyone managing a project budget above ₹1–2 Cr who currently relies on spreadsheets, WhatsApp, or memory to track costs.",
  },
  {
    q: "How is JEMS different from a job portal?",
    a: "Job portals match resumes with listings. JEMS builds trust between students and companies before hiring even begins. Students learn actual industry expectations and build verified profiles. Companies get candidates who are genuinely job-ready — not just good at applying.",
  },
  {
    q: "Are you bootstrapped?",
    a: "Yes. Two founders, zero outside funding at this stage. That means every decision is made to build something real, not to hit a metric for a pitch deck. We don't dilute focus.",
  },
  {
    q: "You're only two people — can you actually deliver?",
    a: "Two focused people who deeply understand their domain move faster than a bloated team chasing features. XSITE is already live. JEMS is in active development. We've chosen depth over breadth deliberately.",
  },
  {
    q: "Can I partner with or invest in Exponentor?",
    a: "We're open to conversations that make sense — enterprise pilots for XSITE, institutional partnerships for JEMS, or thoughtful long-term investment discussions. Reach us at hello@exponentor.com.",
  },
  {
    q: "Why two such different products?",
    a: "Same philosophy, different industries. Both XSITE and JEMS solve problems where the cost of not solving them is enormous and measurable. That's our filter: if we can't tell you exactly how expensive the problem is, we don't build for it.",
  },
];

function FAQItem({
  q,
  a,
  index,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      onMouseEnter={onToggle}
      onClick={onToggle}
      className={`rounded-2xl transition-all duration-300 cursor-pointer ${
        isOpen
          ? "border border-violet-500/25 bg-violet-500/[0.04]"
          : "border border-[var(--border)] bg-[var(--bg-card)] hover:border-violet-500/20 hover:bg-[var(--bg-2)]"
      }`}
    >
      {/* Question row */}
      <div className="flex items-start justify-between gap-6 px-6 md:px-8 py-5 md:py-6">
        <div className="flex items-start gap-4 min-w-0">
          <span
            className="text-[11px] font-mono shrink-0 w-5 mt-0.5 transition-colors duration-200"
            style={{ color: isOpen ? "#A78BFA" : "var(--fg-muted)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-sm md:text-base font-semibold leading-snug transition-colors duration-200 ${
              isOpen ? "text-[var(--fg)]" : "text-[var(--fg-muted)]"
            }`}
          >
            {q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 mt-0.5"
        >
          <Plus
            size={16}
            className="transition-colors duration-200"
            style={{ color: isOpen ? "#A78BFA" : "var(--fg-muted)" }}
          />
        </motion.div>
      </div>

      {/* Answer — animates open/close */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pl-[3.75rem] pr-6 md:pr-8 pb-6 text-[var(--fg-muted)] text-sm md:text-[0.9375rem] leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number>(0);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden" id="faq">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] max-w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent pointer-events-none" />

      {/* Faint side glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 45% 55% at 75% 50%, rgba(124,58,237,0.04) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-start">

          {/* ── Left panel ── */}
          <div className="lg:sticky lg:top-28">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-violet-400 text-xs font-semibold tracking-[0.22em] uppercase mb-5"
            >
              Questions
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl xl:text-6xl font-black text-[var(--fg)] leading-tight tracking-tight mb-5"
            >
              If you&apos;re
              <br />
              wondering.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[var(--fg-muted)] leading-relaxed mb-8 text-[0.9375rem]"
            >
              We keep it honest. No PR-speak, no corporate dodge.
              If your question isn&apos;t here, email us.
            </motion.p>

            <motion.a
              href="mailto:hello@exponentor.com"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 }}
              className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200 group"
            >
              hello@exponentor.com
              <span className="text-gray-400 dark:text-gray-700 group-hover:text-violet-400 transition-all duration-200 group-hover:translate-x-0.5 inline-block">
                →
              </span>
            </motion.a>

            {/* Decorative counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-10 p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]"
            >
              <p className="text-2xl font-black text-[var(--fg)] mb-0.5">
                {faqs.length} questions.
              </p>
              <p className="text-[var(--fg-muted)] text-xs">Tap or hover any to read the answer.</p>
            </motion.div>
          </div>

          {/* ── Right — FAQ list ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-2.5"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                index={i}
                isOpen={open === i}
                onToggle={() => setOpen(i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
