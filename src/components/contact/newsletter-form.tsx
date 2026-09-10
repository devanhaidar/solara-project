"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      title="Demo only: no email is stored or subscribed."
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-2.5"
    >
      <input
        type="email"
        required
        name="email"
        autoComplete="email"
        aria-label="Newsletter email"
        onChange={() => setSubmitted(false)}
        placeholder="Enter your enterprise email"
        className="w-full sm:w-72 px-4.5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-xs sm:text-sm focus:outline-none focus:border-lime"
      />
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-lime hover:bg-[#cbfb3f] text-forest font-heading font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-sm hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
      >
        <span aria-live="polite">{submitted ? "Demo only" : "Subscribe"}</span>
        <ArrowRight size={13} className="stroke-[2.5]" />
      </button>
    </form>
  );
}
