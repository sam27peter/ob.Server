"use client";

import Image from "next/image";

const stats = [
  {
    value: "20",
    suffix: "+",
    label: "PROJECTS COMPLETED",
  },
  {
    value: "2ND",
    suffix: "",
    label: "RUNNER-UP CPL",
  },
  {
    value: "2",
    suffix: "",
    label: "INTERNSHIPS",
  },
  {
    value: "10",
    suffix: "+",
    label: "EVENTS ORGANISED",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#080808] text-white"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div className="hero-grid absolute inset-0" />

        {/* Orange ambient glow */}
        <div className="absolute left-[48%] top-[20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#ff5500]/[0.07] blur-[160px]" />

        {/* Decorative circle */}
        <div className="absolute left-[8%] top-[25%] hidden h-[300px] w-[300px] rounded-full border border-white/[0.10] lg:block" />

        {/* Horizontal orange line */}
        <div className="absolute left-[4%] top-[38%] hidden h-px w-[22%] bg-[#ff5500]/60 lg:block" />

        {/* Horizontal white line */}
        <div className="absolute right-[7%] top-[27%] hidden h-px w-[15%] bg-white/[0.10] lg:block" />

        {/* Orange square */}
        <div className="absolute left-[6%] top-[28%] hidden h-2.5 w-2.5 bg-[#ff5500] lg:block" />

        {/* Bottom line */}
        <div className="absolute bottom-[13%] left-[4%] hidden h-px w-[38%] bg-white/[0.08] lg:block" />

        {/* Extra right side accent */}
        <div className="absolute right-[8%] top-[48%] hidden h-2 w-2 rounded-full bg-[#ff5500] lg:block" />

        {/* Right vertical line */}
        <div className="absolute bottom-[10%] right-[7%] hidden h-[70px] w-px bg-white/[0.10] lg:block" />
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <header className="relative z-40 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-[4.2vw] lg:py-8">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl leading-none text-white"
          style={{
            fontFamily: "var(--font-gakuran)",
          }}
        >
          Ob.Server
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          <a
            href="#about"
            className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55 transition hover:text-[#ff5500]"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55 transition hover:text-[#ff5500]"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55 transition hover:text-[#ff5500]"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#projects"
          className="hidden border border-[#ff5500] bg-[#ff5500] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black transition duration-200 hover:bg-transparent hover:text-[#ff5500] lg:block"
        >
          Enter Terminal ↗
        </a>

        {/* Mobile triple-dot button */}
        <button
          type="button"
          aria-label="Open navigation"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 lg:hidden"
        >
          <span className="h-1 w-1 rounded-full bg-white" />
          <span className="h-1 w-1 rounded-full bg-[#ff5500]" />
          <span className="h-1 w-1 rounded-full bg-white" />
        </button>
      </header>

      {/* =========================================================
          MOBILE HERO
      ========================================================= */}
      <div className="relative z-20 flex min-h-[calc(100svh-72px)] flex-col items-center px-5 pt-2 lg:hidden">
        {/* MOBILE IMAGE */}
        <div className="relative h-[250px] w-full max-w-[290px] xs:h-[280px] sm:h-[330px] sm:max-w-[350px]">
          <Image
            src="/images/hero-subject.png"
            alt="Sam Peter"
            fill
            priority
            sizes="(max-width: 640px) 290px, 350px"
            className="object-contain object-bottom"
          />
        </div>

        {/* MOBILE NAME */}
        <div className="-mt-1 flex w-full flex-col items-center text-center">
          <h1
            className="leading-[0.72] tracking-[-0.06em] text-[#f4e5d8]"
            style={{
              fontFamily: "var(--font-savery)",
              fontSize: "clamp(5rem, 26vw, 9rem)",
            }}
          >
            SAM
          </h1>

          <h1
            className="mt-[0.12em] leading-[0.72] tracking-[-0.06em] text-[#ff5500]"
            style={{
              fontFamily: "var(--font-savery)",
              fontSize: "clamp(5rem, 26vw, 9rem)",
            }}
          >
            PETER
          </h1>
        </div>

        {/* Mobile accent */}
        <div className="mt-8 flex items-center gap-3">
          <span className="h-px w-8 bg-[#ff5500]" />

          <span className="text-center text-[7px] uppercase tracking-[0.24em] text-white/45">
            Dev / Build / Innovate
          </span>

          <span className="h-px w-8 bg-[#ff5500]" />
        </div>
      </div>

      {/* =========================================================
          DESKTOP / LAPTOP HERO
      ========================================================= */}
      <div className="relative z-10 hidden min-h-[calc(100svh-96px)] lg:block">
        {/* =====================================================
            MAIN HEADING
        ====================================================== */}
        <div className="absolute left-[6vw] top-[-1vh] z-10">
          <h1
            className="leading-[0.76] tracking-[-0.06em] text-[#f4e5d8]"
            style={{
              fontFamily: "var(--font-savery)",
              fontSize: "clamp(8rem, 16vw, 18rem)",
            }}
          >
            SAM
          </h1>

          <h1
            className="mt-[0.05em] leading-[0.76] tracking-[-0.06em] text-[#ff5500]"
            style={{
              fontFamily: "var(--font-savery)",
              fontSize: "clamp(8rem, 16vw, 18rem)",
            }}
          >
            PETER
          </h1>
        </div>

        {/* =====================================================
            DESKTOP SUBJECT IMAGE
        ====================================================== */}
        <div className="absolute bottom-0 right-[5vw] z-20 h-[95vh] w-[58vw] max-w-[1050px]">
          <Image
            src="/images/hero-subject.png"
            alt="Sam Peter"
            fill
            priority
            sizes="(max-width: 1200px) 58vw, 1050px"
            className="object-contain object-bottom"
          />
        </div>

        {/* =====================================================
            DESKTOP STATS
            1 COLUMN × 4 ROWS

            Only visible on desktop.
        ====================================================== */}
        <div className="absolute right-[-1vw] top-[5%] z-30 hidden w-[180px] flex-col lg:flex">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col py-5 ${
                index !== 0 ? "border-t border-white/10" : ""
              }`}
            >
              {/* Stat Number */}
              <div className="flex items-baseline">
                <span className="font-mono text-5xl font-black leading-none tracking-[-0.08em] text-[#f4e5d8] xl:text-6xl">
                  {stat.value}
                </span>

                {stat.suffix && (
                  <span className="ml-1 font-mono text-3xl font-black text-[#ff5500] xl:text-4xl">
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Stat Label */}
              <span className="mt-3 font-mono text-[8px] font-bold uppercase leading-relaxed tracking-[0.24em] text-white/45">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM LEFT CONTENT
        ====================================================== */}
        <div className="absolute bottom-[7vh] left-[4.2vw] z-30 max-w-[340px]">
          <div className="mb-6 h-px w-12 bg-[#ff5500]" />

          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#ff5500]">
            Dev / Build / Innovate
          </p>

          <p className="font-mono text-[18px] leading-[1.55] text-white/80">
            Building solutions
            <br />
            that make an impact.
          </p>

          <div className="mt-7 border-l border-white/15 pl-4 text-[8px] uppercase tracking-[0.22em] leading-6 text-white/40">
            <p>Software Developer</p>
            <p>AI Enthusiast</p>
            <p>Lifelong Learner</p>
          </div>
        </div>

        {/* Bottom left mark */}
        <div className="absolute bottom-6 left-[1.2vw] z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm text-white/70">
          N
        </div>
      </div>
    </section>
  );
}
