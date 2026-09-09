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
    tag: "Founding Era",
    image: "/images/milestone-2018-pilot.jpg",
    title: "Inception & Pilot Grid",
    metric: "2.5 MW Test Grid",
    desc: "Established by utility grid engineers with a mission to build decentralized industrial clean power systems.",
  },
  {
    year: "2020",
    tag: "Commercial Scale",
    image: "/images/project-nexus-solar.jpg",
    title: "20 MW Commercial Portfolio",
    metric: "45 Logistics Hubs",
    desc: "Delivered regional rooftop arrays across distribution centers, lowering client peak charges by 38%.",
  },
  {
    year: "2022",
    tag: "Software & Storage",
    image: "/images/solutions-storage.jpg",
    title: "Solara OS & BESS Launch",
    metric: "Sub-Second SCADA",
    desc: "Introduced proprietary IoT monitoring hardware and deployed our first utility-scale battery storage.",
  },
  {
    year: "2024",
    tag: "Major Landmark",
    image: "/images/project-floating-solar.jpg",
    title: "100 MW Milestone Reached",
    metric: "100 MW Online",
    desc: "Expanded into hybrid wind-solar microgrids and alpine floating solar with 99.98% uptime.",
  },
  {
    year: "2026",
    tag: "Present Frontier",
    image: "/images/project-urban-microgrid.jpg",
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
    image: "/images/team-marcus-vance.jpg",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    bio: "Ph.D. in Energy Systems (MIT), 18+ years leading utility-scale grid modernization and renewable asset deployment.",
  },
  {
    name: "Elena Rostova",
    role: "Chief Technology Officer",
    image: "/images/team-elena-rostova.jpg",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    bio: "Former Principal Architect at Global Grid Technologies, specialist in distributed PV-BESS power conversion and inverters.",
  },
  {
    name: "Devon Haidar",
    role: "Head of Project Engineering",
    image: "/images/team-devon-haidar.jpg",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    bio: "NABCEP Certified PV Professional with over 150 MW of turnkey commercial installations successfully commissioned.",
  },
  {
    name: "Amina Al-Mansoor",
    role: "VP of Sustainability & ESG",
    image: "/images/team-amina-almansoor.jpg",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
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

        {/* 5. Milestones Timeline (Split Sticky Narrative + Scrolling Story) */}
        <section className="py-20 sm:py-28 lg:py-36 bg-[#FBFBFA] border-t border-border-soft relative">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
              {/* Left Column: Sticky Narrative & Key Stats */}
              <div className="lg:col-span-5 lg:sticky lg:top-36 self-start space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/5 border border-forest/10 text-forest text-xs font-semibold uppercase tracking-wider">
                  <TrendingUp size={13} className="text-emerald-700" />
                  <span>Our Journey & Growth</span>
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest tracking-tight leading-[1.15]">
                  Building a Cleaner Future, One Milestone at a Time
                </h2>

                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                  From our first 2.5 MW industrial microgrid pilot to powering over 250+ enterprise hubs and utility portfolios, explore how Solara engineered the modern clean energy transition.
                </p>

                {/* Track Record Stats */}
                <div className="pt-4 grid grid-cols-2 gap-4 border-t border-border-soft">
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-border-soft shadow-xs">
                    <div className="font-heading font-extrabold text-2xl sm:text-3xl text-forest">120+ MW</div>
                    <div className="text-xs text-text-muted mt-1 font-medium">Installed Capacity</div>
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-border-soft shadow-xs">
                    <div className="font-heading font-extrabold text-2xl sm:text-3xl text-emerald-700">99.98%</div>
                    <div className="text-xs text-text-muted mt-1 font-medium">System Uptime</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Scrolling Milestones with Vertical Connecting Line (No Images) */}
              <div className="lg:col-span-7 relative pl-8 sm:pl-14">
                {/* Continuous Vertical Timeline Track */}
                <div className="absolute left-[7px] sm:left-[13px] top-3 bottom-12 w-[2px] bg-gradient-to-b from-forest via-emerald-600 to-lime rounded-full" />

                <div className="space-y-20 sm:space-y-28 lg:space-y-32 pb-12">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline Node Dot */}
                      <div
                        className={`absolute -left-[32px] sm:-left-[50px] top-1.5 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center shrink-0 ${
                          item.isCurrent
                            ? "bg-lime border-forest ring-4 ring-lime/30 shadow-md"
                            : "bg-forest border-white ring-2 ring-forest/10 shadow-xs group-hover:scale-110 group-hover:bg-emerald-700"
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${item.isCurrent ? "bg-forest" : "bg-white"}`} />
                      </div>

                      {/* Year Label */}
                      <div className="text-sm sm:text-base font-heading font-bold text-emerald-700 tracking-wider mb-2">
                        {item.year}
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest tracking-tight mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
                        {item.desc}
                      </p>

                      {/* Subtle Milestone Highlight Chip */}
                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-forest/5 text-forest border border-forest/10">
                          {item.tag}
                        </span>
                        <span className="text-xs font-medium text-emerald-700">
                          {item.metric}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Executive Leadership Profiles */}
        <section className="py-20 sm:py-24 lg:py-28 bg-white border-y border-border-soft">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  Leadership & Vision
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest tracking-tight mt-2">
                  The Architects Behind Solara
                </h2>
              </div>
              <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed">
                Led by pioneers in electrical grid engineering, power electronics, distributed energy software, and sustainable infrastructure finance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="group rounded-[32px] bg-[#F1F3F2] border border-[#E2E5E3] overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Top Text Content */}
                  <div className="pt-7 px-7 pb-2 z-10">
                    <h3 className="font-heading font-extrabold text-2xl sm:text-[26px] text-neutral-900 tracking-tight leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-neutral-500 italic font-serif text-sm sm:text-base mt-1 tracking-wide">
                      {member.role}
                    </p>
                  </div>

                  {/* Portrait & Social Badges */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden mt-3">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Social Badges Floating at Bottom Right */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 z-20">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="w-8 h-8 rounded-lg bg-neutral-900/90 hover:bg-forest text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md backdrop-blur-sm"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on X`}
                        className="w-8 h-8 rounded-lg bg-neutral-900/90 hover:bg-forest text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md backdrop-blur-sm"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
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
