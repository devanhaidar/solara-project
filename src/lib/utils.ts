/**
 * Solara — Utility functions
 *
 * Shared utility helpers used across the application.
 */

import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names with clsx.
 * Accepts conditional classes and arrays.
 *
 * @example
 * cn("base-class", isActive && "active", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
