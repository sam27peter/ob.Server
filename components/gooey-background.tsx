"use client"

import { useEffect, useRef } from "react"

interface Blob {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  hue: number
  phase: number
}

export function GooeyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let blobs: Blob[] = []
    let animId = 0
    let time = 0

    const BLOB_COUNT = 6

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Initialize blobs spread across the screen
      blobs = Array.from({ length: BLOB_COUNT }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 80 + Math.random() * 120,
        hue: i % 2 === 0 ? 320 : 282, // pink vs violet
        phase: Math.random() * Math.PI * 2,
      }))
    }

    const draw = () => {
      time += 0.008
      ctx.clearRect(0, 0, width, height)

      // Update blob positions with slow drift
      for (const blob of blobs) {
        blob.x += blob.vx + Math.sin(time + blob.phase) * 0.15
        blob.y += blob.vy + Math.cos(time * 0.8 + blob.phase) * 0.12

        // Soft bounce at edges
        if (blob.x < -blob.radius) blob.x = width + blob.radius
        if (blob.x > width + blob.radius) blob.x = -blob.radius
        if (blob.y < -blob.radius) blob.y = height + blob.radius
        if (blob.y > height + blob.radius) blob.y = -blob.radius
      }

      // Draw blobs with radial gradients
      for (const blob of blobs) {
        const pulseFactor = 1 + Math.sin(time * 1.5 + blob.phase) * 0.15
        const r = blob.radius * pulseFactor

        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          r
        )

        // Very subtle, low opacity colors
        const alpha = 0.12
        gradient.addColorStop(0, `hsla(${blob.hue}, 100%, 50%, ${alpha})`)
        gradient.addColorStop(0.5, `hsla(${blob.hue}, 100%, 40%, ${alpha * 0.6})`)
        gradient.addColorStop(1, `hsla(${blob.hue}, 100%, 30%, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, r, 0, Math.PI * 2)
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <>
      {/* SVG filter for gooey effect */}
      <svg className="absolute w-0 h-0" aria-hidden>
        <defs>
          <filter id="gooey-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -15,
          filter: "url(#gooey-filter)",
          opacity: 0.7,
        }}
      />
    </>
  )
}
