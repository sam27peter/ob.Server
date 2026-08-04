import ConstellationCanvas from "@/components/ConstellationCanvas";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import WhoAmI from "@/components/WhoAmI";
import ProjectsGrid from "@/components/ProjectsGrid";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080808] text-white selection:bg-orange-500 selection:text-black">
      {/* Background Animated Constellation Network */}
      <ConstellationCanvas />

      {/* Foreground Main Content */}
      <div className="relative z-10">
        <Hero />
        <TechMarquee />
        <WhoAmI />
        <ProjectsGrid />
        <About />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
