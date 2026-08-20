/**
 * Brightly — Site Configuration
 *
 * Centralized site-wide constants: navigation, company info,
 * statistics, and content data.
 */

export const siteConfig = {
  name: "Solara Energy",
  tagline: "Green & Renewable Energy Solutions",
  description:
    "Smart renewable-energy solutions designed to reduce costs, improve energy independence, and support a cleaner planet.",
  url: "https://solara.energy",
} as const;

/* ---- Navigation ---- */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Solar Energy", href: "/solutions/solar-energy" },
      { label: "Wind Energy", href: "/solutions/wind-energy" },
      { label: "Energy Storage", href: "/solutions/energy-storage" },
      { label: "Smart Energy Management", href: "/solutions/smart-energy" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const ctaText = "Get Free Consultation";

/* ---- Company Stats ---- */

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const companyStats: Stat[] = [
  { value: "250", suffix: "+", label: "Projects Completed" },
  { value: "120", suffix: " MW+", label: "Clean Energy Generated" },
  { value: "98", suffix: "%", label: "Client Satisfaction" },
];

export const impactStats: Stat[] = [
  { value: "120", suffix: " MW+", label: "Renewable Energy Generated" },
  { value: "85000", suffix: "+", label: "Tons CO₂ Reduced" },
  { value: "250", suffix: "+", label: "Energy Projects" },
  { value: "40", suffix: "%", label: "Average Energy Cost Reduction" },
];

/* ---- Solutions ---- */

export interface Solution {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const solutions: Solution[] = [
  {
    title: "Solar Energy",
    description:
      "Commercial, industrial, rooftop, and utility-scale solar solutions designed to maximize your energy independence.",
    href: "/solutions/solar-energy",
    icon: "solar-energy",
  },
  {
    title: "Wind Energy",
    description:
      "Scalable wind-power solutions for businesses seeking clean, reliable, and cost-effective energy generation.",
    href: "/solutions/wind-energy",
    icon: "wind-energy",
  },
  {
    title: "Energy Storage",
    description:
      "Advanced battery storage systems for backup power, peak shaving, and energy optimization.",
    href: "/solutions/energy-storage",
    icon: "energy-storage",
  },
  {
    title: "Smart Energy Management",
    description:
      "Intelligent monitoring and analytics platform for real-time energy insights and predictive maintenance.",
    href: "/solutions/smart-energy",
    icon: "smart-energy",
  },
];

/* ---- Footer Links ---- */

export const footerLinks = {
  solutions: [
    { label: "Solar Energy", href: "/solutions/solar-energy" },
    { label: "Wind Energy", href: "/solutions/wind-energy" },
    { label: "Energy Storage", href: "/solutions/energy-storage" },
    { label: "Smart Energy", href: "/solutions/smart-energy" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Insights", href: "/insights" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
] as const;
