"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import scooterImage from "@/assets/nafla_nadeer_scooter.png";
import { WEDDING_CONFIG } from "@/config/contact";

const whatsappLink = `https://wa.me/${WEDDING_CONFIG.whatsappNumber}?text=${encodeURIComponent(
  WEDDING_CONFIG.whatsappMessage
)}`;

const locationLink = "https://maps.app.goo.gl/Lawk3H3D22PNJcjA7"

const floatingHearts = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 5 + Math.random() * 4,
  size: 15 + Math.random() * 14,
}));

export default function HeroSection() {
  const [windowHeight, setWindowHeight] = useState(800);
  const [showArabic, setShowArabic] = useState(false);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-stone-100 via-rose-50 to-amber-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 75%, rgba(217, 119, 100, 0.08) 0%, transparent 45%),
                           radial-gradient(circle at 75% 25%, rgba(180, 83, 75, 0.06) 0%, transparent 45%),
                           radial-gradient(circle at 50% 50%, rgba(253, 186, 116, 0.1) 0%, transparent 60%)`
        }} />
      </div>

      {/* Top Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

      {/* Bottom Gold Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute"
            style={{ left: `${heart.left}%`, bottom: "-30px" }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: -windowHeight - 50,
              opacity: [0, 0.5, 0.5, 0],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg
              width={heart.size}
              height={heart.size}
              viewBox="0 0 24 24"
              fill="none"
              className="text-rose-300/60"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="currentColor"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Elegant Corner Ornaments */}
      <div className="absolute top-6 left-6 w-20 h-20 border-l border-t border-amber-700/30 rounded-tl-xl" />
      <div className="absolute top-6 right-6 w-20 h-20 border-r border-t border-amber-700/30 rounded-tr-xl" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-b border-l border-amber-700/30 rounded-bl-xl" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-b border-r border-amber-700/30 rounded-br-xl" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-3 md:px-8 flex flex-col items-center justify-center pt-6 md:pt-12 pb-3 md:pb-6">
        {/* Mobile: stacked names+image centered · Desktop: names (left) | image (right) */}
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center md:gap-10 lg:gap-16">
          {/* Names column (desktop left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="order-2 md:order-1 flex flex-col items-center text-center md:items-center md:text-center shrink-0"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-['Allura'] text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-rose-900 leading-none">
              Nafla
            </h2>
            <span className="text-2xl md:text-4xl font-['Allura'] text-amber-500/80 my-0.5 md:my-2">
              &amp;
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-['Allura'] text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-rose-900 leading-none">
              Nadeer
            </h2>
          </motion.div>

          {/* Image column (mobile centered on top, desktop right) */}
          <div className="order-1 md:order-2 flex justify-center md:block shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-40 h-40 md:w-72 md:h-72 lg:w-80 lg:h-80 mb-2 md:mb-0 flex items-center justify-center shrink-0"
          >
            {/* Soft glow behind */}
            <div className="absolute inset-0 m-auto w-56 h-56 md:w-80 md:h-80 bg-gradient-to-br from-rose-200/40 to-amber-100/40 rounded-full blur-2xl pointer-events-none" />

            {/* Scooter with gentle wheel-bump bob */}
            <motion.div
              animate={{ y: [0, -3, 0, -2, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={scooterImage}
                alt="Nafla & Nadeer on a scooter"
                priority
                width={384}
                height={384}
                className="w-40 h-40 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
          </div>
        </div>

        {/* Two-column row: Buttons (left) | Invitation + Date + Time (right) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-5xl flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-8 lg:gap-10 md:mt-6 my-1"
        >
          {/* Left: Action buttons (2 rows: row1 = WhatsApp + Song, row2 = full-width Location) */}
          <div className="w-full md:w-auto md:shrink-0 flex flex-col gap-2 md:gap-3 order-2 md:order-1">
            {/* Row 1: WhatsApp + Song */}
            <div className="flex gap-2.5 md:gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-2 md:px-4 md:py-3 rounded-xl bg-emerald-500/20 text-emerald-700 font-bold text-[10px] md:text-sm border border-emerald-500/40 hover:bg-emerald-500/30 transition-all duration-200"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-emerald-700">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="whitespace-nowrap">WhatsApp</span>
              </a>

              <Link
                href="/song"
                className="group flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-2 md:px-4 md:py-3 rounded-xl bg-amber-500/20 text-amber-800 font-bold text-[10px] md:text-sm border border-amber-500/40 hover:bg-amber-500/30 transition-all duration-200"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-amber-800">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
                <span className="whitespace-nowrap">കല്യാണ പാട്ടുകൾ</span>
              </Link>
            </div>

            {/* Row 2: full-width Location */}
            <a
              href={locationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 md:py-3 rounded-xl bg-rose-500/20 text-rose-900 font-bold text-[10px] md:text-base border border-rose-500/40 hover:bg-rose-500/30 transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-rose-900">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="whitespace-nowrap">Location</span>
            </a>
          </div>

          {/* Right: Wedding Invitation + Date + Time */}
          <div className="flex flex-col items-center md:items-center md:text-center mt-4 md:mt-0 order-1 md:order-2">
            <p className="text-[10px] md:text-sm text-rose-700/70 tracking-[0.35em] uppercase mb-1">
              Wedding Invitation
            </p>
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400/70" />
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-amber-500/80">
                <path d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1-3-7z" fill="currentColor" />
              </svg>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
            <p className="mt-2 text-xl md:text-3xl font-['Playfair_Display'] font-bold text-rose-800 tracking-wider">
              06 · 06 · 2026
            </p>
            <p className="text-[11px] text-amber-700 tracking-[0.25em] uppercase mt-0.5">
              at 7:00 PM
            </p>
          </div>
        </motion.div>

        {/* Quran Verse */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full max-w-3xl bg-white/70 backdrop-blur-sm rounded-2xl md:rounded-3xl p-2.5 md:p-5 shadow-lg shadow-rose-200/20 border border-rose-200/40"
        >
          {/* Decorative Top */}
          <div className="flex items-center justify-center gap-3 mb-3 md:mb-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-400/50" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-amber-500/70">
              <path d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1-3-7z" fill="currentColor" />
            </svg>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-400/50" />
          </div>

          {/* Arabic Text */}
          <AnimatePresence mode="wait">
            {showArabic ? (
              <motion.div
                key="arabic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setShowArabic(false)}
                  className="mx-auto mb-2 flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 hover:border-rose-300 transition-colors font-medium shadow-sm"
                >
                  <motion.span
                    animate={{ x: [0, -3, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
                    style={{ display: 'inline-flex' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </motion.span>
                  മലയാളം
                </button>
                <p className="text-center text-base md:text-xl text-rose-800 font-arabic leading-loose mb-2">
                  وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفِسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوْدَّةً وَرَحْمَةً
                </p>
                <p className="text-center text-[10px] md:text-xs text-amber-700/60 tracking-wider">
                  — سورة الروم (30:21)
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="malayalam"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setShowArabic(true)}
                  className="mx-auto mb-2 flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 hover:border-rose-300 transition-colors font-medium shadow-sm"
                >
                  العربية
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
                    style={{ display: 'inline-flex' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </motion.span>
                </button>
                <p className="text-center text-xs md:text-sm text-rose-700/80 leading-relaxed">
                  അതിൽ അവന്റെ ദൃഷ്ടാന്തങ്ങളിൽ ഒന്ന് - നിങ്ങൾക്കായി നിങ്ങളിൽ തന്നെ ഇണകൾ സൃഷ്ടിച്ചു, അവരോടൊപ്പം നിങ്ങൾ സമാധാനം കണ്ടെത്താനായി. നിങ്ങളുടെ ഹൃദയങ്ങൾക്കിടയിൽ സ്നേഹവും കരുണയും അവൻ വച്ചു.
                </p>
                <p className="text-center text-[10px] md:text-xs text-amber-700/60 mt-2 tracking-wider">
                  — Surah Ar-Rum (30:21)
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Decorative Bottom */}
          <div className="flex items-center justify-center gap-3 mt-3 md:mt-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-400/50" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-amber-500/70">
              <path d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1-3-7z" fill="currentColor" />
            </svg>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-400/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
