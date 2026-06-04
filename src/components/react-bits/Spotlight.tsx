"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export function Spotlight({
  className = "",
  fillColor = "rgba(14, 165, 233, 0.25)", // Vibrant steel blue/teal glow at 25% opacity
}: {
  className?: string;
  fillColor?: string;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 180, mass: 0.6 };
  const lightX = useSpring(mouseX, springConfig);
  const lightY = useSpring(mouseY, springConfig);

  // Use useMotionTemplate to safely interpolate dynamic MotionValues into the CSS background string
  const background = useMotionTemplate`radial-gradient(600px at ${lightX}px ${lightY}px, ${fillColor}, transparent 80%)`;

  useEffect(() => {
    setIsMounted(true);
    
    // Set initial position to center of the viewport
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <motion.div
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 ${className}`}
      style={{
        background,
      }}
    />
  );
}
export default Spotlight;
