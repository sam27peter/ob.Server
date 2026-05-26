"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
}

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId = 0
    let width = window.innerWidth
    let height = window.innerHeight

    const mouse = {
      x: -9999,
      y: -9999,
    }

    const PARTICLE_COUNT = 55
    const CONNECT_DISTANCE = 150

    const particles: Particle[] = Array.from(
      { length: PARTICLE_COUNT },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
      })
    )

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width
      canvas.height = height
    }

    const moveMouse = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const leaveMouse = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // move particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x <= 0 || p.x >= width) p.vx *= -1
        if (p.y <= 0 || p.y >= height) p.vy *= -1
      }

      // draw lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]

          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECT_DISTANCE) {
            ctx.beginPath()

            ctx.strokeStyle = `rgba(0,255,100,${
              (1 - dist / CONNECT_DISTANCE) * 0.12
            })`

            ctx.lineWidth = 1

            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // mouse interaction
      for (const p of particles) {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        ctx.beginPath()

        ctx.shadowBlur = 10
        ctx.shadowColor = "#00ff66"
        ctx.fillStyle = "#00ff66"

        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fill()

        ctx.shadowBlur = 0
        
        if (dist < 180) {
          ctx.beginPath()

          ctx.strokeStyle = `rgba(0,255,100,${
            (1 - dist / 180) * 0.45
          })`

          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", moveMouse)
    window.addEventListener("mouseleave", leaveMouse)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", moveMouse)
      window.removeEventListener("mouseleave", leaveMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}