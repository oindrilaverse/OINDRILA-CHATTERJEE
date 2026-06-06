"use client";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ProfessionalSummary, TechnicalSkills } from "@/components/AboutAndSkills";
import Journey from "@/components/ExperienceEducationContact"; // Experience & Education
import { FeaturedProjects } from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative bg-black text-white selection:bg-accent-cyan selection:text-black">
        <Navbar />
        <Hero />
        <ProfessionalSummary />
        <TechnicalSkills />
        <TechStack />
        <Journey />
        <FeaturedProjects />
        <Certifications />
        <ContactFooter />
      </main>
    </SmoothScroll>
  );
}
