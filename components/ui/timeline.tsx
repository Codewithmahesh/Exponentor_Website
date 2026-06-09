"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

/* ── Per-row component so hooks can run per entry ────── */
function TimelineRow({
  item,
  index,
  total,
  scrollYProgress,
}: {
  item: TimelineEntry;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  // When does the traveling bead reach this entry's dot?
  const threshold = total <= 1 ? 0.5 : (index / (total - 1)) * 0.88 + 0.04;
  const before = Math.max(0, threshold - 0.1);
  const peak = threshold;
  const after = Math.min(1, threshold + 0.2);

  // Year label: nearly invisible → bright white, stays bright once reached
  const yearOpacity = useTransform(scrollYProgress, [before, peak], [0.14, 1]);

  // Violet glow on year text: peaks when bead arrives, fades to subtle after
  const yearGlow = useTransform(
    scrollYProgress,
    [before, peak, after],
    [
      "0 0 0px rgba(139,92,246,0)",
      "0 0 24px rgba(139,92,246,1), 0 0 48px rgba(167,139,250,0.55)",
      "0 0 6px rgba(139,92,246,0.3)",
    ]
  );

  // Dot outer shell glow: matches the bead arrival
  const dotGlow = useTransform(
    scrollYProgress,
    [before, peak, after],
    [
      "0 0 0 0 rgba(139,92,246,0), 0 0 0px rgba(139,92,246,0)",
      "0 0 0 4px rgba(139,92,246,0.45), 0 0 22px rgba(139,92,246,0.8)",
      "0 0 0 1px rgba(139,92,246,0.2), 0 0 8px rgba(139,92,246,0.25)",
    ]
  );

  // Inner dot scale: pops when bead hits
  const dotInnerScale = useTransform(
    scrollYProgress,
    [before, peak, Math.min(1, peak + 0.06)],
    [0.65, 1.5, 1.0]
  );
  const dotInnerGlow = useTransform(
    scrollYProgress,
    [before, peak, after],
    [
      "0 0 0px rgba(139,92,246,0)",
      "0 0 16px rgba(139,92,246,1)",
      "0 0 6px rgba(139,92,246,0.4)",
    ]
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="flex justify-start pt-12 md:pt-32 md:gap-10"
    >
      {/* Sticky left: dot + year */}
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">

        {/* Dot ring — glows when bead arrives */}
        <motion.div
          style={{ boxShadow: dotGlow }}
          className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center z-10"
        >
          <motion.div
            style={{ scale: dotInnerScale, boxShadow: dotInnerGlow }}
            className="h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 to-purple-600"
          />
        </motion.div>

        {/* Year — desktop: dark until line arrives, then blazing */}
        <motion.h3
          className="hidden md:block text-lg md:pl-20 md:text-3xl font-black text-white"
          style={{ opacity: yearOpacity, textShadow: yearGlow }}
        >
          {item.title}
        </motion.h3>
      </div>

      {/* Content */}
      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        {/* Year — mobile */}
        <motion.h3
          className="md:hidden block text-xl mb-5 text-left font-black text-white"
          style={{ opacity: yearOpacity, textShadow: yearGlow }}
        >
          {item.title}
        </motion.h3>
        {item.content}
      </div>
    </motion.div>
  );
}

/* ── Main Timeline ───────────────────────────────────── */
export function Timeline({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={containerRef} className="w-full font-sans px-4 md:px-10">
      <div ref={ref} className="relative max-w-5xl mx-auto pb-20">

        {data.map((item, index) => (
          <TimelineRow
            key={index}
            item={item}
            index={index}
            total={data.length}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* Vertical track */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]
            bg-gradient-to-b from-transparent via-[var(--border)] to-transparent
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_92%,transparent_100%)]"
        >
          {/* Filled portion */}
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-b from-violet-500 via-purple-500 to-transparent"
          />
          {/* Traveling glow bead */}
          <motion.div
            style={{ top: heightTransform }}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-violet-300"
            animate={{
              boxShadow: [
                "0 0 8px 4px rgba(167,139,250,0.9), 0 0 20px 8px rgba(139,92,246,0.5)",
                "0 0 16px 8px rgba(167,139,250,1), 0 0 36px 16px rgba(139,92,246,0.7)",
                "0 0 8px 4px rgba(167,139,250,0.9), 0 0 20px 8px rgba(139,92,246,0.5)",
              ],
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}
