import { Footer } from "@/components/navigation/footer";
import { FinalCtaSection } from "@/components/sections/cta-section";
import { PageHeader } from "@/components/ui/page-header";
import {
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Commercial & Industrial Solar Energy Solutions",
  description:
    "Turnkey commercial rooftop, carport, and ground-mount photovoltaic systems engineered by Solara Energy with Tier-1 bifacial panels.",
};

const specs = [
  { label: "Module Efficiency", value: "Up to 22.8% Bifacial N-Type TOPCon" },
  { label: "Power Output Degradation", value: "< 0.4% Annual (90% at Year 25)" },
  { label: "Inverter Technology", value: "Multi-MPPT High Voltage (1500V DC)" },
  { label: "Mounting Systems", value: "Wind-tunnel tested non-penetrating ballasted & bespoke structural clamps" },
  { label: "Telemetry & Control", value: "Solara OS Cloud with string-level rapid shutdown (NEC 690.12 compliant)" },
  { label: "Linear Warranty", value: "25-Year Equipment & 25-Year Generation Performance Assurance" },
];

const tiers = [
  {
    name: "Commercial Rooftop Arrays",
    desc: "Optimized for distribution warehouses, cold storage, and corporate HQ rooftops with zero roof penetration ballasting.",
    capacity: "100 kW – 3.5 MW",
    benefit: "Cuts daytime grid peak tariffs by 45%–65%",
  },
  {
    name: "Bifacial Solar Carports",
    desc: "Transform expansive employee and fleet parking lots into high-yield clean power generation with integrated Level 2/DC fast chargers.",
    capacity: "250 kW – 5 MW",
    benefit: "Protects fleet vehicles + charges zero-emission EVs",
  },
  {
    name: "Ground-Mount & Floating Solar",
    desc: "Engineered for industrial land parcels, retention reservoirs, and utility easements with single-axis tracking systems.",
    capacity: "1 MW – 50+ MW",
    benefit: "Maximum irradiance harvest with up to 25% yield boost",
  },
];

export default function SolarEnergyPage() {
  return (
    <div className="min-h-screen bg-offwhite flex flex-col selection:bg-lime selection:text-forest">
      <PageHeader
        badge="Solar Energy Systems"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "Solar Energy" },
        ]}
        title="High-Yield Commercial Photovoltaics Built for"
        highlightedWord="Enterprise Baselines."
        description="Engineered to withstand extreme hail and hurricane-force winds while delivering predictable, bankable energy cost reductions for 25+ years."
        bgImage="/images/solutions-solar.jpg"
      />

      <main className="flex-1">
        {/* Deep Dive Intro */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  Engineering Superiority
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mt-2 leading-tight">
                  Maximizing Photovoltaic Yield Under Every Microclimate
                </h2>
                <p className="mt-5 text-inherit text-base sm:text-lg leading-relaxed font-body">
                  Solara solar arrays utilize bifacial N-type cells that absorb reflected albedo light from both sides of the panel, generating up to 20% more power than conventional single-sided modules. Every project is paired with automated 1500V DC smart string inverters to eliminate single points of failure.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-border-soft">
                    <div className="font-heading font-extrabold text-2xl text-forest">22.8%</div>
                    <div className="text-xs text-text-muted mt-1">Peak Module Efficiency</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-border-soft">
                    <div className="font-heading font-extrabold text-2xl text-forest">3.2 Yrs</div>
                    <div className="text-xs text-text-muted mt-1">Average Commercial ROI</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] border border-white/60">
                  <Image
                    src="/images/project-nexus-solar.jpg"
                    alt="Commercial rooftop solar panels installation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white font-medium text-sm">
                    Nexus Logistics Center — 2.4 MW Rooftop Installation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Deployment Types */}
        <section className="py-16 bg-white border-y border-border-soft">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Installation Configurations
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mt-2">
                Tailored for Your Property Geometry
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#F7F8F2] border border-border-soft hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Capacity: {tier.capacity}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-forest mt-2 mb-3">
                      {tier.name}
                    </h3>
                    <p className="text-inherit text-sm leading-relaxed mb-6">
                      {tier.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border-soft">
                    <span className="text-xs font-semibold text-forest flex items-center gap-1.5">
                      <Zap size={14} className="text-inherit" />
                      {tier.benefit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs Table */}
        <section className="py-16 sm:py-20">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Data & Standards
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mt-2">
                Technical Specifications
              </h2>
            </div>

            <div className="bg-white rounded-3xl border border-border-soft overflow-hidden divide-y divide-border-soft">
              {specs.map((spec, i) => (
                <div key={i} className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center">
                  <div className="sm:col-span-4 font-heading font-bold text-forest text-sm sm:text-base">
                    {spec.label}
                  </div>
                  <div className="sm:col-span-8 text-inherit text-sm sm:text-base">
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
