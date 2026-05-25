"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  hue: number
}

export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let nodes: Node[] = []
    let animId = 0

    const NODE_COUNT_BASE = 70
    const CONNECT_DIST = 130

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(
        NODE_COUNT_BASE,
        Math.floor((width * height) / 22000),
      )
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() < 0.5 ? 2 : 3,
        hue: Math.random() < 0.5 ? 320 : 282, // pink vs violet
      }))
    }

    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }
    const onLeave = () => {
      mouseRef.current.x = -9999
      mouseRef.current.y = -9999
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const repelRadius = 110

      for (const n of nodes) {
        // mouse repel
        const dx = n.x - mx
        const dy = n.y - my
        const d2 = dx * dx + dy * dy
        if (d2 < repelRadius * repelRadius) {
          const d = Math.sqrt(d2) || 1
          const force = (repelRadius - d) / repelRadius
          n.vx += (dx / d) * force * 0.4
          n.vy += (dy / d) * force * 0.4
        }

        n.x += n.vx
        n.y += n.vy

        // damping
        n.vx *= 0.96
        n.vy *= 0.96

        // baseline drift
        if (Math.abs(n.vx) < 0.05) n.vx += (Math.random() - 0.5) * 0.05
        if (Math.abs(n.vy) < 0.05) n.vy += (Math.random() - 0.5) * 0.05

        // wrap
        if (n.x < 0) n.x = width
        if (n.x > width) n.x = 0
        if (n.y < 0) n.y = height
        if (n.y > height) n.y = 0
      }

      // connections
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < CONNECT_DIST * CONNECT_DIST) {
            const d = Math.sqrt(d2)
            const alpha = (1 - d / CONNECT_DIST) * 0.35
            const hue = (a.hue + b.hue) / 2
            ctx.strokeStyle = `hsla(${hue}, 100%, 65%, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // nodes (pixel squares with glow)
      for (const n of nodes) {
        const distToMouse = Math.hypot(n.x - mx, n.y - my)
        const boost = distToMouse < 200 ? 1 - distToMouse / 200 : 0

        ctx.shadowBlur = 12 + boost * 14
        ctx.shadowColor = `hsla(${n.hue}, 100%, 60%, 0.9)`
        ctx.fillStyle = `hsla(${n.hue}, 100%, ${65 + boost * 20}%, ${0.85 + boost * 0.15})`
        const s = n.size + boost * 1.2
        ctx.fillRect(n.x - s / 2, n.y - s / 2, s, s)
      }
      ctx.shadowBlur = 0

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeave)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  )
}
