"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  TrendingDown,
  Globe2,
  ShieldCheck,
  Building,
  Check,
  Zap,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface BenefitItem {
  id: string;
  title: string;
  badge: string;
  highlight: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  statValue: string;
  statLabel: string;
  statSub: string;
  icon: typeof TrendingDown;
}

const benefits: BenefitItem[] = [
  {
    id: "reduce-costs",
    title: "Reduce Energy Costs",
    badge: "Financial ROI",
    highlight: "Up to 40% OPEX Reduction",
    description:
      "Shield your enterprise from volatile fossil fuel utility rate spikes with fixed, predictable on-site clean energy generation.",
    points: [
      "Levelized Cost of Energy (LCOE) locked in for 25+ years",
      "Accelerated capital payback period averaging 3.2 to 5 years",
      "Substantial peak-demand tariff shaving during high-rate hours",
    ],
    image: "/images/why-cost.jpg",
    imageAlt: "Corporate headquarters campus powered by Solara Energy solar array",
    statValue: "-$1.4M",
    statLabel: "Average 5-Yr OPEX Savings",
    statSub: "Based on 500kW+ commercial deployment",
    icon: TrendingDown,
  },
  {
    id: "lower-emissions",
    title: "Lower Carbon Emissions",
    badge: "Net-Zero Impact",
    highlight: "-85,000 Tons CO₂ Offset",
    description:
      "Accelerate your journey to carbon neutrality and achieve full compliance with rigorous global ESG mandates and sustainability disclosure standards.",
    points: [
      "Verified Scope 2 greenhouse gas emissions reduction",
      "Certified Renewable Energy Certificates (RECs) issued annually",
      "Audit-ready sustainability metrics for investor reporting",
    ],
    image: "/images/why-emissions.jpg",
    imageAlt: "Clean wind and solar farm generating zero-emission electricity",
    statValue: "85,000+",
    statLabel: "Tons of CO₂ Avoided",
    statSub: "Equivalent to 18,500 gasoline vehicles taken off roads",
    icon: Globe2,
  },
  {
    id: "energy-independence",
    title: "Improve Energy Independence",
    badge: "Grid Resilience",
    highlight: "99.99% Power Reliability",
    description:
      "Protect sensitive industrial and corporate operations against grid blackouts, brownouts, and frequency fluctuations with dedicated on-site battery microgrids.",
    points: [
      "Zero-millisecond automated switchover during grid outages",
      "Island-mode capability ensures seamless autonomous operation",
      "Smart load prioritization protects high-value business assets",
    ],
    image: "/images/why-independence.jpg",
    imageAlt: "Industrial microgrid battery energy storage facility",
    statValue: "99.99%",
    statLabel: "Operational Uptime Guaranteed",
    statSub: "24/7 battery backup & autonomous microgrid",
    icon: ShieldCheck,
  },
  {
    id: "sustainable-operations",
    title: "Build Sustainable Operations",
    badge: "Long-Term Value",
    highlight: "AAA ESG Enterprise Rating",
    description:
      "Transform sustainability into a formidable competitive moat that attracts top-tier ESG capital, blue-chip corporate partners, and modern talent.",
    points: [
      "25-year linear performance warranty on all PV & turbine hardware",
      "Real-time predictive telemetry reduces maintenance costs by 35%",
      "Substantial elevation of commercial real-estate asset valuation",
    ],
    image: "/images/why-sustainable.jpg",
    imageAlt: "Modern sustainable enterprise headquarters with green architecture",
    statValue: "25+ Yrs",
    statLabel: "Hardware Lifetime Performance",
    statSub: "Backed by 24/7 predictive IoT monitoring",
    icon: Building,
  },
];

