import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Oindrila Chatterjee | Creative Developer & AI Specialist",
  description: "Redefining the digital landscape with AI-powered solutions and premium user experiences. Portfolio of Oindrila Chatterjee.",
  keywords: ["Oindrila Chatterjee", "Data Analyst", "AI Enthusiast", "Creative Developer", "Next.js", "Three.js", "Framer Motion"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-[#030303] text-white selection:bg-cyan-500 selection:text-black`}
      >
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
