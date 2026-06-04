"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: threshold, once });

  const directionOffsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const offset = directionOffsets[direction];

  return (
    <div ref={ref} className={className}>
      <motion.div
        className={className.includes("h-full") ? "h-full" : ""}
        initial={{
          opacity: 0,
          x: offset.x,
          y: offset.y,
        }}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0, x: offset.x, y: offset.y }
        }
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.21, 0.47, 0.32, 0.98], // smooth spring-like easing
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
