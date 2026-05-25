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
              <p className="font-mono text-xs tracking-[0.4em] text-[#c44dff]/60 mb-6">
                {">> SECURE LINK ESTABLISHED"}
              </p>
              <h2
                className="font-sans text-4xl md:text-6xl tracking-wider neon-violet-glow flicker"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                Welcome to SAM&apos;s
              </h2>
            </motion.div>
          )}

          {stage === "logo" && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center crt-on"
            >
              <h1
                data-text="ob.Server"
                className="chroma neon-pulse font-sans text-7xl md:text-[10rem] lg:text-[14rem] leading-none tracking-tighter text-[#f5e8ff]"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                ob.Server
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 font-mono text-xs md:text-sm tracking-[0.5em] text-[#ff00cc] flicker"
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
              <div className="flex items-center gap-2 mb-4 text-xs text-[#c44dff]/70">
                <span className="w-2 h-2 bg-[#ff00cc]" />
                <span className="w-2 h-2 bg-[#c44dff]" />
                <span className="w-2 h-2 bg-[#8a2eff]" />
                <span className="ml-3 tracking-widest">ob.Server@boot:~$</span>
              </div>

              <div className="space-y-1 text-[#c44dff]">
                {BOOT_LINES.slice(0, bootIndex).map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-[#ff00cc]">{">"}</span>
                    <span
                      className={
                        line === "ACCESS GRANTED"
                          ? "text-[#ff00cc] neon-pink-glow font-bold tracking-wider"
                          : "text-[#e8d5ff]"
                      }
                    >
                      {line}
                      {line !== "ACCESS GRANTED" && (
                        <span className="ml-2 text-[#8a2eff]">[OK]</span>
                      )}
                    </span>
                  </div>
                ))}
                {bootIndex < BOOT_LINES.length && (
                  <div className="flex gap-3">
                    <span className="text-[#ff00cc]">{">"}</span>
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
