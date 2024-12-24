"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { ThemeProvider } from "@/components/theme-provider";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="min-h-screen bg-background">
        <Particles />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </ThemeProvider>
  );
}