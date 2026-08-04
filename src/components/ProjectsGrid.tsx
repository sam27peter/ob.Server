"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import CaseStudyModal from "./CaseStudyModal";

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-28 px-6 md:px-12 bg-transparent text-white font-mono flex flex-col items-center"
    >
      <div className="max-w-6xl w-full space-y-12">
        {/* Centered Minimal Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-orange-500 text-xs tracking-widest uppercase font-semibold">
            [ PORTFOLIO INDEX ]
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            SELECTED_<span className="text-orange-500">PROJECTS</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-400">
            Click any card below to decrypt full architecture logs & source
            files.
          </p>
        </div>

        {/* 6-Project Centered Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedProject(project)}
              className={`group relative cursor-pointer rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between overflow-hidden border ${project.gridSpan} ${
                project.isDark
                  ? "bg-[#0d0d0d] border-gray-800/80 hover:border-orange-500/70"
                  : "bg-[#141414] border-gray-800 hover:border-orange-500"
              } shadow-lg hover:shadow-[0_0_25px_rgba(255,85,0,0.15)]`}
            >
              {/* Radial Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Card Top Header */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold text-orange-500">
                    // {project.number}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-gray-800 group-hover:border-orange-500/50 flex items-center justify-center transition-colors">
                    <ArrowUpRight
                      className="text-gray-400 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                      size={16}
                    />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2">
                  {project.title}{" "}
                  <span className="text-orange-500">
                    {project.highlightTitle}
                  </span>
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Card Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/60">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 rounded bg-black/60 text-gray-300 border border-gray-800/80 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Minimal 'View All Projects' Action */}
        <div className="flex justify-center pt-8">
          <a
            href="https://github.com/sam27peter?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-3.5 rounded-xl border border-orange-500/40 bg-black/80 text-white hover:text-orange-500 hover:border-orange-500 font-bold text-xs tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(255,85,0,0.08)] hover:shadow-[0_0_25px_rgba(255,85,0,0.25)]"
          >
            <span>[ VIEW ALL REPOSITORIES ]</span>
            <ChevronRight
              size={16}
              className="text-orange-500 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* Case Study Popup Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
