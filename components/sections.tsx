"use client"

import { motion } from "framer-motion"
import { SectionShell } from "./section-shell"
import { DOSSIER, SKILLS, EXPERIENCE, PROJECTS } from "@/lib/data"
import type { Project } from "@/lib/data"
import { ChevronRight, Mail, Github, Twitter, Terminal as TermIcon } from "lucide-react"

const STATUS_DOT: Record<Project["status"], string> = {
  ACTIVE: "bg-[#00ff55]",
  ARCHIVED: "bg-[#a78bbf]",
  CLASSIFIED: "bg-[#00ff66]",
  EXPERIMENTAL: "bg-[#33ff88]",
}

export function DossierSection() {
  return (
    <SectionShell id="dossier" label="// 01 — DOSSIER.dat" title="DOSSIER">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 holo-border p-6 font-mono text-xs space-y-3">
          <div>
            <span className="text-[#00ff55]/60">ALIAS:</span>{" "}
            <span className="text-[#00ff66] neon-pink-glow">{DOSSIER.alias}</span>
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
  )
}

export function ArchivesSection({
  onSelect,
}: {
  onSelect: (p: Project) => void
}) {
  return (
    <SectionShell id="archives" label="// 02 — ARCHIVES.idx" title="ARCHIVES">
      <p className="font-mono text-xs text-[#00ff55]/70 mb-6 max-w-2xl">
        {"> "}
        {PROJECTS.length} encrypted project files indexed. Click to decrypt and access archive.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {PROJECTS.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => onSelect(p)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group text-left holo-border p-5 hover:box-neon-pink transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#00ff55]/60">
                <span className={`w-2 h-2 ${STATUS_DOT[p.status]} animate-pulse`} />
                {p.status}
              </div>
              <ChevronRight className="w-4 h-4 text-[#00ff55] group-hover:text-[#00ff66] group-hover:translate-x-1 transition-all" />
            </div>
            <h3
              data-text={p.title}
              className="glitch glitch-hover font-sans text-xl md:text-2xl tracking-wider mb-3 group-hover:neon-pink-glow transition-all"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              {p.title}
            </h3>
            <p className="font-mono text-xs text-[#a78bbf] line-clamp-2 mb-4">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono text-[#00ff55]/80 border border-[#00ff55]/20 px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>
    </SectionShell>
  )
}

export function ArsenalSection() {
  return (
    <SectionShell id="arsenal" label="// 03 — ARSENAL.cfg" title="ARSENAL">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="holo-border p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <TermIcon className="w-4 h-4 text-[#00ff66]" />
              <h3
                className="font-sans text-lg tracking-wider text-[#00ff66] neon-pink-glow"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                {s.category}
              </h3>
            </div>
            <ul className="space-y-2 font-mono text-xs">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[#e8d5ff]">
                  <span className="text-[#00ff55]">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}

export function MissionsSection() {
  return (
    <SectionShell id="missions" label="// 04 — MISSION_LOGS.bin" title="MISSION LOGS">
      <div className="space-y-4">
        {EXPERIENCE.map((m, i) => (
          <motion.div
            key={m.org}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="holo-border p-5 md:p-6 grid md:grid-cols-[180px_1fr] gap-4 md:gap-8"
          >
            <div className="font-mono text-xs">
              <p className="text-[#00ff66] tracking-widest mb-1">{m.period}</p>
              <p className="text-[#00ff55]/60 text-[10px]">LOG #{String(i + 1).padStart(3, "0")}</p>
            </div>
            <div>
              <h3
                className="font-sans text-xl md:text-2xl tracking-wider text-[#f5e8ff] neon-violet-glow mb-1"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                {m.role}
              </h3>
              <p className="font-mono text-xs text-[#00ff55] tracking-widest mb-3">
                @ {m.org}
              </p>
              <p className="font-mono text-sm text-[#e8d5ff] leading-relaxed">
                {m.summary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}

export function ContactSection() {
  return (
    <SectionShell id="contact" label="// 05 — CONTACT_CHANNEL.lnk" title="CONTACT">
      <div className="holo-border box-neon-pink p-6 md:p-10 max-w-3xl">
        <p className="font-mono text-xs text-[#00ff55]/70 mb-6">
          {">> SECURE CHANNEL ESTABLISHED. AWAITING TRANSMISSION."}
        </p>
        <p
          className="font-sans text-2xl md:text-4xl tracking-wider text-[#f5e8ff] mb-8 neon-pink-glow leading-tight"
          style={{ fontFamily: "var(--font-pixel)" }}
        >
          Send signal.<br />
          Build something{" "}
          <span data-text="dangerous." className="glitch text-[#00ff66]">
            dangerous.
          </span>
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { icon: Mail, label: "ENCRYPTED MAIL", href: "mailto:sam@observer.dev" },
            { icon: Github, label: "GITHUB", href: "https://github.com" },
            { icon: Twitter, label: "SIGNAL/X", href: "https://x.com" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 holo-border px-4 py-3 hover:box-neon-pink transition-all"
            >
              <Icon className="w-4 h-4 text-[#00ff66] group-hover:scale-110 transition-transform" />
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
          ob.Server © {new Date().getFullYear()} — ALL RIGHTS RESERVED — NO TRACE LEFT BEHIND
        </p>
      </div>
    </SectionShell>
  )
}
