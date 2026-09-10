import { fadeInUp, staggerContainer } from "@/lib/motion";
import * as motion from "framer-motion/client";
import {
  ArrowRight,
  BarChart3,
  Battery,
  Cloud,
  Cpu,
  Radio,
  Zap,
} from "lucide-react";
import Link from "next/link";

const techPillars = [
  {
    icon: Radio,
    title: "Edge Hardware & IoT Sensors",
    description:
      "Industrial-grade modbus sensors capturing high-frequency voltage, current, temperature, and solar irradiance telemetry every 250ms.",
  },
  {
    icon: Cpu,
    title: "Predictive Machine Learning Engine",
    description:
      "Neural models correlating weather radar, historical generation, and dynamic grid pricing to optimize battery dispatch and reduce peak charges.",
  },
  {
    icon: Cloud,
    title: "Enterprise Fleet Telemetry Cloud",
    description:
      "Unified multi-site console delivering automated ESG audit logs, instant fault isolation, and API integration with SAP, Oracle, and Salesforce.",
  },
];

export function SmartTechnologySection() {
  return (
    <section className="w-full py-14 sm:py-18 lg:py-22 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-[1720px] 2xl:max-w-[1840px] mx-auto overflow-hidden">
      <div className="flex flex-col gap-10 lg:gap-14">
        {/* Top Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div variants={fadeInUp} className="mb-3 sm:mb-3.5">
              <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-border-soft text-forest text-xs sm:text-sm font-heading font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-lime ring-2 ring-forest/10" />
                <span>Proprietary Clean-Tech Software</span>
              </span>
            </motion.div>

            {/* Dual-Tone Headline */}
            <motion.h2
              variants={fadeInUp}
              className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] leading-[1.08] tracking-tight text-forest"
            >
              Smart Energy Technology <br className="hidden sm:inline" />
              <span className="text-text-muted font-normal">
                Engineered for Autonomous Efficiency
              </span>
            </motion.h2>
          </div>

          <motion.div variants={fadeInUp} className="max-w-md">
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-normal md:text-right">
              Transform raw renewable hardware into an intelligent, self-optimizing energy asset
              with real-time cloud telemetry and machine learning control.
            </p>
          </motion.div>
        </motion.div>

        {/* Interactive Platform Mockup & Architecture Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: 3 Architectural Pillars */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            {techPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[20px] sm:rounded-[24px] p-5 bg-white border border-border-soft shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-lime-soft flex items-center justify-center text-forest shrink-0 group-hover:bg-lime transition-colors">
                      <PillarIcon size={19} className="stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-forest text-base leading-snug mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-1">
              <Link
                href="/solutions/smart-energy"
                className="inline-flex items-center gap-2 font-heading font-bold text-forest text-xs sm:text-sm group hover:text-green-dark transition-colors"
              >
                <span>Discover the complete IoT technology stack</span>
                <div className="w-6 h-6 rounded-full bg-lime flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={12} className="text-forest stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Tech Cloud Console UI Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-[24px] sm:rounded-[32px] bg-[#063B2C] border border-white/10 p-5 sm:p-7 shadow-2xl text-white overflow-hidden relative group">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-lime/10 blur-[90px] pointer-events-none" />

              {/* Console Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#68A326] animate-ping" />
                  <div>
                    <span className="font-heading font-bold text-xs sm:text-sm text-white block">
                      Solara Fleet Intelligence OS
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-white/60">
                      Nexus Technology Park • 4.2 MW Live
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10.5px] font-bold text-lime bg-lime/15 px-2.5 py-0.5 rounded-full border border-lime/30">
                    Grid Online • 100% Sync
                  </span>
                </div>
              </div>

              {/* Console Live Telemetry Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 relative z-10">
                {/* Metric 1 */}
                <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs text-white/70 mb-1.5">
                    <span>Solar + Wind Output</span>
                    <Zap size={13} className="text-lime" />
                  </div>
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                    3,420 kW
                  </span>
                  <span className="text-[10px] text-lime mt-0.5 font-semibold">
                    ↑ 104.2% of Forecast
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs text-white/70 mb-1.5">
                    <span>BESS Battery Storage</span>
                    <Battery size={13} className="text-[#8DC63F]" />
                  </div>
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                    94.8% SoC
                  </span>
                  <span className="text-[10px] text-white/70 mt-0.5">
                    Ready for Peak Shaving
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs text-white/70 mb-1.5">
                    <span>Avoided Grid Cost</span>
                    <BarChart3 size={13} className="text-lime" />
                  </div>
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                    $2,840
                  </span>
                  <span className="text-[10px] text-lime mt-0.5 font-semibold">
                    Today&apos;s Savings
                  </span>
                </div>
              </div>

              {/* Console Live Wave Graphic Simulation */}
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4 relative z-10">
                <div className="flex items-center justify-between text-xs text-white/80 mb-2">
                  <span className="font-heading font-bold text-[11px]">24-Hour Generation Telemetry</span>
                  <span className="text-lime text-[10px] font-semibold">● Peak Yield: 4.18 MW</span>
                </div>

                {/* SVG Visual Wave Graphic */}
                <div className="h-24 w-full relative flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 500 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="curveGradientTech" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#B9F227" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#B9F227" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 Q70,75 120,45 T250,15 T380,50 T500,70 L500,100 L0,100 Z"
                      fill="url(#curveGradientTech)"
                    />
                    <path
                      d="M0,80 Q70,75 120,45 T250,15 T380,50 T500,70"
                      fill="none"
                      stroke="#B9F227"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[9.5px] text-white/50 pt-1.5 border-t border-white/10">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>23:59</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
