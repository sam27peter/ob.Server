import ConstellationCanvas from "@/components/ConstellationCanvas";
import Hero from "@/components/Hero";
import WhoAmI from "@/components/WhoAmI";
import TechMarquee from "@/components/TechMarquee";
import ProjectsGrid from "@/components/ProjectsGrid";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Fixed interactive constellation layer */}
      <ConstellationCanvas />

      {/* Main website */}
      <main className="relative z-10 min-h-screen bg-transparent text-white selection:bg-orange-500 selection:text-black font-mono">
        <Hero />
        <WhoAmI />
        <TechMarquee />
        <ProjectsGrid />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
