/**
 * Brightly UI — Badge Component
 *
 * Small sustainability badges / eyebrow labels.
 * Examples: "Renewable Energy for a Cleaner Future", "100% Clean Energy"
 */

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "lime" | "soft" | "dark";
  className?: string;
}

const variantStyles = {
  lime: "bg-lime/15 text-forest border-lime/30",
  soft: "bg-lime-soft text-forest border-lime-soft",
  dark: "bg-forest text-lime border-forest",
} as const;

export function Badge({ children, variant = "lime", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5",
        "px-4 py-1.5 text-xs font-heading font-semibold uppercase tracking-wider",
        "rounded-[--radius-button] border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
