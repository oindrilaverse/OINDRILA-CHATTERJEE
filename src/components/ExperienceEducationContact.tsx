"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Mail, Phone, ExternalLink, Download, Share2, Palette, Video, Megaphone, Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export function Journey() {
  return (
    <section id="experience" className="bg-black">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-40"
        >
          <h2 className="heading-lg mb-4">Professional Foundation</h2>
          <p className="text-muted tracking-[0.4em] uppercase text-[10px]">Academic and Industry Experience</p>
        </motion.div>

        <div className="max-w-4xl mx-auto w-full">
          <div className="relative border-l border-white/[0.03] ml-4 md:ml-0 pl-16 md:pl-24 space-y-32">
            {/* Experience */}
            <div className="relative">
                <div className="absolute -left-[70px] md:-left-[102px] top-2 w-2 h-2 rounded-full bg-accent-cyan" />
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 gap-2">
                  <h3 className="text-3xl font-bold tracking-tight">AI Web Developer Intern</h3>
                  <span className="text-accent-cyan font-mono text-[10px] uppercase tracking-[0.3em]">InAmigos Foundation</span>
                </div>
                <ul className="list-disc list-inside text-white/40 text-lg font-light leading-relaxed max-w-2xl space-y-2">
                  <li>Audited and reviewed the organization’s existing website and user experience.</li>
                  <li>Identified usability, design, and performance bottlenecks and proposed AI‑enhanced solutions.</li>
                  <li>Implemented AI‑driven features (prompt‑engineered content generation, intelligent search) using Next.js, TypeScript, and Gemini APIs.</li>
                  <li>Collaborated with cross‑functional teams to integrate backend services and improve data flow.</li>
                </ul>
            </div>

            <div className="relative mt-12">
              <div className="absolute -left-[70px] md:-left-[102px] top-2 w-2 h-2 rounded-full bg-white/10" />
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 gap-2">
                <h3 className="text-3xl font-bold tracking-tight">Operations & Data Intern (IT & Compliance) Dec 2025 – Feb 2026</h3>
                <span className="text-accent-cyan font-mono text-[10px] uppercase tracking-[0.3em]">Orange Securitas Private Limited</span>
              </div>
              <ul className="list-disc list-inside text-white/40 text-lg font-light leading-relaxed max-w-2xl space-y-2">
                <li>Managed compliance datasets, improving data accessibility by 25%</li>
                <li>Streamlined workflows, reducing manual errors by 20%</li>
                <li>Worked with SAP systems supporting payroll and staffing processes</li>
              </ul>
            </div>


            {/* Education */}
            <div className="relative">
               <div className="absolute -left-[70px] md:-left-[102px] top-2 w-2 h-2 rounded-full bg-accent-cyan" />
               <div className="flex flex-col mb-6 gap-2">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                    <h3 className="text-3xl font-bold tracking-tight">Bachelor of Computer Applications (BCA)</h3>
                    <span className="text-accent-cyan font-mono text-[10px] uppercase tracking-[0.3em]">Graduated: 2026</span>
                  </div>
                  <p className="text-white/60 text-lg font-light mb-2">KIIT University</p>
                  <span className="text-white/40 font-mono text-[10px] uppercase tracking-[0.1em] border border-white/10 px-3 py-1 rounded-full w-fit">Convocation Pending</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CreativeCollaborations() {
  const collabs = [
    { brand: "Tony & Guy", reach: "Millions of Views", focus: "Creative Branding" },
    { brand: "Birds of Paradyes", reach: "High Engagement", focus: "Visual Storytelling" }
  ];

  return (
    <section className="bg-black">
      <div className="container-premium">
        <div className="text-center mb-24">
          <h2 className="heading-lg mb-4">Creative Media Experience</h2>
          <p className="text-muted tracking-[0.4em] uppercase text-[10px]">Strategic Brand Collaborations & Media Creation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto mb-20">
          {collabs.map((collab, i) => (
            <motion.div
              key={collab.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-white/[0.01] border border-white/[0.02] hover:border-accent-cyan/10 transition-all text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center mx-auto mb-8 text-accent-blue">
                 <Share2 size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{collab.brand}</h3>
              <p className="text-accent-cyan/60 font-mono text-[9px] uppercase tracking-widest mb-4">{collab.focus}</p>
              <p className="text-white/30 text-sm font-light italic">{collab.reach}</p>
            </motion.div>
          ))}
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="p-12 rounded-[4rem] border border-white/[0.02] bg-zinc-950/20">
            <h4 className="text-center text-sm font-mono tracking-[0.5em] uppercase text-white/20 mb-12">Transferable Industry Skills</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { label: "Visual Storytelling", icon: <Video size={18} /> },
                 { label: "Brand Strategy", icon: <Megaphone size={18} /> },
                 { label: "User Engagement", icon: <Heart size={18} /> },
                 { label: "Design Thinking", icon: <Palette size={18} /> }
               ].map(s => (
                 <div key={s.label} className="flex flex-col items-center gap-4 group">
                    <div className="text-white/20 group-hover:text-accent-cyan transition-colors">{s.icon}</div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-white/20 group-hover:text-white/60 transition-colors text-center">{s.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  const certs = [
    { name: "Generative AI Fundamentals", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/verify/FOH2ORQZ4AK1" },
    { name: "Prompt Engineering Basics", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/verify/FOH2ORQZ4AK1" },
    { name: "Prompt Engineering", issuer: "Vanderbilt University", link: "#" }
  ];

  return (
    <section id="certifications" className="bg-black">
      <div className="container-premium">
        <div className="text-center mb-32">
          <h2 className="heading-lg mb-4">Validated Expertise</h2>
          <p className="text-muted tracking-[0.4em] uppercase text-[10px]">Technical Certifications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
          {certs.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.03] hover:border-accent-cyan/20 transition-all group flex flex-col items-center text-center"
            >
              <div className="p-5 rounded-2xl bg-black border border-white/[0.05] w-fit text-accent-cyan mb-10 group-hover:scale-110 transition-transform">
                 <Award size={28} />
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-accent-cyan transition-colors">{cert.name}</h4>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.3em]">{cert.issuer}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactFooter() {
  return (
    <footer id="contact" className="py-40 bg-black border-t border-white/[0.05]">
      <div className="container-premium text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-40"
        >
          <h2 className="heading-lg mb-8 text-center">Let's build the <span className="text-accent-cyan italic">next.</span></h2>
          <p className="text-xl text-white/30 font-light max-w-lg mx-auto mb-16 leading-relaxed text-center">
            Ready to collaborate on AI-powered applications and data-driven solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-12 mb-24">
            {[
              { icon: <Mail size={22} />, label: "Email", href: "mailto:oindrilac04@gmail.com", color: "hover:text-accent-cyan" },
              { icon: <Phone size={22} />, label: "Call", href: "tel:+919007098009", color: "hover:text-accent-blue" },
              { icon: <LinkedInIcon size={22} />, label: "LinkedIn", href: "https://www.linkedin.com/in/oindrila-chatterjee-4258a5276", color: "hover:text-accent-cyan" },
              { icon: <GitHubIcon size={22} />, label: "GitHub", href: "https://github.com/oindrilaverse", color: "hover:text-white" }
            ].map((link, idx) => (
              <a key={idx} href={link.href} target="_blank" className="group flex flex-col items-center gap-5">
                <div className={classNames("p-7 rounded-full border border-white/[0.03] bg-white/[0.01] transition-all group-hover:border-white/10 group-hover:bg-white/[0.03]", link.color)}>
                  {link.icon}
                </div>
                <span className="text-[9px] font-mono text-white/20 group-hover:text-white transition-colors uppercase tracking-[0.4em]">{link.label}</span>
              </a>
            ))}
          </div>

          <a href="#" className="inline-flex items-center gap-4 text-white/30 hover:text-white transition-colors text-[10px] font-mono uppercase tracking-[0.5em]">
             <Download size={16} /> Download Full Résumé
          </a>
        </motion.div>

        <div className="pt-20 border-t border-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-8 opacity-20 px-4">
           <span className="text-[9px] font-mono uppercase tracking-[0.6em]">Oindrila Chatterjee &copy; 2026</span>
           <span className="text-[9px] font-mono uppercase tracking-[0.6em]">Creative Developer // AI Specialist</span>
        </div>
      </div>
    </footer>
  );
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
export default Journey;
