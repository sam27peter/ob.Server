"use client";

import { Mail } from "lucide-react";

// Inline GitHub & LinkedIn icon SVGs
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

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 bg-black/60 backdrop-blur-md text-white font-mono border-t border-orange-500/20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <span className="text-orange-500 text-xs tracking-widest">
            // INITIALIZE CONTACT
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            ESTABLISH_CONNECTION
          </h2>
        </div>

        <p className="text-xs md:text-sm text-gray-400 max-w-lg mx-auto">
          Open for collaborations, technical inquiries, or new opportunities.
          Reach out directly via email or social links.
        </p>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          <a
            href="mailto:contact@domain.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-black font-bold text-xs hover:bg-orange-400 transition-colors shadow-[0_0_20px_rgba(255,85,0,0.3)]"
          >
            <Mail size={16} /> SEND EMAIL
          </a>
          <a
            href="https://github.com/sam27peter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-800 bg-[#0d0d0d] text-gray-300 font-bold text-xs hover:border-orange-500 transition-colors"
          >
            <GithubIcon className="w-4 h-4" /> GITHUB
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-800 bg-[#0d0d0d] text-gray-300 font-bold text-xs hover:border-orange-500 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" /> LINKEDIN
          </a>
        </div>

        <div className="pt-12 text-xs text-gray-600 border-t border-gray-900">
          © {new Date().getFullYear()} ob.server. All rights reserved.
        </div>
      </div>
    </section>
  );
}
