"use client";

import { motion } from "framer-motion";

const galleryItems = [
  { label: "Together", sublabel: "Our Journey", gradient: "from-rose-200/30 to-rose-400/20" },
  { label: "Forever", sublabel: "Our Promise", gradient: "from-amber-200/30 to-rose-300/20" },
  { label: "Love", sublabel: "Our Story", gradient: "from-pink-200/30 to-rose-400/20" },
  { label: "Always", sublabel: "Our Future", gradient: "from-amber-100/30 to-amber-300/20" },
];

export default function GallerySection() {
  return (
    <section className="relative bg-black w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-stone-900 via-rose-950/80 to-stone-900 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
            style={{
              left: `${8 + (i * 3.8)}%`,
              top: `${12 + (i % 6) * 14}%`,
            }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 2.5 + (i % 2),
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-6 py-10 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-500/50" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-rose-400/60">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-500/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-amber-100 to-rose-200 tracking-wide">
            Our Moments
          </h2>
          <p className="text-sm text-rose-300/60 mt-2 tracking-wide">Capturing love, one frame at a time</p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} rounded-2xl md:rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/10 overflow-hidden group-hover:border-rose-400/30 transition-all duration-500">
                {/* Gradient Top Overlay */}
                <div className={`absolute top-0 left-0 right-0 h-20 md:h-24 bg-gradient-to-b ${item.gradient} opacity-20`} />

                {/* Content */}
                <div className="relative flex flex-col items-center justify-center py-6 md:py-10">
                  {/* Elegant Icon */}
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.6 }}
                    className="mb-5"
                  >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-rose-300/70 w-12 h-12 md:w-16 md:h-16">
                      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                      <path d="M24 8L20 20h-8l6.5 5-2.5 9 8-5.5 8 5.5-2.5-9L28 20h-8L24 8z" fill="currentColor" opacity="0.6" />
                    </svg>
                  </motion.div>

                  {/* Label */}
                  <p className="text-amber-200/90 text-sm md:text-base uppercase tracking-[0.2em] font-light">{item.label}</p>
                  <p className="text-rose-400/50 text-[10px] md:text-xs mt-1 tracking-wider">{item.sublabel}</p>
                </div>

                {/* Coming Soon Badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500/80 to-yellow-500/80 text-stone-900 text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Coming Soon
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-rose-400/60">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <p className="text-rose-200/70 text-sm italic">"More precious moments await on our special day"</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}