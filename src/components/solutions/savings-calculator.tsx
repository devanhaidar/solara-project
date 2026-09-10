"use client";

import { ArrowRight, Calculator, Sparkles, TrendingDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function SavingsCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(15000); // USD
  const [facilityType, setFacilityType] = useState<"commercial" | "industrial" | "agricultural">("industrial");

  // Multipliers based on facility type
  const multiplier = facilityType === "industrial" ? 0.42 : facilityType === "commercial" ? 0.38 : 0.35;
  const annualBill = monthlySpend * 12;
  const annualSavings = Math.round(annualBill * multiplier);
  const estimatedSystemKw = Math.round(monthlySpend / 85);
  const co2OffsetTons = Math.round(annualSavings / 210);
  const paybackYears = facilityType === "industrial" ? 3.4 : 3.8;

  return (
    <div className="bg-forest text-offwhite rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-white/10">
      {/* Background radial glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-lime/15 blur-[90px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-emerald-500/20 blur-[90px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Inputs */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-lime text-xs font-semibold uppercase tracking-wider">
            <Calculator size={13} />
            <span>Interactive ROI Estimator</span>
          </div>

          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Estimate Your Annual Clean Energy ROI
          </h3>
          <p className="text-offwhite/80 text-sm sm:text-base leading-relaxed">
            Adjust your facility type and monthly electrical utility expenditure to see estimated operational savings and system sizing.
          </p>

          {/* Facility Type Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-offwhite/70 mb-2">
              Facility Sector
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["industrial", "commercial", "agricultural"] as const).map((type) => (
                <button
                  key={type}
                  aria-pressed={facilityType === type}
                  type="button"
                  onClick={() => setFacilityType(type)}
                  className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-heading font-bold capitalize transition-all ${
                    facilityType === type
                      ? "bg-lime text-forest shadow-md"
                      : "bg-white/5 hover:bg-white/10 text-white/80 border border-white/10"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Slider for Monthly Spend */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="monthly-spend" className="text-xs font-bold uppercase tracking-wider text-offwhite/70">
                Current Monthly Electric Spend
              </label>
              <span className="font-heading font-extrabold text-lg sm:text-xl text-lime">
                ${monthlySpend.toLocaleString("en-US")} / mo
              </span>
            </div>
            <input
              id="monthly-spend"
              type="range"
              min={3000}
              max={100000}
              step={1000}
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-lime"
            />
            <div className="flex justify-between text-[11px] text-offwhite/50 mt-1">
              <span>$3,000/mo</span>
              <span>$50,000/mo</span>
              <span>$100,000+/mo</span>
            </div>
          </div>
        </div>

        {/* Right Output Dashboard */}
        <div className="lg:col-span-6 bg-[#042A1F]/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/15 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <div className="text-xs uppercase tracking-wider text-offwhite/60 font-semibold">
                Estimated Annual Savings
              </div>
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-lime mt-1">
                ${annualSavings.toLocaleString("en-US")}
                <span className="text-xs text-offwhite/70 font-normal ml-1.5">/ year</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-lime/20 flex items-center justify-center text-lime">
              <TrendingDown size={24} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-offwhite/60">
                Recommended PV
              </div>
              <div className="font-heading font-bold text-lg sm:text-xl text-white mt-0.5">
                ~{estimatedSystemKw} kWp
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-offwhite/60">
                Annual CO₂ Cut
              </div>
              <div className="font-heading font-bold text-lg sm:text-xl text-white mt-0.5">
                {co2OffsetTons} Tons
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-offwhite/60">
                Target Payback
              </div>
              <div className="font-heading font-bold text-lg sm:text-xl text-white mt-0.5">
                {paybackYears} Yrs
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-offwhite/80">
            <Sparkles size={16} className="text-lime shrink-0" />
            <span>Illustrative demo only; fixed assumptions, not an engineering or tax estimate.</span>
          </div>

          <Link
            href="/contact"
            className="w-full inline-flex items-center justify-center gap-2 bg-lime hover:bg-[#cbfb3f] text-forest font-heading font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all duration-200 group"
          >
            <span>Request Detailed Engineering Audit</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
