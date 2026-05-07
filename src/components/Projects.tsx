"use client";

import { motion } from "framer-motion";
import { ExternalLink, Brain, Sparkles, Layout, Database, CreditCard, Users, BarChart3 } from "lucide-react";
import { GitHubIcon } from "./Icons";
import { cn } from "@/lib/utils";

const featuredProjects = [
  {
    id: 1,
    title: "Resume Analyzer AI",
    tagline: "Intelligent ATS Optimization Engine",
    description: "An advanced system evaluating resumes for ATS optimization, keyword alignment, and recruiter readability using modern LLM architectures.",
    features: ["ATS Score Analysis", "Resume Parsing", "AI Suggestions", "Skill Gap Detection", "Job Description Matching", "Recruiter Optimization"],
    roadmap: "Planned evolution into a scalable AI-powered SaaS platform with Payment Portals, User Accounts, and Dashboard Analytics.",
    tags: ["Generative AI", "LLMs", "Next.js", "Prompt Engineering"],
    link: "https://oindrilaverse.github.io/HireReady.AI/analyzer",
    github: "https://github.com/oindrilaverse/HireReady.AI",
    isFlagship: true
  },
  {
    id: 2,
    title: "AttireSense",
    tagline: "AI-Powered Fashion Intelligence",
    description: "Cinematic web application suggesting personalized outfits based on skin tone, body shape, and modern style metrics.",
    features: ["AI Fashion Recommendations", "Personalized Reports", "Prompt Engineering", "User-Centric Interface"],
    roadmap: "Future roadmap includes transformation into a complete full-stack platform with Login Auth and User Dashboards.",
    tags: ["React", "AI Logic", "Three.js", "Design Thinking"],
    link: "https://oindrilaverse.github.io/THE-ATTIRE-SENSE/",
    github: "https://github.com/oindrilaverse/THE-ATTIRE-SENSE",
    isFlagship: true
  },
  {
    id: 3,
    title: "Student Performance Analysis",
    tagline: "Data Intelligence & Visualization",
    description: "Data-driven insights into academic patterns using advanced Python EDA techniques and visualization libraries.",
    features: ["Academic Pattern Recognition", "Data Visualization", "Trend Analysis"],
    tags: ["Python", "Pandas", "EDA", "Data Intelligence"],
    link: "#",
    github: "#",
    isFlagship: false
  }
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="bg-black">
      <div className="container-premium">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-32 text-center"
        >
          <h2 className="heading-lg mb-4">Flagship Products</h2>
          <p className="text-muted tracking-[0.4em] uppercase text-[10px]">High-impact AI-powered solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-40 w-full">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
            >
              {/* Project Preview Placeholder */}
              <div className={cn(
                "aspect-[16/10] overflow-hidden rounded-[3rem] bg-zinc-950 border border-white/[0.03] transition-all duration-700 group-hover:border-accent-cyan/20 relative w-full",
                idx % 2 === 0 ? "lg:order-1" : "lg:order-2"
              )}>
                <div className={cn(
                   "absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40",
                   idx === 0 ? "bg-gradient-to-br from-accent-cyan via-black to-black" : "bg-gradient-to-br from-accent-blue via-black to-black"
                )} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <div className="w-24 h-24 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-8">
                      {idx === 0 ? <Brain size={40} className="text-accent-cyan" /> : <Sparkles size={40} className="text-accent-blue" />}
                   </div>
                   <span className="text-white/10 font-heading font-bold text-3xl uppercase tracking-[1em]">{project.title}</span>
                </div>
              </div>

              {/* Project Details */}
              <div className={cn(
                "flex flex-col",
                idx % 2 === 0 ? "lg:order-2" : "lg:order-1"
              )}>
                <div className="flex flex-wrap gap-2 mb-8">
                   {project.tags.map(tag => (
                     <span key={tag} className="text-[9px] font-mono tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/[0.05] text-white/30">
                       {tag}
                     </span>
                   ))}
                </div>
                
                <h3 className="text-4xl font-heading font-bold tracking-tighter mb-4">{project.title}</h3>
                <p className="text-accent-cyan/60 font-mono text-[10px] uppercase tracking-[0.4em] mb-8">{project.tagline}</p>
                <p className="text-white/40 text-lg font-light mb-10 leading-relaxed">{project.description}</p>
                
                {project.features && (
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
                    {project.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan/40" />
                        <span className="text-[11px] font-light text-white/60 tracking-wide">{f}</span>
                      </div>
                    ))}
                  </div>
                )}

                {project.roadmap && (
                  <div className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.03] mb-12">
                    <p className="text-[9px] font-mono text-accent-cyan/40 uppercase mb-4 tracking-widest">Future Evolution</p>
                    <p className="text-sm text-white/40 leading-relaxed font-light italic">{project.roadmap}</p>
                  </div>
                )}

                <div className="flex items-center gap-6 mt-auto">
                  <a 
                    href={project.link} 
                    target="_blank"
                    className="px-10 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-all text-sm flex items-center gap-2"
                  >
                    Live Platform <ExternalLink size={16} />
                  </a>
                  <a href={project.github} target="_blank" className="p-4 rounded-full glass border-white/5 hover:border-white/10 transition-all text-white/40 hover:text-white">
                    <GitHubIcon size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// We remove the old single-section ResumeAnalyzerShowcase and FeaturedProjects split 
// as we now have a unified, premium project list that handles reordering.
export function ResumeAnalyzerShowcase() {
  return null;
}
