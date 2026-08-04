"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Shield, Zap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-transparent text-white font-mono border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <span className="text-orange-500 text-xs tracking-widest">
            // SYSTEM INFO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-1">ABOUT_ME</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 md:p-8 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 pb-4 border-b border-gray-800 text-xs text-gray-400 mb-6">
            <Terminal size={16} className="text-orange-500" />
            <span>cat ~/biography.txt</span>
          </div>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
            I am a software and AI developer focused on building
            high-performance systems and interactive web platforms. My work sits
            at the intersection of machine learning models, real-time data
            visualizers, and intuitive user experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-800">
            <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-gray-800">
              <Cpu className="text-orange-500" size={20} />
              <div>
                <p className="text-xs text-gray-500">FOCUS</p>
                <p className="text-xs font-bold text-gray-200">AI & Web Tech</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-gray-800">
              <Zap className="text-orange-500" size={20} />
              <div>
                <p className="text-xs text-gray-500">WORKFLOW</p>
                <p className="text-xs font-bold text-gray-200">
                  Fast & Modular
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-gray-800">
              <Shield className="text-orange-500" size={20} />
              <div>
                <p className="text-xs text-gray-500">CODE QUALITY</p>
                <p className="text-xs font-bold text-gray-200">
                  Strict & Clean
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
