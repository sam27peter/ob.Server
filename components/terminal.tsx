"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import type { Project } from "@/lib/data"

const COMMANDS = [
  { cmd: "DOSSIER", target: "dossier", label: "About" },
  { cmd: "ARCHIVES", target: "archives", label: "Projects" },
  { cmd: "ARSENAL", target: "arsenal", label: "Skills" },
  { cmd: "MISSION_LOGS", target: "missions", label: "Experience" },
  { cmd: "CONTACT_CHANNEL", target: "contact", label: "Contact" },
] as const

type CommandTarget = (typeof COMMANDS)[number]["target"]

export function Terminal({
  onCommand,
}: {
  onCommand: (target: CommandTarget) => void
}) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<{ type: "in" | "out" | "err"; text: string }[]>([
    { type: "out", text: "ob.Server v3.14.1 — type 'help' for commands or click below." },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [history])

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toUpperCase().replace(/\s+/g, "_")
    setHistory((h) => [...h, { type: "in", text: raw }])

    if (cmd === "HELP" || cmd === "?") {
      setHistory((h) => [
        ...h,
        ...COMMANDS.map((c) => ({
          type: "out" as const,
          text: `  ${c.cmd.padEnd(20)} → ${c.label}`,
        })),
        { type: "out", text: "  CLEAR                → Clear terminal" },
      ])
      return
    }

    if (cmd === "CLEAR" || cmd === "CLS") {
      setHistory([])
      return
    }

    const match = COMMANDS.find((c) => c.cmd === cmd || c.cmd.replace(/_/g, "") === cmd.replace(/_/g, ""))
    if (match) {
      setHistory((h) => [
        ...h,
        { type: "out", text: `>> Routing to ${match.cmd}...` },
      ])
      setTimeout(() => onCommand(match.target), 350)
      return
    }

    setHistory((h) => [
      ...h,
      { type: "err", text: `command not found: ${raw}. type 'help'.` },
    ])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    runCommand(input)
    setInput("")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="holo-border box-neon-violet bg-[#0a0a0a]/90 backdrop-blur-sm w-full max-w-4xl mx-auto"
      onClick={() => inputRef.current?.focus()}
    >
      {/* header */}
      <div className="flex items-center justify-between border-b border-[#c44dff]/30 px-5 py-3 bg-[#050505]/80">
        <div className="flex items-center gap-2 font-mono text-xs text-[#c44dff]/80">
          <span className="w-2 h-2 bg-[#ff00cc] animate-pulse" />
          <span className="w-2 h-2 bg-[#c44dff]" />
          <span className="w-2 h-2 bg-[#8a2eff]" />
          <span className="ml-3 tracking-widest">ob.Server@terminal</span>
        </div>
        <div className="font-mono text-[10px] tracking-widest text-[#ff00cc]/70 flicker">
          ● SECURE
        </div>
      </div>

      {/* command grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[#c44dff]/20">
        {COMMANDS.map((c) => (
          <button
            key={c.cmd}
            onClick={() => runCommand(c.cmd)}
            className="group relative bg-[#0a0a0a] hover:bg-[#1a0d1f] px-3 py-3 font-mono text-[10px] md:text-xs tracking-[0.15em] text-[#c44dff] hover:text-[#ff00cc] transition-colors text-left"
          >
            <div className="flex items-center justify-between">
              <span className="opacity-60 group-hover:opacity-100">›</span>
              <span className="opacity-0 group-hover:opacity-60 text-[8px]">
                {c.label}
              </span>
            </div>
            <div
              className="mt-1 font-bold glitch-hover"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              {c.cmd}
            </div>
          </button>
        ))}
      </div>

      {/* console body */}
      <div
        ref={scrollRef}
        className="px-5 py-4 font-mono text-xs md:text-sm h-64 overflow-y-auto"
      >
        {history.map((line, i) => (
          <div
            key={i}
            className={
              line.type === "in"
                ? "text-[#f5e8ff]"
                : line.type === "err"
                  ? "text-[#ff00cc]"
                  : "text-[#c44dff]"
            }
          >
            {line.type === "in" ? (
              <>
                <span className="text-[#ff00cc]">ob.Server@terminal:~$</span>{" "}
                {line.text}
              </>
            ) : (
              <span className="whitespace-pre">{line.text}</span>
            )}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-1">
          <span className="text-[#ff00cc] shrink-0">ob.Server@terminal:~$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            spellCheck={false}
            autoComplete="off"
            className="flex-1 bg-transparent border-none outline-none text-[#f5e8ff] caret-[#ff00cc] font-mono"
            aria-label="Terminal input"
          />
          <span className="w-2 h-4 bg-[#ff00cc] animate-pulse" aria-hidden />
        </form>
      </div>
    </motion.div>
  )
}

export type { CommandTarget, Project }
