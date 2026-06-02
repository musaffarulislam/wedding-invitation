"use client";

import { motion } from "framer-motion";

const InfoCard = ({
  icon,
  title,
  items,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  items: { label: string; value: string }[];
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-300/40 to-rose-300/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-white/85 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-rose-200/50 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-rose-100 to-amber-50 rounded-full flex items-center justify-center text-rose-700">
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-serif font-semibold text-rose-800">{title}</h3>
      </div>

      {/* Items */}
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 bg-gradient-to-r from-rose-50/50 to-amber-50/30 rounded-xl"
          >
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            <div>
              <p className="text-[11px] md:text-xs text-rose-500/70 uppercase tracking-wider">{item.label}</p>
              <p className="text-sm md:text-base font-medium text-rose-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function VenueSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-stone-50 via-rose-100 to-amber-100 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rose-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-100/40 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-300/40 to-transparent" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-6 py-10 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-500">
              <path d="M12 2L9 9H2l6 4.5-2 7 6-4.5 6 4.5-2-7 6-4.5h-7L12 2z" fill="currentColor" />
            </svg>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-rose-900 tracking-wide">
            Venue & Details
          </h2>
          <p className="text-sm text-rose-600/60 mt-2 tracking-wide">Where our story continues</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* When Card */}
          <InfoCard
            delay={0.1}
            title="When"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M3 10h18" />
                <path d="M9 4V2M15 4V2" />
                <circle cx="12" cy="16" r="2" />
              </svg>
            }
            items={[
              { label: "Day", value: "Saturday, June 6th, 2026" },
              { label: "Time", value: "7:00 PM Onwards" },
            ]}
          />

          {/* Where Card */}
          <InfoCard
            delay={0.2}
            title="Where"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            }
            items={[
              { label: "Venue", value: "[Wedding Hall Name]" },
              { label: "Address", value: "[Full Address Here]" },
              { label: "Parking", value: "Free Parking Available" },
            ]}
          />

          {/* Food & Dining Card */}
          <InfoCard
            delay={0.3}
            title="Food & Dining"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 8h1a4 4 0 010 8h-1" />
                <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                <path d="M6 1v3M10 1v3M14 1v3" />
              </svg>
            }
            items={[
              { label: "Cuisine", value: "Halaal Food Served" },
              { label: "Dessert", value: "Wedding Cake" },
              { label: "Beverages", value: "Refreshments & Drinks" },
            ]}
          />

          {/* Dress Code Card */}
          <InfoCard
            delay={0.4}
            title="Dress Code"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2l3 6-3 2v12h12V10l-3-2 3-6" />
                <path d="M9 10h6" />
              </svg>
            }
            items={[
              { label: "Attire", value: "Traditional Attire" },
              { label: "Style", value: "Elegant and Festive" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
