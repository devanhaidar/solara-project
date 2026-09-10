import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

/* ============================================
   Font Configuration
   Manrope → Headings (weight 600–700)
   Inter   → Body text (weight 400–500)
   ============================================ */

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* ============================================
   Global Metadata
   ============================================ */

export const metadata: Metadata = {
  title: {
    default: "Solara Energy — Green & Renewable Energy Solutions",
    template: "%s | Solara Energy",
  },
  description:
    "Solara Energy delivers smart renewable-energy solutions — solar, wind, energy storage, and intelligent energy management — designed to reduce costs and support a cleaner planet.",
  keywords: [
    "renewable energy",
    "solar energy",
    "wind energy",
    "energy storage",
    "smart energy management",
    "clean energy",
    "green energy",
    "sustainability",
    "Solara Energy",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Solara Energy",
    title: "Solara Energy — Green & Renewable Energy Solutions",
    description:
      "Smart renewable-energy solutions designed to reduce costs, improve energy independence, and support a cleaner planet.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

import { Navbar } from "@/components/navigation/navbar";

/* ============================================
   Root Layout
   ============================================ */

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-offwhite text-text-primary antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
