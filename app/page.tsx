"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ConstellationBackground } from "@/components/constellation-background"
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
    <main className="relative min-h-screen text-foreground overflow-x-hidden">
      <ConstellationBackground />

      {!booted && <BootSequence onComplete={() => setBooted(true)} />}

      {booted && (
        <>
          {/* fixed header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/70 backdrop-blur-md border-b border-[#c44dff]/20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#ff00cc] animate-pulse" />
                <span
                  data-text="ob.Server"
                  className="glitch font-sans text-xl tracking-wider"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  ob.Server
                </span>
              </div>
              <div className="hidden md:flex items-center gap-4 font-mono text-[10px] tracking-widest text-[#c44dff]/60">
                <span>SYS: ONLINE</span>
                <span>·</span>
                <span className="text-[#ff00cc] flicker">ENCRYPTED</span>
                <span>·</span>
                <span>UTC {new Date().toISOString().slice(11, 19)}</span>
              </div>
            </div>
          </header>

          {/* HERO */}
          <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-8"
            >
              <p className="font-mono text-[10px] md:text-xs tracking-[0.5em] text-[#c44dff]/70 mb-4">
                {">> ACCESS GRANTED // SAM'S CLASSIFIED OS"}
              </p>
              <h1
                data-text="ob.Server"
                className="chroma neon-pulse font-sans text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] leading-none tracking-tighter text-[#f5e8ff]"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                ob.Server
              </h1>
              <p className="mt-4 font-mono text-xs md:text-sm tracking-[0.4em] text-[#ff00cc] flicker">
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
              className="mt-12 font-mono text-[10px] tracking-[0.4em] text-[#c44dff]/50 flex items-center gap-2"
            >
              <span className="w-8 h-px bg-[#c44dff]/40" />
              SCROLL TO DECRYPT
              <span className="w-8 h-px bg-[#c44dff]/40" />
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
