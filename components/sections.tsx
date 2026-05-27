"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionShell } from "./section-shell";
import { DOSSIER, SKILLS, SKILL_HINTS, EXPERIENCE, PROJECTS } from "@/lib/data";
import type { Project } from "@/lib/data";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Github,
  Linkedin,
  Terminal as TermIcon,
} from "lucide-react";

const STATUS_DOT: Record<Project["status"], string> = {
  ACTIVE: "bg-[#00ff55]",
  ARCHIVED: "bg-[#808080]",
  CLASSIFIED: "bg-[#FF3B30]",
  EXPERIMENTAL: "bg-[#00BFFF]",
  DEVELOPMENT: "bg-[#FFD700]",
};

const STATUS_COLOR: Record<Project["status"], string> = {
  ACTIVE: "#39FF14",
  DEVELOPMENT: "#FFD700",
  CLASSIFIED: "#FF3B30",
  EXPERIMENTAL: "#00BFFF",
  ARCHIVED: "#808080",
};

export function DossierSection() {
  return (
    <SectionShell id="dossier" label="// 01 — DOSSIER.dat" title="DOSSIER">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 holo-border p-6 font-mono text-xs space-y-3">
          <div>
            <span className="text-[#00ff55]/60">ALIAS:</span>{" "}
            <span className="text-[#00ff66] neon-pink-glow">
              {DOSSIER.alias}
            </span>
          </div>
          <div>
            <span className="text-[#00ff55]/60">DESIGNATION:</span>{" "}
            <span className="text-[#e8d5ff]">{DOSSIER.designation}</span>
          </div>
          <div>
            <span className="text-[#00ff55]/60">ORIGIN:</span>{" "}
            <span className="text-[#e8d5ff] flicker">{DOSSIER.origin}</span>
          </div>
          <div>
            <span className="text-[#00ff55]/60">CLEARANCE:</span>{" "}
            <span className="text-[#00ff66]">LEVEL-9</span>
          </div>
          <div>
            <span className="text-[#00ff55]/60">STATUS:</span>{" "}
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00ff55] animate-pulse" />
              <span className="text-[#00ff55]">ONLINE</span>
            </span>
          </div>
        </div>

        <div className="md:col-span-2 holo-border p-6 font-mono text-sm">
          <p className="text-[10px] tracking-[0.3em] text-[#00ff55]/60 mb-4">
            {">> SUBJECT BIOGRAPHY"}
          </p>
          <pre className="whitespace-pre-wrap font-mono text-[#e8d5ff] leading-relaxed text-sm">
            {DOSSIER.bio}
          </pre>
        </div>
      </div>
    </SectionShell>
  );
}

