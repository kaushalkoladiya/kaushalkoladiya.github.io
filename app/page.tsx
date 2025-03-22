"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import { Particles } from "@/components/ui/particles";
import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Particles />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Blog />
      <Testimonials />
      <Contact />
    </main>
  );
}