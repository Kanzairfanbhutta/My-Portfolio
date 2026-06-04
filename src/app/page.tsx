import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import SkillsCertifications from "@/components/sections/SkillsCertifications";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col w-full bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Spotlight */}
        <Hero />

        {/* Professional Summary */}
        <About />

        {/* Services & Expertise */}
        <Services />

        {/* Work Timeline */}
        <Experience />

        {/* Skills & Certifications */}
        <SkillsCertifications />

        {/* Academic Profile */}
        <Education />

        {/* Connect / Form */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card py-8 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Kanza I. Bhutta. All rights reserved.</p>
          <p className="mt-1">
            Certified Human Resources Professional (CHRP) | C-Suite Recruitment & Strategic Partnering
          </p>
        </div>
      </footer>
    </div>
  );
}
