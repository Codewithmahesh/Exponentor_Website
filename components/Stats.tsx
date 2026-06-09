"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 8, suffix: " Cr+", label: "Real estate budgets\nalready tracked", prefix: "₹" },
  { value: 55, suffix: "%", label: "How complete a project\ncan look while 77% spent" },
  { value: 2, suffix: "", label: "Focused products\nbeing built" },
  { value: 0, suffix: "", label: "Clients we're willing\nto compromise for" },
];

function Counter({ to, prefix = "", suffix = "", inView }: {
  to: number; prefix?: string; suffix?: string; inView: boolean;
}) {
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span>
      {prefix}{val}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-0 relative overflow-hidden">
      <div className="border-y border-[var(--border-subtle)]"
        style={{ background: "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(124,58,237,0.04), transparent)" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border-subtle)]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="px-8 py-12 text-center group hover:bg-violet-500/3 transition-colors duration-300"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-3 leading-none">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} inView={inView} />
              </div>
              <p className="text-[var(--fg-muted)] text-xs leading-relaxed whitespace-pre-line uppercase tracking-wider">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
