"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[13px] h-[13px]">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.737-8.862L1.5 2.25h6.574l4.26 5.638 5.91-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const members = [
  {
    imageSrc: "/founders/founder1.png",
    imagePosition: "center 20%",
    blendMode: "luminosity" as const,
    number: "01",
    name: "Mahesh Giri",
    role: "Co-founder & CEO",
    bio: "The one who looked at a ₹8 Cr real estate project bleeding money in silence and said — there has to be a better way. Obsessive about precision and outcomes, not activity. Built XSITE from a problem he watched unfold firsthand, not from a pitch deck.",
    tags: ["Product", "Vision", "Real Estate"],
    color: "#7C3AED",
    colorLight: "#A78BFA",
    bgGradient: "radial-gradient(ellipse 100% 80% at 35% 25%, #1A0E3A 0%, #0D0B1C 50%, #07070F 100%)",
  },
  {
    imageSrc: "/founders/founder2.png",
    imagePosition: "center 20%",
    blendMode: "normal" as const,
    number: "02",
    name: "Rushikesh Shrimanwar",
    role: "Co-founder & CTO",
    bio: "Ships things that shouldn't be possible to build in the time it takes others to write a brief. Believes the best technology is the kind users never have to think about. Precision over polish — always.",
    tags: ["Engineering", "Design", "Systems"],
    color: "#F59E0B",
    colorLight: "#FCD34D",
    bgGradient: "radial-gradient(ellipse 100% 80% at 65% 25%, #261506 0%, #130D07 50%, #07070F 100%)",
  },
];

function Panel({
  member,
  index,
  hovered,
  setHovered,
}: {
  member: (typeof members)[0];
  index: number;
  hovered: number | null;
  setHovered: (i: number | null) => void;
}) {
  const isHovered = hovered === index;
  const isOther = hovered !== null && !isHovered;

  return (
    <motion.div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      animate={{ flexGrow: isHovered ? 1.55 : isOther ? 0.55 : 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden cursor-default"
      style={{
        flexBasis: 0,
        minWidth: "26%",
        background: member.bgGradient,
        minHeight: "clamp(580px, 78vh, 780px)",
      }}
    >
      {/* Photo — scale zoom in place */}
      <motion.div
        className="absolute inset-0 select-none pointer-events-none"
        animate={{
          opacity: isHovered ? 0.75 : 0.4,
          scale: isHovered ? 1.06 : 1,
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ mixBlendMode: member.blendMode }}
      >
        <Image
          src={member.imageSrc}
          alt={member.name}
          fill
          className="object-cover"
          style={{ objectPosition: member.imagePosition }}
          sizes="(max-width: 1024px) 100vw, 55vw"
          priority
        />
      </motion.div>

      {/* Deep bottom scrim */}
      <div className="absolute inset-x-0 bottom-0 h-4/5 pointer-events-none bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Coloured glow on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          background: `radial-gradient(ellipse 90% 60% at 40% 10%, ${member.color}28, transparent 65%)`,
        }}
      />

      {/* Hover border ring */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          boxShadow: `inset 0 0 0 1px ${member.color}35, inset 0 0 60px ${member.color}12`,
        }}
      />

      {/* Dim overlay on inactive panel */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        animate={{ opacity: isOther ? 0.55 : 0 }}
        transition={{ duration: 0.45 }}
      />

      {/* Panel number — decorative */}
      <motion.span
        className="absolute top-8 right-8 font-black leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(3rem, 5vw, 5rem)", color: `${member.color}18` }}
        animate={{ opacity: isHovered ? 1 : 0.6 }}
        transition={{ duration: 0.4 }}
      >
        {member.number}
      </motion.span>

      {/* Divider between panels */}
      {index === 0 && (
        <div
          className="absolute top-0 right-0 bottom-0 w-px pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.07) 25%, rgba(255,255,255,0.07) 75%, transparent)",
          }}
        />
      )}

      {/* Content */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-10 pb-12"
        animate={{ y: isHovered ? -20 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Role badge */}
        <motion.div
          className="flex items-center gap-2 mb-4"
          animate={{ opacity: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.35 }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: member.color }}
          />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: member.colorLight }}>
            {member.role}
          </span>
        </motion.div>

        {/* Name */}
        <h3
          className="font-black text-white leading-[0.92] tracking-tight mb-5"
          style={{ fontSize: "clamp(2.6rem, 4.5vw, 4.2rem)" }}
        >
          {member.name}
        </h3>

        {/* Bio */}
        <motion.p
          className="leading-relaxed mb-6 text-gray-400 max-w-xs"
          style={{ fontSize: "clamp(0.8rem, 0.95vw, 0.95rem)" }}
          animate={{ opacity: isHovered ? 1 : 0.4 }}
          transition={{ duration: 0.4 }}
        >
          {member.bio}
        </motion.p>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-1.5 mb-7"
          animate={{ opacity: isHovered ? 1 : 0.25 }}
          transition={{ duration: 0.35 }}
        >
          {member.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-[11px] font-medium"
              style={{
                color: member.colorLight,
                background: `${member.color}18`,
                border: `1px solid ${member.color}35`,
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Social row */}
        <motion.div
          className="flex items-center gap-2"
          animate={{ opacity: isHovered ? 1 : 0.2 }}
          transition={{ duration: 0.35 }}
        >
          {[Linkedin, XIcon, Github].map((Icon, i) => (
            <button
              key={i}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200 hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Icon size={13} />
            </button>
          ))}

          <motion.button
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -8 }}
            transition={{ duration: 0.3, delay: isHovered ? 0.05 : 0 }}
            className="ml-1 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white"
            style={{
              background: `${member.color}30`,
              border: `1px solid ${member.color}50`,
            }}
          >
            Connect <ArrowUpRight size={11} />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Team() {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="team" ref={ref} className="py-24">
      <div className="px-6 max-w-[1400px] mx-auto mb-14 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block text-violet-400 text-xs font-semibold tracking-[0.22em] uppercase mb-4"
        >
          The team
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white"
        >
          Small team.{" "}
          <span className="gradient-text">Serious intent.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-gray-500 text-sm mt-4"
        >
          Hover to know us.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col lg:flex-row w-full border-y border-[#1F1F35] overflow-hidden"
      >
        {members.map((m, i) => (
          <Panel key={m.name} member={m} index={i} hovered={hovered} setHovered={setHovered} />
        ))}
      </motion.div>
    </section>
  );
}
