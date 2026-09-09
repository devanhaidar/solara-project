"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
    {
      label: "Solar Energy Systems",
      category: "Photovoltaics",
      href: "/solutions/solar-energy",
      desc: "Commercial rooftop, carport & utility-scale bifacial PV arrays.",
      image: "/images/solutions-solar.jpg",
    },
    {
      label: "Wind Generation",
      category: "Kinetic Power",
      href: "/solutions/wind-energy",
      desc: "Direct-drive low-acoustic onshore turbines for 24/7 power.",
      image: "/images/solutions-wind.jpg",
    },
    {
      label: "Battery Storage (BESS)",
      category: "Energy Storage",
      href: "/solutions/energy-storage",
      desc: "Sub-16ms backup islanding & peak tariff shaving systems.",
      image: "/images/solutions-storage.jpg",
    },
    {
      label: "Smart Energy Management",
      category: "Solara OS Telemetry",
      href: "/solutions/smart-energy",
      desc: "Autonomous AI load balancing & real-time grid orchestration.",
      image: "/images/solutions-smart-iot.jpg",
    },
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
                className={`flex items-center gap-1.5 text-xs sm:text-[13px] xl:text-sm font-heading font-bold tracking-wider transition-all py-2 cursor-pointer ${
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

              {/* Wide Mega-Menu Dropdown with Hover Bridge */}
              {solutionsOpen && (
                <div className="absolute top-full left-0 pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Invisible hover bridge connecting trigger to menu */}
                  <div className="absolute -top-3 inset-x-0 h-4 pointer-events-auto" />
                  
                  <div
                    className={`w-[680px] xl:w-[740px] rounded-3xl p-5 shadow-2xl transition-all ${
                      isScrolled
                        ? "bg-white/98 backdrop-blur-2xl border border-black/10 text-forest shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                        : "bg-[#042A1F]/98 backdrop-blur-3xl border border-white/20 text-white shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
                    }`}
                  >
                    {/* Header Label */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                      <span className={`text-[11px] font-heading font-extrabold uppercase tracking-widest ${
                        isScrolled ? "text-emerald-800" : "text-lime"
                      }`}>
                        Renewable Energy Solutions Portfolio
                      </span>
                      <Link
                        href="/solutions"
                        className={`text-xs font-semibold flex items-center gap-1 hover:underline ${
                          isScrolled ? "text-forest" : "text-white/80 hover:text-white"
                        }`}
                      >
                        <span>View All Solutions</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>

                    {/* 2x2 Grid of Rich Cards */}
                    <div className="grid grid-cols-2 gap-3.5">
                      {solutionsSubmenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={`group flex items-center gap-3.5 p-3 rounded-2xl transition-all duration-200 ${
                            isScrolled
                              ? "hover:bg-lime-soft/70 border border-transparent hover:border-lime/50"
                              : "hover:bg-white/10 border border-transparent hover:border-white/15"
                          }`}
                        >
                          {/* Thumbnail Image */}
                          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden shrink-0 shadow-sm">
                            <Image
                              src={subItem.image}
                              alt={subItem.label}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                              sizes="80px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <span className={`text-[10px] font-bold uppercase tracking-wider block mb-0.5 ${
                              isScrolled ? "text-emerald-700" : "text-lime"
                            }`}>
                              {subItem.category}
                            </span>
                            <div className={`font-heading font-bold text-xs sm:text-sm truncate group-hover:text-emerald-600 transition-colors ${
                              isScrolled ? "text-forest" : "text-white"
                            }`}>
                              {subItem.label}
                            </div>
                            <p className={`text-[11px] line-clamp-2 mt-0.5 leading-snug ${
                              isScrolled ? "text-text-muted" : "text-white/60"
                            }`}>
                              {subItem.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom CTA Banner */}
                    <div className={`mt-4 pt-3.5 border-t flex items-center justify-between text-xs ${
                      isScrolled ? "border-border-soft text-text-secondary" : "border-white/10 text-white/70"
                    }`}>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                        <span>All systems backed by 25-year linear performance guarantee</span>
                      </span>
                      <Link
                        href="/contact"
                        className="font-heading font-bold text-lime-dark hover:underline flex items-center gap-1"
                      >
                        <span>Schedule Audit</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
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
              <div className="pl-2 flex flex-col gap-2 border-l-2 border-lime/40 my-1">
                {solutionsSubmenu.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0 shadow-xs">
                      <Image src={sub.image} alt={sub.label} fill className="object-cover" sizes="36px" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">{sub.label}</div>
                      <div className="text-[10px] opacity-70 truncate">{sub.desc}</div>
                    </div>
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
