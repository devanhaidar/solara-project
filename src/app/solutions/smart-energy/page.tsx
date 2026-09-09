import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Footer } from "@/components/navigation/footer";
import { FinalCtaSection } from "@/components/sections/cta-section";
import {
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  BarChart3,
  Server,
  Radio,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Energy Management & Solara OS",
  description:
    "Autonomous IoT telemetry, AI load-balancing, and predictive maintenance platform engineered by Solara Energy.",
};

const modules = [
  {
    icon: Activity,
    title: "Real-Time Telemetry Engine",
    desc: "Collects 50+ data channels per second across inverters, weather stations, irradiance pyranometers, and facility switchgear.",
  },
  {
    icon: Cpu,
    title: "AI Peak Arbitrage Dispatch",
    desc: "Predicts day-ahead nodal LMP electricity prices and autonomously instructs BESS storage when to charge and discharge.",
  },
  {
    icon: Server,
    title: "Automated ESG & Scope 1/2 Auditing",
    desc: "Generates SEC and Greenhouse Gas Protocol compliant carbon accounting reports with cryptographic proof of clean generation.",
  },
  {
    icon: Radio,
    title: "Predictive Degradation Alerts",
    desc: "Detects hot-spots, micro-cracks, and inverter harmonic anomalies before equipment failures trigger costly facility downtime.",
  },
];

export default function SmartEnergyPage() {
  return (
    <div className="min-h-screen bg-offwhite flex flex-col selection:bg-lime selection:text-forest">
      <PageHeader
        badge="Solara OS Platform"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "Smart Energy" },
        ]}
        title="Autonomous AI Telemetry & Grid"
        highlightedWord="Orchestration OS."
        description="Transform raw generation into actionable financial intelligence. Solara OS synchronizes on-site solar, wind, storage, and factory loads in real time."
        bgImage="/images/solutions-smart-iot.jpg"
      />

      <main className="flex-1">
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  Algorithmic Energy Intelligence
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mt-2 leading-tight">
                  Turning Megawatts into Predictable Enterprise Savings
                </h2>
                <p className="mt-5 text-text-secondary text-base sm:text-lg leading-relaxed font-body">
                  Modern energy markets are dynamic, with electricity pricing fluctuating every 15 minutes. Solara OS uses predictive neural network models trained on regional weather forecasts, grid load curves, and facility production schedules to make millisecond dispatch decisions.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-border-soft">
                    <div className="font-heading font-extrabold text-2xl text-forest">&lt; 1 sec</div>
                    <div className="text-xs text-text-muted mt-1">Telemetry Polling Interval</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-border-soft">
                    <div className="font-heading font-extrabold text-2xl text-forest">18.4%</div>
                    <div className="text-xs text-text-muted mt-1">Additional Tariff Arbitrage Gains</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] border border-white/60">
                  <Image
                    src="/images/solutions-smart-iot.jpg"
                    alt="Solara Energy Global Command Center and IoT telemetry wall"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white font-medium text-sm">
                    Solara 24/7 Remote Operations Center & Real-Time Grid Monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="py-16 bg-white border-y border-border-soft">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Software Architecture
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mt-2">
                Core Solara OS Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-[#F7F8F2] border border-border-soft hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-forest text-lime flex items-center justify-center mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-forest mb-2">
                      {m.title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
