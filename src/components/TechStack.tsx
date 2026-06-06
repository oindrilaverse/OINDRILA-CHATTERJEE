"use client";

import { motion } from "framer-motion";
import { Rocket, Database, Server, Cloud, ShieldCheck, Code2, Layout, GitBranch } from "lucide-react";

export default function TechStack() {
  const techs = [
    { name: "Next.js", icon: <Layout size={24} /> },
    { name: "TypeScript", icon: <Code2 size={24} /> },
    { name: "Tailwind CSS v4", icon: <Rocket size={24} /> },
    { name: "Framer Motion", icon: <Rocket size={24} /> },
    { name: "Zustand", icon: <GitBranch size={24} /> },
    { name: "Supabase Auth", icon: <ShieldCheck size={24} /> },
    { name: "Node.js", icon: <Server size={24} /> },
    { name: "Express.js", icon: <Server size={24} /> },
    { name: "Google Gemini API", icon: <Cloud size={24} /> },
    { name: "PostgreSQL", icon: <Database size={24} /> },
    { name: "Prisma", icon: <Database size={24} /> },
    { name: "Vercel", icon: <Rocket size={24} /> },
    { name: "Render", icon: <Rocket size={24} /> },
  ];

  return (
    <section id="tech-stack" className="bg-black py-24">
      <div className="container-premium text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heading-lg mb-8"
        >
          Tech Stack
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techs.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 p-6 rounded-2xl border border-white/[0.03] bg-white/[0.01] hover:border-accent-cyan/20 transition-all"
            >
              <div className="text-accent-cyan/60 group-hover:opacity-100 transition-opacity">{t.icon}</div>
              <span className="text-sm text-white/70">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
