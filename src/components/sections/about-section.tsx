"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { fadeInUp, fadeInRight, staggerContainer } from "@/lib/motion";
import { companyStats } from "@/lib/site-config";

const highlights = [
  {
    title: "End-to-End Energy Infrastructure",
    description: "From feasibility modeling and precision engineering to utility grid interconnection.",
    tag: "Full Lifecycle",
  },
  {
    title: "Intelligent IoT Telemetry",
    description: "24/7 autonomous monitoring, real-time performance optimization, and predictive maintenance.",
    tag: "AI Powered",
  },
  {
    title: "Verified ESG & Financial ROI",
    description: "Audited greenhouse gas reductions paired with up to 40% operational electricity savings.",
    tag: "3-5 Yr Payback",
  },
];

const statDetails: Record<string, { desc: string; trend: string; num: string }> = {
  "250": {
    desc: "Successfully deployed across industrial complexes, corporate campuses, and logistics hubs.",
    trend: "+38% YoY",
    num: "01",
  },
  "120": {
    desc: "Clean electricity generated annually, powering sustainable operations across multiple sectors.",
    trend: "100% Green",
    num: "02",
  },
  "98": {
    desc: "Long-term client retention backed by dedicated monitoring and proactive technical support.",
    trend: "5.0 Rating",
    num: "03",
  },
};

export function AboutSection() {
  return (
    <section className="w-full py-14 sm:py-18 lg:py-22 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-[1720px] 2xl:max-w-[1840px] mx-auto overflow-hidden">
      <div className="flex flex-col gap-12 lg:gap-16">
        {/* Top Split Layout: Narrative (Left) & Imagery with Dual Badges (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column — Editorial Storytelling with Dual-Tone Typography */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow Pill */}
            <motion.div variants={fadeInUp} className="mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-border-soft text-forest text-xs sm:text-sm font-heading font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-lime ring-2 ring-forest/10" />
                <span>About Solara Energy</span>
              </span>
            </motion.div>

            {/* Dual-Tone Headline */}
            <motion.h2
              variants={fadeInUp}
              className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] leading-[1.08] tracking-tight text-forest"
            >
              Building a Cleaner Future, <br className="hidden sm:inline" />
              <span className="text-text-muted font-normal">
                One Energy System at a Time.
              </span>
            </motion.h2>

            {/* Lead Narrative */}
            <motion.p
              variants={fadeInUp}
              className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-text-muted leading-relaxed font-normal max-w-3xl"
            >
              At Solara Energy, we believe transitioning to clean energy shouldn’t be complex.
              We design, build, and manage high-performance solar, wind, and storage systems
              tailored to help businesses achieve complete energy independence, reduce overhead costs,
              and meet ambitious ESG targets.
            </motion.p>

            {/* Value Highlights with Micro-Pill Tags */}
            <motion.div
              variants={fadeInUp}
              className="mt-6 sm:mt-8 space-y-3 sm:space-y-3.5 pt-5 border-t border-border-soft"
            >
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-4 p-3 sm:p-3.5 rounded-2xl bg-white/70 hover:bg-white border border-transparent hover:border-border-soft/80 shadow-xs hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-lime-soft flex items-center justify-center shrink-0 group-hover:bg-lime transition-colors duration-200">
                      <CheckCircle2 size={14} className="text-forest stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-forest text-sm sm:text-[15px] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-text-muted leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex text-[11px] font-bold text-forest/70 bg-forest/5 px-2.5 py-1 rounded-full shrink-0">
                    {item.tag}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Link */}
            <motion.div variants={fadeInUp} className="mt-6 sm:mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 font-heading font-bold text-forest text-xs sm:text-sm group hover:text-green-dark transition-colors"
              >
                <span>Learn more about our engineering & technology</span>
                <div className="w-7 h-7 rounded-full bg-lime flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-xs">
                  <ArrowRight size={13} className="text-forest stroke-[2.5]" />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column — Photo with Floating Badges */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-[24px] sm:rounded-[32px] lg:rounded-[38px] overflow-hidden border border-border-soft shadow-xl bg-white group">
              <Image
                src="/images/about-engineers.jpg"
                alt="Solara Energy certified renewable energy engineers collaborating on solar infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent pointer-events-none" />

              {/* Overlaid Top-Right Status Chip */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 shadow-md border border-white/80 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#68A326] animate-ping" />
                <span className="text-[11.5px] font-heading font-bold text-forest">
                  Active Monitoring 24/7
                </span>
              </div>

              {/* Overlaid Bottom Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-4.5 shadow-2xl border border-white/90 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-lime flex items-center justify-center shrink-0 shadow-xs">
                    <Award size={22} className="text-forest stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-heading font-bold text-forest text-xs sm:text-sm leading-tight">
                        Certified Clean-Tech Engineers
                      </span>
                      <Sparkles size={13} className="text-[#8DC63F]" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-text-muted mt-0.5 leading-snug">
                      NABCEP & IEEE Certified Specialists
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end pl-3 border-l border-border-soft">
                  <span className="font-heading font-extrabold text-forest text-sm">10+ Yrs</span>
                  <span className="text-[10px] text-text-muted">Expertise</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics Row (3 Numbered Cards) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 pt-4"
        >
          {companyStats.map((stat, idx) => {
            const detail = statDetails[stat.value] || {
              desc: "Delivering sustainable performance and verified energy reliability.",
              trend: "+25% YoY",
              num: `0${idx + 1}`,
            };

            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 lg:p-7 border border-border-soft shadow-[0_6px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Numbered Step Chip & Trend Indicator */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading font-bold text-[11px] text-forest/40 bg-forest/5 px-2.5 py-0.5 rounded-full">
                    {detail.num}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#68A326] bg-[#EAF8C9] px-2.5 py-0.5 rounded-full">
                    <TrendingUp size={11} />
                    {detail.trend}
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest tracking-tight">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#68A326]">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-forest text-sm sm:text-base lg:text-lg mt-2 mb-1.5">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-xs text-text-muted leading-relaxed pt-2.5 border-t border-border-soft/60">
                  {detail.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
