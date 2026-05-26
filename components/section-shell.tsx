"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function SectionShell({
  id,
  label,
  title,
  children,
}: {
  id: string
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32"
    >
      {/* corner brackets */}
      <div className="absolute top-12 left-4 md:left-8 w-6 h-6 border-l-2 border-t-2 border-[#00ff66]/60" />
      <div className="absolute top-12 right-4 md:right-8 w-6 h-6 border-r-2 border-t-2 border-[#00ff66]/60" />

      <div className="mb-10 md:mb-16">
        <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-[#00ff55]/70 mb-4">
          {label}
        </p>
        <h2
          data-text={title}
          className="glitch font-sans text-4xl md:text-6xl lg:text-7xl tracking-wider leading-none neon-violet-glow"
          style={{ fontFamily: "var(--font-pixel)" }}
        >
          {title}
        </h2>
        <div className="mt-6 h-px w-full bg-gradient-to-r from-[#00ff66] via-[#33ff88] to-transparent" />
      </div>

      {children}
    </motion.section>
  )
}
