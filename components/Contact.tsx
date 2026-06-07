"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Twitter, Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contacts = [
  { icon: Mail, label: "Email", value: "hello@exponentor.com", href: "mailto:hello@exponentor.com" },
  { icon: Linkedin, label: "LinkedIn", value: "/exponentor", href: "#" },
  { icon: Twitter, label: "Twitter / X", value: "@exponentor", href: "#" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "bg-[#0E0E1A] border-[#2A2A3E] text-white placeholder:text-gray-600 focus:border-violet-500/60 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl transition-colors duration-200 text-sm";

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-violet-700/8 blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* ── Left ── */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="inline-block text-violet-400 text-xs font-semibold tracking-[0.22em] uppercase mb-6"
            >
              Get in touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-7"
            >
              Let&apos;s
              <br />
              <span className="gradient-text">talk.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed max-w-md mb-12"
            >
              Whether you&apos;re a real estate developer curious about XSITE, a student or company
              interested in JEMS, or just want to say hello — we read every message.
            </motion.p>

            {/* Contact methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="flex flex-col gap-3"
            >
              {contacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-[#1F1F35] bg-[#0E0E1A] hover:border-violet-500/35 transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-violet-600/15 flex items-center justify-center group-hover:bg-violet-600/25 transition-colors duration-300 shrink-0">
                    <c.icon size={16} className="text-violet-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-gray-600 uppercase tracking-wider mb-0.5">{c.label}</p>
                    <p className="text-white text-sm font-medium truncate">{c.value}</p>
                  </div>
                  <ArrowRight size={14} className="text-gray-700 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-violet-600/10 via-transparent to-purple-600/10 rounded-3xl blur-xl pointer-events-none" />

            <div className="relative rounded-2xl border border-[#2A2A3E] bg-[#0B0B16] overflow-hidden">
              {/* Top bar */}
              <div className="h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-violet-800" />

              <div className="p-8">
                {!sent ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <label className="text-[11px] text-gray-500 uppercase tracking-wider mb-2 block">
                        Your name
                      </label>
                      <Input
                        placeholder="e.g. Rahul Mehta"
                        className={inputClass}
                        value={fields.name}
                        onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        required
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-gray-500 uppercase tracking-wider mb-2 block">
                        Email address
                      </label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        className={inputClass}
                        value={fields.email}
                        onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        required
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-gray-500 uppercase tracking-wider mb-2 block">
                        What&apos;s on your mind?
                      </label>
                      <Textarea
                        placeholder="Tell us about your project, question, or idea..."
                        className={`${inputClass} min-h-[130px] resize-none`}
                        value={fields.message}
                        onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ y: -2, boxShadow: "0 12px 32px rgba(124,58,237,0.35)" }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors duration-200"
                    >
                      Send message <Send size={14} />
                    </motion.button>

                    <p className="text-center text-[11px] text-gray-600">
                      We reply within 24 hours, usually much sooner.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center">
                      <CheckCircle2 size={28} className="text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Message sent!</h3>
                    <p className="text-gray-500 text-sm max-w-xs">
                      Thanks for reaching out, {fields.name.split(" ")[0] || "there"}. We&apos;ll get back to you at {fields.email} shortly.
                    </p>
                    <button
                      onClick={() => { setSent(false); setFields({ name: "", email: "", message: "" }); }}
                      className="mt-2 text-violet-400 text-xs hover:text-violet-300 transition-colors"
                    >
                      Send another →
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
