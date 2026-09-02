"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export const FloatingNav = ({
  navItems,
  logo,
  cta,
  className,
}: {
  navItems: NavItem[];
  logo?: React.ReactNode;
  cta?: React.ReactNode;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const prev = scrollYProgress.getPrevious() ?? 0;
      const direction = current - prev;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-5 inset-x-0 mx-auto z-[9999] w-[calc(100%-2rem)] max-w-3xl",
          className
        )}
      >
        <div className="relative flex items-center justify-between px-3 py-2 rounded-full
          border border-[var(--border)]
          bg-white/90
          backdrop-blur-xl
          shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]">
          {/* logo */}
          {logo && <div className="flex items-center shrink-0">{logo}</div>}

          {/* nav links — absolutely centered */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1">
            {navItems.map((item, idx) => {
              const isExternal = item.link.startsWith("http");
              return (
                <a
                  key={idx}
                  href={item.link}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group relative px-3.5 py-1.5 rounded-full text-sm
                    text-[var(--fg-muted)]
                    hover:text-[var(--fg)]
                    transition-colors duration-200"
                >
                  {item.icon && <span className="block sm:hidden">{item.icon}</span>}
                  <span className="hidden sm:block relative">
                    {item.name}
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-violet-400 transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                </a>
              );
            })}
          </div>

          {/* cta */}
          {cta && <div className="flex items-center gap-2">{cta}</div>}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
