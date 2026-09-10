/** Solara — rendered navigation data. Demo content for the slicing project. */
export const ctaText = "Get Free Consultation";

export const companyStats = [
  { value: "250", suffix: "+", label: "Projects Completed" },
  { value: "120", suffix: " MW+", label: "Clean Energy Generated" },
  { value: "98", suffix: "%", label: "Client Satisfaction" },
] as const;

export const solutionsSubmenu = [
  {
    label: "Solar Energy Systems",
    category: "Photovoltaics",
    href: "/solutions/solar-energy",
    desc: "Commercial rooftop, carport & utility-scale bifacial PV arrays.",
    image: "/images/solutions-solar.jpg",
  },
  {
    label: "Wind Generation",
    category: "Kinetic Power",
    href: "/solutions/wind-energy",
    desc: "Direct-drive low-acoustic onshore turbines for 24/7 power.",
    image: "/images/solutions-wind.jpg",
  },
  {
    label: "Battery Storage (BESS)",
    category: "Energy Storage",
    href: "/solutions/energy-storage",
    desc: "Sub-16ms backup islanding & peak tariff shaving systems.",
    image: "/images/solutions-storage.jpg",
  },
  {
    label: "Smart Energy Management",
    category: "Solara OS Telemetry",
    href: "/solutions/smart-energy",
    desc: "Autonomous AI load balancing & real-time grid orchestration.",
    image: "/images/solutions-smart-iot.jpg",
  },
] as const;

export const footerLinks = {
  solutions: [
    {
      href: "/solutions/solar-energy",
      label: "Solar Energy Systems"
    },
    {
      href: "/solutions/wind-energy",
      label: "Wind Power Generation"
    },
    {
      href: "/solutions/energy-storage",
      label: "Battery Storage (BESS)"
    },
    {
      href: "/solutions/smart-energy",
      label: "Smart IoT Energy Management"
    },
    {
      href: "/solutions",
      label: "Commercial Microgrids"
    }
  ],
  company: [
    {
      href: "/about",
      label: "About Solara"
    },
    {
      href: "/projects",
      label: "Featured Projects"
    },
    {
      href: "/about",
      label: "Leadership & Engineering"
    },
    {
      href: "/contact",
      label: "Careers (We're Hiring)"
    },
    {
      href: "/contact",
      label: "Press & Media Kit"
    }
  ]
} as const;
