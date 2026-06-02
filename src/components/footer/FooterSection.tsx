"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-rose-950 via-rose-900 to-stone-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-amber-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, rgba(244, 114, 182, 0.08) 0%, transparent 40%),
                           radial-gradient(circle at 70% 30%, rgba(251, 191, 147, 0.06) 0%, transparent 40%)`
        }} />
      </div>

      {/* Top Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      {/* Elegant Corner Ornaments */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-6 left-6 w-16 h-16 md:w-24 md:h-24 border-l border-t border-amber-400/30 rounded-t-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute top-6 right-6 w-16 h-16 md:w-24 md:h-24 border-r border-t border-amber-400/30 rounded-t-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 left-6 w-16 h-16 md:w-24 md:h-24 border-b border-l border-amber-400/30 rounded-b-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-6 right-6 w-16 h-16 md:w-24 md:h-24 border-b border-r border-amber-400/30 rounded-b-full"
      />

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${18 + (i * 10)}%`,
              bottom: "25%",
            }}
            animate={{
              y: [-25, -50, -25],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 5 + (i % 2),
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-amber-400/40">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto py-12">
        {/* Main Announcement */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          {/* Decorative Top */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50" />
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-amber-400/70">
              <path d="M12 2L9 9H2l6 4.5-2 7 6-4.5 6 4.5-2-7 6-4.5h-7L12 2z" fill="currentColor" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50" />
          </div>

          <h2 className="text-2xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-rose-100 to-amber-100 mb-3">
            We Can't Wait to Celebrate With You
          </h2>
          <p className="text-base md:text-xl text-rose-200/70">Your presence makes our day complete</p>
        </motion.div>

        {/* Names Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group mb-8"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400/30 via-rose-400/20 to-amber-400/30 rounded-2xl blur-lg opacity-50" />
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-amber-400/20">
            <p className="text-amber-300/70 text-[10px] md:text-xs tracking-[0.25em] uppercase mb-5">Together with their families</p>
            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-3xl md:text-5xl font-['Great_Vibes'] text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-rose-100"
              >
                Nafla
              </motion.span>
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-rose-400/50" />
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-amber-400/60">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
                </svg>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-rose-400/50" />
              </div>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-3xl md:text-5xl font-['Great_Vibes'] text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-rose-100"
              >
                Nadeer
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/50 to-yellow-500/50 rounded-2xl blur-md opacity-60" />
          <div className="relative bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-2xl p-6 md:p-10">
            <p className="text-2xl md:text-4xl font-serif font-bold text-rose-950 mb-2">
              "See You There!"
            </p>
            <p className="text-base md:text-xl text-rose-800 font-medium">
              Saturday, June 6th, 2026 | 7:00 PM
            </p>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-rose-300/40 text-[10px] md:text-xs flex items-center justify-center gap-2"
        >
          Crafted with
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-rose-400/60">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          for Nafla & Nadeer
        </motion.p>
      </div>
    </section>
  );
}