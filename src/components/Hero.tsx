"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // As user scrolls down, opacity reduces down to 0.05
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.05]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

  return (
    <motion.section
      style={{ opacity, scale }}
      className="relative min-h-screen w-full bg-transparent text-white flex flex-col justify-between p-6 md:p-12 font-mono overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,85,0,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Top Terminal Bar */}
      <div className="flex justify-between items-center text-xs md:text-sm text-gray-400 z-10">
        <div className="flex items-center space-x-2">
          <span className="text-orange-500 font-bold">ob.server</span>
          <span>@domain:~$ _</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-gray-300">
            SYSTEM STATUS:{" "}
            <span className="text-orange-500 font-bold">READY</span>
          </span>
        </div>
      </div>

      {/* Center Visuals & Watermark Text */}
      <div className="relative flex-1 flex flex-col items-center justify-center my-8 z-10">
        {/* Large Watermark Title */}
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter text-center select-none text-white/90">
          ob.<span className="text-orange-500">server_</span>
        </h1>

        {/* Floating Developer Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative -mt-24 md:-mt-48 w-64 md:w-96 h-80 md:h-[450px]"
        >
          {/* Replace this path with your photo inside /public/images/hero.png */}
          <div className="w-full h-full relative rounded-2xl overflow-hidden border border-orange-500/30 bg-black/40 backdrop-blur-sm flex items-center justify-center text-gray-500">
            <span className="text-xs text-orange-500/80">
              [ Insert your image in /public/images/hero.png ]
            </span>
          </div>
        </motion.div>

        {/* CTA Access Terminal Button */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 rounded-xl border border-orange-500 bg-black/60 text-orange-500 font-bold text-sm tracking-wider hover:bg-orange-500 hover:text-black transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,85,0,0.2)]"
        >
          <span>&gt;</span> ACCESS TERMINAL
        </motion.a>
      </div>

      {/* Bottom Tagline & Subtext */}
      <div className="flex flex-col md:flex-row justify-between items-end text-xs md:text-sm text-gray-400 z-10 gap-4">
        <div>
          <p className="text-orange-500 mb-1">/ DEV / BUILD / INNOVATE</p>
          <p className="text-lg text-white font-medium">
            I build solutions that make an{" "}
            <span className="text-orange-500">impact</span>.
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 text-gray-500">
          <span>&gt;_</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </motion.section>
  );
}
