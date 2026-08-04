"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Terminal } from "lucide-react";
import { Project } from "@/data/projects";

// Clean inline GitHub icon
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({
  project,
  onClose,
}: CaseStudyModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0d0d0d] border border-orange-500/40 rounded-xl p-6 shadow-[0_0_30px_rgba(255,85,0,0.15)] font-mono text-white"
          >
            {/* Header */}
            <div className="flex justify-between items-center pb-4 border-b border-gray-800">
              <div className="flex items-center gap-2 text-xs text-orange-500">
                <Terminal size={16} />
                <span>LOG://CASE_STUDY/{project.id.toUpperCase()}</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="mt-6 space-y-6">
              <div>
                <span className="text-xs text-orange-500 font-semibold">
                  [ {project.number} ]
                </span>
                <h2 className="text-2xl font-bold mt-1">
                  {project.title}{" "}
                  <span className="text-orange-500">
                    {project.highlightTitle}
                  </span>
                </h2>
              </div>

              <div>
                <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                  // OVERVIEW
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed bg-black/50 p-4 rounded-lg border border-gray-800">
                  {project.caseStudy.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                  // TECHNICAL HIGHLIGHTS
                </h3>
                <ul className="space-y-2">
                  {project.caseStudy.techDetails.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="text-orange-500">&gt;</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                  // STACK
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-8 pt-4 border-t border-gray-800 flex flex-wrap gap-4">
              <a
                href={project.caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 text-black font-semibold text-xs hover:bg-orange-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" /> VIEW SOURCE
              </a>
              {project.caseStudy.liveUrl && (
                <a
                  href={project.caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-orange-500/50 text-orange-500 font-semibold text-xs hover:bg-orange-500/10 transition-colors"
                >
                  <ExternalLink size={16} /> DEMO
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
