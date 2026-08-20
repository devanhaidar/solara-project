"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardCheck,
  Compass,
  FileCheck,
  Wrench,
  Activity,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const steps = [
  {
    num: "01",
    duration: "Week 1",
    title: "Energy Audit & Assessment",
    description:
      "We analyze 12–24 months of historical utility bills, model solar/wind irradiance data, and conduct an on-site structural feasibility survey.",
    deliverable: "Custom Feasibility Report & Savings Forecast",
    icon: ClipboardCheck,
  },
  {
    num: "02",
    duration: "Weeks 2–3",
    title: "System Design & Engineering",
    description:
      "Our licensed clean-tech engineers create high-precision CAD/BIM designs, optimize electrical single-line diagrams, and configure battery storage.",
    deliverable: "Full PE-Stamped Engineering Package",
    icon: Compass,
  },
  {
    num: "03",
    duration: "Weeks 4–5",
    title: "Permitting & Grid Interconnection",
    description:
      "We manage all municipal building permits, environmental filings, and local utility grid interconnection agreements seamlessly on your behalf.",
    deliverable: "Approved Interconnection Agreement",
    icon: FileCheck,
  },
  {
    num: "04",
    duration: "Weeks 6–8",
    title: "Precision Installation & Testing",
    description:
      "Certified clean-tech installation crews deploy tier-1 hardware with zero disruption to daily enterprise operations, followed by safety commissioning.",
    deliverable: "Grid-Connected Permission to Operate (PTO)",
    icon: Wrench,
  },
  {
    num: "05",
    duration: "Ongoing 24/7",
    title: "IoT Telemetry & Optimization",
    description:
      "Your facility connects to the Solara Energy Cloud dashboard for real-time generation tracking, automated anomaly detection, and predictive maintenance.",
    deliverable: "24/7 Active Fleet Monitoring & Warranty",
    icon: Activity,
  },
];

export function HowItWorksSection() {
  return (
    <section className="w-full py-14 sm:py-18 lg:py-22 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-[1720px] 2xl:max-w-[1840px] mx-auto overflow-hidden">
      {/* Top Header */}
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
              <span>Seamless Implementation Process</span>
            </span>
          </motion.div>

          {/* Dual-Tone Headline */}
          <motion.h2
            variants={fadeInUp}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] leading-[1.08] tracking-tight text-forest"
          >
            From Initial Energy Audit <br className="hidden sm:inline" />
            <span className="text-text-muted font-normal">
              to 24/7 Clean Power Generation
            </span>
          </motion.h2>
        </div>

        {/* Lead Subtext */}
        <motion.div variants={fadeInUp} className="max-w-md">
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-normal md:text-right">
            Our end-to-end turnkey delivery model takes you from concept to power generation
            with zero operational downtime and complete transparency.
          </p>
        </motion.div>
      </motion.div>

      {/* 5-Step Responsive Process Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5"
      >
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          return (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="relative rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 bg-white border border-border-soft shadow-[0_6px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Number + Duration Chip */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-forest/20 group-hover:text-lime-dark text-[#68A326] transition-colors">
                    {step.num}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-forest/75 bg-forest/5 px-2 py-0.5 rounded-full">
                    <Clock size={10} className="text-[#68A326]" />
                    <span>{step.duration}</span>
                  </span>
                </div>

                {/* Icon in Circle */}
                <div className="w-10 h-10 rounded-2xl bg-lime-soft flex items-center justify-center text-forest mb-3.5 group-hover:bg-lime transition-colors">
                  <StepIcon size={18} className="stroke-[2.2]" />
                </div>

                {/* Title & Description */}
                <h3 className="font-heading font-bold text-forest text-base leading-snug mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Bottom Deliverable Strip */}
              <div className="pt-3 border-t border-border-soft flex items-start gap-1.5 text-[11px] text-forest font-medium">
                <CheckCircle2 size={12} className="text-[#68A326] shrink-0 mt-0.5" />
                <span className="leading-snug">{step.deliverable}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Consultation Prompt */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-white border border-border-soft shadow-xs flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="max-w-2xl">
          <h4 className="font-heading font-extrabold text-lg sm:text-xl text-forest mb-1">
            Ready to audit your commercial facility’s solar & wind potential?
          </h4>
          <p className="text-xs sm:text-[13px] text-text-muted leading-relaxed">
            Our certified engineering team will provide a comprehensive feasibility report and 25-year financial model with no obligation.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-lime hover:bg-[#cbfb3f] text-forest font-heading font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-sm hover:scale-[1.02] active:scale-98 transition-all shrink-0 group"
        >
          <span>Schedule Free Energy Audit</span>
          <div className="w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <ArrowRight size={12} className="text-forest stroke-[2.5]" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
