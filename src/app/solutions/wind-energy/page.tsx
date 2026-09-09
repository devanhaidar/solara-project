import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Footer } from "@/components/navigation/footer";
import { FinalCtaSection } from "@/components/sections/cta-section";
import {
  Wind,
  ShieldCheck,
  Zap,
  TrendingDown,
  CheckCircle2,
  Cpu,
  BarChart,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial & Utility Wind Generation Solutions",
  description:
    "Low-acoustic, direct-drive onshore wind turbines engineered by Solara Energy for industrial parks, coastal operations, and utility power plants.",
};

const specs = [
  { label: "Turbine Rating Range", value: "850 kW to 6.2 MW per Generator Unit" },
  { label: "Generator Architecture", value: "Permanent Magnet Direct-Drive (Gearless for Minimal Friction & Wear)" },
  { label: "Cut-In Wind Velocity", value: "2.5 m/s (Harvests energy even during gentle breezes)" },
  { label: "Rated Wind Velocity", value: "11.0 m/s with Autonomous Pitch Feathering" },
  { label: "Acoustic Footprint", value: "< 98 dB(A) at nacelle — Fully compliant with urban sound ordinances" },
  { label: "Expected Design Life", value: "30+ Years with Predictive Vibration & SCADA Diagnostics" },
];

export default function WindEnergyPage() {
  return (
    <div className="min-h-screen bg-offwhite flex flex-col selection:bg-lime selection:text-forest">
      <PageHeader
        badge="Wind Generation"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "Wind Energy" },
        ]}
        title="Predictable Kinetic Clean Generation with"
        highlightedWord="Direct-Drive Turbines."
        description="Harvest clean energy around the clock. Solara wind power complements daytime solar profiles to provide true baseload industrial resilience."
        bgImage="/images/solutions-wind.jpg"
      />

      <main className="flex-1">
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  Continuous Generation
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mt-2 leading-tight">
                  Nighttime & Winter Basal Power for High-Demand Facilities
                </h2>
                <p className="mt-5 text-text-secondary text-base sm:text-lg leading-relaxed font-body">
                  While solar generates peak output during sunny middays, industrial energy demand persists 24 hours a day. Solara&apos;s direct-drive onshore wind generators capture atmospheric pressure gradients day and night, eliminating costly nocturnal grid import tariffs.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-border-soft">
                    <div className="font-heading font-extrabold text-2xl text-forest">2.5 m/s</div>
                    <div className="text-xs text-text-muted mt-1">Ultra-Low Cut-In Speed</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-border-soft">
                    <div className="font-heading font-extrabold text-2xl text-forest">99.2%</div>
                    <div className="text-xs text-text-muted mt-1">Direct-Drive Availability</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] border border-white/60">
                  <Image
                    src="/images/project-highland-wind.jpg"
                    alt="Solara Energy wind turbines on highland ridge"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white font-medium text-sm">
                    Highland Ridge Wind Farm — 18 MW Capacity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs Table */}
        <section className="py-16 bg-white border-y border-border-soft">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Aeronautical Engineering
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mt-2">
                Turbine Technical Parameters
              </h2>
            </div>

            <div className="bg-[#F7F8F2] rounded-3xl border border-border-soft overflow-hidden divide-y divide-border-soft">
              {specs.map((spec, i) => (
                <div key={i} className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center">
                  <div className="sm:col-span-4 font-heading font-bold text-forest text-sm sm:text-base">
                    {spec.label}
                  </div>
                  <div className="sm:col-span-8 text-text-secondary text-sm sm:text-base">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
