"use client";

import { fadeInUp, staggerContainer } from "@/lib/motion";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  MapPin,
  Sun,
  Wind,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectCategory = "all" | "solar" | "wind" | "hybrid";

interface ProjectItem {
  id: string;
  name: string;
  category: "solar" | "wind" | "hybrid";
  categoryLabel: string;
  location: string;
  capacity: string;
  metric: string;
  description: string;
  image: string;
  highlight: string;
  span: string; // Col span class
}

const filterOptions: { id: ProjectCategory; label: string; count: number }[] = [
  { id: "all", label: "All Projects", count: 12 },
  { id: "solar", label: "Solar Systems", count: 6 },
  { id: "wind", label: "Wind Generation", count: 3 },
  { id: "hybrid", label: "Hybrid & Storage", count: 3 },
];

const projects: ProjectItem[] = [
  {
    id: "nexus-tech-park",
    name: "Nexus Innovation Tech Park",
    category: "solar",
    categoryLabel: "Solar Rooftop & EV Canopy",
    location: "Silicon Valley, California",
    capacity: "4.2 MW",
    metric: "-3,850 Tons CO₂ / yr",
    description:
      "Integrated rooftop photovoltaic array paired with 120 EV solar charging canopies across a 45-acre corporate headquarters.",
    image: "/images/project-nexus-solar.jpg",
    highlight: "40% Grid Independence",
    span: "lg:col-span-7",
  },
  {
    id: "highland-wind",
    name: "Highland Coastal Wind Farm",
    category: "wind",
    categoryLabel: "Utility-Scale Wind Power",
    location: "Aberdeenshire, Scotland",
    capacity: "28.5 MW",
    metric: "18,200 Homes Powered",
    description:
      "State-of-the-art onshore wind turbines delivering clean, high-yield kinetic energy directly to municipal and industrial grids.",
    image: "/images/project-highland-wind.jpg",
    highlight: "Zero Fuel Emissions",
    span: "lg:col-span-5",
  },
  {
    id: "apex-logistics",
    name: "Apex Global Logistics Hub",
    category: "hybrid",
    categoryLabel: "Solar + BESS Microgrid",
    location: "Frankfurt, Germany",
    capacity: "6.8 MW + 12 MWh",
    metric: "100% Peak Shaving",
    description:
      "Massive 500,000 sq ft logistics distribution center powered by rooftop solar and a dedicated battery energy storage system.",
    image: "/images/project-apex-storage.jpg",
    highlight: "0ms Switchover Backup",
    span: "lg:col-span-5",
  },
  {
    id: "verdant-agri",
    name: "Verdant Valley Agrivoltaics",
    category: "solar",
    categoryLabel: "Agrivoltaic Solar & Irrigation",
    location: "Barossa Valley, Australia",
    capacity: "2.4 MW",
    metric: "45% Cost Reduction",
    description:
      "Dual-use elevated solar structures protecting agricultural crops and livestock while powering autonomous solar water irrigation.",
    image: "/images/project-verdant-agri.jpg",
    highlight: "Dual-Land Yield",
    span: "lg:col-span-7",
  },
];

export function FeaturedProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="w-full py-14 sm:py-18 lg:py-22 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-[1720px] 2xl:max-w-[1840px] mx-auto overflow-hidden">
      {/* Top Header & Filter Tabs */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 lg:mb-14"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="mb-3 sm:mb-3.5">
            <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-border-soft text-forest text-xs sm:text-sm font-heading font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-lime ring-2 ring-forest/10" />
              <span>Proven Portfolio</span>
            </span>
          </motion.div>

          {/* Dual-Tone Headline */}
          <motion.h2
            variants={fadeInUp}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] leading-[1.08] tracking-tight text-forest"
          >
            Clean Energy in Action <br className="hidden sm:inline" />
            <span className="text-text-muted font-normal">
              Across Enterprise Sectors
            </span>
          </motion.h2>
        </div>

        {/* Filter Pills (Styled like modern tabs) */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-white border border-border-soft shadow-xs"
        >
          {filterOptions.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-heading font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-forest text-white shadow-sm"
                    : "text-text-muted hover:text-forest hover:bg-forest/5"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full transition-colors ${
                    isActive ? "bg-lime text-forest" : "bg-forest/10 text-forest/70"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Editorial Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className={`${project.span} group flex flex-col justify-between rounded-[24px] sm:rounded-[32px] bg-white border border-border-soft overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400`}
            >
              {/* Photo Area with Floating Glass Tags */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-forest">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Top-Left Category Badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-forest text-xs font-heading font-bold uppercase tracking-wider shadow-md">
                    {project.category === "solar" && <Sun size={12} className="text-[#8DC63F]" />}
                    {project.category === "wind" && <Wind size={12} className="text-[#8DC63F]" />}
                    {project.category === "hybrid" && <BatteryCharging size={12} className="text-[#8DC63F]" />}
                    <span>{project.categoryLabel}</span>
                  </span>
                </div>

                {/* Top-Right Capacity Badge */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/90 backdrop-blur-md text-lime text-xs font-heading font-extrabold border border-white/10 shadow-md">
                    <Zap size={11} className="fill-lime" />
                    <span>{project.capacity}</span>
                  </span>
                </div>

                {/* Bottom In-Photo Location & Metric Pill */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-3 text-white text-xs">
                  <div className="flex items-center gap-1.5 text-white/95 font-medium drop-shadow-sm">
                    <MapPin size={13} className="text-lime" />
                    <span>{project.location}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-forest bg-lime px-2 py-0.5 rounded-full shadow-xs">
                    {project.highlight}
                  </span>
                </div>
              </div>

              {/* Bottom Card Narrative Area */}
              <div className="p-5 sm:p-6 lg:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-forest leading-snug group-hover:text-green-dark transition-colors mb-1.5">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-text-muted leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Meta Strip & Link */}
                <div className="flex items-center justify-between pt-3.5 border-t border-border-soft">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-muted font-medium">Impact:</span>
                    <span className="font-heading font-bold text-xs sm:text-sm text-forest">
                      {project.metric}
                    </span>
                  </div>

                  <Link
                    href={`/projects`}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-forest hover:text-green-dark group/link"
                  >
                    <span>Case Study</span>
                    <div className="w-5 h-5 rounded-full bg-forest/5 flex items-center justify-center group-hover/link:bg-lime transition-colors">
                      <ArrowRight size={11} className="text-forest stroke-[2.5]" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom Action Strip */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 sm:mt-12 text-center"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2.5 bg-white hover:bg-forest text-forest hover:text-white font-heading font-bold text-xs sm:text-sm px-6 py-3 rounded-full border border-border-soft hover:border-forest shadow-xs hover:shadow-lg transition-all duration-300 group"
        >
          <span>View All 250+ Global Energy Projects</span>
          <div className="w-5 h-5 rounded-full bg-lime text-forest flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight size={12} className="stroke-[2.5]" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
