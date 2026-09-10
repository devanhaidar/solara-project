import { fadeInUp, staggerContainer } from "@/lib/motion";
import * as motion from "framer-motion/client";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Solara Energy reduced our distribution center electricity expenses by 42% in Year 1 alone, while our battery storage microgrid protected our cold storage operations through two major regional grid blackouts without a second of downtime.",
    author: "Marcus Vance",
    role: "VP of Global Infrastructure & Facilities",
    company: "Apex Logistics Global",
    location: "Frankfurt, Germany",
    image: "/images/avatar-1.jpg",
    partnerSince: "Client since 2021",
    rating: 5,
    tag: "Solar + BESS Microgrid",
  },
  {
    quote:
      "The IoT telemetry console is a masterclass in clean-tech software. Our sustainability committee receives automated, audit-ready Scope 2 emissions abatement reports that have directly elevated our corporate ESG rating to AAA status.",
    author: "Dr. Elena Rostova",
    role: "Chief Sustainability Officer",
    company: "Nexus Technology Park",
    location: "Silicon Valley, CA",
    image: "/images/avatar-2.jpg",
    partnerSince: "Client since 2022",
    rating: 5,
    tag: "4.2 MW Solar + EV Canopy",
  },
  {
    quote:
      "Deploying our 28.5 MW coastal wind facility with Solara Energy was delivered 3 weeks ahead of schedule. Their turnkey engineering, utility interconnection expertise, and ongoing monitoring have yielded a 104% performance ratio.",
    author: "Julian Thorne",
    role: "Managing Director of Operations",
    company: "Highland Energy Consortium",
    location: "Aberdeenshire, UK",
    image: "/images/avatar-3.jpg",
    partnerSince: "Client since 2020",
    rating: 5,
    tag: "28.5 MW Wind Power",
  },
];

const clientLogos = [
  "NEXUS GLOBAL",
  "APEX LOGISTICS",
  "AURORA TECH",
  "HIGHLAND POWER",
  "VERDANT AGRI",
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-14 sm:py-18 lg:py-22 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-[1720px] 2xl:max-w-[1840px] mx-auto overflow-hidden">
      {/* Top Header & Overall Rating Card */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12 lg:mb-14"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="mb-3 sm:mb-3.5">
            <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-border-soft text-forest text-xs sm:text-sm font-heading font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-lime ring-2 ring-forest/10" />
              <span>Client Testimonials & Proof</span>
            </span>
          </motion.div>

          {/* Dual-Tone Headline */}
          <motion.h2
            variants={fadeInUp}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] leading-[1.08] tracking-tight text-forest"
          >
            Trusted by Industry Leaders <br className="hidden sm:inline" />
            <span className="text-text-muted font-normal">
              in Enterprise Clean Energy
            </span>
          </motion.h2>
        </div>

        {/* Overall Rating Badge Card */}
        <motion.div
          variants={fadeInUp}
          className="p-4 sm:p-5 rounded-[22px] bg-white border border-border-soft shadow-xs flex items-center gap-3.5 shrink-0"
        >
          <div className="w-12 h-12 rounded-xl bg-lime flex flex-col items-center justify-center font-heading font-extrabold text-xl text-forest shadow-xs">
            5.0
          </div>
          <div>
            <div className="flex items-center gap-1 text-amber-500 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="font-heading font-bold text-xs text-forest ml-1">5.0 / 5.0 Rating</span>
            </div>
            <p className="text-[11.5px] text-text-muted">
              Verified Enterprise Clean-Tech Reviews • 98% Retention
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* 3 Editorial Testimonial Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6"
      >
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 bg-white border border-border-soft shadow-[0_6px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Top Row: Stars + Tag */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, sIdx) => (
                    <Star key={sIdx} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10.5px] font-bold text-forest/70 bg-forest/5 px-2.5 py-0.5 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Quote Body */}
              <p className="text-xs sm:text-[13.5px] text-text-primary/90 leading-relaxed font-normal mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author Footer with Avatar & Verified Stamp */}
            <div className="pt-4 border-t border-border-soft flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-lime shadow-xs shrink-0">
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-forest text-xs sm:text-sm leading-tight">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-text-muted mt-0.5 leading-snug">
                    {item.role}, <span className="font-semibold text-forest/80">{item.company}</span>
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-block text-[10.5px] font-medium text-text-muted/80 bg-offwhite px-2 py-0.5 rounded-md shrink-0">
                {item.partnerSince}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Enterprise Brand Logo Marquee / Bar */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 sm:mt-12 pt-8 border-t border-border-soft flex flex-wrap items-center justify-around gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300"
      >
        {clientLogos.map((logo, i) => (
          <span
            key={i}
            className="font-heading font-extrabold text-xs sm:text-sm tracking-widest text-forest"
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
