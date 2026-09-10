"use client";

import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    facilityType: "Industrial Manufacturing",
    monthlyBill: "$15,000 – $50,000 / mo",
    solutions: ["Solar PV", "Battery BESS Storage"],
    message: "",
  });

  const toggleSolution = (sol: string) => {
    setFormData((prev) => {
      const exists = prev.solutions.includes(sol);
      return {
        ...prev,
        solutions: exists
          ? prev.solutions.filter((s) => s !== sol)
          : [...prev.solutions, sol],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div role="status" className="bg-forest text-offwhite p-8 sm:p-12 rounded-3xl sm:rounded-[36px] border border-white/15 text-center flex flex-col items-center justify-center min-h-[460px] shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-lime/20 border border-lime/40 text-lime flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle2 size={32} />
        </div>
        <span className="px-3 py-1 rounded-full bg-lime/15 text-lime text-xs font-bold uppercase tracking-wider mb-3">
          Demo Request Preview
        </span>
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
          Thank You, {formData.name || "Partner"}!
        </h3>
        <p className="text-offwhite/80 text-sm sm:text-base max-w-md leading-relaxed mb-6">
          This is a frontend demo. Your facility details have not been sent or stored, and no consultation has been requested.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-bold transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[36px] border border-border-soft shadow-xl space-y-6"
    >
      <div className="border-b border-border-soft pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-soft text-forest text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles size={13} />
          <span>Complimentary Solar & Storage Audit</span>
        </div>
        <h3 className="font-heading font-extrabold text-2xl text-forest tracking-tight">
          Request Your Engineering Assessment
        </h3>
        <p className="text-text-muted text-xs sm:text-sm mt-1">
          Zero obligation. Includes preliminary satellite CAD layout and 25-year financial pro-forma.
        </p>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            id="contact-name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={(event) => {
              const value = event.target.value;
              setFormData((previous) => ({ ...previous, name: value }));
            }}
            placeholder="Marcus Sterling"
            className="w-full px-4 py-3 rounded-xl border border-border-soft bg-[#F7F8F2] text-forest text-sm focus:outline-none focus:border-forest"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
            Corporate Email *
          </label>
          <input
            type="email"
            required
            id="contact-email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={(event) => {
              const value = event.target.value;
              setFormData((previous) => ({ ...previous, email: value }));
            }}
            placeholder="m.sterling@enterprise.com"
            className="w-full px-4 py-3 rounded-xl border border-border-soft bg-[#F7F8F2] text-forest text-sm focus:outline-none focus:border-forest"
          />
        </div>

        <div>
          <label htmlFor="contact-company" className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
            Company / Organization *
          </label>
          <input
            type="text"
            required
            id="contact-company"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={(event) => {
              const value = event.target.value;
              setFormData((previous) => ({ ...previous, company: value }));
            }}
            placeholder="Sterling Logistics Group"
            className="w-full px-4 py-3 rounded-xl border border-border-soft bg-[#F7F8F2] text-forest text-sm focus:outline-none focus:border-forest"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={(event) => {
              const value = event.target.value;
              setFormData((previous) => ({ ...previous, phone: value }));
            }}
            placeholder="+1 (555) 019-2834"
            className="w-full px-4 py-3 rounded-xl border border-border-soft bg-[#F7F8F2] text-forest text-sm focus:outline-none focus:border-forest"
          />
        </div>
      </div>

      {/* Facility & Monthly Spend */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-facilityType" className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
            Facility Classification
          </label>
          <select
            id="contact-facilityType"
            name="facilityType"
            value={formData.facilityType}
            onChange={(event) => {
              const value = event.target.value;
              setFormData((previous) => ({ ...previous, facilityType: value }));
            }}
            className="w-full px-4 py-3 rounded-xl border border-border-soft bg-[#F7F8F2] text-forest text-sm focus:outline-none focus:border-forest"
          >
            <option>Industrial Manufacturing</option>
            <option>Distribution / Cold Storage Warehouse</option>
            <option>Corporate Office / Tech Campus</option>
            <option>Agricultural / Food Processing</option>
            <option>Hospitality / Healthcare</option>
            <option>Municipal / Utility Ground Mount</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-monthlyBill" className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
            Monthly Electrical Utility Spend
          </label>
          <select
            id="contact-monthlyBill"
            name="monthlyBill"
            value={formData.monthlyBill}
            onChange={(event) => {
              const value = event.target.value;
              setFormData((previous) => ({ ...previous, monthlyBill: value }));
            }}
            className="w-full px-4 py-3 rounded-xl border border-border-soft bg-[#F7F8F2] text-forest text-sm focus:outline-none focus:border-forest"
          >
            <option>Under $5,000 / mo</option>
            <option>$5,000 – $15,000 / mo</option>
            <option>$15,000 – $50,000 / mo</option>
            <option>$50,000 – $100,000 / mo</option>
            <option>$100,000+ / mo</option>
          </select>
        </div>
      </div>

      {/* Solutions Multi-select */}
      <div>
        <div id="contact-solutions-label" className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
          Solutions of Interest (Select All Applicable)
        </div>
        <div role="group" aria-labelledby="contact-solutions-label" className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {["Solar PV", "Battery BESS Storage", "Wind Generation", "Solara OS Telemetry"].map(
            (sol) => {
              const isSelected = formData.solutions.includes(sol);
              return (
                <button
                  type="button"
                  key={sol}
                  aria-pressed={isSelected}
                  onClick={() => toggleSolution(sol)}
                  className={`p-2.5 rounded-xl border text-xs font-heading font-semibold transition-all ${
                    isSelected
                      ? "bg-forest text-lime border-forest shadow-sm"
                      : "bg-[#F7F8F2] text-inherit border-border-soft hover:border-forest/40"
                  }`}
                >
                  {sol}
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
          Project Notes or Site Specifics (Optional)
        </label>
        <textarea
          rows={3}
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={(event) => {
              const value = event.target.value;
              setFormData((previous) => ({ ...previous, message: value }));
            }}
          placeholder="e.g. 120,000 sq ft TPO membrane roof, interested in peak shaving battery storage and carport canopies..."
          className="w-full px-4 py-3 rounded-xl border border-border-soft bg-[#F7F8F2] text-forest text-sm focus:outline-none focus:border-forest resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-lime hover:bg-[#cbfb3f] text-forest font-heading font-bold text-sm px-6 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
      >
        <span>Submit Engineering Feasibility Request</span>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
