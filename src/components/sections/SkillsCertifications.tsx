"use client";

import React from "react";
import { Award, Check, Languages, Shield, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal";

const skillCategories = [
  {
    title: "Top Highlighted Skills",
    skills: ["Build Strong Relationships", "Attention to Detail", "LinkedIn Recruiter"],
  },
  {
    title: "HR & Recruitment Competencies",
    skills: [
      "360° Recruitment",
      "C-Suite Recruitment",
      "HRBP (HR Business Partner)",
      "Resource Planner",
      "IT & SaaS Recruitment",
      "HR Ops (Operations)",
      "People & Culture",
      "Project Management",
      "Workforce Optimization",
    ],
  },
];

const certifications = [
  { name: "Certified Human Resources Professional (CHRP)", issuer: "Professional Body" },
  { name: "Time and Stress Management", issuer: "Professional Training" },
  { name: "Content Marketing Certified", issuer: "HubSpot Academy" },
  { name: "Certificate of Completion: Claude 101", issuer: "Technical Seminar" },
  { name: "Leadership and Teams", issuer: "Management Institute" },
];

const awards = [
  { title: "Gold Rector Merit Award", desc: "For Academic and Leadership Excellence" },
  { title: "Silver Dean Merit Award", desc: "For High-Impact Project Delivery & Performance" },
];

const languages = [
  { name: "Urdu", proficiency: "Professional Working Proficiency", val: 80 },
  { name: "English", proficiency: "Full Professional Proficiency", val: 100 },
];

export function SkillsCertifications() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary/30 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal threshold={0.15}>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-9 items-center justify-center rounded-full bg-accent/10 px-4 text-xs font-semibold text-accent dark:bg-accent/20">
              <Award className="mr-1.5 h-4 w-4" /> Credentials
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Skills, Certifications & Awards
            </h2>
            <div className="mt-2 h-1 w-12 bg-accent rounded" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Skills & Languages */}
          <div className="space-y-8 lg:col-span-7">
            {/* Skills */}
            <ScrollReveal direction="right" delay={0.1}>
              <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-bold text-foreground">
                    <Shield className="h-5 w-5 text-accent" />
                    Expertise & Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skillCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        {cat.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant={idx === 0 ? "accent" : "secondary"}
                            className="px-3 py-1 text-sm font-medium transition-all hover:scale-105"
                          >
                            <Check className="mr-1 h-3.5 w-3.5" />
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Languages */}
            <ScrollReveal direction="right" delay={0.2}>
              <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-bold text-foreground">
                    <Languages className="h-5 w-5 text-accent" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {languages.map((lang) => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex justify-between items-baseline">
                        <span className="font-semibold text-foreground">{lang.name}</span>
                        <span className="text-xs text-muted-foreground">{lang.proficiency.split(" ")[0] + " " + lang.proficiency.split(" ")[1]}</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full transition-all duration-1000"
                          style={{ width: `${lang.val}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground block">{lang.proficiency}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Right Column: Certifications & Honors */}
          <div className="space-y-8 lg:col-span-5">
            {/* Certifications */}
            <ScrollReveal direction="left" delay={0.15}>
              <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-bold text-foreground">
                    <Award className="h-5 w-5 text-accent" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-start gap-3 border-b border-border/30 pb-3 last:border-0 last:pb-0"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Award className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground leading-snug">
                          {cert.name}
                        </h4>
                        <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Honors & Awards */}
            <ScrollReveal direction="left" delay={0.25}>
              <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-bold text-foreground">
                    <Trophy className="h-5 w-5 text-accent" />
                    Honors & Awards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {awards.map((award) => (
                    <div key={award.title} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-500">
                        <Trophy className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground leading-snug">
                          {award.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{award.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SkillsCertifications;
