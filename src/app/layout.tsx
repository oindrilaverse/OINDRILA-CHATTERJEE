

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oindrila Chatterjee | Full Stack Developer & AI SaaS Builder",
  description:
    "BCA Graduate building AI-powered SaaS applications using Next.js, TypeScript, Node.js, PostgreSQL, Supabase, Prisma, and Generative AI APIs.",
  keywords: [
    "Oindrila Chatterjee",
    "Full Stack Developer",
    "AI SaaS",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Prisma",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#030303] text-white selection:bg-cyan-500 selection:text-black">
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
