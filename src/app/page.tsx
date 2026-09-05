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
      <ConstellationCanvas />

      <main className="relative z-10 min-h-screen bg-transparent font-mono text-white selection:bg-[#ff5500] selection:text-black">
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
