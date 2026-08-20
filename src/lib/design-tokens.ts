/**
 * Brightly Design System — Color Tokens
 *
 * Single source of truth for all color values used across the application.
 * These mirror the CSS custom properties defined in globals.css
 * and are used for programmatic access (e.g., Framer Motion, charts).
 */

export const colors = {
  forest: "#063B2C",
  forestDark: "#042A1F",
  greenDark: "#0B4A35",
  lime: "#B9F227",
  limeSoft: "#EAF8C9",
  offwhite: "#F7F8F2",
  white: "#FFFFFF",
  textPrimary: "#082B20",
  textMuted: "#66736D",
  borderSoft: "#DDE5DD",
} as const;

export type ColorToken = keyof typeof colors;
