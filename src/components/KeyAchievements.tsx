"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award, Briefcase } from "lucide-react";

export default function KeyAchievements() {
  const achievements = [
    { title: "AI SaaS MVP", desc: "Delivered a production‑ready AI resume analyzer in 4 weeks, handling 2k+ user submissions.", icon: <Briefcase size={28} /> },
    { title: "Full‑Stack Expertise", desc: "Built end‑to‑end applications with Next.js, TypeScript, Node.js, PostgreSQL & Supabase.", icon: <Star size={28} /> },
    { title: "Performance Boost", desc: "Optimized critical data pipelines, cutting processing time by 30%.", icon: <Trophy size={28} /> },
    { title: "Open‑Source Impact", desc: "Contributed to 5 open‑source libraries, gaining 500+ stars on GitHub.", icon: <Award size={28} /> }
  ];

  return (
    <section id="key-achievements" className="bg-black py-24">
      <div className="container-premium text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heading-lg mb-12"
        >
          Why Recruiters Should Notice Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-white/[0.03] bg-white/[0.01] hover:border-accent-cyan/20 transition-all text-center"
            >
              <div className="mb-4 flex justify-center text-accent-cyan/60">{a.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{a.title}</h3>
              <p className="text-sm text-white/70">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
