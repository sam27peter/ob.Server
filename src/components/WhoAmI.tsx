"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "20", suffix: "+", label: "PROJECTS COMPLETED" },
  { value: "2ND", suffix: "", label: "RUNNER-UP CPL" },
  { value: "2", suffix: "", label: "INTERNSHIPS" },
  { value: "10", suffix: "+", label: "EVENTS ORGANISED" },
];

export default function WhoAmI() {
  return (
    <section
      id="who-am-i"
      className="relative min-h-screen w-full bg-[#ff5500] text-black font-mono flex items-center pt-20 pb-0 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 h-full">
        {/* --- LEFT COLUMN: EDITORIAL BIO --- */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-12 z-20 pb-16 lg:pb-24 pt-12">
          {/* Giant Greeting Title */}
          <div className="flex flex-col">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-md mb-2"
            >
              HELLO,
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{ fontFamily: "var(--font-moderncyber)" }}
              className="text-6xl md:text-8xl lg:text-9xl text-black tracking-wider leading-[0.85] uppercase"
            >
              I&apos;M
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ fontFamily: "var(--font-moderncyber)" }}
              className="text-7xl md:text-9xl lg:text-[11rem] text-black tracking-wider leading-[0.8] uppercase"
            >
              SAM
            </motion.h2>
          </div>

          {/* Bio Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6 text-black/95 font-medium text-sm md:text-base leading-relaxed max-w-lg bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl"
          >
            <p>
              I&apos;m a{" "}
              <span className="text-white font-bold">
                4th-year Electronics & Communication Engineering
              </span>{" "}
              student and a dedicated problem solver. Constantly driven by
              curiosity, I specialize in finding efficient, real-world solutions
              by bridging hardware logic with software architecture.
            </p>
            <p>
              When I&apos;m not building impactful tech solutions, you can
              usually find me participating in{" "}
              <span className="text-white font-bold">sports</span>, enjoying{" "}
              <span className="text-white font-bold">casual gaming</span>, or{" "}
              <span className="text-white font-bold">travelling</span> to
              explore new places.
            </p>
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN: STATS & PORTRAIT --- */}
        <div className="lg:col-span-5 flex flex-col h-full z-10 pt-12 lg:pt-24">
          {/* Borderless Stats Grid (Pushed to the top of the column) */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 max-w-md z-30 mb-8 px-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-1"
              >
                <span className="text-4xl md:text-5xl font-black text-white tracking-tighter drop-shadow-sm">
                  {stat.value}
                  <span className="text-black">{stat.suffix}</span>
                </span>
                <span className="text-[10px] md:text-xs font-bold text-black/80 tracking-[0.2em] uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom-Anchored Portrait (Fills remaining space below stats) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="relative flex-grow min-h-[400px] lg:min-h-[500px] w-full pointer-events-none mt-auto z-20"
          >
            <Image
              src="/images/whoami-profile.png"
              alt="Sam Peter"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
