"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSkillFilter, setActiveSkillFilter] = useState(null);

  const handleSelectSkill = (skill) => {
    setActiveSkillFilter(skill);
    if (skill) {
      const projEl = document.getElementById("projects");
      if (projEl) {
        projEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <main className="w-full min-h-screen py-5">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <Hero onOpenContact={() => setIsContactOpen(true)} />

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Experience />
      </ScrollReveal>

      <ScrollReveal>
        <Projects activeSkillFilter={activeSkillFilter} />
      </ScrollReveal>

      <ScrollReveal>
        <Skills activeSkillFilter={activeSkillFilter} onSelectSkill={handleSelectSkill} />
      </ScrollReveal>

      <ScrollReveal>
        <Certifications />
      </ScrollReveal>

      <ScrollReveal>
        <ResumeSection />
      </ScrollReveal>

      <Footer onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
