"use client";

import { motion } from "framer-motion";

const techStack = [
  "PYTHON",
  "NEXT.JS",
  "TENSORFLOW",
  "OPENCV",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "FRAMER MOTION",
  "SCIKIT-LEARN",
  "NODE.JS",
  "GIT",
];

export default function TechMarquee() {
  return (
    <div className="w-full py-6 bg-black/40 backdrop-blur-sm border-y border-orange-500/20 overflow-hidden font-mono whitespace-nowrap">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="inline-flex gap-8 items-center"
      >
        {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-xs md:text-sm tracking-widest text-gray-400 font-semibold hover:text-orange-500 transition-colors">
              {tech}
            </span>
            <span className="text-orange-500 text-xs">//</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
