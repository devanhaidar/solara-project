import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Footer } from "@/components/navigation/footer";
import { FinalCtaSection } from "@/components/sections/cta-section";
import {
  ShieldCheck,
  Zap,
  Award,
  Users,
  Compass,
  CheckCircle2,
  TrendingUp,
  Leaf,
  Globe2,
  Cpu,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Solara Energy's mission, engineering leadership, and track record in delivering high-efficiency renewable energy systems.",
};

const stats = [
  { value: "250+", label: "Enterprise Projects Completed", description: "Across manufacturing, commercial, and utility sectors" },
  { value: "120 MW+", label: "Clean Capacity Installed", description: "Generating over 180,000 MWh of clean electricity annually" },
  { value: "85,000+", label: "Tons CO₂ Prevented / Year", description: "Equivalent to removing 18,500 gas-powered cars from roads" },
  { value: "99.98%", label: "System Operational Uptime", description: "Monitored 24/7 by Solara Telemetry Center" },
];

const pillars = [
  {
    icon: Zap,
    title: "Engineering Precision",
    description:
      "Every kilowatt is simulated, optimized, and modeled using proprietary aerodynamic and thermodynamic simulation software before construction.",
  },
  {
    icon: ShieldCheck,
    title: "Bankable Reliability",
    description:
      "We partner exclusively with Tier-1 PV manufacturers and BloombergNEF Tier-1 battery suppliers, backed by a comprehensive 25-year linear warranty.",
  },
  {
    icon: Leaf,
    title: "Circular Sustainability",
    description:
      "All decommissioned solar modules and lithium iron phosphate (LFP) cells are certified for 98% material recycling under our closed-loop pledge.",
  },
  {
    icon: Cpu,
    title: "Autonomous Intelligence",
    description:
      "Our native Solara OS uses machine learning models to predict day-ahead electricity prices, cycling storage automatically to optimize peak arbitrage.",
  },
];

const timeline = [
  {
    year: "2018",
    phase: "Phase 01",
    tag: "Founding Era",
    icon: Compass,
    title: "Inception & Pilot Grid",
    metric: "2.5 MW Initial Grid",
    desc: "Established by utility grid engineers with a mission to build decentralized industrial clean power systems.",
  },
  {
    year: "2020",
    phase: "Phase 02",
    tag: "Commercial Scale",
    icon: TrendingUp,
    title: "20 MW Commercial Portfolio",
    metric: "45 Logistics Hubs",
    desc: "Delivered regional rooftop arrays across distribution centers, lowering client peak penalties by 38%.",
  },
  {
    year: "2022",
    phase: "Phase 03",
    tag: "Software & Storage",
    icon: Cpu,
    title: "Solara OS & BESS Launch",
    metric: "Sub-Second SCADA",
    desc: "Introduced proprietary IoT monitoring hardware and deployed our first utility-scale battery storage.",
  },
  {
    year: "2024",
    phase: "Phase 04",
    tag: "Major Landmark",
    icon: Award,
    title: "100 MW Milestone Reached",
    metric: "100 MW Online",
    desc: "Expanded into hybrid wind-solar microgrids and alpine floating solar with 99.98% uptime.",
  },
  {
    year: "2026",
    phase: "Phase 05",
    tag: "Present Frontier",
    icon: Sparkles,
    title: "Multi-Gigawatt Ecosystem",
    metric: "250+ Sites / 120 MW+",
    desc: "Generating clean power across 250+ enterprise sites, accelerating 100% renewable baseload.",
    isCurrent: true,
  },
];

const team = [
  {
    name: "Dr. Marcus Vance",
    role: "Chief Executive Officer",
    bio: "Ph.D. in Energy Systems (MIT), 18+ years leading utility-scale grid modernization and renewable asset deployment.",
  },
  {
    name: "Elena Rostova",
    role: "Chief Technology Officer",
    bio: "Former Principal Architect at Global Grid Technologies, specialist in distributed PV-BESS power conversion and inverters.",
  },
  {
    name: "Devon Haidar",
    role: "Head of Project Engineering",
    bio: "NABCEP Certified PV Professional with over 150 MW of turnkey commercial installations successfully commissioned.",
  },
  {
    name: "Amina Al-Mansoor",
    role: "VP of Sustainability & ESG",
    bio: "Pioneered circular lifecycle asset recovery standards and corporate Science Based Targets (SBTi) compliance.",
  },
];

