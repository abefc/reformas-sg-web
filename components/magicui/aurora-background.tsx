"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true
}: {
  className?: string;
  children?: React.ReactNode;
  showRadialGradient?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative isolate flex flex-col items-center justify-center overflow-hidden bg-background",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: `
            repeating-linear-gradient(100deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 7%, rgba(255,255,255,0.04) 10%, rgba(255,255,255,0) 12%, rgba(255,255,255,0) 16%),
            repeating-linear-gradient(100deg, #d4af37 10%, #b5942a 15%, #8e731f 20%, #41340d 25%, #d4af37 30%)
          `,
          backgroundSize: "300% 200%",
          backgroundPosition: "50% 50%, 50% 50%",
          filter: "blur(60px) saturate(140%)",
          mixBlendMode: "screen",
          maskImage: showRadialGradient
            ? "radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)"
            : undefined,
          WebkitMaskImage: showRadialGradient
            ? "radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)"
            : undefined,
          animation: "aurora 60s linear infinite"
        }}
      />
      {children}
    </div>
  );
}