export function ArchivesSection({
  onSelect,
}: {
  onSelect: (p: Project) => void;
}) {
  const [index, setIndex] = useState(0);
  const currentProject = PROJECTS[index];

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (key === "D" || e.key === "ArrowRight") {
        nextProject();
      } else if (key === "A" || e.key === "ArrowLeft") {
        prevProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <SectionShell id="archives" label="// 02 — ARCHIVES.idx" title="ARCHIVES">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE — OMNITRIX SELECTOR WHEEL */}
        <div className="flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            {/* left button */}
            <button
              onClick={prevProject}
              className="
                absolute
                left-[-80px]
                z-20
                border
                border-[#39FF14]/30
                px-4
                py-4
                text-[#39FF14]
                hover:bg-[#39FF14]/10
                transition-colors
              "
              aria-label="Previous project"
            >
              <ChevronLeft />
            </button>

            {/* MECHANICAL OMNITRIX WHEEL */}
            <motion.div
              key={index}
              animate={{ rotate: [0, -8, 0] }}
              transition={{ duration: 0.3 }}
              onClick={() => onSelect(currentProject)}
              onDoubleClick={() => {
                if (currentProject.url) {
                  window.open(currentProject.url, "_blank");
                }
              }}
              className="
                relative
                w-[360px]
                h-[360px]
                rounded-full
                bg-[#0a0a0a]
                border-4
                border-[#39FF14]/30
                flex
                items-center
                justify-center
                cursor-pointer
                shadow-[0_0_40px_rgba(57,255,20,0.3),inset_0_0_20px_rgba(0,0,0,0.8)]
                hover:shadow-[0_0_50px_rgba(57,255,20,0.4),inset_0_0_20px_rgba(0,0,0,0.8)]
                transition-shadow
              "
            >
              {/* SVG MECHANICAL RING STRUCTURE */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 360 360"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="neon-glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Outer metallic ring */}
                <circle
                  cx="180"
                  cy="180"
                  r="170"
                  fill="none"
                  stroke="rgba(57, 255, 20, 0.2)"
                  strokeWidth="2"
                />
                <circle
                  cx="180"
                  cy="180"
                  r="160"
                  fill="none"
                  stroke="rgba(57, 255, 20, 0.1)"
                  strokeWidth="1"
                />

                {/* Segmented project slots around ring */}
                {PROJECTS.map((_, i) => {
                  const angle = (i / PROJECTS.length) * 360;
                  const rad = (angle * Math.PI) / 180;
                  const x = 180 + 155 * Math.cos(rad);
                  const y = 180 + 155 * Math.sin(rad);
                  const isActive = i === index;

                  return (
                    <g key={`slot-${i}`}>
                      {/* Slot indicator box */}
                      <rect
                        x={x - 10}
                        y={y - 10}
                        width="20"
                        height="20"
                        fill={isActive ? "#39FF14" : "rgba(57, 255, 20, 0.15)"}
                        stroke={isActive ? "#39FF14" : "rgba(57, 255, 20, 0.3)"}
                        strokeWidth="1"
                        filter={isActive ? "url(#neon-glow)" : ""}
                        opacity={isActive ? 1 : 0.6}
                      />
                      {/* Slot connecting line */}
                      <line
                        x1="180"
                        y1="180"
                        x2={x}
                        y2={y}
                        stroke="rgba(57, 255, 20, 0.1)"
                        strokeWidth="1"
                      />
                    </g>
                  );
                })}

                {/* Ring segments */}
                {PROJECTS.map((_, i) => {
                  const angle = (i / PROJECTS.length) * 360;
                  const nextAngle = ((i + 1) / PROJECTS.length) * 360;
                  const isActive = i === index;

                  const arc = `M 180,180 L ${180 + 150 * Math.cos((angle * Math.PI) / 180)},${
                    180 + 150 * Math.sin((angle * Math.PI) / 180)
                  } A 150,150 0 0,1 ${180 + 150 * Math.cos((nextAngle * Math.PI) / 180)},${
                    180 + 150 * Math.sin((nextAngle * Math.PI) / 180)
                  } Z`;

                  return (
                    <path
                      key={`segment-${i}`}
                      d={arc}
                      fill={
                        isActive
                          ? "rgba(57, 255, 20, 0.08)"
                          : "rgba(57, 255, 20, 0.02)"
                      }
                      stroke={
                        isActive
                          ? "rgba(57, 255, 20, 0.4)"
                          : "rgba(57, 255, 20, 0.15)"
                      }
                      strokeWidth="1"
                    />
                  );
                })}
              </svg>

              {/* CENTER OMNITRIX CORE */}
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  relative
                  w-[160px]
                  h-[160px]
                  rounded-full
                  border-4
                  border-[#39FF14]/40
                  bg-gradient-to-br
                  from-[#0a0a0a]
                  to-black
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-4
                  z-10
                  shadow-[inset_0_0_15px_rgba(57,255,20,0.2),0_0_20px_rgba(57,255,20,0.2)]
                "
              >
                {/* Omnitrix symbol */}
                <div className="absolute top-3 text-[#39FF14]/60 text-sm font-bold">
                  ◎
                </div>

                {/* File index */}
                <div className="font-mono text-[9px] tracking-[0.3em] text-[#39FF14]/70 mb-1">
                  FILE_{String(index + 1).padStart(2, "0")}
                </div>

                {/* Project title (max 2 lines) */}
                <h3
                  className="text-[#39FF14] text-base leading-tight font-bold mb-2 line-clamp-2"
                  style={{
                    fontFamily: "var(--font-pixel)",
                  }}
                >
                  {currentProject.title}
                </h3>

                {/* Status badge */}
                <div className="flex items-center gap-1">
                  <span
                    className={`w-1.5 h-1.5 rounded-full animate-pulse ${STATUS_DOT[currentProject.status]}`}
                  />
                  <span className="text-[#39FF14]/70 text-[9px] font-mono tracking-wider">
                    {currentProject.status}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* right button */}
            <button
              onClick={nextProject}
              className="
                absolute
                right-[-80px]
                z-20
                border
                border-[#39FF14]/30
                px-4
                py-4
                text-[#39FF14]
                hover:bg-[#39FF14]/10
                transition-colors
              "
              aria-label="Next project"
            >
              <ChevronRight />
            </button>
          </div>

          {/* COUNTER DISPLAY */}
          <div className="mt-5 font-mono text-xs text-[#39FF14]/70 tracking-[0.3em]">
            {String(index + 1).padStart(2, "0")} /
            {String(PROJECTS.length).padStart(2, "0")}
          </div>

          {/* OPERATION GUIDE PANEL */}
          <div className="mt-8 holo-border p-4 w-full max-w-sm">
            <p className="font-mono text-xs text-[#39FF14]/70 tracking-[0.2em] mb-4">
              {">> HOW TO OPERATE"}
            </p>
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#39FF14]">
                <span className="font-bold">A</span>
                <span className="text-[#39FF14]/40">/</span>
                <span className="font-bold">←</span>
              </div>
              <div className="text-[#39FF14]/60 text-[10px] leading-tight">
                ROTATE LEFT
              </div>
              <div className="flex items-center gap-2 text-[#39FF14]">
                <span className="font-bold">D</span>
                <span className="text-[#39FF14]/40">/</span>
                <span className="font-bold">→</span>
              </div>
              <div className="text-[#39FF14]/60 text-[10px] leading-tight">
                ROTATE RIGHT
              </div>
              <div className="col-span-2 pt-3 border-t border-[#39FF14]/20">
                <p className="text-[#39FF14]/60 text-[10px] leading-tight">
                  DBLCLICK WHEEL OR CLICK BUTTON → OPEN REPOSITORY
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — CYBERPUNK PROJECT INFO PANEL */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="
              holo-border
              p-8
              bg-[#050505]/70
            "
          >
            <p className="font-mono text-xs text-[#39FF14]/70 tracking-[0.25em] mb-4">
              {">> PROJECT DATA"}
            </p>

            <h2
              className="text-4xl text-[#39FF14] mb-3"
              style={{
                fontFamily: "var(--font-pixel)",
              }}
            >
              {currentProject.title}
            </h2>

            {/* PROJECT METADATA */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-xs font-mono text-[#39FF14]/70">
                <span className="text-[#39FF14]/50">ID:</span>{" "}
                {currentProject.id}
              </span>
              <div
                className="flex items-center gap-2 px-3 py-1 border"
                style={{
                  borderColor: STATUS_COLOR[currentProject.status],
                  backgroundColor: `${STATUS_COLOR[currentProject.status]}10`,
                  boxShadow: `0 0 12px ${STATUS_COLOR[currentProject.status]}20`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: STATUS_COLOR[currentProject.status],
                    boxShadow: `0 0 10px ${STATUS_COLOR[currentProject.status]}`,
                  }}
                />

                <span
                  className="text-xs font-mono"
                  style={{
                    color: STATUS_COLOR[currentProject.status],
                  }}
                >
                  {currentProject.status}
                </span>
              </div>
            </div>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mb-6">
              {currentProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    border
                    border-[#39FF14]/30
                    px-3
                    py-1
                    text-xs
                    text-[#39FF14]
                    font-mono
                    bg-[#39FF14]/5
                    hover:bg-[#39FF14]/10
                    transition-colors
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* DESCRIPTION */}
            <p className="font-mono text-[#d6ffd0]/80 leading-loose mb-8 text-sm">
              {currentProject.description}
            </p>

            {/* REPO BUTTON */}
            <button
              onClick={() => {
                if (currentProject.url) {
                  window.open(currentProject.url, "_blank");
                }
              }}
              disabled={!currentProject.url}
              className={`
                w-full
                border
                py-4
                font-mono
                tracking-[0.2em]
                text-sm
                transition-all
                ${
                  currentProject.url
                    ? "border-[#39FF14]/30 text-[#39FF14] hover:bg-[#39FF14]/10 cursor-pointer"
                    : "border-[#39FF14]/10 text-[#39FF14]/40 cursor-not-allowed"
                }
              `}
            >
              {currentProject.url
                ? "OPEN REPOSITORY"
                : "NO REPOSITORY AVAILABLE"}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}

// ─── Arsenal helpers ────────────────────────────────────────────────
function flatSkills(): string[] {
  return SKILLS.flatMap((s) => s.items);
}

function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

interface CloudSkill {
  text: string;
  hint: string;
  fontSize: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  dx: number;
  dy: number;
  opacity: number;
  isAccent: boolean;
}

function buildCloudSkills(): CloudSkill[] {
  const all = flatSkills();
  const fontSizes = [10, 11, 13, 15, 17, 20];
  return all.map((text, i) => {
    const r = (offset: number) => seededRand(i * 13 + offset);
    return {
      text,
      hint: SKILL_HINTS[text] ?? "Signal module loaded.",
      fontSize: fontSizes[i % fontSizes.length],
      // fully organic random spread within the canvas
      x: 3 + r(0) * 85,
      y: 3 + r(1) * 85,
      delay: r(2) * 5,
      duration: 9 + r(3) * 13,
      dx: (r(4) - 0.5) * 44,
      dy: (r(5) - 0.5) * 32,
      opacity: 0.35 + r(6) * 0.55,
      isAccent: i % 5 === 0,
    };
  });
}

const CLOUD_SKILLS = buildCloudSkills();

// ─── ASCII Bird frames (realistic side-profile bird) ─────────────────
// HEAD: round with eye ●
// BEAK: points right, opens/closes
// BODY: oval chest + wings
// TAIL: fanned feathers left
// LEGS: two thin stems with claws
const BIRD_CLOSED = `
     __
   _/  \_      .-.
  ( o  o )   ( o )
   >  ^  <   /_\
  /|_|_|\\
`.trimStart();

const BIRD_OPEN = `
     __
   _/  \_      .-.
  ( o  o )   ( o )
   >  v  <   /_\\
  /|_|_|\\
`.trimStart();
// ─── Individual floating skill (correct Framer Motion pattern) ────────
function FloatingSkill({
  skill,
  i,
  speedBoost,
}: {
  skill: CloudSkill;
  i: number;
  speedBoost: number;
}) {
  return (
    <motion.span
      key={`cloud-${i}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: skill.opacity,
        x: [
          0,
          skill.dx * 0.35 * speedBoost,
          skill.dx * 0.7 * speedBoost,
          skill.dx * 0.25 * speedBoost,
          0,
        ],
        y: [
          0,
          skill.dy * 0.25 * speedBoost,
          skill.dy * 0.5 * speedBoost,
          skill.dy * 0.2 * speedBoost,
          0,
        ],
      }}
      transition={{
        opacity: { duration: 1.4, delay: skill.delay * 0.22, ease: "easeOut" },
        x: {
          duration: Math.max(5, skill.duration / speedBoost),
          repeat: Infinity,
          ease: "easeInOut",
          delay: skill.delay,
          repeatType: "mirror",
        },
        y: {
          duration: Math.max(6, (skill.duration * 1.18) / speedBoost),
          repeat: Infinity,
          ease: "easeInOut",
          delay: skill.delay * 0.75,
          repeatType: "mirror",
        },
      }}
      className="absolute font-mono select-none pointer-events-none"
      style={{
        left: `${skill.x}%`,
        top: `${skill.y}%`,
        fontSize: `${skill.fontSize}px`,
        color: skill.isAccent ? "#39FF14" : "#e8d5ff",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        willChange: "transform, opacity",
      }}
    >
      <span className="block leading-none">{skill.text}</span>
      <span className="mt-1 block text-[8px] uppercase tracking-[0.22em] text-[#d6ffd0]/70">
        {skill.hint}
      </span>
    </motion.span>
  );
}

// ─── Left panel: terminal bird + skill echo ───────────────────────────
function ArsenalBird({ onBoost }: { onBoost: () => void }) {
  const skills = flatSkills();
  const [frame, setFrame] = useState(0);
  const [skillIdx, setSkillIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  // Beak open/close every 500 ms while "speaking"
  useEffect(() => {
    const beakTimer = setInterval(() => setFrame((f) => 1 - f), 500);
    return () => clearInterval(beakTimer);
  }, []);

  // Rotate skill every 2.4 s
  useEffect(() => {
    const skillTimer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setSkillIdx((idx) => (idx + 1) % skills.length);
        setVisible(true);
      }, 280);
    }, 2400);
    return () => clearInterval(skillTimer);
  }, [skills.length]);

  return (
    <div className="flex flex-col items-start gap-5">
      {/* Shell prompt */}
      <div className="font-mono text-[10px] tracking-[0.35em] text-[#39FF14]/40">
        {"ob@server:~/arsenal$ ./process --bird"}
      </div>

      {/* Bird ASCII */}
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        onClick={onBoost}
        className="font-mono leading-snug select-none rounded-md border border-[#39FF14]/10 bg-[#050505]/70 px-2 py-1 text-left transition-colors hover:border-[#39FF14]/30 hover:bg-[#39FF14]/5"
        style={{
          fontSize: "clamp(11px, 1.6vw, 15px)",
          color: "#39FF14",
          textShadow: "0 0 6px rgba(57,255,20,0.22)",
          lineHeight: 1.45,
        }}
      >
        <pre
          style={{
            margin: 0,
            color: "#39FF14",
            textShadow: "0 0 6px rgba(57,255,20,0.18)",
            lineHeight: 1.35,
          }}
        >
          {frame === 0 ? BIRD_CLOSED : BIRD_OPEN}
        </pre>
      </motion.button>

      {/* Status pill */}
      <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.28em]">
        <span className="w-1.5 h-1.5 rounded-none bg-[#39FF14] animate-pulse" />
        <span className="text-[#39FF14]/60">ARSENAL MODULE ACTIVE</span>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-[#39FF14]/25 to-transparent" />

      {/* Terminal skill echo */}
      <div className="font-mono text-xs space-y-1.5 w-full">
        {/* Ghost history — last 3 */}
        {[-3, -2, -1].map((offset) => {
          const idx =
            (((skillIdx + offset) % skills.length) + skills.length) %
            skills.length;
          return (
            <div
              key={`ghost-${offset}`}
              className="text-[#39FF14]/18 tracking-[0.15em]"
            >
              {"›› "}
              {skills[idx].toUpperCase()}
            </div>
          );
        })}

        {/* Active skill */}
        <AnimatePresence mode="wait">
          {visible && (
            <motion.div
              key={`skill-${skillIdx}`}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="flex items-center gap-2 tracking-[0.2em]"
              style={{ color: "#39FF14" }}
            >
              <span className="text-[#39FF14]/40">{">"}</span>
              <span>{skills[skillIdx].toUpperCase()}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.85, repeat: Infinity }}
                className="text-[#39FF14]"
              >
                █
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Right panel: freely floating skill cloud ─────────────────────────
function ArsenalCloud({ speedBoost }: { speedBoost: number }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ minHeight: "460px" }}
      aria-label="Skill cloud"
    >
      {CLOUD_SKILLS.map((skill, i) => (
        <FloatingSkill key={i} skill={skill} i={i} speedBoost={speedBoost} />
      ))}
    </div>
  );
}

// ─── Main ArsenalSection ──────────────────────────────────────────────
export function ArsenalSection() {
  const [speedBoost, setSpeedBoost] = useState(1);

  return (
    <SectionShell id="arsenal" label="// 03 — ARSENAL.cfg" title="ARSENAL">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid lg:grid-cols-[1fr_2fr] gap-0 items-start"
      >
        {/* LEFT — bird terminal — no box, just a right border line */}
        <div className="py-2 pr-10 border-r border-[#39FF14]/10">
          <ArsenalBird onBoost={() => setSpeedBoost((v) => v + 0.18)} />
        </div>

        {/* RIGHT — floating skill cloud — no box */}
        <div className="py-2 pl-10">
          <p className="font-mono text-[10px] tracking-[0.35em] text-[#39FF14]/40 mb-4">
            {"ob@server:~/arsenal$ ls --cloud"}
          </p>
          <ArsenalCloud speedBoost={speedBoost} />
          <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-[#39FF14]/12 to-transparent" />
          <p className="mt-2 font-mono text-[9px] tracking-[0.28em] text-[#39FF14]/25">
            {`${flatSkills().length} MODULES LOADED — ALL SYSTEMS OPERATIONAL`}
          </p>
        </div>
      </motion.div>
    </SectionShell>
  );
}

export function MissionsSection() {
  return (
    <SectionShell
      id="missions"
      label="// 04 — MISSION_LOGS.bin"
      title="MISSION LOGS"
    >
      <div className="space-y-6 border-t border-[#39FF14]/10 pt-8">
        {EXPERIENCE.map((entry, index) => {
          const year = entry.period.match(/\d{4}/)?.[0] ?? entry.period;

          return (
            <motion.div
              key={`${entry.org}-${entry.role}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="space-y-4 border-b border-[#39FF14]/10 pb-6 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-center gap-3 text-[#39FF14]/80">
                  <span className="text-[11px] uppercase tracking-[0.35em] font-medium">
                    {year}
                  </span>
                  <span className="hidden h-px w-16 bg-[#39FF14]/20 sm:inline-block" />
                </div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#39FF14]/60">
                  {entry.org}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white leading-tight">
                  {entry.role}
                </h3>
                <p className="text-sm leading-7 text-[#f8f8f8]">
                  {entry.summary}
                </p>
              </div>

              {index < EXPERIENCE.length - 1 ? (
                <div className="h-px bg-[#39FF14]/10" />
              ) : null}
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      label="// 05 — CONTACT_CHANNEL.lnk"
      title="CONTACT"
    >
      <div className="holo-border box-neon-pink p-6 md:p-10 max-w-3xl">
        <p className="font-mono text-xs text-[#00ff55]/70 mb-6">
          {">> SECURE CHANNEL ESTABLISHED. AWAITING TRANSMISSION."}
        </p>
        <p
          className="font-sans text-2xl md:text-4xl tracking-wider text-[#f5e8ff] mb-8 neon-pink-glow leading-tight"
          style={{ fontFamily: "var(--font-pixel)" }}
        >
          Send signal.
          <br />
          Build something{" "}
          <span data-text="dangerous." className="glitch text-[#00ff66]">
            dangerous.
          </span>
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            {
              icon: Mail,
              label: "ENCRYPTED MAIL",
              href: "mailto:samthadhu@gmail.com",
            },
            {
              icon: Github,
              label: "GITHUB",
              href: "https://github.com/sam27peter",
            },
            {
              icon: Linkedin,
              label: "LINKEDIN",
              href: "https://www.linkedin.com/in/sam-peter",
            },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 holo-border px-5 py-4 hover:box-neon-pink transition-all"
            >
              <Icon className="w-5 h-5 shrink-0 text-[#00ff66] group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs tracking-widest text-[#e8d5ff] group-hover:text-[#00ff66]">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center font-mono text-[10px] tracking-[0.4em] text-[#00ff55]/40">
        <p>{"// END OF TRANSMISSION"}</p>
        <p className="mt-2 flicker">
          ob.Server © {new Date().getFullYear()} — ALL RIGHTS RESERVED — NO
          TRACE LEFT BEHIND
        </p>
      </div>
    </SectionShell>
  );
}
