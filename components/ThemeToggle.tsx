"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8" />;

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200
        bg-white/[0.06] dark:bg-white/[0.06] hover:bg-white/[0.12] dark:hover:bg-white/[0.12]
        text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
        border border-gray-200 dark:border-white/[0.08]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={13} /> : <Moon size={13} />}
    </motion.button>
  );
}
