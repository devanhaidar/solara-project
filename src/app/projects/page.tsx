import { PageHeader } from "@/components/ui/page-header";
import { Footer } from "@/components/navigation/footer";
import { FinalCtaSection } from "@/components/sections/cta-section";
import { ProjectsGallery } from "@/components/projects/projects-gallery";
import { ShieldCheck, Zap, Award, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Enterprise Projects",
  description:
    "Explore Solara Energy's enterprise portfolio of commercial solar, utility wind farms, battery energy storage, and resilient microgrids.",
};

const summaryStats = [
  { value: "250+", label: "Commissioned Facilities", sub: "100% On-Time Interconnection" },
  { value: "120 MW+", label: "Clean Capacity Online", sub: "Delivering Basal Clean Power" },
  { value: "$42M+", label: "Client Power Savings", sub: "Cumulative Utility Bill Offsets" },
  { value: "99.98%", label: "Operational Uptime", sub: "Backed by 24/7 Solara OS SCADA" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-offwhite flex flex-col selection:bg-lime selection:text-forest">
      {/* 1. Header */}
      <PageHeader
        badge="Enterprise Case Studies"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        title="Proven Clean Energy Deployments Across"
        highlightedWord="North America & Global Sites."
        description="Every facility is engineered to deliver bankable, verifiable kilowatt-hours. Browse our portfolio of commercial solar rooftops, wind generation plants, and megawatt battery installations."
        bgImage="/images/project-floating-solar.jpg"
      />

      <main className="flex-1">
        {/* 2. Portfolio Stats Strip */}
        <section className="py-10 sm:py-12 bg-white border-b border-border-soft">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {summaryStats.map((st, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-forest">
                    {st.value}
                  </div>
                  <div className="font-heading font-bold text-xs sm:text-sm text-forest mt-1">
                    {st.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">
                    {st.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Interactive Gallery */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Portfolio Showcase
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mt-2">
                Engineered for High-Yield Commercial Output
              </h2>
            </div>

            <ProjectsGallery />
          </div>
        </section>

        {/* 4. Final CTA */}
        <FinalCtaSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
