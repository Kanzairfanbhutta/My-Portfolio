"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal";

const experiences = [
  {
    company: "PureLogics",
    duration: "3 years 3 months",
    location: "Lahore, Punjab, Pakistan",
    roles: [
      {
        title: "Senior Talent Acquisition Lead",
        period: "December 2025 - Present (7 months)",
        highlights: [
          "Drive strategic recruitment initiatives for C-Suite, executive leadership, and technical teams.",
          "Partner with hiring managers and cross-functional teams to streamline recruitment workflows.",
          "Maintained a strong talent pipeline that aligns with IT & SaaS recruitment demands."
        ]
      },
      {
        title: "Talent Acquisition Specialist",
        period: "April 2023 - Present (3 years 3 months)",
        highlights: [
          "Specialized in 360° full-cycle recruitment processes for software developers, QA leads, and cloud architects.",
          "Managed candidate pipelines, initial screenings, structural interviewing, and compensation negotiations.",
          "Assisted in workforce resource planning to align capabilities with delivery goals."
        ]
      }
    ]
  },
  {
    company: "Madadgaar Haath Foundation",
    duration: "1 year 9 months",
    location: "Pakistan",
    roles: [
      {
        title: "Co-Founder",
        period: "October 2024 - Present (1 year 9 months)",
        highlights: [
          "Contribute to leadership development and organizational structure design.",
          "Collaborated on HR operations, volunteer hiring, and team-building strategies.",
          "Coordinate community projects and manage operations metrics."
        ]
      }
    ]
  },
  {
    company: "Model OIC Pakistan",
    duration: "5 years 2 months",
    location: "Pakistan",
    roles: [
      {
        title: "Ambassador",
        period: "November 2020 - December 2025 (5 years 2 months)",
        highlights: [
          "Represented organization at key regional and national summits.",
          "Facilitated relationships between students, educational bodies, and political delegates.",
          "Organized leadership training sessions and group debates."
        ]
      }
    ]
  },
  {
    company: "Tech Tehwaar - ٹیک تہوار",
    duration: "11 months",
    location: "Lahore, Punjab, Pakistan",
    roles: [
      {
        title: "Brand Ambassador",
        period: "August 2024 - June 2025 (11 months)",
        highlights: [
          "Led community outreach, digital branding campaigns, and talent community engagement.",
          "Represented the brand during major provincial tech events and workshops.",
          "Supported employer branding and outreach projects."
        ]
      }
    ]
  },
  {
    company: "KPMG Australia",
    duration: "3 months",
    location: "Remote / Consulting Program",
    roles: [
      {
        title: "Data Analytics Consulting",
        period: "May 2022 - July 2022 (3 months)",
        highlights: [
          "Practical Tasks Completed:",
          "1. Data Quality Assessment: Assessed demographic, transactional, and address data quality.",
          "2. Data Insights: Constructed analytic models to evaluate customer behavior and target segments.",
          "3. Data Insights and Presentations: Delivered final dashboard insights and strategic pitches."
        ]
      }
    ]
  },
  {
    company: "HAAZIMS",
    duration: "1 year 6 months",
    location: "Pakistan",
    roles: [
      {
        title: "SEO Content Strategist",
        period: "November 2020 - April 2022 (1 year 6 months)",
        highlights: [
          "Conducted keyword research and structured editorial content schedules.",
          "Authored articles and optimized metadata for key search rankings.",
          "Analyzed web traffic analytics to continuously iterate on content conversion rate."
        ]
      }
    ]
  },
  {
    company: "Allied Bank",
    duration: "8 months",
    location: "Pakistan",
    roles: [
      {
        title: "Assisting BSO HR",
        period: "August 2019 - March 2020 (8 months)",
        highlights: [
          "Assisted Business Support Officers in administrative HR processes.",
          "Supported payroll coordination, employee profile audits, and onboarding schedules.",
          "Organized departmental record structures for compliance audits."
        ]
      }
    ]
  },
  {
    company: "KIPS HEAD OFFICE",
    duration: "4 months",
    location: "Lahore, Pakistan",
    roles: [
      {
        title: "Assisting Director of Schools and Colleges",
        period: "September 2017 - December 2017 (4 months)",
        highlights: [
          "Assisted across diverse administrative departments:",
          "1. Recovery Department | 2. Quality Assurance Department | 3. Operations Department | 4. Human Resource Department.",
          "5. Worked as an Internal Auditor and visited every school campus to evaluate operational compliance."
        ]
      }
    ]
  },
  {
    company: "Cakes & Bakes Pakistan",
    duration: "3 months",
    location: "Lahore District, Pakistan",
    roles: [
      {
        title: "Human Resources Intern",
        period: "June 2017 - August 2017 (3 months)",
        highlights: [
          "Supported the recruitment department in processing job applications and scheduling interviews.",
          "Maintained HR databases and employee documentation folders.",
          "Assisted with HR communications and workplace satisfaction surveys."
        ]
      }
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal threshold={0.15}>
          <div className="flex flex-col items-center text-center animate-fade-in">
            <div className="inline-flex h-9 items-center justify-center rounded-full bg-accent/10 px-4 text-xs font-semibold text-accent dark:bg-accent/20">
              <Briefcase className="mr-1.5 h-4 w-4" /> Career Path
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Professional Experience
            </h2>
            <div className="mt-2 h-1 w-12 bg-accent rounded" />
          </div>
        </ScrollReveal>

        {/* Timeline List without vertical stepper line */}
        <div className="relative mt-16 space-y-6">
          {experiences.map((exp, index) => (
            <ScrollReveal
              key={exp.company}
              direction="up"
              delay={0.05 * index}
              threshold={0.05}
            >
              <Card className="border-border/40 bg-card/40 border-l-4 border-l-accent backdrop-blur-sm transition-all hover:bg-card hover:shadow-lg relative overflow-hidden">
                {/* Index number badge in background */}
                <div className="absolute right-6 top-6 text-sm font-mono font-bold text-accent/25 select-none">
                  #{String(index + 1).padStart(2, "0")}
                </div>

                <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <CardTitle className="text-xl font-bold text-foreground">
                        {exp.company}
                      </CardTitle>
                      <Badge variant="secondary">{exp.duration}</Badge>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-0">
                  {exp.roles.map((role, rIndex) => (
                    <div
                      key={role.title}
                      className={`pt-4 ${rIndex > 0 ? "border-t border-border/30" : ""}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                        <h4 className="text-base font-semibold text-accent">
                          {role.title}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{role.period}</span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {role.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-accent/80 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Experience;
