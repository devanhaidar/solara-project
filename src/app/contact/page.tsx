import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { Footer } from "@/components/navigation/footer";
import { ContactForm } from "@/components/contact/contact-form";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Zap,
  HelpCircle,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Feasibility Audit",
  description:
    "Schedule an engineering energy audit with Solara Energy's clean-tech specialists. Direct phone lines, enterprise briefing center, and support.",
};

const faqs = [
  {
    q: "How long does a commercial solar feasibility audit take?",
    a: "Preliminary satellite CAD modeling and financial pro-forma estimates are completed within 48 business hours. Full on-site structural and electrical engineering assessments typically take 5 to 7 business days.",
  },
  {
    q: "Can my company install a microgrid with zero upfront capital?",
    a: "Yes. Through our Power Purchase Agreement (PPA) and solar lease structures, Solara funds 100% of engineering, hardware, permitting, and construction. Your enterprise simply pays a fixed, heavily discounted rate per kWh produced.",
  },
  {
    q: "How does Solara navigate utility interconnection and city permits?",
    a: "Our in-house project engineering team handles 100% of the utility interconnection study, AHJ zoning permits, environmental compliance reviews, and final PTO (Permission to Operate) certification.",
  },
  {
    q: "How does the system ensure zero downtime during utility blackouts?",
    a: "When paired with our BESS energy storage, Solara's autonomous microgrid switchgear islands your facility in less than 16 milliseconds, sustaining critical machinery and servers without operational interruption.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-offwhite flex flex-col selection:bg-lime selection:text-forest">
      {/* 1. Header */}
      <PageHeader
        badge="Contact & Feasibility Desk"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title="Connect with Our Renewable Engineering"
        highlightedWord="Specialists."
        description="Whether you are assessing a 500 kW factory rooftop or a 50 MW hybrid microgrid, our technical engineering team is ready to evaluate your site."
        bgImage="/images/contact-facility.jpg"
      />

      <main className="flex-1">
        {/* 2. Main Form & Headquarters Facility Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Form Column */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

              {/* Office & Facility Column */}
              <div className="lg:col-span-5 space-y-8">
                {/* Innovation Center Photography Card */}
                <div className="bg-white rounded-3xl sm:rounded-[36px] border border-border-soft overflow-hidden shadow-lg p-6 sm:p-7">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                    <Image
                      src="/images/contact-facility.jpg"
                      alt="Solara Energy Innovation Center and Client Experience Facility"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="px-2.5 py-0.5 rounded-full bg-lime text-forest text-[11px] font-bold uppercase tracking-wider">
                        Client Experience Facility
                      </span>
                      <div className="font-heading font-bold text-sm sm:text-base mt-1">
                        Solara Energy Innovation Center
                      </div>
                    </div>
                  </div>

                  <h4 className="font-heading font-bold text-lg text-forest mb-4">
                    Global Headquarters & Engineering Hub
                  </h4>

                  <div className="space-y-4 text-xs sm:text-sm text-text-secondary">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-forest">Solara Innovation Center</div>
                        <div>100 Solara Parkway, Suite 400</div>
                        <div>Scottsdale, AZ 85255, United States</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-forest">Enterprise Desk & Toll-Free</div>
                        <div>+1 (800) 765-2721</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-forest">Direct Project Inquiries</div>
                        <div>enterprise@solara.energy</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-forest">Engineering Hours</div>
                        <div>Monday – Friday: 7:00 AM – 6:00 PM MST</div>
                        <div>24/7 Grid Dispatch for Solara OS Clients</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guaranteed SLA Card */}
                <div className="bg-forest text-offwhite p-6 sm:p-7 rounded-3xl border border-white/15">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck size={20} className="text-lime" />
                    <h4 className="font-heading font-bold text-base text-white">
                      Enterprise Response Guarantee
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-offwhite/80 leading-relaxed">
                    All commercial audit submissions are assigned directly to a licensed regional PE (Professional Engineer). You will receive preliminary irradiance feasibility feedback within 24 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FAQ Accordion Section */}
        <section className="py-16 bg-white border-y border-border-soft">
          <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Frequently Answered Questions
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest tracking-tight mt-2">
                Clear Answers for Enterprise Buyers
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#F7F8F2] border border-border-soft"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle size={20} className="text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-base sm:text-lg text-forest">
                        {faq.q}
                      </h4>
                      <p className="mt-2 text-text-secondary text-xs sm:text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
