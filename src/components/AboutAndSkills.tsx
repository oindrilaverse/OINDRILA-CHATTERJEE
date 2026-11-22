"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Cpu, MessageSquare, Globe, Lightbulb, Zap, Users, Search } from "lucide-react";

export function ProfessionalSummary() {
  return (
    <section id="about" className="bg-black">
      <div className="container-premium text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent-cyan font-mono text-[10px] uppercase tracking-[0.5em] mb-12 block"
        >
          Professional Summary
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading-lg mb-16"
        >
          MCA candidate at Techno Main Salt Lake with a strong BCA foundation and hands‑on experience building scalable, AI‑powered applications.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg md:text-xl text-white/40 leading-relaxed font-light max-w-2xl mx-auto space-y-6"
        >
          <p>Phone: +91 9007098009</p>
          <p>Highly proficient in Python and Oracle PL/SQL for robust backend and database operations. Adept at developing production‑ready solutions, managing complex relational databases, and applying a strong focus on object‑oriented programming and algorithmic problem‑solving.</p>
          <p>Technical Skills:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Languages: Python, PL/SQL, SQL</li>
            <li>Tools & Platforms: Git, GitHub, VS Code, Vercel</li>
            <li>Databases: Oracle, MySQL</li>
            <li>Concepts: OOP, Data Structures & Algorithms, DBMS, REST APIs, Responsive Web Design</li>
            <li>AI & Generative: Google Gemini API, Prompt Engineering, LLM Integration, Generative AI</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

const hardSkills = [
  { name: "Python", icon: <Terminal size={20} /> },
  { name: "PL/SQL", icon: <Database size={20} /> },
  { name: "SQL", icon: <Cpu size={20} /> },
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
          <p className="text-muted uppercase tracking-[0.4em] text-[10px]">
            Technical mastery & Strategic capabilities
          </p>
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
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 group-hover:text-white/80 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="w-full">
          <div className="text-center mb-16">
            <h3 className="text-sm font-mono tracking-[0.5em] uppercase text-white/20">
              Transferable Soft Skills
            </h3>
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
