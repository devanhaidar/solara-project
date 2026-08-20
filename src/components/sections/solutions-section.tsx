"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sun,
  Wind,
  BatteryCharging,
  Cpu,
  Activity,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function SolutionsSection() {
  return (
    <section className="w-full py-14 sm:py-18 lg:py-22 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-[1720px] 2xl:max-w-[1840px] mx-auto overflow-hidden">
      {/* Top Section Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 lg:mb-14"
      >
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <motion.div variants={fadeInUp} className="mb-3 sm:mb-3.5">
            <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-border-soft text-forest text-xs sm:text-sm font-heading font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-lime ring-2 ring-forest/10" />
              <span>Core Energy Pillars</span>
            </span>
          </motion.div>

          {/* Giant Dual-Tone Headline */}
          <motion.h2
            variants={fadeInUp}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] leading-[1.08] tracking-tight text-forest"
          >
            Clean Energy Solutions <br className="hidden sm:inline" />
            <span className="text-text-muted font-normal">
              Built for a Better Tomorrow
            </span>
          </motion.h2>
        </div>

        {/* Lead Subtext & Quick Link */}
        <motion.div variants={fadeInUp} className="max-w-md flex flex-col items-start md:items-end">
          <p className="text-sm sm:text-base text-text-muted leading-relaxed font-normal md:text-right mb-3">
            We integrate high-yield renewable generation, resilient battery storage,
            and predictive IoT management into unified energy ecosystems.
          </p>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 font-heading font-bold text-xs sm:text-sm text-forest hover:text-green-dark transition-colors group"
          >
            <span>Explore All Solutions</span>
            <div className="w-7 h-7 rounded-full bg-lime flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-xs">
              <ArrowRight size={12} className="text-forest stroke-[2.5]" />
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Asymmetric Bento Grid (4 Unique Multi-Layered Cards) */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6"
      >
        {/* ========================================================
            CARD 1: SOLAR ENERGY (Large Hero Card - 7 Columns)
           ======================================================== */}
        <motion.div
          variants={fadeInUp}
          className="lg:col-span-7 relative min-h-[420px] sm:min-h-[450px] lg:min-h-[480px] rounded-[24px] sm:rounded-[32px] overflow-hidden group border border-border-soft shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 bg-forest"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/solutions-solar.jpg"
              alt="Commercial rooftop solar energy installation"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Multi-layered Contrast Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/80 to-forest/35 lg:bg-gradient-to-r lg:from-forest/95 lg:via-forest/80 lg:to-transparent" />
          </div>

          {/* Top Badges & Meta Number */}
          <div className="relative z-10 flex items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-forest text-xs font-heading font-bold uppercase tracking-wider shadow-xs">
                <Sun size={13} className="text-[#8DC63F]" />
                <span>Solar Energy</span>
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-forest/80 backdrop-blur-md text-lime text-xs font-medium border border-white/10">
                Commercial & Industrial
              </span>
            </div>
            <span className="text-white/60 font-heading font-bold text-[11px] tracking-widest uppercase">
              01 / SOLAR
            </span>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10 max-w-xl">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight mb-2.5 drop-shadow-sm">
              Commercial, Industrial & Rooftop Solar
            </h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal mb-5 drop-shadow-xs">
              Engineered with tier-1 photovoltaic technology to drastically cut operational electricity
              bills and generate clean, predictable power for decades.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-3.5 border-t border-white/20">
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-white/95 font-medium">
                <CheckCircle2 size={15} className="text-lime" />
                <span>Up to 40% lower utility expenses</span>
              </div>

              <Link
                href="/solutions/solar-energy"
                className="inline-flex items-center gap-2 bg-lime hover:bg-[#cbfb3f] text-forest font-heading font-bold text-xs px-4.5 py-2 rounded-full shadow-sm hover:scale-[1.02] active:scale-98 transition-all duration-200 group/btn"
              >
                <span>Explore Solar</span>
                <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            CARD 2: WIND ENERGY (Tall Vertical Card - 5 Columns)
           ======================================================== */}
        <motion.div
          variants={fadeInUp}
          className="lg:col-span-5 relative min-h-[420px] sm:min-h-[450px] lg:min-h-[480px] rounded-[24px] sm:rounded-[32px] overflow-hidden group border border-border-soft shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 bg-forest"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/solutions-wind.jpg"
              alt="High-yield wind turbines on green landscape"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Contrast Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/75 to-forest/25" />
          </div>

          {/* Top Badges */}
          <div className="relative z-10 flex items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-forest text-xs font-heading font-bold uppercase tracking-wider shadow-xs">
                <Wind size={13} className="text-[#8DC63F]" />
                <span>Wind Power</span>
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-forest/80 backdrop-blur-md text-lime text-xs font-medium border border-white/10">
                Zero Fuel
              </span>
            </div>
            <span className="text-white/60 font-heading font-bold text-[11px] tracking-widest uppercase">
              02 / WIND
            </span>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight mb-2.5 drop-shadow-sm">
              Scalable High-Yield Wind Generation
            </h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal mb-5 drop-shadow-xs">
              Harness steady wind currents to produce continuous, utility-grade clean electricity for heavy industrial operations.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-3.5 border-t border-white/20">
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-white/95 font-medium">
                <CheckCircle2 size={15} className="text-lime" />
                <span>24/7 continuous yield</span>
              </div>

              <Link
                href="/solutions/wind-energy"
                className="inline-flex items-center gap-2 bg-lime hover:bg-[#cbfb3f] text-forest font-heading font-bold text-xs px-4.5 py-2 rounded-full shadow-sm hover:scale-[1.02] active:scale-98 transition-all duration-200 group/btn"
              >
                <span>Explore Wind</span>
                <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            CARD 3: ENERGY STORAGE (Dark Industrial Tech - 5 Columns)
           ======================================================== */}
        <motion.div
          variants={fadeInUp}
          className="lg:col-span-5 relative min-h-[420px] sm:min-h-[450px] lg:min-h-[480px] rounded-[24px] sm:rounded-[32px] overflow-hidden group border border-border-soft shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 bg-forest"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/solutions-storage.jpg"
              alt="Commercial modular battery energy storage systems"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Contrast Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/80 to-forest/35" />
          </div>

          {/* Top Badges */}
          <div className="relative z-10 flex items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-forest text-xs font-heading font-bold uppercase tracking-wider shadow-xs">
                <BatteryCharging size={13} className="text-[#8DC63F]" />
                <span>Energy Storage</span>
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-forest/80 backdrop-blur-md text-lime text-xs font-medium border border-white/10">
                BESS & Backup
              </span>
            </div>
            <span className="text-white/60 font-heading font-bold text-[11px] tracking-widest uppercase">
              03 / STORAGE
            </span>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight mb-2.5 drop-shadow-sm">
              Commercial Battery Storage & Backup
            </h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal mb-5 drop-shadow-xs">
              Peak shaving, instantaneous microgrid switchover, and energy arbitrage to ensure unbroken 24/7 power security.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-3.5 border-t border-white/20">
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-white/95 font-medium">
                <CheckCircle2 size={15} className="text-lime" />
                <span>0ms automatic backup</span>
              </div>

              <Link
                href="/solutions/energy-storage"
                className="inline-flex items-center gap-2 bg-lime hover:bg-[#cbfb3f] text-forest font-heading font-bold text-xs px-4.5 py-2 rounded-full shadow-sm hover:scale-[1.02] active:scale-98 transition-all duration-200 group/btn"
              >
                <span>Explore Storage</span>
                <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            CARD 4: SMART ENERGY MANAGEMENT (IoT UI Widget Card - 7 Columns)
           ======================================================== */}
        <motion.div
          variants={fadeInUp}
          className="lg:col-span-7 relative min-h-[420px] sm:min-h-[450px] lg:min-h-[480px] rounded-[24px] sm:rounded-[32px] overflow-hidden group border border-border-soft shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 bg-white"
        >
          {/* Top Badges & Header */}
          <div>
            <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-soft text-forest text-xs font-heading font-bold uppercase tracking-wider">
                  <Cpu size={13} className="text-forest" />
                  <span>Smart Energy Tech</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold">
                  <Activity size={12} className="text-lime-dark text-[#68A326] animate-pulse" />
                  <span>Live Telemetry</span>
                </span>
              </div>

              <span className="font-heading font-bold text-[11px] text-text-muted/60 tracking-widest uppercase">
                04 / IOT PLATFORM
              </span>
            </div>

            {/* Title & Desc */}
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest leading-tight mb-2">
              Intelligent IoT & AI Management
            </h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-normal max-w-xl">
              Cloud-connected telemetry platform delivering real-time energy flow tracking, predictive fault alerts, and automated cost optimization.
            </p>
          </div>

          {/* Interactive Micro Dashboard Mockup Box */}
          <div className="my-4 sm:my-5 p-3.5 sm:p-4 rounded-2xl bg-offwhite/90 border border-border-soft/80 shadow-inner grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Stat 1 */}
            <div className="bg-white rounded-xl p-3 border border-border-soft/60 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-text-muted mb-1">
                <span>Active Output</span>
                <Zap size={12} className="text-[#68A326]" />
              </div>
              <span className="font-heading font-extrabold text-base sm:text-lg text-forest">
                348.6 kW
              </span>
              <span className="text-[10px] text-[#68A326] font-semibold mt-0.5">● Generating Live</span>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-xl p-3 border border-border-soft/60 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-text-muted mb-1">
                <span>System Health</span>
                <Activity size={12} className="text-forest" />
              </div>
              <span className="font-heading font-extrabold text-base sm:text-lg text-forest">
                99.8%
              </span>
              <span className="text-[10px] text-text-muted mt-0.5">Optimal Status</span>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-xl p-3 border border-border-soft/60 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-text-muted mb-1">
                <span>CO₂ Offset</span>
                <Sun size={12} className="text-[#8DC63F]" />
              </div>
              <span className="font-heading font-extrabold text-base sm:text-lg text-forest">
                -42.5 t
              </span>
              <span className="text-[10px] text-[#68A326] font-semibold mt-0.5">This Month</span>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3.5 border-t border-border-soft">
            <div className="flex items-center gap-2 text-xs text-text-muted font-medium">
              <CheckCircle2 size={15} className="text-[#68A326]" />
              <span>Real-time mobile & web analytics dashboard</span>
            </div>

            <Link
              href="/solutions/smart-energy"
              className="inline-flex items-center gap-2 bg-forest hover:bg-green-dark text-white font-heading font-bold text-xs px-4.5 py-2 rounded-full shadow-sm hover:scale-[1.02] active:scale-98 transition-all duration-200 group/btn"
            >
              <span>Explore Smart Tech</span>
              <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
