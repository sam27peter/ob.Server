"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BootSequence } from "@/components/boot-sequence"
import { Terminal, type CommandTarget } from "@/components/terminal"
import { ProjectPanel } from "@/components/project-panel"
import {
  DossierSection,
  ArchivesSection,
  ArsenalSection,
  MissionsSection,
  ContactSection,
} from "@/components/sections"
import type { Project } from "@/lib/data"

export default function Home() {
  const [booted, setBooted] = useState(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const handleCommand = (target: CommandTarget) => {
    const el = document.getElementById(target)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <main className="relative z-60 min-h-screen text-foreground overflow-x-hidden">

      {!booted && <BootSequence onComplete={() => setBooted(true)} />}

      {booted && (
        <>
          {/* fixed header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/70 backdrop-blur-md border-b border-[#00ff55]/20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00ff66] animate-pulse" />
                <span
                  data-text="ob.Server"
                  className="font-sans text-xl tracking-wider text-[#39FF14]"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  ob.Server
                </span>
              </div>
              <div className="hidden md:flex items-center gap-4 font-mono text-[10px] tracking-widest text-[#00ff55]/60">
                <span>SYS: ONLINE</span>
                <span>·</span>
                <span className="text-[#00ff66] flicker">ENCRYPTED</span>
                <span>·</span>
                <span>UTC {new Date().toISOString().slice(11, 19)}</span>
              </div>
            </div>
          </header>

          {/* HERO */}
          <section className="relative min-h-screen flex flex-col items-center justify-start px-4 pt-28 pb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-8"
            >
              <p className="font-mono text-[10px] md:text-xs tracking-[0.5em] text-[#00ff55]/70 mb-4">
                {">> ACCESS GRANTED // SAM'S CLASSIFIED OS"}
              </p>
              <h1
                className="
                  font-sans
                  text-6xl
                  sm:text-7xl
                  md:text-[7rem]
                  lg:text-[9rem]
                  leading-none
                  tracking-[-0.08em]
                text-[#39FF14]
                font-black
                scale-x-125
                scale-y-110
                "
                style={{
                  fontFamily: "var(--font-pixel)",
                  textShadow: "0 0 6px rgba(57,255,20,.12)",
                  WebkitTextStroke: "3px rgba(57,255,20,.35)",
                }}
              >
                ob.Server
              </h1>
              <p className="mt-4 font-mono text-xs md:text-sm tracking-[0.4em] text-[#39FF14]">
                PERSONAL OPERATING TERMINAL — v3.14.1
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full px-2 md:px-4"
            >
              <Terminal onCommand={handleCommand} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 font-mono text-[10px] tracking-[0.4em] text-[#00ff55]/50 flex items-center gap-2"
            >
              <span className="w-8 h-px bg-[#00ff55]/40" />
              SCROLL TO DECRYPT
              <span className="w-8 h-px bg-[#00ff55]/40" />
            </motion.div>
          </section>

          <DossierSection />
          <ArchivesSection onSelect={setActiveProject} />
          <ArsenalSection />
          <MissionsSection />
          <ContactSection />

          <ProjectPanel
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        </>
      )}
    </main>
  )
}
