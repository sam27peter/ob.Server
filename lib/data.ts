export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  status: "ACTIVE" | "ARCHIVED" | "CLASSIFIED" | "EXPERIMENTAL" | "DEVELOPMENT"
  repo: string
  repoDescription: string
  url: string
}

export const PROJECTS: Project[] = [
  {
    id: "AI-Fish-Tank",
    title: "AI-Fish-Tank.exe",
    description:
      "Interactive fish simulation using webcam hand tracking and AI behavior. Hand gestures influence the ecosystem, while a custom neural net governs fish behavior. A playful experiment in emergent complexity and embodied interaction.",
    tech: ["Python", "OpenCV", "MediaPipe", "Pygame", "NumPy"],
    status: "ACTIVE",
    repo: "sam-peter/Useless_Project",
    repoDescription: "Interactive fish simulation with AI behavior",
    url: "https://github.com/sam27peter/Useless_project",
  },
  {
    id: "Sentiment-Analyzer",
    title: "Sentiment-Analyzer.vault",
    description:
      "Machine learning-based sentiment analysis system that predicts emotional tone from user text using NLP techniques. Analyzes and classifies text into sentiments such as positive, negative, or neutral through an interactive workflow.",
    tech: ["Python", "Machine Learning", "NLP", "Scikit-learn", "Pandas", "NumPy"],
    status: "ACTIVE",
    repo: "sam27peter/sentiment-analyzer",
    repoDescription: "ML-powered sentiment analysis using NLP",
    url: "https://github.com/sam27peter/sentiment-analyzer",
  },
  {
    id: "8Bit-Microprocessor",
    title: "8_Bit-Microprocessor.os",
    description:
      "Custom-built 8-bit microprocessor project exploring low-level computer architecture, digital logic, and instruction execution. Designed to simulate core CPU operations, including arithmetic, control flow, and memory interaction as a hands-on experiment in processor design.",
    tech: ["Digital Logic", "Computer Architecture", "Microprocessor Design", "Assembly", "Electronics"],
    status: "EXPERIMENTAL",
    repo: "sam27peter/8Bit-Microprocessor",
    repoDescription: "Custom 8-bit microprocessor architecture experiment",
    url: "",
  },
  {
    id: "Taranga-Sparkles",
    title: "AquaVolt.exe",
    description:
      "Creative interactive visual project focused on animated sparkles and dynamic effects, exploring motion, visuals, and user interaction through a lightweight experimental interface.",
    tech: ["Python", "Pygame", "Animation", "Visual Effects"],
    status: "ACTIVE",
    repo: "sam27peter/Taranga_Sparkles",
    repoDescription: "Interactive sparkle animation experiment",
    url: "https://github.com/sam27peter/Taranga_Sparkles",
  },
  {
    id: "Smart-Delivery-Box",
    title: "Smart-Delivery-Box : IoT Edition",
    description:
      "Smart automated delivery box system designed to securely receive and manage package deliveries through intelligent automation and access control. Built as a practical IoT-inspired project exploring secure delivery handling, sensors, and smart user interaction.",
    tech: ["IoT", "Automation", "Embedded Systems", "Sensors", "Microcontrollers", "Electronics"],
    status: "CLASSIFIED",
    repo: "sam27peter/Smart-Delivery-Box",
    repoDescription: "Automated smart package delivery and access system",
    url: "",
  },
  {
    id: "MindMate",
    title: "MindMate.exe",
    description:
      "AI-powered mental wellness assistant designed to provide supportive conversations, mood-based interaction, and intelligent responses through a conversational interface. Built as an experiment in empathetic AI, user engagement, and accessible wellness support.",
    tech: ["Python", "AI", "Natural Language Processing", "Machine Learning", "Conversational Interface"],
    status: "ACTIVE",
    repo: "sam27peter/MindMate",
    repoDescription: "AI-powered conversational wellness assistant",
    url: "https://github.com/sam27peter/MindMate",
  },
  {
    id: "Persistent-Scene-Change-Detection",
    title: "SceneGuard.vault",
    description:
      "Computer vision pipeline developed for Vehant Hackathon 2026 to detect persistent scene changes across video streams and surveillance environments. Designed to identify meaningful long-term environmental changes while filtering temporary disturbances using image processing and intelligent detection techniques.",
    tech: ["Python", "Computer Vision", "OpenCV", "Image Processing", "AI", "Video Analytics"],
    status: "DEVELOPMENT",
    repo: "sam27peter/Persistent-Scene-Detection",
    repoDescription: "Persistent scene change detection for Vehant Hackathon 2026",
    url: "",
  },
  {
    id: "Mock-Interviewer",
    title: "Mock-Interviewer.exe",
    description:
      "AI-powered mock interview system designed to simulate technical and HR interview experiences through interactive question-answer sessions and intelligent feedback. Built to help users practice communication, problem-solving, and interview readiness in a realistic environment.",
    tech: ["Python", "AI", "Natural Language Processing", "Machine Learning", "Speech Processing"],
    status: "DEVELOPMENT",
    repo: "sam27peter/Mock-Interviewer",
    repoDescription: "AI-based mock interview practice assistant",
    url: "https://github.com/sam27peter/Mock_Interviewer",
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
    role: "OPERATIONS LEAD",
    org: "iEDC - NSSCE",
    period: "Present from Feb 2026",
    summary:
      "Coordinated district-level execution of YIP 7.0 and YIP 8.0, contributing to large-scale innovation initiatives, and actively volunteered at the Kerala Innovation Festival 2025. "

  },
  {
    role: "SECRETARY",
    org: "IEEE PES SB CHAPTER",
    period: "Present from Feb 2026",
    summary:
      "Contributed to the successful organization of the Nexotech IEEE Conference 2026 and the Luminous Logic workshop, assisting in coordination, execution, and technical event management.",
  },
  {
    role: "TREASURER",
    org: "AI INTELEX",
    period: "March 2024 - Feb2026",
    summary:
      "Designed and developed a web page as part of the AI Intellex Treasurer, integrating a ‘Human or AI’ concept to enhance interactive user experience",
  },
]

export const DOSSIER = {
  alias: "SAM PETER",
  designation: "Electronics and Communication Engineer // AI ML Experimenter",
  origin: "NSS College of Engineering, Kerala, India",
  bio: `Operator. Builder. Signal in the noise.

Specializing in low-level systems, cryptographic infrastructure, and the dark art of making interfaces feel alive. I architect software that runs at the edge of what is permitted — and ship it on time.

If it routes packets, decrypts files, or pushes pixels at 60fps, I have probably broken it and rebuilt it.`,
}
