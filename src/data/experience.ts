export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "AI & Software Developer",
    company: "Independent / Projects",
    period: "2024 - PRESENT",
    description: [
      "Engineered machine learning pipelines for time-series predictions and computer vision.",
      "Developed high-fidelity web interfaces using Next.js, Framer Motion, and Tailwind CSS.",
      "Integrated real-time IoT telemetry pipelines for predictive modeling."
    ],
    skills: ["Python", "Next.js", "TensorFlow", "OpenCV", "Tailwind CSS"]
  },
  {
    id: "exp-2",
    role: "Full-Stack Developer",
    company: "Web & Systems",
    period: "2023 - 2024",
    description: [
      "Built responsive, modern web platforms with focus on low latency and custom visuals.",
      "Designed database schema and micro-backend services for real-time applications."
    ],
    skills: ["React", "TypeScript", "Node.js", "Git", "REST APIs"]
  }
];