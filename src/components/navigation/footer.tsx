"use client";

import Link from "next/link";
import { BrightlyLogoIcon } from "@/components/icons/brand-icons";
import { ArrowRight, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#042A1F] text-white pt-12 sm:pt-16 lg:pt-20 pb-6 overflow-hidden relative border-t border-white/10">
      <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-10">
        {/* Top Newsletter & Advisory Row */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[32px] bg-white/[0.05] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-heading font-bold text-lime tracking-wider uppercase mb-1.5 block">
              Stay Ahead in Clean Energy
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white leading-tight">
              Get our monthly commercial clean-tech market analysis & policy insights.
            </h3>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-2.5"
          >
            <input
              type="email"
              placeholder="Enter your enterprise email"
              className="w-full sm:w-72 px-4.5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-xs sm:text-sm focus:outline-none focus:border-lime"
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-lime hover:bg-[#cbfb3f] text-forest font-heading font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-sm hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
            >
              <span>Subscribe</span>
              <ArrowRight size={13} className="stroke-[2.5]" />
            </button>
          </form>
        </div>

        {/* Main Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Narrative */}
          <div className="lg:col-span-2 space-y-3.5">
            <Link href="/" className="flex items-center gap-2.5 group focus-visible:outline-none">
              <div className="group-hover:scale-105 transition-transform duration-200">
                <BrightlyLogoIcon className="w-8 h-8 rounded-xl" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                Solara Energy
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              Engineering high-performance solar, wind, and storage ecosystems to help businesses
              achieve complete energy independence, reduce overhead costs, and eliminate carbon emissions.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1 text-[11px] text-lime bg-lime/10 px-2.5 py-0.5 rounded-full border border-lime/20">
                <ShieldCheck size={12} />
                NABCEP Certified EPC
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-white/80 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                ISO 9001 & 14001
              </span>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="font-heading font-bold text-xs sm:text-sm text-white uppercase tracking-wider mb-3">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <Link href="/solutions/solar-energy" className="hover:text-lime transition-colors">
                  Solar Energy Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions/wind-energy" className="hover:text-lime transition-colors">
                  Wind Power Generation
                </Link>
              </li>
              <li>
                <Link href="/solutions/energy-storage" className="hover:text-lime transition-colors">
                  Battery Storage (BESS)
                </Link>
              </li>
              <li>
                <Link href="/solutions/smart-energy" className="hover:text-lime transition-colors">
                  Smart IoT Energy Management
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-lime transition-colors">
                  Commercial Microgrids
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-heading font-bold text-xs sm:text-sm text-white uppercase tracking-wider mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-lime transition-colors">
                  About Solara
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-lime transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-lime transition-colors">
                  Leadership & Engineering
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-lime transition-colors">
                  Careers (We&apos;re Hiring)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-lime transition-colors">
                  Press & Media Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Support */}
          <div>
            <h4 className="font-heading font-bold text-xs sm:text-sm text-white uppercase tracking-wider mb-3">
              Contact & HQ
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-lime shrink-0 mt-0.5" />
                <span>500 Howard Street, Suite 400<br />San Francisco, CA 94105</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-lime shrink-0" />
                <span>+1 (800) 550-SOLAR</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-lime shrink-0" />
                <span>enterprise@solaraenergy.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Solara Clean Energy Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-white transition-colors">
              Security & Compliance
            </Link>
          </div>
        </div>
      </div>

      {/* Giant Ghost Watermark Brand Typography */}
      <div className="w-full text-center pointer-events-none select-none overflow-hidden -mb-4 mt-6 sm:mt-8">
        <span className="font-heading font-extrabold text-[90px] sm:text-[140px] md:text-[190px] lg:text-[240px] xl:text-[280px] text-white/[0.03] tracking-tighter leading-none block">
          Solara
        </span>
      </div>
    </footer>
  );
}
