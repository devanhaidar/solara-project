/**
 * Solara UI — Container Component
 *
 * Responsive content wrapper with max-width and padding
 * following the PRD layout system.
 *
 * Desktop: max 1440px, padding 48–72px
 * Tablet:  padding 32–48px
 * Mobile:  padding 20–24px
 */

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1440px]",
        "px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[72px]",
        className
      )}
    >
      {children}
    </Component>
  );
}
