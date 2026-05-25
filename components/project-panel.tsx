"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { X, ExternalLink, Github } from "lucide-react"
import type { Project } from "@/lib/data"

const STATUS_COLORS: Record<Project["status"], string> = {
  ACTIVE: "text-[#c44dff] border-[#c44dff]",
  ARCHIVED: "text-[#a78bbf] border-[#a78bbf]",
  CLASSIFIED: "text-[#ff00cc] border-[#ff00cc]",
  EXPERIMENTAL: "text-[#8a2eff] border-[#8a2eff]",
}

export function ProjectPanel({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const [phase, setPhase] = useState<"decrypt" | "reveal">("decrypt")
  const [decryptStep, setDecryptStep] = useState(0)

  const decryptLines = ["ACCESSING ARCHIVE...", "DECRYPTING PROJECT FILE...", "VERIFYING SIGNATURE...", "FILE OPENED"]

  useEffect(() => {
    if (!project) return
    setPhase("decrypt")
    setDecryptStep(0)

    let i = 0
    const interval = setInterval(() => {
      i++
      setDecryptStep(i)
      if (i >= decryptLines.length) {
        clearInterval(interval)
        setTimeout(() => setPhase("reveal"), 300)
      }
    }, 350)

    return () => clearInterval(interval)
  }, [project])

  // close on escape
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, filter: "blur(8px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 0.95, opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl holo-border box-neon-violet bg-[#0d0d0d]/95 max-h-[90vh] overflow-y-auto"
          >
            {/* terminal header */}
            <div className="flex items-center justify-between border-b border-[#c44dff]/30 px-5 py-3 bg-[#050505]/80">
              <div className="flex items-center gap-2 font-mono text-xs text-[#c44dff]/80">
                <span className="w-2 h-2 bg-[#ff00cc]" />
                <span className="w-2 h-2 bg-[#c44dff]" />
                <span className="w-2 h-2 bg-[#8a2eff]" />
                <span className="ml-3 tracking-widest hidden sm:inline">
                  ob.Server@archive:~/{project.id}.dat
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-[#c44dff] hover:text-[#ff00cc] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* content */}
            <div className="p-6 md:p-8 font-mono">
              {phase === "decrypt" ? (
                <div className="space-y-2 text-sm min-h-[300px]">
                  {decryptLines.slice(0, decryptStep).map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-3 text-[#e8d5ff]"
                    >
                      <span className="text-[#ff00cc]">{">"}</span>
                      <span>
                        {line}
                        {i < decryptStep - 1 && (
                          <span className="ml-2 text-[#8a2eff]">[OK]</span>
                        )}
                      </span>
                    </motion.div>
                  ))}
                  {decryptStep < decryptLines.length && (
                    <div className="text-[#ff00cc] cursor-blink ml-5" />
                  )}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] text-[#c44dff]/60 mb-2">
                        {">> ARCHIVE FILE"}
                      </p>
                      <h3
                        data-text={project.title}
                        className="glitch font-sans text-3xl md:text-4xl tracking-wider"
                        style={{ fontFamily: "var(--font-pixel)" }}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <span
                      className={`px-3 py-1 border text-[10px] tracking-[0.2em] font-bold ${STATUS_COLORS[project.status]}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="border-l-2 border-[#c44dff]/50 pl-4">
                    <p className="text-[10px] tracking-[0.3em] text-[#c44dff]/60 mb-2">
                      {"// DESCRIPTION"}
                    </p>
                    <p className="text-sm md:text-base text-[#e8d5ff] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[0.3em] text-[#c44dff]/60 mb-3">
                      {"// TECH STACK"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 border border-[#8a2eff]/50 text-xs text-[#c44dff] bg-[#8a2eff]/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border border-[#c44dff]/30 bg-[#050505] p-4 space-y-2">
                    <div className="flex items-center gap-2 text-[#ff00cc]">
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-bold tracking-wider">
                        {project.repo}
                      </span>
                    </div>
                    <p className="text-xs text-[#a78bbf]">
                      {project.repoDescription}
                    </p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-xs tracking-widest text-[#c44dff] hover:text-[#ff00cc] transition-colors group"
                    >
                      <span>{">> ACCESS REPOSITORY"}</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
