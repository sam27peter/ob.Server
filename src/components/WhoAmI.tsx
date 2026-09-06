"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoAmI() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#ff5500] text-black"
    >
      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="relative mx-auto min-h-screen w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="grid min-h-full grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          {/* =====================================================
              LEFT SIDE — ABOUT TEXT
          ====================================================== */}
          <div className="relative z-20 flex flex-col justify-center lg:col-span-7">
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-black/70" />

              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.35em] text-black/70">
                01 / WHO AM I
              </span>
            </motion.div>

            {/* =================================================
                MAIN TITLE
            ================================================= */}
            <div className="flex flex-col">
              <motion.h2
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className="mb-1 text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
              >
                HELLO,
              </motion.h2>

              <motion.h2
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  fontFamily: "var(--font-moderncyber)",
                }}
                className="text-6xl uppercase leading-[0.82] tracking-wide sm:text-7xl md:text-8xl lg:text-9xl"
              >
                I&apos;M
              </motion.h2>

              <motion.h2
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.16 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  fontFamily: "var(--font-moderncyber)",
                }}
                className="mt-2 text-7xl uppercase leading-[0.78] tracking-wide sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem]"
              >
                SAM
              </motion.h2>
            </div>

            {/* =================================================
                BIO
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-10 max-w-xl border-l-2 border-black/70 pl-6"
            >
              <p className="font-mono text-sm font-medium leading-relaxed text-black/85 sm:text-base">
                I&apos;m a{" "}
                <span className="font-bold text-white">
                  4th-year Electronics & Communication Engineering student
                </span>{" "}
                and a dedicated problem solver. I enjoy building practical
                solutions by combining technical thinking with creative ideas.
              </p>

              <p className="mt-5 font-mono text-sm font-medium leading-relaxed text-black/85 sm:text-base">
                I&apos;m particularly interested in software development,
                artificial intelligence, and understanding how systems work.
                Outside tech, I enjoy sports, casual gaming, and exploring new
                places.
              </p>
            </motion.div>

            {/* Personal statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-10 max-w-lg"
            >
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-black/55">
                My Approach
              </p>

              <p className="mt-3 font-mono text-lg leading-relaxed text-black sm:text-xl">
                I like taking an idea, understanding how it works, and turning
                it into something real.
              </p>
            </motion.div>

            {/* Focus tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-10 flex max-w-xl flex-wrap gap-3"
            >
              {[
                "SOFTWARE DEVELOPMENT",
                "ARTIFICIAL INTELLIGENCE",
                "PROBLEM SOLVING",
                "BUILDING PROJECTS",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-black/25 px-3 py-2 font-mono text-[8px] font-bold tracking-[0.18em] text-black/75 sm:text-[9px]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT SIDE — PORTRAIT ONLY
          ====================================================== */}
          <div className="relative z-20 flex flex-col lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative min-h-[480px] w-full flex-1 sm:min-h-[580px] lg:min-h-[720px]"
            >
              <Image
                src="/images/whoami-profile.png"
                alt="Sam Peter"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}

      {/* Large circle */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full border border-black/10" />

      {/* Top right square */}
      <div className="pointer-events-none absolute right-[8%] top-[8%] hidden h-3 w-3 border border-black/40 lg:block" />

      {/* Bottom right line */}
      <div className="pointer-events-none absolute bottom-[8%] right-[5%] hidden h-px w-[18%] bg-black/20 lg:block" />
    </section>
  );
}
