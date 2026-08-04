"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 bg-transparent text-white font-mono"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <span className="text-orange-500 text-xs tracking-widest">
            // TIMELINE LOGS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-1">EXPERIENCE</h2>
        </div>

        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 relative hover:border-orange-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-xs text-orange-500">{exp.company}</p>
                </div>
                <span className="text-xs text-gray-500 mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((desc, i) => (
                  <li
                    key={i}
                    className="text-xs text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-orange-500">&gt;</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-800">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
