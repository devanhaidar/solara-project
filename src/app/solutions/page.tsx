import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Footer } from "@/components/navigation/footer";
import { FinalCtaSection } from "@/components/sections/cta-section";
import { SavingsCalculator } from "@/components/solutions/savings-calculator";
import {
  Sun,
  Wind,
  BatteryCharging,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  BarChart3,
  ShieldAlert,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renewable Energy Solutions",
  description:
    "Explore Solara Energy's integrated commercial solar, wind generation, megawatt battery energy storage, and smart telemetry OS.",
};

const solutionsList = [
  {
    slug: "solar-energy",
    title: "Solar Energy Systems",
    tagline: "Commercial, Industrial & Utility-Scale Photovoltaics",
    description:
      "High-efficiency monocrystalline and bifacial solar panel arrays engineered for factory rooftops, corporate campuses, carports, and utility ground mounts.",
    image: "/images/solutions-solar.jpg",
    icon: Sun,
    stats: "50 kW to 50+ MW",
    roi: "3.0 – 4.5 Years Payback",
    highlights: [
      "Tier-1 N-Type TOPCon & Heterojunction (HJT) PV Cells",
      "Maximum Power Point Tracking (MPPT) String Inverters",
      "Aerodynamic Ballasted & Structural Penetration Racking",
      "25-Year Comprehensive Linear Output Guarantee",
    ],
  },
  {
    slug: "wind-energy",
    title: "Wind Generation",
    tagline: "Distributed & Utility Onshore Turbines",
    description:
      "Modern low-acoustic wind power plants delivering continuous, high-capacity clean generation during nocturnal and seasonal peaks when solar is offline.",
    image: "/images/solutions-wind.jpg",
    icon: Wind,
    stats: "500 kW to 20+ MW",
    roi: "4.0 – 5.5 Years Payback",
    highlights: [
      "Direct-Drive Permanent Magnet Synchronous Generators",
      "Intelligent Pitch Control & Aerodynamic Blade Pitching",
      "Low Cut-In Wind Speeds (from 2.5 m/s)",
      "Continuous Nighttime Basal Generation",
    ],
  },
  {
    slug: "energy-storage",
    title: "Battery Storage (BESS)",
    tagline: "Megawatt-Scale Lithium Iron Phosphate (LFP) Systems",
    description:
      "Utility and industrial battery energy storage designed for millisecond emergency backup, peak demand shaving, and dynamic wholesale energy arbitrage.",
    image: "/images/solutions-storage.jpg",
    icon: BatteryCharging,
    stats: "250 kWh to 100+ MWh",
    roi: "3.5 – 5.0 Years Payback",
    highlights: [
      "Thermal-Stable Lithium Iron Phosphate (LFP) Chemistry",
      "Sub-20ms Microgrid Islanding Transfer Times",
      "Liquid-Cooled Modular Rack Architecture",
      "UL 9540A Fire-Safe Certified Enclosures",
    ],
  },
  {
    slug: "smart-energy",
    title: "Smart Energy Management",
    tagline: "Solara OS Telemetry & Real-Time AI Optimization",
    description:
      "End-to-end IoT sensor networks and algorithmic power telemetry that autonomously orchestrates generation, storage, and factory loads.",
    image: "/images/solutions-smart-iot.jpg",
    icon: Cpu,
    stats: "Sub-Second Telemetry",
    roi: "Immediate OpEx Gains",
    highlights: [
      "Day-Ahead Machine Learning Tariff Arbitrage",
      "Sub-Second High-Precision IoT Power Meters",
      "Predictive Inverter & Mechanical Degradation Warnings",
      "Automated SEC/ESG Scope 1 & 2 Carbon Reporting",
    ],
  },
];

