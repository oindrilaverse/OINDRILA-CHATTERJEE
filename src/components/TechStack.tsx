"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, ShieldCheck, Brain, Rocket, Cpu } from "lucide-react";

export default function TechStack() {
  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="text-accent-cyan" size={20} />,
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"]
    },
    {
      title: "Backend",
      icon: <Server className="text-accent-blue" size={20} />,
      skills: ["Node.js", "Express.js", "TypeScript"]
    },
    {
      title: "Database",
      icon: <Database className="text-purple-400" size={20} />,
      skills: ["PostgreSQL", "Prisma ORM", "Supabase"]
    },
    {
      title: "Authentication",
      icon: <ShieldCheck className="text-green-400" size={20} />,
      skills: ["Supabase Auth"]
    },
    {
      title: "AI & Intelligence",
      icon: <Brain className="text-amber-400" size={20} />,
      skills: ["Google Gemini API"]
    },
    {
      title: "Infrastructure",
      icon: <Rocket className="text-rose-400" size={20} />,
      skills: ["Vercel", "Render"]
    },
    {
      title: "Tools & Workflow",
      icon: <Cpu className="text-teal-400" size={20} />,
      skills: ["Git", "GitHub", "VS Code"]
    }
  ];

  return (
    <section id="tech-stack" className="bg-black py-32 border-t border-white/[0.02]">
      <div className="container-premium w-full max-w-5xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-cyan font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-lg mb-4"
          >
            Technical Stack
          </motion.h2>
          <p className="text-muted tracking-[0.3em] uppercase text-[9px]">Recruiter-Optimized Competencies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all group flex flex-col gap-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.03]">
                <h3 className="text-lg font-bold tracking-tight text-white/90">{cat.title}</h3>
                <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                  {cat.icon}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-white/50 group-hover:text-white/80 group-hover:border-white/10 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
