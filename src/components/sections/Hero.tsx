"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Award, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SplitText } from "@/components/react-bits/SplitText";
import { Lightfall } from "@/components/react-bits/Lightfall";

export function Hero() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden py-10 md:py-14">
      {/* Lightfall Effect Background - positioned at z-0 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Lightfall
          colors={['#0ea5e9', '#38bdf8', '#0284c7', '#0369a1']}
          backgroundColor="#090d16"
          speed={0.4}
          streakCount={4}
          streakWidth={1.5}
          streakLength={1.5}
          glow={1}
          density={0.5}
          twinkle={0.8}
          zoom={2.5}
          backgroundGlow={0.3}
          opacity={0.8}
          mouseInteraction={true}
          mouseStrength={0.8}
          mouseRadius={0.7}
        />
      </div>

      {/* Radial overlay to dim outer edges - positioned at z-[5] */}
      <div className="absolute inset-0 z-[5] bg-background/40 backdrop-blur-[1px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_30%,#000_100%)]" />

      {/* Floating Content Card Wrapper - positioned relative at z-10 to stack on top of background canvas */}
      <div className="relative z-10 mx-4 max-w-3xl sm:mx-auto px-6 py-7 sm:px-11 sm:py-9 text-center bg-background/80 backdrop-blur-md border border-border/40 rounded-2xl shadow-2xl">
        {/* Certification Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-3.5 py-0.5 text-xs font-semibold text-accent shadow-sm backdrop-blur-sm dark:bg-accent/10"
        >
          <Award className="h-4 w-4" />
          Certified Human Resources Professional (CHRP)
        </motion.div>

        {/* Title */}
        <h1 className="mt-3.5 text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <SplitText
            text="Kanza I. Bhutta"
            className="block text-foreground"
            delay={0.2}
          />
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="block bg-gradient-to-r from-sky-100 to-accent bg-clip-text text-transparent mt-1"
          >
            Senior Talent Acquisition Lead
          </motion.span>
        </h1>

        {/* Description Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-3.5 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base"
        >
          Partnering with C-Suite executives & hiring managers to scale IT, SaaS, & cross-functional teams. Specializing in 360° Recruitment, HRBP, Resource Planning, and People & Culture.
        </motion.p>

        {/* Quick HR Stats Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-4 flex flex-wrap justify-center gap-2.5 text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-1.5 rounded-lg border border-border/40 bg-card/40 px-3 py-1.5 backdrop-blur-sm">
            <Users className="h-3.5 w-3.5 text-accent" />
            <span>360° Recruitment & C-Suite</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-border/40 bg-card/40 px-3 py-1.5 backdrop-blur-sm">
            <Briefcase className="h-3.5 w-3.5 text-accent" />
            <span>IT & SaaS Specialist</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-border/40 bg-card/40 px-3 py-1.5 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            <span>Lahore, Punjab, Pakistan</span>
          </div>
        </motion.div>

        {/* Buttons / CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href="#experience">
            <Button className="group gap-2 px-5 py-2 shadow-md shadow-primary/10 cursor-pointer">
              Explore Professional Experience
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" className="px-5 py-2 cursor-pointer">
              Get in Touch
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;
