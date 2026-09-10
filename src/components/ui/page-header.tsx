import * as motion from "framer-motion/client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge: string;
  title: string;
  highlightedWord?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export function PageHeader({
  badge,
  title,
  highlightedWord,
  description,
  breadcrumbs,
  bgImage,
}: PageHeaderProps) {
  return (
    <section className="relative w-full bg-forest text-offwhite overflow-hidden rounded-b-[28px] sm:rounded-b-[40px] lg:rounded-b-[56px] shadow-md">
      {/* Background Image & Ambient Gradients */}
      {bgImage && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105 pointer-events-none transition-transform duration-1000"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      
      {/* Subtle Glow Spheres */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-lime/15 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-emerald-500/20 blur-[100px] pointer-events-none" />
      
      {/* Subtle Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      {/* Page Title & Breadcrumb Content */}
      <div className="relative z-20 max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 lg:pb-24">
        {/* Breadcrumb Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs sm:text-sm text-offwhite/70 mb-6 flex-wrap"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <div key={crumb.label} className="flex items-center gap-2">
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-lime transition-colors duration-200"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-lime font-medium" : ""}>
                    {crumb.label}
                  </span>
                )}
                {!isLast && <ChevronRight size={14} className="text-offwhite/40" />}
              </div>
            );
          })}
        </motion.nav>

        {/* Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-lime text-xs sm:text-sm font-medium mb-5 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          <span>{badge}</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-offwhite tracking-tight leading-[1.12] max-w-4xl"
        >
          {title}{" "}
          {highlightedWord && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-[#d3fc5d] to-emerald-400">
              {highlightedWord}
            </span>
          )}
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-offwhite/80 max-w-2xl font-body leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
