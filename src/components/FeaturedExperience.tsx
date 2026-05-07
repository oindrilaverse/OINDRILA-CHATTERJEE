"use client";

import { motion } from "framer-motion";
import { Play, Code2, Shield, Activity } from "lucide-react";

export default function FeaturedExperience() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#030303]">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Featured <span className="text-accent-cyan">Experience</span>
          </motion.h2>
          <p className="text-white/40">Visualizing the intersection of design and engineering.</p>
        </div>

        {/* Video/Animation Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden glass border border-white/10 group"
        >
          {/* Mock Cinematic Coding Video (Placeholder or Animation) */}
          <div className="absolute inset-0 bg-[#050505] flex items-center justify-center">
            {/* We will simulate a coding background if no video is found */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-24 h-24 rounded-full bg-accent-cyan/20 flex items-center justify-center border border-accent-cyan/40 backdrop-blur-xl"
              >
                <Play className="text-accent-cyan ml-1" fill="currentColor" size={32} />
              </motion.div>
              <span className="mt-6 text-sm font-mono text-accent-cyan/60 tracking-[0.3em] uppercase">Initialize Experience</span>
            </div>

            {/* Simulated HUD elements */}
            <div className="absolute top-8 left-8 flex items-center gap-4 opacity-40">
              <div className="flex flex-col">
                <span className="text-[10px] text-white/40 uppercase font-mono">System Status</span>
                <span className="text-xs text-accent-cyan font-mono">OPERATIONAL // 0.1ms</span>
              </div>
              <Activity size={24} className="text-accent-cyan animate-pulse" />
            </div>

            <div className="absolute bottom-8 right-8 text-right opacity-40">
              <span className="text-[10px] text-white/40 uppercase font-mono">Coordinate Vector</span>
              <div className="text-xs text-white font-mono">X: 192.168.0.1 // Y: 443</div>
            </div>

            {/* Moving Code Lines (Simulated Video) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 py-12 px-20">
               {[...Array(20)].map((_, i) => (
                 <motion.div
                   key={i}
                   animate={{ x: [-100, 100] }}
                   transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, ease: "linear" }}
                   className="text-[8px] font-mono text-white/50 whitespace-nowrap mb-2"
                 >
                   {`const engine = new AI_Core({ precision: "cinematic", render: "GPU_ACCELERATED", architecture: "OindrilaVerse_v4" });`}
                 </motion.div>
               ))}
            </div>
          </div>

          {/* Overlay Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
          
          <div className="absolute bottom-10 left-10 z-20">
            <h3 className="text-2xl font-heading font-bold mb-2">Cinematic Development</h3>
            <p className="text-sm text-white/60 max-w-md">
              A demonstration of the seamless integration between high-end visual aesthetics 
              and robust backend engineering principles.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
