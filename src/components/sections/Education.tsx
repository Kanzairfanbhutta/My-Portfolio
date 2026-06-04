"use client";

import React from "react";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal";

const educationList = [
  {
    institution: "Lahore University of Management Sciences",
    shortName: "LUMS",
    degree: "Professional Communication Skills",
    period: "November 2025 - December 2025",
    description: "Advanced program focused on corporate communications, negotiations, presentation excellence, and strategic messaging.",
  },
  {
    institution: "University of Management and Technology",
    shortName: "UMT",
    degree: "MS in Project Management",
    period: "Post-Graduate Program",
    description: "Specialized in people-centered organizational leadership, Agile methodologies, resource scoping, operational scheduling, and program optimization.",
  },
  {
    institution: "University of the Punjab, Lahore",
    shortName: "PU",
    degree: "BBIT(Hons), Business and Information Technology",
    period: "Undergraduate Degree",
    description: "Joint program merging business administration and organizational systems with corporate database management, analytics, and software logic.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal threshold={0.15}>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-9 items-center justify-center rounded-full bg-accent/10 px-4 text-xs font-semibold text-accent dark:bg-accent/20">
              <GraduationCap className="mr-1.5 h-4 w-4" /> Academic Background
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Education & Certifications
            </h2>
            <div className="mt-2 h-1 w-12 bg-accent rounded" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {educationList.map((edu, index) => (
            <ScrollReveal
              key={edu.institution}
              direction="up"
              delay={0.1 * index}
              threshold={0.1}
              className="h-full"
            >
              <Card className="h-full border-border/40 bg-card/40 backdrop-blur-sm transition-all hover:bg-card hover:-translate-y-1 hover:border-accent/40 flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground gap-2 mb-1">
                    <span className="font-semibold text-accent uppercase tracking-wider">{edu.shortName}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{edu.period.split(" - ").pop()}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground leading-snug">
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="text-xs font-medium text-muted-foreground mt-1">
                    {edu.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {edu.description}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Education;
