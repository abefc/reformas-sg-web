"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BrushReveal({
  children,
  delay = 0,
  duration = 1.4,
  className
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ clipPath: "inset(0 100% 0 0)", filter: "blur(6px)" }}
      animate={{ clipPath: "inset(0 0% 0 0)", filter: "blur(0px)" }}
      transition={{
        clipPath: { duration, delay, ease: [0.7, 0, 0.3, 1] },
        filter: { duration: duration * 0.6, delay: delay + duration * 0.4 }
      }}
      className={cn("inline-block will-change-[clip-path]", className)}
    >
      {children}
    </motion.span>
  );
}
