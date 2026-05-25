export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  status: "ACTIVE" | "ARCHIVED" | "CLASSIFIED" | "EXPERIMENTAL"
  repo: string
  repoDescription: string
  url: string
}

export const PROJECTS: Project[] = [
  {
    id: "neural-grid",
    title: "NEURAL_GRID.exe",
    description:
      "A real-time neural network visualizer that streams classified inference patterns across a distributed cyber-mesh. Built for low-latency edge deployments.",
    tech: ["TypeScript", "WebGL", "Rust", "WebSockets"],
    status: "ACTIVE",
    repo: "sam/neural-grid",
    repoDescription: "Distributed neural visualization grid // edge inference monitor",
    url: "https://github.com/",
  },
  {
    id: "ghost-protocol",
    title: "GHOST_PROTOCOL",
    description:
      "Encrypted P2P communication layer with zero-knowledge handshakes. Routes messages through a constellation of relay nodes. No logs. No trace.",
    tech: ["Go", "libp2p", "Noise", "Cryptography"],
    status: "CLASSIFIED",
    repo: "sam/ghost-protocol",
    repoDescription: "Zero-knowledge encrypted mesh communication protocol",
    url: "https://github.com/",
  },
  {
    id: "prowler-os",
    title: "PROWLER.os",
    description:
      "A minimalist tiling window manager with cyberpunk aesthetics. Custom shaders, glitch transitions, and low-level frame scheduling.",
    tech: ["C++", "Vulkan", "Wayland", "GLSL"],
    status: "EXPERIMENTAL",
    repo: "sam/prowler-os",
    repoDescription: "Cyberpunk tiling WM // custom shader pipeline",
    url: "https://github.com/",
  },
  {
    id: "obscura-vault",
    title: "OBSCURA.vault",
    description:
      "Self-hosted secret manager with hardware-backed key derivation, threshold sharing, and audit-immutable logs anchored to a private chain.",
    tech: ["Rust", "WASM", "PostgreSQL", "Argon2"],
    status: "ACTIVE",
    repo: "sam/obscura-vault",
    repoDescription: "Hardware-anchored secret vault with threshold recovery",
    url: "https://github.com/",
  },
  {
    id: "signal-jammer",
    title: "SIGNAL_JAMMER",
    description:
      "Adversarial perturbation toolkit for evaluating ML model robustness. Generates targeted noise patterns against vision and audio classifiers.",
    tech: ["Python", "PyTorch", "CUDA", "ONNX"],
    status: "ARCHIVED",
    repo: "sam/signal-jammer",
    repoDescription: "Adversarial ML robustness evaluation framework",
    url: "https://github.com/",
  },
  {
    id: "cipher-routes",
    title: "CIPHER_ROUTES",
    description:
      "Edge-deployed routing layer that obfuscates traffic patterns through dynamic path randomization. Sub-50ms overhead at scale.",
    tech: ["Go", "eBPF", "Kubernetes", "WireGuard"],
    status: "ACTIVE",
    repo: "sam/cipher-routes",
    repoDescription: "Traffic-obfuscating edge routing for hostile networks",
    url: "https://github.com/",
  },
]

export const SKILLS = [
  { category: "OFFENSIVE", items: ["Reverse Engineering", "Exploit Dev", "Network Recon", "Adversarial ML"] },
  { category: "FRONTEND", items: ["TypeScript", "React", "Next.js", "WebGL", "Framer Motion"] },
  { category: "BACKEND", items: ["Rust", "Go", "Python", "PostgreSQL", "Distributed Systems"] },
  { category: "INFRA", items: ["Kubernetes", "eBPF", "Vercel", "Edge Compute", "Cryptography"] },
]

export const EXPERIENCE = [
  {
    role: "PRINCIPAL ENGINEER",
    org: "OBSCURA LABS // CLASSIFIED",
    period: "2023 — PRESENT",
    summary:
      "Lead architect on encrypted edge infrastructure. Designed multi-region zero-trust mesh serving 4M+ daily handshakes.",
  },
  {
    role: "STAFF SECURITY RESEARCHER",
    org: "PHANTOM RECON CORP",
    period: "2020 — 2023",
    summary:
      "Discovered 12 CVEs in widely-deployed network stacks. Built internal red-team tooling for adversarial simulation.",
  },
  {
    role: "FOUNDING ENGINEER",
    org: "NULLBYTE COLLECTIVE",
    period: "2017 — 2020",
    summary:
      "Shipped real-time threat intelligence platform from zero. Sub-second detection across 50K endpoints.",
  },
]

export const DOSSIER = {
  alias: "SAM",
  designation: "Principal Engineer / Security Researcher",
  origin: "[REDACTED]",
  bio: `Operator. Builder. Signal in the noise.

Specializing in low-level systems, cryptographic infrastructure, and the dark art of making interfaces feel alive. I architect software that runs at the edge of what is permitted — and ship it on time.

If it routes packets, decrypts files, or pushes pixels at 60fps, I have probably broken it and rebuilt it.`,
}
