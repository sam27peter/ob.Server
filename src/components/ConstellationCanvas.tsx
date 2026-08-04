"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  radius: number;
  color: string;
  glowColor: string;
}

export default function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Dynamic Multi-Tone Terminal Palette
    const colorPalette = [
      { main: "#FF5500", glow: "rgba(255, 85, 0, 0.9)" }, // Neon Orange
      { main: "#FFAA00", glow: "rgba(255, 170, 0, 0.9)" }, // Amber Gold
      { main: "#FF2200", glow: "rgba(255, 34, 0, 0.9)" }, // Crimson Orange
      { main: "#FF8800", glow: "rgba(255, 136, 0, 0.8)" }, // Bright Tangerine
      { main: "#FFFFFF", glow: "rgba(255, 255, 255, 0.9)" }, // High-contrast White
    ];

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 170,
      isActive: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isActive = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const particleCount = Math.min(
      Math.floor((window.innerWidth * window.innerHeight) / 12000),
      90,
    );

    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const vx = (Math.random() - 0.5) * 0.8;
      const vy = (Math.random() - 0.5) * 0.8;
      const colorScheme =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];

      return {
        x: Math.random() * (window.innerWidth - 120) + 60,
        y: Math.random() * (window.innerHeight - 120) + 60,
        vx,
        vy,
        baseVx: vx,
        baseVy: vy,
        radius: Math.random() * 2 + 1.8,
        color: colorScheme.main,
        glowColor: colorScheme.glow,
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render Active Cursor Focus Node
      if (mouse.isActive) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#FF5500";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#FF5500";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      const boundaryMargin = 70; // Forcefield buffer distance from edges

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. MOUSE REPULSION (Accelerates velocity instead of tele-porting position)
        if (mouse.isActive) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 1.2;
            const angle = Math.atan2(dy, dx);

            p.vx += Math.cos(angle) * force;
            p.vy += Math.sin(angle) * force;

            // Interactive beam to mouse
            const alpha = (1 - dist / mouse.radius) * 0.8;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(255, 85, 0, ${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }

        // 2. INVISIBLE BOUNDARY FORCEFIELD (Softly repels nodes away from walls)
        if (p.x < boundaryMargin) {
          p.vx += (boundaryMargin - p.x) * 0.015;
        } else if (p.x > canvas.width - boundaryMargin) {
          p.vx -= (p.x - (canvas.width - boundaryMargin)) * 0.015;
        }

        if (p.y < boundaryMargin) {
          p.vy += (boundaryMargin - p.y) * 0.015;
        } else if (p.y > canvas.height - boundaryMargin) {
          p.vy -= (p.y - (canvas.height - boundaryMargin)) * 0.015;
        }

        // 3. VELOCITY DAMPING (Smooth return to natural ambient cruise speed)
        p.vx += (p.baseVx - p.vx) * 0.03;
        p.vy += (p.baseVy - p.vy) * 0.03;

        // Apply velocities
        p.x += p.vx;
        p.y += p.vy;

        // 4. HARD BOUNDARY REBOUND + FLIP BASE VELOCITY (Prevents edge sliding)
        const hardLimit = 20;
        if (p.x < hardLimit) {
          p.x = hardLimit;
          p.vx = Math.abs(p.vx);
          p.baseVx = Math.abs(p.baseVx); // Flip base trajectory away from wall
        } else if (p.x > canvas.width - hardLimit) {
          p.x = canvas.width - hardLimit;
          p.vx = -Math.abs(p.vx);
          p.baseVx = -Math.abs(p.baseVx); // Flip base trajectory away from wall
        }

        if (p.y < hardLimit) {
          p.y = hardLimit;
          p.vy = Math.abs(p.vy);
          p.baseVy = Math.abs(p.baseVy); // Flip base trajectory away from wall
        } else if (p.y > canvas.height - hardLimit) {
          p.y = canvas.height - hardLimit;
          p.vy = -Math.abs(p.vy);
          p.baseVy = -Math.abs(p.baseVy); // Flip base trajectory away from wall
        }

        // 5. RENDER GLOWING NODE
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.glowColor;
        ctx.fill();
        ctx.shadowBlur = 0;

        // 6. RENDER INTER-NODE MESH CONNECTIONS
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);

            if (p.color === "#FFFFFF" && p2.color === "#FFFFFF") {
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
            } else {
              ctx.strokeStyle = `rgba(255, 85, 0, ${alpha})`;
            }

            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0 opacity-100"
    />
  );
}