export function WhyRenewableSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play cycle every 7 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % benefits.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = benefits[activeTab];

  return (
    <section className="w-full py-14 sm:py-18 lg:py-22 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-[1720px] 2xl:max-w-[1840px] mx-auto overflow-hidden">
      {/* Top Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-3xl mb-10 sm:mb-12 lg:mb-14"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeInUp} className="mb-3 sm:mb-3.5">
          <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-border-soft text-forest text-xs sm:text-sm font-heading font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-lime ring-2 ring-forest/10" />
            <span>Why Renewable Energy</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeInUp}
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] leading-[1.08] tracking-tight text-forest"
        >
          Better for Business. <br className="hidden sm:inline" />
          <span className="text-text-muted font-normal">
            Better for the Planet.
          </span>
        </motion.h2>

        {/* Lead Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-lg text-text-muted leading-relaxed font-normal"
        >
          Transitioning to renewable energy is not just an environmental imperative—it is
          one of the highest-yielding capital investments modern enterprises can make.
        </motion.p>
      </motion.div>

      {/* Side-by-Side Interactive Showcase */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Column: Interactive Benefit Navigation Tabs */}
        <div className="lg:col-span-6 flex flex-col gap-3 sm:gap-3.5">
          {benefits.map((item, idx) => {
            const isActive = activeTab === idx;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`relative rounded-[20px] sm:rounded-[24px] p-4.5 sm:p-5 cursor-pointer transition-all duration-300 border text-left group ${isActive
                    ? "bg-forest border-forest shadow-lg scale-[1.01]"
                    : "bg-white border-border-soft hover:border-forest/30 hover:bg-white/95 shadow-xs"
                  }`}
              >
                {/* Progress bar line for active item */}
                {isActive && !isPaused && (
                  <motion.div
                    key={`progress-${activeTab}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 7, ease: "linear" }}
                    className="absolute top-0 left-0 h-[3px] bg-lime rounded-t-full"
                  />
                )}

                <div className="flex items-start gap-3.5">
                  {/* Icon Indicator */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isActive
                        ? "bg-lime text-forest shadow-xs"
                        : "bg-lime-soft text-forest group-hover:bg-lime/70"
                      }`}
                  >
                    <Icon size={18} className="stroke-[2.3]" />
                  </div>

                  {/* Title & Preview */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <h3
                        className={`font-heading font-extrabold text-base sm:text-lg leading-snug transition-colors ${isActive ? "text-white" : "text-forest"
                          }`}
                      >
                        {item.title}
                      </h3>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full shrink-0 transition-colors ${isActive
                            ? "bg-lime text-forest"
                            : "bg-forest/5 text-forest/70"
                          }`}
                      >
                        {item.highlight}
                      </span>
                    </div>

                    <p
                      className={`text-xs sm:text-[13px] leading-relaxed transition-colors line-clamp-2 ${isActive ? "text-white/85" : "text-text-muted"
                        }`}
                    >
                      {item.description}
                    </p>

                    {/* Expanded Content When Active */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3.5 pt-3.5 border-t border-white/15 space-y-1.5"
                      >
                        {item.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2.5">
                            <div className="w-3.5 h-3.5 rounded-full bg-lime/20 flex items-center justify-center shrink-0">
                              <Check size={10} className="text-lime stroke-[3]" />
                            </div>
                            <span className="text-xs text-white/90 font-medium">
                              {point}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Dynamic Visual Showcase with Smooth Instant Crossfade */}
        <div className="lg:col-span-6 relative">
          <div className="relative w-full aspect-[4/3] rounded-[24px] sm:rounded-[32px] lg:rounded-[38px] overflow-hidden border border-border-soft shadow-xl bg-[#063B2C]/10">
            {benefits.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  opacity: activeTab === idx ? 1 : 0,
                  scale: activeTab === idx ? 1 : 1.03,
                  zIndex: activeTab === idx ? 10 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority={idx === 0}
                />
                {/* Subtle Bottom Vignette for Floating Badge Contrast */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
              </motion.div>
            ))}

            {/* Overlaid Floating Metric Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${current.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-2xl border border-white/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-heading font-extrabold text-2xl sm:text-3xl text-forest tracking-tight">
                        {current.statValue}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#68A326] bg-[#EAF8C9] px-2 py-0.5 rounded-full">
                        <Zap size={10} className="fill-[#68A326]" />
                        Verified
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-forest text-xs sm:text-sm leading-tight">
                      {current.statLabel}
                    </h4>
                    <p className="text-[11px] text-text-muted mt-0.5">
                      {current.statSub}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-forest hover:bg-green-dark text-white font-heading font-bold text-xs px-4 py-2 rounded-full shadow-sm hover:scale-[1.02] active:scale-98 transition-all shrink-0 group/btn"
                  >
                    <span>Request Assessment</span>
                    <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
