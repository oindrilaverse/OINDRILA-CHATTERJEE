"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, User, Code2, Briefcase, Award, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Hero() {
  const navItems = [
    { label: "Skills", icon: <Code2 size={14} />, href: "#skills" },
    { label: "Experience", icon: <Briefcase size={14} />, href: "#experience" },
    { label: "Projects", icon: <User size={14} />, href: "#projects" },
    { label: "Certifications", icon: <Award size={14} />, href: "#certifications" },
    { label: "Contact", icon: <Mail size={14} />, href: "#contact" },
  ];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden p-0 bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="video-bg opacity-70"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />
      </div>

      {/* Content Container */}
      <div className="container-premium relative z-20 text-center">
        {/* Recruiter Quick Nav */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center gap-2 px-5 py-2 rounded-full glass border border-white/5 hover:border-accent-cyan/30 transition-all text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 hover:text-white"
            >
              <span className="text-accent-cyan/60 group-hover:text-accent-cyan">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="heading-xl mb-12 tracking-[-0.07em] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 leading-[0.85]">
            OINDRILA <br /> CHATTERJEE
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            <h2 className="text-sm md:text-base font-light tracking-[0.5em] text-accent-cyan uppercase mb-12 opacity-80">Full Stack Developer | AI-Powered SaaS Builder | Next.js, TypeScript, Node.js, PostgreSQL</h2>
            <p className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto mb-16 font-light italic leading-relaxed">
              “Architecting intelligent systems and AI-powered workflows with a human-centered approach.”
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <a
              href="#projects"
              className="px-12 py-6 bg-white text-black rounded-full font-bold transition-all hover:bg-white/90 hover:scale-105 active:scale-95 flex items-center gap-3 text-sm tracking-tight shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
            >
              Explore My Work
              <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-6 px-10 py-6 rounded-full border border-white/[0.05] bg-white/[0.02] backdrop-blur-xl hover:border-white/20 transition-all">
              <a href="https://github.com/oindrilaverse" target="_blank" className="text-white/30 hover:text-white transition-colors">
                <GitHubIcon size={22} />
              </a>
              <div className="w-[1px] h-6 bg-white/[0.05]" />
              <a href="https://www.linkedin.com/in/oindrila-chatterjee-4258a5276" target="_blank" className="text-white/30 hover:text-white transition-colors">
                <LinkedInIcon size={22} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20"
      >
        <span className="text-[9px] uppercase tracking-[0.6em] text-white font-light">Scroll Foundation</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
