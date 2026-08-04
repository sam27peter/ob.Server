"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Code2, Flame } from "lucide-react";

export default function WhoAmI() {
  return (
    <section
      id="who-am-i"
      className="relative z-10 py-28 px-6 md:px-12 bg-[#080808]/90 backdrop-blur-sm text-white font-mono border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-2">
          <span className="text-orange-500 text-xs tracking-widest uppercase font-semibold">
            [ IDENTITY DIAGNOSTICS ]
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            WHO_<span className="text-orange-500">AM_I</span>
          </h2>
          <div className="w-12 h-0.5 bg-orange-500/60 mt-2" />
        </div>

        {/* Central HUD Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-[#0d0d0d] border border-orange-500/20 rounded-2xl p-6 md:p-10 shadow-[0_0_30px_rgba(255,85,0,0.06)] overflow-hidden"
        >
          {/* Subtle Ambient Corner Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Terminal Window Header */}
          <div className="flex justify-between items-center pb-4 mb-6 border-b border-gray-800/80 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <Terminal size={15} className="text-orange-500" />
              <span className="text-white font-medium">
                identity_profile.sys
              </span>
            </div>
            <span className="text-orange-500 font-bold">
              [ VERIFIED OPERATOR ]
            </span>
          </div>

          {/* Core Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Left Narrative */}
            <div className="md:col-span-2 space-y-4">
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                I am a passionate{" "}
                <span className="text-orange-500 font-semibold">
                  AI Developer & Full-Stack Engineer
                </span>{" "}
                focused on creating intelligent systems that solve real-world
                problems.
              </p>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                My work spans computer vision, machine learning telemetry, and
                responsive frontend architectures. I thrive in building systems
                that combine raw performance with striking visual polish.
              </p>

              {/* Quick Specs */}
              <div className="pt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-black/60 border border-gray-800">
                  <span className="text-gray-500 block mb-1">
                    // PRIMARY FOCUS
                  </span>
                  <span className="text-white font-semibold">
                    AI Models & Modern Web
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-black/60 border border-gray-800">
                  <span className="text-gray-500 block mb-1">
                    // DESIGN PHILOSOPHY
                  </span>
                  <span className="text-white font-semibold">
                    Minimal & High Contrast
                  </span>
                </div>
              </div>
            </div>

            {/* Right Diagnostic Stats */}
            <div className="flex flex-col justify-between gap-3 bg-black/50 p-5 rounded-xl border border-gray-800/90">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Flame className="text-orange-500" size={18} />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase">
                      Architecture
                    </p>
                    <p className="text-xs font-bold text-white">
                      Modular & Scalable
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Code2 className="text-orange-500" size={18} />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase">
                      Core Languages
                    </p>
                    <p className="text-xs font-bold text-white">
                      Python, TypeScript
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-orange-500" size={18} />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase">
                      Status
                    </p>
                    <p className="text-xs font-bold text-orange-500">
                      Available for Hire
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-800 text-[11px] text-gray-500 text-center">
                SYSTEM ID: <span className="text-gray-300">OB-SERVER-V2</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
