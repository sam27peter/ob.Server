"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const BOOT_LINES = [
  "INITIALIZING ob.Server...",
  "ESTABLISHING SECURE CONNECTION...",
  "LOADING DOSSIER...",
  "DECRYPTING ARCHIVES...",
  "ARSENAL READY...",
  "MISSION LOGS INDEXED...",
  "CONTACT CHANNEL ONLINE...",
  "ACCESS GRANTED",
]

type Stage = "welcome" | "logo" | "terminal" | "done"

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<Stage>("welcome")
  const [bootIndex, setBootIndex] = useState(0)
  const [typed, setTyped] = useState("")

  useEffect(() => {
    const t1 = setTimeout(() => setStage("logo"), 1800)
    const t2 = setTimeout(() => setStage("terminal"), 3800)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  // typewriter for boot lines
  useEffect(() => {
    if (stage !== "terminal") return
    if (bootIndex >= BOOT_LINES.length) {
      const t = setTimeout(() => {
        setStage("done")
        setTimeout(onComplete, 600)
      }, 700)
      return () => clearTimeout(t)
    }

    const target = BOOT_LINES[bootIndex]
    let i = 0
    setTyped("")
    const interval = setInterval(
      () => {
        i++
        setTyped(target.slice(0, i))
        if (i >= target.length) {
          clearInterval(interval)
          setTimeout(() => setBootIndex((b) => b + 1), 180)
        }
      },
      bootIndex === BOOT_LINES.length - 1 ? 60 : 25,
    )
    return () => clearInterval(interval)
  }, [stage, bootIndex, onComplete])

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* CRT vignette */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.85) 100%)",
            }}
          />

          {stage === "welcome" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 1, 0.6, 1], y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-center"
            >
              <p className="font-mono text-xs tracking-[0.4em] text-[#00ff55]/60 mb-6">
                {">> SECURE LINK ESTABLISHED"}
              </p>
              <h2
                className="font-sans text-4xl md:text-6xl tracking-[0.2em] text-[#39FF14] font-black"
                style={{ 
                  fontFamily: "var(--font-pixel)",
                  textShadow: "0 0 4px rgba(57,255,20,.08)",
                }}
              >
                Welcome to SAM&apos;s
              </h2>
            </motion.div>
          )}

          {stage === "logo" && (
            <motion.div
              initial={{ scale: 1.08, y: 40, opacity: 0 }}
              animate={{ scale: 1, y:0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center crt-on"
            >
              <h1
                data-text="ob.Server"
                className="font-sans text-5xl sm:text-6xl md:text-[6rem] lg:text-[8rem] leading-none tracking-[-0.05em] text-[#39FF14] font-black scale-x-110"
                style={{ 
                  fontFamily: "var(--font-pixel)",
                  textShadow: "0 0 6px rgba(57,255,20,.10)",
                  WebkitTextStroke: "2px rgba(57,255,20,.20)",
                 }}
              >
                ob.Server
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 font-mono text-xs md:text-sm tracking-[0.5em] text-[#39FF14]"
              >
                PERSONAL OPERATING TERMINAL
              </motion.p>
            </motion.div>
          )}

          {stage === "terminal" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-3xl mx-4 holo-border box-neon-violet p-6 md:p-8 font-mono text-sm md:text-base"
            >
              <div className="flex items-center gap-2 mb-4 text-xs text-[#00ff55]/70">
                <span className="w-2 h-2 bg-[#00ff66]" />
                <span className="w-2 h-2 bg-[#00ff55]" />
                <span className="w-2 h-2 bg-[#33ff88]" />
                <span className="ml-3 tracking-widest">ob.Server@boot:~$</span>
              </div>

              <div className="space-y-1 text-[#00ff55]">
                {BOOT_LINES.slice(0, bootIndex).map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-[#00ff66]">{">"}</span>
                    <span
                      className={
                        line === "ACCESS GRANTED"
                          ? "text-[#00ff66] neon-pink-glow font-bold tracking-wider"
                          : "text-[#e8d5ff]"
                      }
                    >
                      {line}
                      {line !== "ACCESS GRANTED" && (
                        <span className="ml-2 text-[#33ff88]">[OK]</span>
                      )}
                    </span>
                  </div>
                ))}
                {bootIndex < BOOT_LINES.length && (
                  <div className="flex gap-3">
                    <span className="text-[#00ff66]">{">"}</span>
                    <span className="text-[#e8d5ff] cursor-blink">{typed}</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
