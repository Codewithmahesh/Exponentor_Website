"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const members = [
  {
    imageSrc: "/founders/founder1.png",
    imageSrcHovered: "/founders/founder1-big.png",
    imagePosition: "top center",
    name: "Mahesh Giri",
    role: "Co-founder & CEO",
    bio: "The one who looked at a ₹8 Cr real estate project bleeding money in silence and said — there has to be a better way. Obsessive about precision and outcomes, not activity. Built XSITE from a problem he watched unfold firsthand, not from a pitch deck. Refuses to ship anything he wouldn't use himself. Believes the best product decision is always the one that hurts least later.",
    tags: ["Product", "Vision", "Real Estate"],
    color: "#7C3AED",
    colorLight: "#A78BFA",
    bgGradient: "radial-gradient(ellipse 100% 80% at 35% 25%, #1A0E3A 0%, #0D0B1C 50%, #07070F 100%)",
  },
  {
    imageSrc: "/founders/founder2.png",
    imageSrcHovered: "",
    imagePosition: "right top",
    name: "Rushikesh Shrimanwar",
    role: "Co-founder & CTO",
    bio: "Ships things that shouldn't be possible to build in the time it takes others to write a brief. Believes the best technology is the kind users never have to think about. The kind of engineer who reads the spec, ignores it, and builds what was actually meant. Precision over polish — always. If it can be made simpler, it will be.",
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
  const hasHoverImg = Boolean(member.imageSrcHovered);

  return (
    <motion.div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      animate={{ flexGrow: isHovered ? 1.6 : isOther ? 0.5 : 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden cursor-default"
      style={{
        flexBasis: 0,
        minWidth: "28%",
        background: member.bgGradient,
        minHeight: "clamp(580px, 78vh, 760px)",
      }}
    >
      {/*
       * Wrappers extend 40px beyond the panel on each side (-left-10 -right-10).
       * On hover the image pans 28px right. Since 40 > 28, the panel is always
       * fully covered. Parent overflow-hidden clips the excess cleanly.
       */}

      {/* Base image — pans right, fades out when hover-image takes over */}
      {member.imageSrc && (
        <motion.div
          className="absolute inset-y-0 -left-10 -right-10 select-none pointer-events-none"
          animate={{
            opacity: isHovered && hasHoverImg ? 0 : isHovered ? 0.65 : 0.35,
            x: isHovered ? 28 : 0,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ mixBlendMode: "luminosity" }}
        >
          <Image
            src={member.imageSrc}
            alt={member.name}
            fill
            className="object-cover"
            style={{ objectPosition: member.imagePosition }}
            sizes="(max-width: 1024px) 100vw, 70vw"
            priority
          />
        </motion.div>
      )}

      {/* Hover image — pans right and fades in */}
      {hasHoverImg && (
        <motion.div
          className="absolute inset-y-0 -left-10 -right-10 select-none pointer-events-none"
          animate={{
            opacity: isHovered ? 0.65 : 0,
            x: isHovered ? 28 : 0,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ mixBlendMode: "luminosity" }}
        >
          <Image
            src={member.imageSrcHovered}
            alt={`${member.name} hover`}
            fill
            className="object-cover"
            style={{ objectPosition: member.imagePosition }}
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
        </motion.div>
      )}

      {/* Colour glow on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.55 }}
        style={{ background: `radial-gradient(ellipse 80% 65% at 45% 15%, ${member.color}22, transparent 65%)` }}
      />

      {/* Scrim on inactive panel */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        animate={{ opacity: isOther ? 0.6 : 0 }}
        transition={{ duration: 0.45 }}
      />

      {/* Divider between panels */}
      {index === 0 && (
        <div
          className="absolute top-0 right-0 bottom-0 w-px pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.07) 25%, rgba(255,255,255,0.07) 75%, transparent 100%)" }}
        />
      )}

      {/* Content — bottom-anchored, lifts slightly on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-10 pt-8 pb-20"
        animate={{ y: isHovered ? -16 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3
          className="font-black text-white leading-tight tracking-tight mb-2"
          style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}
        >
          {member.name}
        </h3>

        <p className="text-sm font-semibold mb-5" style={{ color: member.colorLight }}>
          {member.role}
        </p>

        <motion.p
          className="leading-relaxed mb-6 max-w-sm text-gray-400"
          style={{ fontSize: "clamp(0.875rem, 1vw, 1rem)" }}
          animate={{ opacity: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.35 }}
        >
          {member.bio}
        </motion.p>

        <div className="flex flex-wrap gap-2 mb-8">
          {member.tags.map((tag) => (
            <motion.div
              key={tag}
              animate={{ borderColor: isHovered ? `${member.color}60` : "rgba(255,255,255,0.08)" }}
              transition={{ duration: 0.3 }}
            >
              <Badge
                variant="outline"
                className="text-[11px] font-medium text-gray-400 border-inherit bg-transparent"
                style={isHovered ? { background: `${member.color}14` } : {}}
              >
                {tag}
              </Badge>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex items-center gap-2.5"
          animate={{ opacity: isHovered ? 1 : 0.3 }}
          transition={{ duration: 0.35 }}
        >
          {[Linkedin, Twitter, Github].map((Icon, i) => (
            <button
              key={i}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:text-white transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Icon size={14} />
            </button>
          ))}
          <motion.button
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white"
            style={{ background: `${member.color}28`, border: `1px solid ${member.color}45` }}
          >
            Connect <ArrowUpRight size={12} />
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
          className="text-gray-600 text-sm mt-4"
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
