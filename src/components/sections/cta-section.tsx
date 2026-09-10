import { fadeInUp, staggerContainer } from "@/lib/motion";
import * as motion from "framer-motion/client";
import { ArrowRight, Award, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="w-full py-14 sm:py-18 lg:py-22 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-[1720px] 2xl:max-w-[1840px] mx-auto overflow-hidden">
      {/* High-Impact Forest Green Card */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] bg-forest overflow-hidden p-6 sm:p-10 lg:p-14 shadow-2xl border border-white/10 text-white text-center flex flex-col items-center justify-center"
      >
        {/* Ambient Glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-lime/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 right-10 w-72 h-72 rounded-full bg-[#0B4A35]/60 blur-[90px] pointer-events-none" />

        {/* Eyebrow */}
        <motion.div variants={fadeInUp} className="mb-3 sm:mb-4 relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-lime text-xs sm:text-sm font-heading font-semibold shadow-xs">
            <Sparkles size={13} className="text-lime" />
            <span>Accelerate Your Transition</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeInUp}
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] leading-[1.06] tracking-tight text-white max-w-4xl relative z-10"
        >
          Ready to Power Your Future <br />
          <span className="text-lime">with Renewable Energy?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-white/85 max-w-2xl font-normal leading-relaxed relative z-10"
        >
          Partner with Solara Energy to engineer, install, and autonomously manage high-yield solar,
          wind, and storage systems designed to maximize enterprise ROI and eliminate carbon footprint.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5 relative z-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-lime hover:bg-[#cbfb3f] text-forest font-heading font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-98 transition-all duration-200 group"
          >
            <span>Request Free Feasibility Audit</span>
            <div className="w-5 h-5 rounded-full bg-forest/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight size={12} className="text-forest stroke-[2.5]" />
            </div>
          </Link>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-200"
          >
            <span>Explore All Solutions</span>
          </Link>
        </motion.div>

        {/* 3 Trust Proof Chips */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 sm:mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-white/85 relative z-10"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-lime" />
            <span>NABCEP & IEEE Certified Engineers</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award size={15} className="text-lime" />
            <span>25-Year Linear Hardware Warranty</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap size={15} className="text-lime" />
            <span>Zero Upfront CapEx Options Available</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
