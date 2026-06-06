"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Cpu, MessageSquare, Globe, Layout, Code2, Layers, Lightbulb, Zap, Users, Brain, Search } from "lucide-react";

export function ProfessionalSummary() {
  return (
    <section id="about" className="bg-black">
      <div className="container-premium text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent-cyan font-mono text-[10px] uppercase tracking-[0.5em] mb-12 block"
        >
          Perspective
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading-lg mb-16"
        >
          Building intelligent systems <br />
          <span className="opacity-30 font-light">driven by data and refined by AI.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg md:text-xl text-white/40 leading-relaxed font-light max-w-2xl mx-auto space-y-10"
        >
          <p>
            I am a BCA graduate from KIIT University who enjoys building production-ready AI-powered web applications. My focus is on creating scalable full-stack products using modern technologies including Next.js, TypeScript, Node.js, PostgreSQL, Supabase, Prisma, and Generative AI APIs.
          </p>
          <p>
            I have experience building and deploying SaaS applications with authentication, databases, cloud deployment, and AI integrations. I enjoy solving real-world problems through software and continuously learning new technologies through hands-on projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const hardSkills = [
  { name: "Python", icon: <Terminal size={20} /> },
  { name: "SQL", icon: <Database size={20} /> },
  { name: "Data Analysis", icon: <Cpu size={20} /> },
  { name: "Generative AI", icon: <MessageSquare size={20} /> },
  { name: "LLMs / Prompts", icon: <Brain size={20} /> },
  { name: "Next.js", icon: <Layout size={20} /> },
  { name: "React", icon: <Code2 size={20} /> },
  { name: "SaaS Systems", icon: <Layers size={20} /> },
];

const softSkills = [
  { name: "Quick Thinking", icon: <Zap size={18} /> },
  { name: "Problem Solving", icon: <Search size={18} /> },
  { name: "Adaptability", icon: <Globe size={18} /> },
  { name: "Communication", icon: <MessageSquare size={18} /> },
  { name: "Creativity", icon: <Lightbulb size={18} /> },
  { name: "Collaboration", icon: <Users size={18} /> },
];

export function TechnicalSkills() {
  return (
    <section id="skills" className="bg-black">
      <div className="container-premium">
        <div className="text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="heading-lg mb-4"
          >
            Core Arsenal
          </motion.h2>
          <p className="text-muted uppercase tracking-[0.4em] text-[10px]">Technical mastery & Strategic capabilities</p>
        </div>

        {/* Hard Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mb-32">
          {hardSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="p-10 rounded-[2rem] border border-white/[0.03] bg-white/[0.01] flex flex-col items-center gap-6 transition-all hover:bg-white/[0.03] group"
            >
              <div className="text-accent-cyan opacity-60 group-hover:opacity-100 transition-opacity">
                {skill.icon}
              </div>
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 group-hover:text-white/80 transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="w-full">
          <div className="text-center mb-16">
            <h3 className="text-sm font-mono tracking-[0.5em] uppercase text-white/20">Transferable Soft Skills</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl border border-white/[0.02] bg-white/[0.01] flex flex-col items-center gap-4 text-center group transition-all"
              >
                <div className="text-white/30 group-hover:text-accent-blue transition-colors">
                  {skill.icon}
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/30 group-hover:text-white/70 transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