const certifications = [
  "NABCEP Certified Solar Installation Professionals",
  "IEEE 1547-2018 Grid Interconnection Standards",
  "ISO 14001 Environmental Management System",
  "ISO 9001 Quality Engineering Assurance",
  "UL 9540A BESS Thermal Runaway Fire Safety Certified",
  "Tier-1 Financial Bankability Compliance",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-offwhite flex flex-col selection:bg-lime selection:text-forest">
      {/* 1. Page Hero Header */}
      <PageHeader
        badge="About Solara Energy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        title="Engineering the High-Efficiency Grid of"
        highlightedWord="Tomorrow."
        description="We design, engineer, and deploy megawatt-scale solar, wind, and battery storage solutions that turn enterprise energy from an operational overhead into a high-yielding, resilient asset."
        bgImage="/images/about-leadership-team.jpg"
      />

      <main className="flex-1">
        {/* 2. Impact Stats Band */}
        <section className="py-12 sm:py-16 bg-white border-b border-border-soft">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#F7F8F2] border border-border-soft hover:border-lime/60 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight group-hover:text-emerald-700 transition-colors">
                    {item.value}
                  </div>
                  <div className="font-heading font-bold text-base text-forest mt-2">
                    {item.label}
                  </div>
                  <p className="text-text-muted text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Narrative Story & Leadership Photography */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold uppercase tracking-wider mb-4">
                  <Compass size={14} className="text-lime-dark" />
                  <span>Our Heritage & Purpose</span>
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest tracking-tight leading-[1.18]">
                  From bespoke micro-inverters to{" "}
                  <span className="text-emerald-700">gigawatt clean capacity.</span>
                </h2>
                <div className="mt-6 space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed font-body">
                  <p>
                    Solara Energy was founded with an unyielding conviction: that the global transition to renewable energy requires engineering that is as robust, predictable, and bankable as conventional thermal generation.
                  </p>
                  <p>
                    Over eight years, our multidisciplinary team of electrical architects, mechanical engineers, and software developers has deployed over 250 enterprise microgrid and utility projects. We don&apos;t just install hardware; we architect intelligent, self-balancing energy ecosystems that shield corporations from escalating grid tariffs.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border-soft flex items-center gap-6">
                  <div>
                    <div className="font-heading font-extrabold text-2xl text-forest">
                      25 Years
                    </div>
                    <div className="text-text-muted text-xs sm:text-sm">
                      Linear Performance Guarantee
                    </div>
                  </div>
                  <div className="h-10 w-px bg-border-soft" />
                  <div>
                    <div className="font-heading font-extrabold text-2xl text-forest">
                      Tier-1
                    </div>
                    <div className="text-text-muted text-xs sm:text-sm">
                      Hardware & Bankability Rating
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Team Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 aspect-[16/10] group">
                  <Image
                    src="/images/about-leadership-team.jpg"
                    alt="Solara Energy Leadership and Engineering team in solar-equipped eco atrium"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-offwhite">
                    <span className="px-2.5 py-1 rounded-full bg-lime text-forest text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                      Solara Executive & Engineering Team
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                      Decades of Combined Grid & Clean Energy Mastery
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Core Engineering Pillars (Bento Grid) */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-y border-border-soft">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-soft text-forest text-xs font-semibold uppercase tracking-wider mb-3">
                <ShieldCheck size={14} className="text-forest" />
                <span>The Solara Standard</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight">
                Built Upon Four Inviolable Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-[#F7F8F2] border border-border-soft hover:bg-forest hover:text-offwhite hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-forest group-hover:bg-lime flex items-center justify-center mb-6 transition-colors duration-300">
                        <Icon size={24} className="text-lime group-hover:text-forest transition-colors duration-300" />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-forest group-hover:text-white mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-text-secondary group-hover:text-offwhite/80 text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Milestones Timeline (Horizontal Executive Roadmap) */}
        <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold uppercase tracking-wider mb-3">
                  <TrendingUp size={13} className="text-emerald-700" />
                  <span>Growth & Trajectory</span>
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest tracking-tight">
                  Milestones That Shaped Our Clean Energy Legacy
                </h2>
              </div>
              <p className="text-text-muted text-xs sm:text-sm max-w-md leading-relaxed">
                From pioneering modular rooftop ballasting to engineering multi-megawatt microgrids and autonomous AI grid dispatch.
              </p>
            </div>

            {/* Horizontal Timeline Track & Cards Grid */}
            <div className="relative">
              {/* Continuous Connected Progress Track Bar (Desktop) */}
              <div className="hidden lg:block absolute top-7 left-12 right-12 h-1 bg-border-soft z-0">
                <div className="h-full bg-gradient-to-r from-forest via-emerald-600 to-lime w-full rounded-full" />
              </div>

              {/* 5-Column Horizontal Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                {timeline.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border transition-all duration-300 relative hover:-translate-y-2 hover:shadow-2xl ${
                        item.isCurrent
                          ? "border-lime/80 shadow-lg ring-1 ring-lime/40"
                          : "border-border-soft hover:border-lime/60"
                      }`}
                    >
                      {/* Top Node Connector Indicator */}
                      <div className="flex items-center justify-between mb-5">
                        {/* Year Badge */}
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                              item.isCurrent
                                ? "bg-lime border-forest ring-4 ring-lime/40"
                                : "bg-forest border-white group-hover:bg-lime"
                            }`}
                          />
                          <span className="font-heading font-extrabold text-2xl text-forest group-hover:text-emerald-700 transition-colors">
                            {item.year}
                          </span>
                        </div>

                        {/* Phase Tag */}
                        <span
                          className={`text-[10px] font-heading font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                            item.isCurrent
                              ? "bg-lime text-forest font-extrabold"
                              : "bg-[#F7F8F2] text-text-muted border border-border-soft/60"
                          }`}
                        >
                          {item.phase}
                        </span>
                      </div>

                      {/* Middle Content */}
                      <div className="flex-1">
                        <div className="w-10 h-10 rounded-2xl bg-forest/5 text-forest group-hover:bg-forest group-hover:text-lime flex items-center justify-center mb-4 transition-colors duration-300">
                          <Icon size={18} />
                        </div>

                        <h3 className="font-heading font-bold text-base sm:text-lg text-forest group-hover:text-emerald-700 transition-colors mb-2 leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4">
                          {item.desc}
                        </p>
                      </div>

                      {/* Bottom Metric Pill */}
                      <div className="pt-4 border-t border-border-soft/60">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F7F8F2] border border-border-soft/60 text-[11px] font-heading font-bold text-forest group-hover:border-lime/50 transition-colors w-full justify-between">
                          <span className="text-text-muted text-[10px]">{item.tag}</span>
                          <span className="text-emerald-700 font-extrabold text-[11px]">{item.metric}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Executive Leadership Profiles */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-y border-border-soft">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  Leadership
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mt-2">
                  The Architects Behind Solara
                </h2>
              </div>
              <p className="text-text-muted text-sm max-w-md">
                Led by pioneers in electrical grid engineering, power electronics, and sustainable corporate finance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#F7F8F2] border border-border-soft hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-forest text-lime flex items-center justify-center font-heading font-extrabold text-xl mb-4">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-forest">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-700 mb-3">
                    {member.role}
                  </div>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Certifications & Accreditations */}
        <section className="py-14 sm:py-16 bg-[#042A1F] text-offwhite">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-lime">
                Verified Compliance & Trust
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-2">
                Recognized by Leading Global Standards
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-lime/40 transition-colors"
                >
                  <CheckCircle2 size={18} className="text-lime shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white/90">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Call to Action Banner */}
        <FinalCtaSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
