import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Footer } from "@/components/navigation/footer";
import { FinalCtaSection } from "@/components/sections/cta-section";
import {
  BatteryCharging,
  ShieldCheck,
  Zap,
  Flame,
  CheckCircle2,
  Cpu,
  Clock,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Battery Energy Storage Systems (BESS)",
  description:
    "Megawatt-scale Lithium Iron Phosphate (LFP) energy storage systems engineered by Solara Energy for peak demand shaving, microgrid backup, and energy arbitrage.",
};

const specs = [
  { label: "Cell Chemistry", value: "Cobalt-Free Lithium Iron Phosphate (LiFePO4 / LFP)" },
  { label: "Round-Trip Efficiency (RTE)", value: "> 91.5% AC-to-AC at nominal C-rate" },
  { label: "Thermal Management", value: "Closed-loop liquid chilling & multi-zone HVAC with sub-2°C delta" },
  { label: "Response & Switchover", value: "< 16 milliseconds (Seamless UPS microgrid islanding)" },
  { label: "Fire Safety Standards", value: "UL 9540, UL 9540A, NFPA 855 Compliant with Aerosol Gas Suppression" },
  { label: "Cycle Life Warranty", value: "8,000+ Full Cycles to 70% Capacity (15-Year Performance Backing)" },
];

export default function EnergyStoragePage() {
  return (
    <div className="min-h-screen bg-offwhite flex flex-col selection:bg-lime selection:text-forest">
      <PageHeader
        badge="Battery Storage Systems (BESS)"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "Energy Storage" },
        ]}
        title="Megawatt-Scale Grid Resiliency & Peak"
        highlightedWord="Demand Shaving."
        description="Eliminate blackout vulnerabilities and peak tariff spikes. Solara BESS stores surplus midday solar to power your enterprise through peak rate windows."
        bgImage="/images/solutions-storage.jpg"
      />

      <main className="flex-1">
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  Resiliency & Arbitrage
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mt-2 leading-tight">
                  Zero Downtime. Instantaneous Sub-20ms Grid Transfer.
                </h2>
                <p className="mt-5 text-text-secondary text-base sm:text-lg leading-relaxed font-body">
                  When utility grid substations trip or brownouts occur, Solara BESS responds faster than mechanical relays can react. Within 16 milliseconds, your manufacturing lines, clean rooms, or data centers seamlessly transition to stored battery power without a single machine restart.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-border-soft">
                    <div className="font-heading font-extrabold text-2xl text-forest">&lt; 16 ms</div>
                    <div className="text-xs text-text-muted mt-1">Islanding Transfer Time</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-border-soft">
                    <div className="font-heading font-extrabold text-2xl text-forest">8,000+</div>
                    <div className="text-xs text-text-muted mt-1">LFP Rated Cycle Life</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] border border-white/60">
                  <Image
                    src="/images/project-apex-storage.jpg"
                    alt="Solara Energy containerized battery energy storage BESS"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white font-medium text-sm">
                    Apex Industrial Park — 10 MW / 40 MWh LFP Storage Facility
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
                Cell Chemistry & Safety Architecture
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mt-2">
                BESS Engineering Specifications
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
