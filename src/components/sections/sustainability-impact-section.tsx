import { fadeInUp, staggerContainer } from "@/lib/motion";
import * as motion from "framer-motion/client";
import {
  Car,
  Globe,
  Leaf,
  Sparkles,
  Trees,
  TrendingUp,
  Zap,
} from "lucide-react";

const impactMetrics = [
  {
    value: "120",
    suffix: "MW+",
    label: "Clean Energy Generated",
    sub: "Annual renewable generation capacity deployed globally",
    trend: "+42% YoY",
    icon: Zap,
  },
  {
    value: "85,000",
    suffix: "t",
    label: "CO₂ Emissions Reduced",
    sub: "Direct greenhouse gas abatement verified annually",
    trend: "Verified ESG",
    icon: Leaf,
  },
  {
    value: "250",
    suffix: "+",
    label: "Enterprise Projects",
    sub: "Successful commercial & industrial clean power installations",
    trend: "100% On-Time",
    icon: Globe,
  },
  {
    value: "40",
    suffix: "%",
    label: "Average Cost Reduction",
    sub: "Sustained reduction in client operational utility expenses",
    trend: "3-5 Yr ROI",
    icon: TrendingUp,
  },
];

const equivalents = [
  {
    icon: Car,
    value: "18,500+",
    label: "Gasoline vehicles removed from roads annually",
  },
  {
    icon: Trees,
    value: "4.2M",
    label: "Tree seedlings grown for 10 years equivalent",
  },
  {
    icon: Zap,
    value: "420 GWh",
    label: "Cumulative clean power supplied to date",
  },
];

export function SustainabilityImpactSection() {
  return (
    <section className="w-full py-14 sm:py-18 lg:py-22 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-[1720px] 2xl:max-w-[1840px] mx-auto">
      {/* Dark Forest Luxury Canvas */}
      <div className="relative w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] bg-[#042A1F] overflow-hidden p-6 sm:p-10 lg:p-12 xl:p-14 shadow-2xl border border-white/10 text-white">
        {/* Subtle Watermark Brand Typography in Background */}
        <div className="absolute -bottom-10 right-0 pointer-events-none select-none opacity-[0.03] font-heading font-extrabold text-[140px] sm:text-[200px] lg:text-[260px] text-white leading-none whitespace-nowrap">
          SOLARA
        </div>

        {/* Ambient Glow Gradients */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-lime/15 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#0B4A35]/40 blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          {/* Top Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12"
          >
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <motion.div variants={fadeInUp} className="mb-3 sm:mb-3.5">
                <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-lime text-xs sm:text-sm font-heading font-semibold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                  <span>Sustainability Impact</span>
                </span>
              </motion.div>

              {/* Giant Dual-Tone Headline */}
              <motion.h2
                variants={fadeInUp}
                className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] leading-[1.06] tracking-tight text-white"
              >
                Cleaner Energy. <br className="hidden sm:inline" />
                <span className="text-white/60 font-normal">
                  Measurable Environmental Impact.
                </span>
              </motion.h2>
            </div>

            {/* Subtext */}
            <motion.div variants={fadeInUp} className="max-w-md">
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal md:text-right">
                Every megawatt installed delivers dual dividends: audited carbon avoidance
                for the planet and permanent energy cost efficiency for enterprise balance sheets.
              </p>
            </motion.div>
          </motion.div>

          {/* Big Typography Metrics Grid (4 Numbered Cards) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {impactMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-lime/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Icon + Trend Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-xl bg-lime/15 border border-lime/30 flex items-center justify-center text-lime group-hover:scale-105 transition-transform">
                        <Icon size={18} />
                      </div>
                      <span className="text-[10.5px] font-bold text-lime bg-lime/10 px-2.5 py-0.5 rounded-full border border-lime/20">
                        {item.trend}
                      </span>
                    </div>

                    {/* Big Numbers */}
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                        {item.value}
                      </span>
                      <span className="font-heading font-extrabold text-xl sm:text-2xl text-lime">
                        {item.suffix}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-white text-sm sm:text-base mt-2 mb-1">
                      {item.label}
                    </h3>
                  </div>

                  <p className="text-[11.5px] text-white/70 leading-relaxed mt-2 pt-2.5 border-t border-white/10">
                    {item.sub}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Environmental Equivalents Strip */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-[20px] sm:rounded-[24px] bg-white/[0.04] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-lime flex items-center justify-center text-forest shrink-0">
                <Sparkles size={18} className="stroke-[2.5]" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-xs sm:text-sm">
                  Real-World Carbon Equivalency
                </h4>
                <p className="text-[11px] text-white/60">
                  Calculated based on EPA greenhouse gas equivalencies standard
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full lg:w-auto">
              {equivalents.map((eq, i) => {
                const EqIcon = eq.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-lime shrink-0">
                      <EqIcon size={14} />
                    </div>
                    <div>
                      <span className="font-heading font-extrabold text-sm sm:text-base text-white block leading-tight">
                        {eq.value}
                      </span>
                      <span className="text-[10.5px] text-white/70 leading-tight block mt-0.5">
                        {eq.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
