"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EventDetails() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-06-06T19:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeCards = [
    { label: "Days", value: timeLeft.days, delay: 0 },
    { label: "Hours", value: timeLeft.hours, delay: 0.1 },
    { label: "Minutes", value: timeLeft.minutes, delay: 0.2 },
    { label: "Seconds", value: timeLeft.seconds, delay: 0.3 },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-stone-900">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(251, 191, 147, 0.08) 0%, transparent 70%)`
        }} />

        {/* Elegant corner decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-amber-700/20 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-amber-700/20 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-amber-700/20 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-amber-700/20 rounded-br-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full py-20">
        {/* Elegant Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-600/60" />
          <div className="w-2 h-2 bg-amber-600/60 rotate-45" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-600/60" />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-amber-600/80 text-sm uppercase tracking-[0.4em] mb-4">
            The countdown begins
          </p>
          <h2 className="text-5xl md:text-7xl font-['Great_Vibes'] text-amber-100/90">
            Our Special Day
          </h2>
        </motion.div>

        {/* Timer Cards */}
        <div className="grid grid-cols-4 gap-3 md:gap-6 mb-16">
          {timeCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: card.delay + 0.4 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-gradient-to-b from-stone-800/80 to-stone-900/80 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-8 border border-amber-700/20 shadow-2xl">
                {/* Value */}
                <motion.p
                  key={card.value}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl md:text-6xl font-light text-amber-100/90 mb-2"
                >
                  {String(card.value).padStart(2, "0")}
                </motion.p>

                {/* Label */}
                <p className="text-[10px] md:text-xs text-amber-600/70 uppercase tracking-[0.25em]">
                  {card.label}
                </p>

                {/* Subtle top line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent mt-3 md:mt-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-4"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-600/60" />
          <div className="w-2 h-2 bg-amber-600/60 rotate-45" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-600/60" />
        </motion.div>
      </div>
    </section>
  );
}