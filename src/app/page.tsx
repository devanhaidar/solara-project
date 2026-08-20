import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { WhyRenewableSection } from "@/components/sections/why-renewable-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { SustainabilityImpactSection } from "@/components/sections/sustainability-impact-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { SmartTechnologySection } from "@/components/sections/smart-technology-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FinalCtaSection } from "@/components/sections/cta-section";
import { Footer } from "@/components/navigation/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-offwhite flex flex-col selection:bg-lime selection:text-forest overflow-x-hidden">
      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Section 01 — Full-Bleed Responsive Hero */}
        <HeroSection />

        {/* Section 02 — About / Narrative & Multi-Layered Highlights */}
        <AboutSection />

        {/* Section 03 — Solutions Overview (Asymmetric Bento Grid) */}
        <SolutionsSection />

        {/* Section 04 — Why Renewable Energy (Interactive Tab / Side-by-Side) */}
        <WhyRenewableSection />

        {/* Section 05 — Featured Projects (Editorial Portfolio with Filters) */}
        <FeaturedProjectsSection />

        {/* Section 06 — Sustainability Impact (Dark Luxury Section) */}
        <SustainabilityImpactSection />

        {/* Section 07 — How It Works (5-Step Numbered Process) */}
        <HowItWorksSection />

        {/* Section 08 — Smart Energy Technology (IoT Architecture & Platform UI) */}
        <SmartTechnologySection />

        {/* Section 09 — Testimonials & Client Proof (5.0 Rating Badge) */}
        <TestimonialsSection />

        {/* Section 10 — Final CTA Banner */}
        <FinalCtaSection />
      </main>

      {/* Section 11 — Global Footer with Ghost Watermark */}
      <Footer />
    </div>
  );
}
