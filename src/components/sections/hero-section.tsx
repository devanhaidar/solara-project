"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navigation/navbar";
import {
  SolarWindIcon,
  EnergySavingsChartIcon,
  CleanPowerLeafIcon,
  LeafSprout,
} from "@/components/icons/brand-icons";
import { ArrowRight, Leaf, ShieldCheck, Globe } from "lucide-react";
import { fadeInUp, staggerContainer, staggerContainerSlow } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] lg:min-h-screen flex flex-col justify-between bg-[#F7F8F2] overflow-hidden rounded-b-[28px] sm:rounded-b-[40px] lg:rounded-b-[56px] shadow-sm">
      {/* 100% Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-bg.jpg"
          alt="Solara Energy renewable energy solar panels and wind turbines on green rolling hills"
          fill
          priority
          quality={100}
          className="object-cover object-[75%_center] sm:object-[70%_center] lg:object-[80%_center] xl:object-center"
        />
        {/* Organic Light Gradients for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F8F2] via-[#F7F8F2]/90 to-transparent w-full lg:w-[62%] xl:w-[54%] 2xl:w-[48%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F8F2]/90 via-transparent to-transparent h-64 lg:hidden" />
        {/* Bottom subtle gradient for card contrast */}
        <div className="absolute inset-x-0 bottom-0 h-52 sm:h-64 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Seamless Integrated Top Navbar */}
      <Navbar />

      {/* Main Responsive Content Canvas */}
      <div className="relative z-10 w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 flex-1 flex flex-col justify-between pt-1 sm:pt-2 pb-4 sm:pb-6">
        {/* Top / Middle Left: Headline, Badge & CTAs */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-2xl xl:max-w-[720px] 2xl:max-w-[780px] my-auto py-3 sm:py-4 lg:py-6"
        >
          {/* Eyebrow Badge */}
          <motion.div variants={fadeInUp} className="mb-2.5 sm:mb-3.5">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#EAF8C9]/95 border border-[#cbe89a] text-forest text-xs sm:text-[13px] font-heading font-semibold tracking-wide shadow-xs">
              <Leaf size={13} className="text-[#598e21] fill-[#598e21]/40 shrink-0" />
              <span>Renewable Energy for a Cleaner Future</span>
            </span>
          </motion.div>

          {/* Giant Responsive Headline (Balanced scale for 1080p, laptops, & 2K+) */}
          <motion.h1
            variants={fadeInUp}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[60px] 2xl:text-[68px] leading-[1.06] tracking-[-0.03em] text-forest"
          >
            Powering T
            <span className="relative inline-block">
              o
              {/* Micro branding leaf sprout on the 'o' */}
              <span className="absolute -top-2 sm:-top-3 -right-0.5 sm:-right-1 pointer-events-none">
                <LeafSprout className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
            </span>
            morrow <br className="hidden sm:inline" />
            with Solar and <br />
            Wind Energy
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            variants={fadeInUp}
            className="mt-2.5 sm:mt-3.5 md:mt-4 text-xs sm:text-sm md:text-base lg:text-[16px] text-text-primary/90 max-w-xl font-normal leading-relaxed"
          >
            Solara Energy delivers smart renewable energy solutions designed to reduce
            energy costs, improve energy independence, and support a cleaner planet.
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            variants={fadeInUp}
            className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-3.5"
          >
            {/* Primary Lime Button */}
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2.5 bg-lime hover:bg-[#cbfb3f] text-forest font-heading font-bold text-xs sm:text-sm md:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm hover:shadow-lg hover:scale-[1.02] active:scale-98 transition-all duration-200 group"
            >
              <span>Explore Solutions</span>
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-forest/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={12} className="text-forest stroke-[2.5]" />
              </div>
            </Link>

            {/* Secondary Dark Green Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-forest hover:bg-green-dark text-white font-heading font-semibold text-xs sm:text-sm md:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm hover:shadow-lg hover:scale-[1.02] active:scale-98 transition-all duration-200 group"
            >
              <span>Get Free Consultation</span>
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={12} className="text-white stroke-[2.5]" />
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Floating Cards (5 items in balanced responsive grid) */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xl:gap-3.5 pb-3 sm:pb-4"
        >
          {/* Card 1: Solar + Wind Solutions */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 xl:p-4.5 shadow-sm border border-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group min-h-[135px] xl:min-h-[145px]"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-lime-soft flex items-center justify-center text-forest mb-2.5 group-hover:scale-105 transition-transform">
              <SolarWindIcon className="w-4 h-4 sm:w-5 sm:h-5 text-forest" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-forest text-sm sm:text-[15px] leading-snug mb-0.5">
                Solar + Wind Solutions
              </h3>
              <p className="text-[11.5px] sm:text-xs text-text-muted leading-relaxed">
                Integrated clean-energy solutions for a sustainable tomorrow.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Lower Energy Costs */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 xl:p-4.5 shadow-sm border border-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group min-h-[135px] xl:min-h-[145px]"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-lime-soft flex items-center justify-center text-forest mb-2.5 group-hover:scale-105 transition-transform">
              <EnergySavingsChartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-forest" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-forest text-sm sm:text-[15px] leading-snug mb-0.5">
                Lower Energy Costs
              </h3>
              <p className="text-[11.5px] sm:text-xs text-text-muted leading-relaxed">
                Reduce your electricity bills with efficient, smart energy systems.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Clean Power Systems */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 xl:p-4.5 shadow-sm border border-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group min-h-[135px] xl:min-h-[145px]"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-lime-soft flex items-center justify-center text-forest mb-2.5 group-hover:scale-105 transition-transform">
              <CleanPowerLeafIcon className="w-4 h-4 sm:w-5 sm:h-5 text-forest" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-forest text-sm sm:text-[15px] leading-snug mb-0.5">
                Clean Power Systems
              </h3>
              <p className="text-[11.5px] sm:text-xs text-text-muted leading-relaxed">
                Reliable, eco-friendly power that protects the planet we live in.
              </p>
            </div>
          </motion.div>

          {/* Card 4: 10+ Years Experience */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 xl:p-4.5 shadow-sm border border-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group min-h-[135px] xl:min-h-[145px]"
          >
            <div className="mb-0.5">
              <span className="font-heading font-extrabold text-2xl sm:text-3xl xl:text-[34px] text-forest tracking-tight block">
                10+
              </span>
            </div>
            <div>
              <h3 className="font-heading font-bold text-forest text-xs sm:text-[13.5px] leading-snug mb-0.5">
                Years of Energy Experience
              </h3>
              <p className="text-[11.5px] sm:text-xs text-text-muted leading-relaxed">
                A decade of delivering trusted renewable energy solutions.
              </p>
            </div>
          </motion.div>

          {/* Card 5: 40% Savings */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 xl:p-4.5 shadow-sm border border-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group min-h-[135px] xl:min-h-[145px]"
          >
            <div className="mb-0.5">
              <span className="font-heading font-extrabold text-2xl sm:text-3xl xl:text-[34px] text-forest tracking-tight block">
                40%
              </span>
            </div>
            <div>
              <h3 className="font-heading font-bold text-forest text-xs sm:text-[13.5px] leading-snug mb-0.5">
                Potential Energy Savings
              </h3>
              <p className="text-[11.5px] sm:text-xs text-text-muted leading-relaxed">
                Save up to 40% on energy costs with our advanced solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Proof & Trust Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="py-2.5 sm:py-3 border-t border-white/25 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-[13px] text-white font-medium drop-shadow-sm"
        >
          {/* Customer Avatars & Count */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex items-center -space-x-2">
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white shadow-xs">
                <Image
                  src="/images/avatar-1.jpg"
                  alt="Customer portrait 1"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white shadow-xs">
                <Image
                  src="/images/avatar-2.jpg"
                  alt="Customer portrait 2"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white shadow-xs">
                <Image
                  src="/images/avatar-3.jpg"
                  alt="Customer portrait 3"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white shadow-xs">
                <Image
                  src="/images/avatar-4.jpg"
                  alt="Customer portrait 4"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-white/95 text-xs sm:text-[13px]">
              Trusted by{" "}
              <span className="font-bold text-white">12,000+</span>{" "}
              customers worldwide
            </p>
          </div>

          {/* Badges with Dividers */}
          <div className="flex items-center gap-3 sm:gap-4 text-white/90 text-xs sm:text-[13px]">
            <span className="hidden sm:inline-block w-px h-3 bg-white/30" />

            <div className="hidden sm:flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-lime" />
              <span>Certified & Compliant</span>
            </div>

            <span className="hidden md:inline-block w-px h-3 bg-white/30" />

            <div className="hidden md:flex items-center gap-1.5">
              <Globe size={15} className="text-lime" />
              <span>Sustainable & Responsible</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
