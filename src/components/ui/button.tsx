/**
 * Brightly UI — Button Component
 *
 * Variants: lime (primary CTA), dark, secondary (outline)
 * All buttons use fully-rounded (pill) shape per the design system.
 */

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "lime" | "dark" | "secondary";
type ButtonSize = "default" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  lime: "bg-lime text-forest hover:bg-lime/90 shadow-sm",
  dark: "bg-forest text-white hover:bg-green-dark",
  secondary:
    "bg-transparent text-forest border border-border-soft hover:bg-forest/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "lime", size = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2",
          "rounded-[--radius-button] font-heading font-semibold",
          "transition-all duration-[--duration-fast] ease-[--ease-smooth]",
          "cursor-pointer select-none",
          "focus-visible:outline-2 focus-visible:outline-lime focus-visible:outline-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps, type ButtonVariant };
