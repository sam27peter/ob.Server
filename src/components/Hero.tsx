"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.05]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

  return (
    <motion.section
      style={{ opacity, scale }}
      className="relative min-h-screen w-full bg-[#f4f4f6] text-[#0a0a0a] flex flex-col justify-between p-6 sm:p-10 font-mono overflow-hidden select-none"
    >
      {/* HUD CORNER BRACKETS */}
      <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-orange-600/80 pointer-events-none z-30" />
      <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-orange-600/80 pointer-events-none z-30" />
      <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-orange-600/80 pointer-events-none z-30" />
      <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-orange-600/80 pointer-events-none z-30" />

      {/* TOP TERMINAL HEADER */}
      <header className="relative z-30 flex justify-between items-center text-xs tracking-wider border-b border-zinc-300/80 pb-3">
        <div className="flex items-center space-x-2 font-bold">
          <span className="inline-block w-2.5 h-2.5 bg-orange-600 rounded-sm animate-pulse" />
          <span className="text-zinc-900 tracking-widest">ob.server</span>
          <span className="text-orange-600 font-extrabold">@domain:~$ _</span>
        </div>
        <div className="flex items-center space-x-2 text-[11px] font-semibold text-zinc-600">
          <span className="bg-orange-500/10 border border-orange-500/30 text-orange-600 px-3 py-1 rounded-full">
            SYSTEM STATUS: <span className="font-bold">READY</span>
          </span>
        </div>
      </header>

      {/* MAIN HERO DISPLAY */}
      <div className="relative flex-1 flex items-center justify-center my-2 z-20">
        {/* Layer 1: Watermark Title */}
        <div className="absolute w-full text-center z-0 pointer-events-none">
          <h1
            style={{ fontFamily: "var(--font-moderncyber)" }}
            className="text-[13vw] sm:text-[14vw] leading-none tracking-tight text-zinc-900 font-normal select-none"
          >
            SAM <span className="text-orange-600">PETER</span>
          </h1>
        </div>

        {/* Layer 2: Clean Cutout Subject (2.png) */}
        <div className="relative z-10 w-[340px] sm:w-[480px] md:w-[580px] h-[500px] sm:h-[620px] md:h-[720px] flex items-end justify-center">
          <Image
            src="/images/hero-subject.png"
            alt="Sam Peter"
            fill
            priority
            sizes="100vw"
            className="object-contain object-bottom pointer-events-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)]"
          />
        </div>

        {/* Layer 3: Access Terminal Button */}
        <div className="absolute bottom-2 sm:bottom-4 z-30">
          <motion.a
            href="#who-am-i"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 rounded-xl border-2 border-orange-600 bg-zinc-950 text-white font-extrabold text-xs sm:text-sm tracking-widest hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 shadow-[0_10px_25px_rgba(255,85,0,0.25)]"
          >
            <span className="text-orange-500 font-black">&gt;</span> ACCESS
            TERMINAL
          </motion.a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative z-30 flex justify-between items-end text-xs text-zinc-700 font-mono pt-3 border-t border-zinc-300/60">
        <div>
          <p className="text-orange-600 font-extrabold text-[11px] tracking-widest">
            / DEV / BUILD / INNOVATE
          </p>
          <p className="text-sm text-zinc-900 font-bold">
            I build solutions that make an impact.
          </p>
        </div>
        <div className="flex flex-col items-end text-zinc-400 text-xs">
          <span className="text-orange-600 font-bold">&gt;_</span>
        </div>
      </footer>
    </motion.section>
  );
}