const comparisonTable = [
  {
    tech: "Commercial Solar PV",
    capacity: "100 kW – 25 MW",
    payback: "3.0 – 4.2 Yrs",
    gridIndependence: "40% – 70%",
    idealFor: "Factories, Distribution Centers, Campuses",
  },
  {
    tech: "Industrial Wind Turbines",
    capacity: "1 MW – 50 MW",
    payback: "4.0 – 5.5 Yrs",
    gridIndependence: "50% – 80%",
    idealFor: "Rural Industrial Sites, Agro-Tech, Coastal Areas",
  },
  {
    tech: "BESS Battery Storage",
    capacity: "500 kWh – 100 MWh",
    payback: "3.5 – 5.0 Yrs",
    gridIndependence: "Backup & Peak Shaving",
    idealFor: "Data Centers, Cold Storage, Critical Manufacturing",
  },
  {
    tech: "Hybrid Solar + BESS Microgrid",
    capacity: "Custom Turnkey",
    payback: "3.2 – 4.5 Yrs",
    gridIndependence: "85% – 100% True Zero",
    idealFor: "Islanded Facilities, Mining, High-Tariff Zones",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-offwhite flex flex-col selection:bg-lime selection:text-forest">
      {/* 1. Page Header */}
      <PageHeader
        badge="Enterprise Energy Portfolio"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
        title="Scalable Clean Energy Architecture for"
        highlightedWord="Enterprise Autonomy."
        description="Comprehensive solar, wind, storage, and intelligent cloud telemetry engineered to insulate your bottom line from grid volatility and fossil-fuel tariffs."
        bgImage="/images/solutions-solar.jpg"
      />

      <main className="flex-1">
        {/* 2. Solutions Cards Detail Grid */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Core Verticals
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mt-2">
                Four Pillars of Modern Clean Power Generation
              </h2>
            </div>

            <div className="space-y-12 lg:space-y-16">
              {solutionsList.map((sol, index) => {
                const Icon = sol.icon;
                const isEven = index % 2 === 1;

                return (
                  <div
                    key={sol.slug}
                    className="p-6 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[36px] bg-white border border-border-soft hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                  >
                    {/* Visual Media Column */}
                    <div className={`lg:col-span-6 relative ${isEven ? "lg:order-2" : ""}`}>
                      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] shadow-md group">
                        <Image
                          src={sol.image}
                          alt={sol.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                          <span className="px-3 py-1 rounded-full bg-forest/80 backdrop-blur-sm border border-white/20 text-xs font-bold text-lime">
                            Capacity: {sol.stats}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-forest/80 backdrop-blur-sm border border-white/20 text-xs font-bold text-white">
                            ROI: {sol.roi}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-forest text-lime flex items-center justify-center shadow-sm">
                          <Icon size={20} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                          {sol.tagline}
                        </span>
                      </div>

                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest tracking-tight mb-4">
                        {sol.title}
                      </h3>

                      <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                        {sol.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                        {sol.highlights.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-forest font-medium">
                            <CheckCircle2 size={16} className="text-lime-dark shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <Link
                          href={`/solutions/${sol.slug}`}
                          className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-offwhite font-heading font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-md transition-all group"
                        >
                          <span>Explore {sol.title} Specifications</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-lime" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Interactive ROI & Savings Calculator Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <SavingsCalculator />
          </div>
        </section>

        {/* 4. Comparison Matrix Table */}
        <section className="py-16 sm:py-20 bg-white border-y border-border-soft">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Specification Matrix
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mt-2">
                Comparative Clean Energy Architecture
              </h2>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-border-soft shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-forest text-offwhite font-heading text-xs sm:text-sm">
                    <th className="p-4 sm:p-5">Generation Tech</th>
                    <th className="p-4 sm:p-5">Typical Deployment</th>
                    <th className="p-4 sm:p-5">Est. Payback</th>
                    <th className="p-4 sm:p-5">Grid Independence</th>
                    <th className="p-4 sm:p-5">Optimal Applications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-soft bg-white text-xs sm:text-sm text-text-primary">
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F7F8F2]/70 transition-colors">
                      <td className="p-4 sm:p-5 font-heading font-bold text-forest">
                        {row.tech}
                      </td>
                      <td className="p-4 sm:p-5 text-text-secondary">{row.capacity}</td>
                      <td className="p-4 sm:p-5 font-semibold text-emerald-700">{row.payback}</td>
                      <td className="p-4 sm:p-5">
                        <span className="inline-block px-2.5 py-1 rounded-full bg-lime-soft text-forest font-bold text-xs">
                          {row.gridIndependence}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 text-text-secondary">{row.idealFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5. Final CTA */}
        <FinalCtaSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
