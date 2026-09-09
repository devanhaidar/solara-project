"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, DollarSign, Leaf, MapPin, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectItem {
  id: string;
  title: string;
  category: "solar" | "wind" | "storage" | "microgrid";
  categoryLabel: string;
  location: string;
  capacity: string;
  generation: string;
  annualSavings: string;
  co2Offset: string;
  image: string;
  description: string;
  clientQuote?: string;
  clientAuthor?: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "nexus-solar",
    title: "Nexus Commercial Logistics Center",
    category: "solar",
    categoryLabel: "Commercial Solar PV",
    location: "Ontario, California",
    capacity: "2.4 MW Rooftop PV",
    generation: "3,800 MWh / yr",
    annualSavings: "$640,000 / yr",
    co2Offset: "2,700 Tons / yr",
    image: "/images/project-nexus-solar.jpg",
    description:
      "A high-density ballasted rooftop array across a 480,000 sq ft cold storage distribution facility, cutting daytime grid demand charges by 62%.",
    clientQuote: "Solara engineered the entire installation without interrupting our 24/7 refrigerated logistics operations.",
    clientAuthor: "VP of Supply Chain Infrastructure, Nexus Logistics",
  },
  {
    id: "highland-wind",
    title: "Highland Industrial Wind Farm",
    category: "wind",
    categoryLabel: "Onshore Wind",
    location: "Sweetwater, Texas",
    capacity: "18.0 MW Direct-Drive",
    generation: "52,000 MWh / yr",
    annualSavings: "$2.9M / yr",
    co2Offset: "36,800 Tons / yr",
    image: "/images/project-highland-wind.jpg",
    description:
      "Twelve low-acoustic direct-drive onshore turbines powering continuous smelting operations with guaranteed night-shift clean generation.",
    clientQuote: "The predictive SCADA diagnostics have given us a 99.4% turbine availability rate over the last 18 months.",
    clientAuthor: "Operations Director, Highland Steel & Alloy",
  },
  {
    id: "apex-storage",
    title: "Apex Technology Industrial BESS",
    category: "storage",
    categoryLabel: "Battery Storage",
    location: "Phoenix, Arizona",
    capacity: "10 MW / 40 MWh LFP",
    generation: "Sub-16ms Islanding",
    annualSavings: "$1.45M / yr",
    co2Offset: "12,400 Tons / yr",
    image: "/images/project-apex-storage.jpg",
    description:
      "Utility-interconnected containerized battery storage system designed for 4-hour peak arbitrage and emergency microgrid black-start capability.",
    clientQuote: "Our facility endured two major heatwave brownouts without a second of downtime thanks to Solara BESS.",
    clientAuthor: "Chief Facilities Officer, Apex Semiconductor",
  },
  {
    id: "floating-solar-lake",
    title: "Alpine Reservoir Floating Solar",
    category: "solar",
    categoryLabel: "Floating Solar PV",
    location: "Graubünden Alpine Basin",
    capacity: "8.2 MW Floating Array",
    generation: "13,400 MWh / yr",
    annualSavings: "$1.85M / yr",
    co2Offset: "9,200 Tons / yr",
    image: "/images/project-floating-solar.jpg",
    description:
      "Water-cooled pontoon-mounted photovoltaic installation reducing reservoir water evaporation while delivering a 14% efficiency boost from natural cooling.",
    clientQuote: "The water cooling effect and alpine albedo delivered yields that significantly exceeded our initial P50 models.",
    clientAuthor: "Head of Regional Water Authority",
  },
  {
    id: "innovatech-microgrid",
    title: "InnovaTech Sustainable Campus",
    category: "microgrid",
    categoryLabel: "Hybrid Microgrid",
    location: "San Jose, California",
    capacity: "5 MW Solar + 12 MWh BESS",
    generation: "8,900 MWh / yr",
    annualSavings: "$1.62M / yr",
    co2Offset: "6,500 Tons / yr",
    image: "/images/project-urban-microgrid.jpg",
    description:
      "Net-zero tech headquarters combining bifacial parking canopies, 80 Level-2 EV charging ports, rooftop PV, and automated Solara OS dispatch.",
    clientQuote: "Our campus operates at 92% net-zero autonomy while charging hundreds of employee EVs every workday.",
    clientAuthor: "Director of Workplace & ESG, InnovaTech HQ",
  },
  {
    id: "verdant-agri",
    title: "Verdant Valley Agro-Photovoltaics",
    category: "solar",
    categoryLabel: "Agri-Solar Dual Yield",
    location: "Willamette Valley, Oregon",
    capacity: "4.5 MW Dual-Axis",
    generation: "7,100 MWh / yr",
    annualSavings: "$920,000 / yr",
    co2Offset: "5,100 Tons / yr",
    image: "/images/project-verdant-agri.jpg",
    description:
      "Elevated tracker solar modules designed above premium organic berry crops, shielding plants from hail while generating clean power for cold processing.",
    clientQuote: "We harvested record fruit yields while generating over nine hundred thousand dollars in clean power revenue.",
    clientAuthor: "Founder, Verdant Valley Estates",
  },
];

const categories = [
  { key: "all", label: "All Projects" },
  { key: "solar", label: "Solar PV" },
  { key: "wind", label: "Wind Generation" },
  { key: "storage", label: "Battery BESS" },
  { key: "microgrid", label: "Hybrid Microgrids" },
];

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full font-heading font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-forest text-lime shadow-md scale-105"
                  : "bg-white text-forest/70 hover:text-forest border border-border-soft hover:border-forest/30"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              key={project.id}
              className="bg-white rounded-3xl border border-border-soft overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
                  
                  {/* Category & Capacity Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-forest/85 backdrop-blur-md text-lime font-heading font-bold text-xs border border-white/10">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-offwhite text-xs">
                    <span className="flex items-center gap-1 text-white/90">
                      <MapPin size={13} className="text-lime" />
                      {project.location}
                    </span>
                    <span className="font-heading font-extrabold text-lime text-sm">
                      {project.capacity}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-heading font-extrabold text-xl text-forest tracking-tight group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-xs sm:text-sm mt-2.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Stats Strip */}
                  <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-border-soft">
                    <div className="p-2.5 rounded-xl bg-[#F7F8F2] border border-border-soft/60">
                      <div className="text-[11px] font-semibold text-text-muted uppercase">Annual Savings</div>
                      <div className="font-heading font-extrabold text-sm sm:text-base text-forest mt-0.5">
                        {project.annualSavings}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F7F8F2] border border-border-soft/60">
                      <div className="text-[11px] font-semibold text-text-muted uppercase">CO₂ Abatement</div>
                      <div className="font-heading font-extrabold text-sm sm:text-base text-emerald-700 mt-0.5">
                        {project.co2Offset}
                      </div>
                    </div>
                  </div>

                  {/* Client Quote snippet */}
                  {project.clientQuote && (
                    <div className="mt-5 p-3 rounded-xl bg-lime-soft/40 border-l-2 border-forest text-[12px] text-forest/90 italic">
                      &ldquo;{project.clientQuote}&rdquo;
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom CTA Action */}
              <div className="p-6 pt-0">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-forest/5 hover:bg-forest text-forest hover:text-lime font-heading font-bold text-xs transition-colors duration-200"
                >
                  <span>Inquire About Similar Deployment</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
