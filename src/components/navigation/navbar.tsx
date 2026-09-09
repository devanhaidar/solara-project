"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrightlyLogoIcon } from "@/components/icons/brand-icons";
import { ctaText } from "@/lib/site-config";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className = "" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutionsSubmenu = [
    { label: "Solar Energy", href: "/solutions/solar-energy", desc: "Commercial & Industrial Photovoltaics" },
    { label: "Wind Generation", href: "/solutions/wind-energy", desc: "Onshore Direct-Drive Turbines" },
    { label: "Battery Storage (BESS)", href: "/solutions/energy-storage", desc: "Megawatt-Scale Resiliency" },
    { label: "Smart Energy Management", href: "/solutions/smart-energy", desc: "Solara OS Telemetry & AI Dispatch" },
  ];

  const isSolutionsActive = pathname.startsWith("/solutions");
  const isProjectsActive = pathname === "/projects";
  const isAboutActive = pathname === "/about";
  const isContactActive = pathname === "/contact";

  return (
    <div className={`fixed top-4 sm:top-6 inset-x-0 z-50 w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 pointer-events-none transition-all duration-300 ${className}`}>
      <header
        className={`w-full pointer-events-auto rounded-full transition-all duration-300 ease-in-out px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 min-h-[64px] sm:min-h-[70px] lg:min-h-[74px] flex items-center ${
          isScrolled
            ? "bg-white text-forest shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-black/10 backdrop-blur-md"
            : "bg-black/40 text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)] border border-white/25 backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Left Navigation Items (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10 flex-1">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <Link
                href="/solutions"
                className={`flex items-center gap-1.5 text-xs sm:text-[13px] xl:text-sm font-heading font-bold tracking-wider transition-all py-1.5 cursor-pointer ${
                  isSolutionsActive
                    ? isScrolled
                      ? "text-forest bg-lime/40 px-3.5 py-1.5 rounded-full"
                      : "text-lime bg-white/15 px-3.5 py-1.5 rounded-full"
                    : isScrolled
                    ? "text-forest/80 hover:text-forest"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <span>SOLUTIONS</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""} ${
                    isScrolled ? "text-forest/70" : "text-white/70"
                  }`}
                />
              </Link>

              {/* Dropdown Menu */}
              {solutionsOpen && (
                <div
                  className={`absolute top-full left-0 mt-3 w-76 rounded-2xl p-2.5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50 ${
                    isScrolled
                      ? "bg-white backdrop-blur-xl border border-border-soft text-forest shadow-2xl"
                      : "bg-[#042A1F]/95 backdrop-blur-2xl border border-white/20 text-white shadow-2xl"
                  }`}
                >
                  {solutionsSubmenu.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className={`block px-4 py-3 rounded-xl transition-colors ${
                        isScrolled
                          ? "hover:bg-lime-soft/70 text-forest"
                          : "hover:bg-white/10 text-white"
                      }`}
                    >
                      <div className="font-heading font-bold text-xs xl:text-sm">
                        {subItem.label}
                      </div>
                      <div
                        className={`text-[11px] mt-0.5 ${
                          isScrolled ? "text-text-muted" : "text-white/60"
                        }`}
                      >
                        {subItem.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Projects */}
            <Link
              href="/projects"
              className={`text-xs sm:text-[13px] xl:text-sm font-heading font-bold tracking-wider transition-all py-1.5 ${
                isProjectsActive
                  ? isScrolled
                    ? "text-forest bg-lime/40 px-3.5 py-1.5 rounded-full"
                    : "text-lime bg-white/15 px-3.5 py-1.5 rounded-full"
                  : isScrolled
                  ? "text-forest/80 hover:text-forest"
                  : "text-white/90 hover:text-white"
              }`}
            >
              PROJECTS
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={`text-xs sm:text-[13px] xl:text-sm font-heading font-bold tracking-wider transition-all py-1.5 ${
                isAboutActive
                  ? isScrolled
                    ? "text-forest bg-lime/40 px-3.5 py-1.5 rounded-full"
                    : "text-lime bg-white/15 px-3.5 py-1.5 rounded-full"
                  : isScrolled
                  ? "text-forest/80 hover:text-forest"
                  : "text-white/90 hover:text-white"
              }`}
            >
              ABOUT US
            </Link>
          </nav>

          {/* Center Brand Logo (Desktop & Mobile) */}
          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none"
            >
              <div className="p-1.5 rounded-xl bg-white shadow-xs group-hover:scale-105 transition-transform duration-200">
                <BrightlyLogoIcon className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg" />
              </div>
              <span
                className={`font-heading font-extrabold text-xl sm:text-2xl tracking-tight transition-colors ${
                  isScrolled ? "text-forest" : "text-white"
                }`}
              >
                Solara Energy
              </span>
            </Link>
          </div>

          {/* Right Navigation & CTA (Desktop) */}
          <div className="hidden lg:flex items-center justify-end gap-6 xl:gap-8 flex-1">
            <Link
              href="/contact"
              className={`text-xs sm:text-[13px] xl:text-sm font-heading font-bold tracking-wider transition-all py-1.5 ${
                isContactActive
                  ? isScrolled
                    ? "text-forest bg-lime/40 px-3.5 py-1.5 rounded-full"
                    : "text-lime bg-white/15 px-3.5 py-1.5 rounded-full"
                  : isScrolled
                  ? "text-forest/80 hover:text-forest"
                  : "text-white/90 hover:text-white"
              }`}
            >
              CONTACT
            </Link>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-lime hover:bg-[#cbfb3f] text-forest font-heading font-bold text-xs sm:text-[13px] xl:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-98 transition-all duration-200 group"
            >
              <span>{ctaText}</span>
              <div className="w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={12} className="text-forest stroke-[2.5]" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors focus-visible:outline-none cursor-pointer ${
              isScrolled
                ? "text-forest hover:bg-forest/5"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Card */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden mt-3 rounded-3xl p-5 shadow-2xl border flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200 ${
              isScrolled
                ? "bg-white text-forest border-border-soft"
                : "bg-[#042A1F]/98 backdrop-blur-2xl text-white border-white/20"
            }`}
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading font-bold text-sm py-1.5"
              >
                Home
              </Link>
              <Link
                href="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading font-bold text-sm py-1.5"
              >
                Solutions
              </Link>
              <div className="pl-3 flex flex-col gap-1 border-l-2 border-lime/40">
                {solutionsSubmenu.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs py-1 opacity-80 hover:opacity-100"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading font-bold text-sm py-1.5"
              >
                Projects
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading font-bold text-sm py-1.5"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading font-bold text-sm py-1.5"
              >
                Contact
              </Link>
            </div>

            <div className="pt-3 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-lime text-forest font-heading font-bold text-xs px-5 py-3 rounded-full shadow-sm"
              >
                <span>{ctaText}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
