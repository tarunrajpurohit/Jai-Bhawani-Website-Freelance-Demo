"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export function Reveal({
  children,
  className,
  delayMs = 0,
  direction = "up",
}: RevealProps) {
  const initialOffset =
    direction === "left"
      ? { x: -40, y: 0, scale: 0.98 }
      : direction === "right"
        ? { x: 40, y: 0, scale: 0.98 }
        : direction === "scale"
          ? { x: 0, y: 18, scale: 0.93 }
          : { x: 0, y: 36, scale: 0.98 };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)", ...initialOffset }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{
        duration: 0.75,
        delay: delayMs / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
