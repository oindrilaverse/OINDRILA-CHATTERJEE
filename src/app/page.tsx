import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { About, Skills } from "@/components/AboutAndSkills";
import { FeaturedProjects } from "@/components/Projects";
import { Journey, CreativeCollaborations, Certifications, ContactFooter } from "@/components/ExperienceEducationContact";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative bg-black text-white selection:bg-accent-cyan selection:text-black">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Journey />
        <CreativeCollaborations />
        <FeaturedProjects />
        <Certifications />
        <ContactFooter />
      </main>
    </SmoothScroll>
  );
}
