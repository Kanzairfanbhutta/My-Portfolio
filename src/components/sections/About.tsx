"use client";

import React from "react";
import { User, ShieldCheck, HeartHandshake, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Strategic Trust",
    description: "Aligning human resources with high-level corporate and operational objectives.",
  },
  {
    icon: HeartHandshake,
    title: "People & Culture",
    description: "Building strong professional relationships focused on empathy and performance.",
  },
  {
    icon: Compass,
    title: "Resource Efficiency",
    description: "Optimizing team structure, project workflow, and talent pipelines.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal threshold={0.15}>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-9 items-center justify-center rounded-full bg-accent/10 px-4 text-xs font-semibold text-accent dark:bg-accent/20">
              <User className="mr-1.5 h-4 w-4" /> Professional Summary
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Strategic Talent Partner & HR Advisor
            </h2>
            <div className="mt-2 h-1 w-12 bg-accent rounded" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Summary Text */}
          <div className="space-y-6 lg:col-span-7">
            <ScrollReveal direction="right" delay={0.1}>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                I drive strategic recruitment initiatives by partnering with hiring managers and cross-functional teams to ensure smooth and efficient hiring processes. I maintain a strong talent pipeline that aligns with evolving business needs, particularly for IT and SaaS-based projects.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                Besides this, I contribute to resource planning to support project delivery, optimize team structures, and align workforce capabilities with organizational goals. I also manage client relationships by understanding their unique requirements, anticipating talent demands, and delivering HR solutions that add measurable value to their business.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground border-l-4 border-accent pl-4 italic">
                With an MS in Project Management from UMT and a BBIT(Hons) degree from Punjab University, the foundation complements the professional focus on people-centered HR practices. Current work is enriched by prior experiences in leadership and organizational development, emphasizing efficiency, engagement, and growth.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Cards Highlight / Core Pillars */}
          <div className="grid grid-cols-1 gap-6 lg:col-span-5">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal
                  key={value.title}
                  direction="left"
                  delay={0.15 * (index + 1)}
                  threshold={0.1}
                >
                  <Card className="group border-border/40 bg-card/60 backdrop-blur-sm transition-all hover:bg-card hover:-translate-y-1">
                    <CardContent className="flex gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground dark:bg-primary/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                          {value.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
