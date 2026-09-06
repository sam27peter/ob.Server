"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type Tech = {
  name: string;
  icon: string;
  invert?: boolean;
};

const topRow: Tech[] = [
  { name: "Python", icon: "/images/tech/python.svg" },
  { name: "JavaScript", icon: "/images/tech/javascript.svg" },
  { name: "TypeScript", icon: "/images/tech/typescript.svg" },
  { name: "C", icon: "/images/tech/c.svg" },
  { name: "C++", icon: "/images/tech/cplusplus.svg" },
  { name: "React", icon: "/images/tech/react.svg" },
  { name: "Next.js", icon: "/images/tech/nextjs.svg", invert: true },
  { name: "Flutter", icon: "/images/tech/flutter.svg" },
  { name: "TensorFlow", icon: "/images/tech/tensorflow.svg" },
  { name: "OpenCV", icon: "/images/tech/opencv.svg" },
  { name: "Scikit Learn", icon: "/images/tech/scikitlearn.svg" },
  { name: "Tailwind CSS", icon: "/images/tech/tailwindcss.svg" },
];

const bottomRow: Tech[] = [
  { name: "Node.js", icon: "/images/tech/nodejs.svg" },
  { name: "Docker", icon: "/images/tech/docker.svg" },
  { name: "Kubernetes", icon: "/images/tech/kubernetes.svg" },
  { name: "Git", icon: "/images/tech/git.svg" },

  /*
   * GitHub is dark by default.
   * invert: true makes it visible on #080808.
   */
  { name: "GitHub", icon: "/images/tech/github.svg", invert: true },

  { name: "MySQL", icon: "/images/tech/mysql.svg" },
  { name: "PostgreSQL", icon: "/images/tech/postgresql.svg" },
  { name: "Arduino", icon: "/images/tech/arduino.svg" },
  { name: "ESP32", icon: "/images/tech/esp32.svg" },
  { name: "Proteus", icon: "/images/tech/proteus.svg" },
  { name: "Figma", icon: "/images/tech/figma.svg" },

  /*
   * Vercel logo is also black, so invert it.
   */
  { name: "Vercel", icon: "/images/tech/vercel.svg", invert: true },
];

type TechRowProps = {
  techs: Tech[];
  direction: "left" | "right";
};

function TechRow({ techs, direction }: TechRowProps) {
  const { scrollYProgress } = useScroll();

  /*
   * =========================================================
   * SCROLL MOVEMENT
   *
   * Both rows react to vertical scrolling.
   * One moves left, the other moves right.
   * =========================================================
   */

  const x =
    direction === "left"
      ? useTransform(scrollYProgress, [0, 1], ["0%", "-33.333%"])
      : useTransform(scrollYProgress, [0, 1], ["-33.333%", "0%"]);

  const smoothX = useSpring(x, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });

  /*
   * Three copies prevent empty space while scrolling.
   */
  const repeatedTechs = [...techs, ...techs, ...techs];

  return (
    <div className="w-full overflow-hidden">
      <motion.div style={{ x: smoothX }} className="flex w-max items-center">
        {repeatedTechs.map((tech, index) => (
          /*
           * =================================================
           * ICON SLOT
           *
           * All icons get the SAME width.
           *
           * Reduced from the previous version to remove
           * excessive empty space.
           *
           * Adjust w-14 / sm:w-16 / md:w-20 if needed.
           * =================================================
           */
          <div
            key={`${tech.name}-${index}`}
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              sm:h-16
              sm:w-16
              md:h-20
              md:w-20
            "
          >
            {/*
             * =================================================
             * ICON SIZE
             *
             * Smaller than before, with equal spacing.
             * =================================================
             */}
            <div className="relative h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10">
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                sizes="(max-width: 640px) 28px, (max-width: 768px) 32px, 40px"
                className={`object-contain ${tech.invert ? "invert" : ""}`}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-[#080808] py-10 md:py-14">
      {/* =====================================================
          BUILT WITH
          Change the fontFamily here if you want to test
          another locally configured font.
         ===================================================== */}

      <div className="mb-6 px-5 text-center md:mb-8">
        <h2
          style={{
            fontFamily: "var(--font-gakuran)",
          }}
          className="
            text-5xl
            uppercase
            leading-none
            text-[#f4e5d8]
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          Built With
        </h2>
      </div>

      {/* =====================================================
          TOP GLOWING STRIP
         ===================================================== */}

      <div className="relative h-[1px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#ff5500]/30" />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[2px]
            w-[35%]
            -translate-x-1/2
            -translate-y-1/2
            bg-[#ff5500]
            blur-[3px]
          "
        />
      </div>

      {/* ROW 1 */}

      <TechRow techs={topRow} direction="left" />

      {/* =====================================================
          MIDDLE GLOWING STRIP
         ===================================================== */}

      <div className="relative h-[1px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#f4e5d8]/10" />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[2px]
            w-[22%]
            -translate-x-1/2
            -translate-y-1/2
            bg-[#ff5500]
            blur-[2px]
          "
        />
      </div>

      {/* ROW 2 */}

      <TechRow techs={bottomRow} direction="right" />

      {/* =====================================================
          BOTTOM GLOWING STRIP
         ===================================================== */}

      <div className="relative h-[1px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#ff5500]/30" />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[2px]
            w-[35%]
            -translate-x-1/2
            -translate-y-1/2
            bg-[#ff5500]
            blur-[3px]
          "
        />
      </div>
    </section>
  );
}
