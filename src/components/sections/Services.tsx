"use client";

import React from "react";
import { Sparkles, Users, UserCheck, Briefcase, FileText, Globe, Tag, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal";

const servicesList = [
  {
    icon: Users,
    title: "Human Resources (HR)",
    description: "End-to-end personnel onboarding, employee relations, policy audits, talent strategy, and workplace culture development.",
  },
  {
    icon: UserCheck,
    title: "HR Consulting",
    description: "Aligning human capital strategies with business goals, optimizing hiring funnels, and designing competitive compensation structures.",
  },
  {
    icon: FileText,
    title: "Administrative Assistance",
    description: "Highly structured administrative support, documentation control, schedule mapping, and cross-departmental operations.",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "Scoping timelines, allocating resources, managing deliverables, and leading cross-functional teams using structured frameworks.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 relative bg-secondary/35">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal threshold={0.15}>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-9 items-center justify-center rounded-full bg-accent/10 px-4 text-xs font-semibold text-accent dark:bg-accent/20">
              <Sparkles className="mr-1.5 h-4 w-4" /> Solutions
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Services & Expertise
            </h2>
            <div className="mt-2 h-1 w-12 bg-accent rounded" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          {/* Left: Overview, Availability & Pricing */}
          <div className="space-y-6 lg:col-span-5 flex flex-col justify-between">
            <ScrollReveal direction="right" delay={0.1} className="h-full flex flex-col gap-6">
              {/* Overview */}
              <Card className="border-border/40 bg-card/40 backdrop-blur-sm flex-grow">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground">Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    I lead strategic recruitment by partnering with hiring managers to ensure efficient hiring, focusing on IT and SaaS roles. I maintain a strong talent pipeline aligned with business needs, support resource planning, optimize team structures, and align workforce capabilities with goals. I also manage client relationships by anticipating talent demands and delivering tailored HR solutions.
                  </p>
                </CardContent>
              </Card>

              {/* Stats details */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Availability */}
                <Card className="border-border/40 bg-card/40 backdrop-blur-sm">
                  <CardContent className="p-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-accent">
                      <Globe className="h-4.5 w-4.5" />
                      <span className="text-xs font-bold uppercase tracking-wider">Availability</span>
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      Remote or in person
                    </p>
                    <span className="text-xs text-muted-foreground font-medium">
                      Lahore, Pakistan
                    </span>
                  </CardContent>
                </Card>

                {/* Pricing */}
                <Card className="border-border/40 bg-card/40 backdrop-blur-sm">
                  <CardContent className="p-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-accent">
                      <Tag className="h-4.5 w-4.5" />
                      <span className="text-xs font-bold uppercase tracking-wider">Pricing</span>
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      Contact for pricing
                    </p>
                    <a
                      href="#contact"
                      className="text-xs text-accent hover:underline font-medium transition-colors"
                    >
                      Inquire details →
                    </a>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Services Grid */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.2} className="h-full">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 h-full">
                {servicesList.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card
                      key={service.title}
                      className="border-border/40 bg-card/40 backdrop-blur-sm transition-all hover:bg-card hover:shadow-lg flex flex-col"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-3">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-base font-bold text-foreground">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-xs leading-relaxed text-muted-foreground flex-grow">
                        {service.description}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
