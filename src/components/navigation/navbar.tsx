"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrightlyLogoIcon } from "@/components/icons/brand-icons";
import { navigation, ctaText } from "@/lib/site-config";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className = "" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={`w-full pt-3 sm:pt-4 pb-2 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-[1720px] 2xl:max-w-[1840px] mx-auto relative z-30 ${className}`}>
      <div className="flex items-center justify-between py-1">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-2.5 group focus-visible:outline-none"
        >
          <div className="group-hover:scale-105 transition-transform duration-200">
            <BrightlyLogoIcon className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl" />
          </div>
          <span className="font-heading font-extrabold text-xl sm:text-2xl text-forest tracking-tight">
            Solara Energy
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");
            const hasChildren = Boolean(item.children);

            if (hasChildren) {
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 font-medium text-xs xl:text-sm transition-colors py-1 focus-visible:outline-none cursor-pointer relative ${
                      isActive ? "text-forest font-semibold" : "text-forest/80 hover:text-forest"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={13}
                      className="text-forest/70 transition-transform duration-200 group-hover:rotate-180"
                    />
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-forest rounded-full mx-auto w-5/6" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {solutionsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-xl border border-border-soft/60 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                      {item.children?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2.5 rounded-xl text-xs xl:text-sm font-medium text-forest hover:bg-lime-soft/60 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative font-medium text-xs xl:text-sm transition-colors py-1 ${
                  isActive ? "text-forest font-semibold" : "text-forest/80 hover:text-forest"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-forest rounded-full mx-auto w-5/6" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Primary CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-lime hover:bg-[#cbfb3f] text-forest font-heading font-bold text-xs xl:text-sm px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-98 transition-all duration-200 group"
          >
            <span>{ctaText}</span>
            <div className="w-4.5 h-4.5 rounded-full bg-forest/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight size={12} className="text-forest stroke-[2.5]" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-forest hover:bg-forest/5 transition-colors focus-visible:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-border-soft flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <div key={item.label} className="py-1">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-forest font-medium text-base hover:text-lime py-1"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 mt-1 flex flex-col gap-1.5 border-l-2 border-lime-soft">
                    {item.children.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-text-muted hover:text-forest text-sm py-1"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-border-soft">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-lime text-forest font-heading font-bold text-sm px-6 py-3 rounded-full shadow-sm"
            >
              <span>{ctaText}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
