import Image from "next/image";

/**
 * Solara Energy Brand Icons & Graphic Elements
 */

export function BrightlyLogoIcon({ className = "w-8 h-8 sm:w-9 sm:h-9" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-white rounded-xl shadow-xs border border-border-soft/60 shrink-0 flex items-center justify-center ${className}`}
    >
      <Image
        src="/images/solara-logo.jpg"
        alt="Solara Energy Logo"
        fill
        sizes="48px"
        className="object-cover object-[center_36%] scale-135"
        priority
      />
    </div>
  );
}

export const SolaraLogoIcon = BrightlyLogoIcon;

export function SolarWindIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Solar Panel */}
      <polygon points="2 18 5 10 12 10 15 18 2 18" fill="currentColor" fillOpacity="0.1" />
      <line x1="7" y1="10" x2="6" y2="18" />
      <line x1="10" y1="10" x2="11" y2="18" />
      <line x1="3.5" y1="14" x2="13.5" y2="14" />
      {/* Wind Turbine on the right */}
      <line x1="19" y1="7" x2="19" y2="20" strokeWidth="1.8" />
      <path d="M19 7L16.5 3.5" />
      <path d="M19 7L22.5 5.5" />
      <path d="M19 7L18 11.5" />
      <circle cx="19" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

export function EnergySavingsChartIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Chart Bars */}
      <rect x="3" y="14" width="3" height="7" rx="0.5" fill="currentColor" fillOpacity="0.25" />
      <rect x="8.5" y="10" width="3" height="11" rx="0.5" fill="currentColor" fillOpacity="0.25" />
      <rect x="14" y="6" width="3" height="15" rx="0.5" fill="currentColor" fillOpacity="0.25" />
      {/* Trend Arrow with Leaf */}
      <path d="M3 12l5-5 4 3 6-7" strokeWidth="2" />
      <path d="M15 3h4v4" strokeWidth="2" />
      <path
        d="M19 3c-1.5 2-2 4-2 6 1.5 0 3-1.5 3-3"
        fill="currentColor"
        fillOpacity="0.4"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function CleanPowerLeafIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Organic Leaf shape */}
      <path
        d="M20.5 3.5C12 3.5 6 9.5 6 18c8.5 0 14.5-6 14.5-14.5z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path d="M6 18C10 14 14 10 20.5 3.5" strokeWidth="2" />
      <path d="M6 18L3 21" strokeWidth="2" />
    </svg>
  );
}

export function LeafSprout({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stem */}
      <path
        d="M6 21C6 14 11 9 17 6"
        stroke="#528822"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Leaf 1 */}
      <path
        d="M17 6C17 6 14 2 8 3C7 8 11 11 17 6Z"
        fill="#7EB43B"
        stroke="#528822"
        strokeWidth="1.5"
      />
      {/* Leaf 2 (highlight) */}
      <path
        d="M13 11C13 11 17 9 19 4C21 7 19 12 13 11Z"
        fill="#B9F227"
        stroke="#528822"
        strokeWidth="1.5"
      />
    </svg>
  );
}
