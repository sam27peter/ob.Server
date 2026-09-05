"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  size: number;

  visible: boolean;
  opacity: number;

  hiddenUntil: number;
};

type Bond = {
  a: number;
  b: number;

  thickness: number;

  brightness: number;
  createdAt: number;
};

export default function ConstellationCanvas() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;

    if (!svg) return;

    let animationFrame = 0;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const nodes: Node[] = [];

    let bonds: Bond[] = [];

    // ==================================================
    // NETWORK SETTINGS
    // ==================================================

    // Increase this to make the network less crowded
    const SPACING = 165;

    // Maximum distance for a possible bond
    const MAX_CONNECTION_DISTANCE = 220;

    // Maximum number of connections per node
    const MAX_CONNECTIONS = 2;

    // Interaction area around cursor
    const BREAK_RADIUS = 75;

    // How long a broken node disappears
    const HIDE_DURATION = 650;

    // How often the structure checks for new bonds
    const BOND_UPDATE_INTERVAL = 180;

    // ==================================================
    // CREATE FIXED NETWORK
    // ==================================================

    const createNetwork = () => {
      nodes.length = 0;

      bonds = [];

      width = window.innerWidth;
      height = window.innerHeight;

      const columns = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          // Offset alternate rows so it does not look
          // like a perfect square grid.
          const offsetX = row % 2 === 0 ? 0 : SPACING * 0.45;

          // Small permanent irregularity.
          // This is NOT animation.
          const randomX = (Math.random() - 0.5) * 40;

          const randomY = (Math.random() - 0.5) * 40;

          const x = col * SPACING + offsetX + randomX;

          const y = row * SPACING + randomY;

          nodes.push({
            x,
            y,

            size: 2.5 + Math.random() * 2.5,

            visible: true,

            opacity: 1,

            hiddenUntil: 0,
          });
        }
      }

      createInitialBonds();
    };

    // ==================================================
    // CREATE INITIAL BONDS
    // ==================================================

    const createInitialBonds = () => {
      const created = new Set<string>();

      for (let i = 0; i < nodes.length; i++) {
        const nearby: {
          index: number;
          distance: number;
        }[] = [];

        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;

          const dx = nodes[i].x - nodes[j].x;

          const dy = nodes[i].y - nodes[j].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MAX_CONNECTION_DISTANCE) {
            nearby.push({
              index: j,
              distance,
            });
          }
        }

        nearby.sort((a, b) => a.distance - b.distance);

        let connections = 0;

        for (const candidate of nearby) {
          if (connections >= MAX_CONNECTIONS) {
            break;
          }

          const j = candidate.index;

          const key = i < j ? `${i}-${j}` : `${j}-${i}`;

          if (created.has(key)) {
            continue;
          }

          created.add(key);

          bonds.push({
            a: i,
            b: j,

            // Different iron rod thickness
            thickness: 1.8 + Math.random() * 2.2,

            brightness: 0.75,

            createdAt: performance.now(),
          });

          connections++;
        }
      }
    };

    createNetwork();

    // ==================================================
    // MOUSE
    // ==================================================

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;

      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("mouseleave", handleMouseLeave);

    // ==================================================
    // RESIZE
    // ==================================================

    const handleResize = () => {
      createNetwork();
    };

    window.addEventListener("resize", handleResize);

    // ==================================================
    // NODE VISIBILITY ONLY
    //
    // NO FLOATING
    // NO PHYSICS
    // NO POSITION UPDATES
    // ==================================================

    const updateNodes = (time: number) => {
      for (const node of nodes) {
        if (!node.visible && time > node.hiddenUntil) {
          node.visible = true;
        }

        const targetOpacity = node.visible ? 1 : 0;

        node.opacity += (targetOpacity - node.opacity) * 0.1;
      }
    };

    // ==================================================
    // BREAK AND REBUILD BONDS
    // ==================================================

    const rebuildBonds = (time: number) => {
      const newBonds: Bond[] = [];

      const created = new Set<string>();

      const connectionCount = new Array(nodes.length).fill(0);

      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        if (nodeA.opacity < 0.15) {
          continue;
        }

        const nearby: {
          index: number;
          distance: number;
        }[] = [];

        for (let j = 0; j < nodes.length; j++) {
          if (i === j) {
            continue;
          }

          const nodeB = nodes[j];

          if (nodeB.opacity < 0.15) {
            continue;
          }

          const dx = nodeA.x - nodeB.x;

          const dy = nodeA.y - nodeB.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MAX_CONNECTION_DISTANCE) {
            nearby.push({
              index: j,
              distance,
            });
          }
        }

        nearby.sort((a, b) => a.distance - b.distance);

        for (const candidate of nearby) {
          if (connectionCount[i] >= MAX_CONNECTIONS) {
            break;
          }

          const j = candidate.index;

          if (connectionCount[j] >= MAX_CONNECTIONS) {
            continue;
          }

          const key = i < j ? `${i}-${j}` : `${j}-${i}`;

          if (created.has(key)) {
            continue;
          }

          const nodeB = nodes[j];

          // Middle point of the rod
          const midX = (nodeA.x + nodeB.x) / 2;

          const midY = (nodeA.y + nodeB.y) / 2;

          const dx = midX - mouse.x;

          const dy = midY - mouse.y;

          const mouseDistance = Math.sqrt(dx * dx + dy * dy);

          // =============================================
          // BREAK THE BOND
          // =============================================

          if (mouseDistance < BREAK_RADIUS) {
            // Randomly hide one end of
            // the broken connection.
            const nodeToHide = Math.random() > 0.5 ? nodeA : nodeB;

            nodeToHide.visible = false;

            nodeToHide.hiddenUntil = time + HIDE_DURATION;

            // Do not recreate this bond.
            continue;
          }

          created.add(key);

          // =============================================
          // CHECK IF THIS BOND ALREADY EXISTED
          // =============================================

          const existingBond = bonds.find(
            (bond) =>
              (bond.a === i && bond.b === j) || (bond.a === j && bond.b === i),
          );

          newBonds.push({
            a: i,
            b: j,

            // Preserve thickness if
            // the rod already existed.
            thickness: existingBond
              ? existingBond.thickness
              : 1.5 + Math.random() * 2.8,

            // New bonds appear brighter.
            brightness: existingBond
              ? Math.max(0.7, existingBond.brightness - 0.015)
              : 1.6,

            createdAt: existingBond ? existingBond.createdAt : time,
          });

          connectionCount[i]++;
          connectionCount[j]++;
        }
      }

      bonds = newBonds;
    };

    // ==================================================
    // RENDER
    // ==================================================

    const render = (time: number) => {
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }

      const defs = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "defs",
      );

      defs.innerHTML = `
        <filter
          id="bondGlow"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur
            stdDeviation="5"
          />
        </filter>

        <filter
          id="nodeGlow"
          x="-200%"
          y="-200%"
          width="500%"
          height="500%"
        >
          <feGaussianBlur
            stdDeviation="3"
            result="blur"
          />

          <feMerge>
            <feMergeNode
              in="blur"
            />

            <feMergeNode
              in="SourceGraphic"
            />
          </feMerge>
        </filter>
      `;

      svg.appendChild(defs);

      // ===============================================
      // DRAW BONDS
      // ===============================================

      for (const bond of bonds) {
        const a = nodes[bond.a];

        const b = nodes[bond.b];

        const opacity = Math.min(a.opacity, b.opacity);

        if (opacity < 0.05) {
          continue;
        }

        const age = time - bond.createdAt;

        // New connection flashes
        // and slowly settles.
        const flash = age < 600 ? 2 - age / 600 : 1;

        const strength = bond.brightness * flash;

        // -------------------------------
        // OUTER GLOW
        // -------------------------------

        const glow = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line",
        );

        glow.setAttribute("x1", String(a.x));

        glow.setAttribute("y1", String(a.y));

        glow.setAttribute("x2", String(b.x));

        glow.setAttribute("y2", String(b.y));

        glow.setAttribute("stroke", "#ff7a18");

        glow.setAttribute(
          "stroke-width",
          String(bond.thickness * 4 * strength),
        );

        glow.setAttribute("stroke-linecap", "round");

        glow.setAttribute("opacity", String(0.13 * strength * opacity));

        glow.setAttribute("filter", "url(#bondGlow)");

        svg.appendChild(glow);

        // -------------------------------
        // MAIN IRON ROD
        // -------------------------------

        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line",
        );

        line.setAttribute("x1", String(a.x));

        line.setAttribute("y1", String(a.y));

        line.setAttribute("x2", String(b.x));

        line.setAttribute("y2", String(b.y));

        // White flash when a new bond forms.
        line.setAttribute("stroke", age < 600 ? "#ffffff" : "#ff8a2a");

        line.setAttribute(
          "stroke-width",
          String(bond.thickness * Math.min(strength, 1.5)),
        );

        line.setAttribute("stroke-linecap", "round");

        line.setAttribute("opacity", String(0.9 * opacity));

        svg.appendChild(line);
      }

      // ===============================================
      // DRAW NODES
      // ===============================================

      for (const node of nodes) {
        if (node.opacity < 0.03) {
          continue;
        }

        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle",
        );

        circle.setAttribute("cx", String(node.x));

        circle.setAttribute("cy", String(node.y));

        circle.setAttribute("r", String(node.size));

        circle.setAttribute("fill", "#ff8a2a");

        circle.setAttribute("opacity", String(node.opacity));

        circle.setAttribute("filter", "url(#nodeGlow)");

        svg.appendChild(circle);
      }
    };

    // ==================================================
    // ANIMATION LOOP
    // ==================================================

    let lastBondUpdate = 0;

    const animate = (time: number) => {
      // Only handles fading.
      // Nodes NEVER move.
      updateNodes(time);

      if (time - lastBondUpdate > BOND_UPDATE_INTERVAL) {
        rebuildBonds(time);

        lastBondUpdate = time;
      }

      render(time);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("mouseleave", handleMouseLeave);

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        h-screen
        w-screen
      "
      xmlns="http://www.w3.org/2000/svg"
    />
  );
}
