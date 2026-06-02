"use client";

import { useEffect, useRef } from "react";
import HeroSection from "@/components/hero/HeroSection";
import EventDetails from "@/components/event-details/EventDetails";
import GallerySection from "@/components/gallery/GallerySection";
import FooterSection from "@/components/footer/FooterSection";
import GameSection from "@/components/game/GameSection";
import PollSection from "@/components/poll/PollSection";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SoundController from "@/components/shared/SoundController";
import NotificationBell from "@/components/shared/NotificationBell";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: "hero", component: <HeroSection />, name: "Welcome" },
  { id: "event", component: <EventDetails />, name: "Countdown" },
  { id: "game", component: <GameSection />, name: "Game" },
  { id: "poll", component: <PollSection />, name: "Poll" },
  // { id: "gallery", component: <GallerySection />, name: "Gallery" },
  { id: "footer", component: <FooterSection />, name: "Celebrate" },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navDotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin sections - each section pins at top, next slides over
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
      });

      // Update navigation dots
      sections.forEach((section, index) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => updateNavDots(index),
          onEnterBack: () => updateNavDots(index),
        });
      });

      // Progress bar
      gsap.to(".progress-fill", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const updateNavDots = (index: number) => {
    if (!navDotsRef.current) return;
    const dots = navDotsRef.current.querySelectorAll(".nav-dot");
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("scale-150", "bg-gradient-to-r", "from-amber-400", "to-yellow-500", "shadow-lg", "shadow-amber-400/50");
        dot.classList.remove("bg-white/30");
      } else {
        dot.classList.remove("scale-150", "bg-gradient-to-r", "from-amber-400", "to-yellow-500", "shadow-lg", "shadow-amber-400/50");
        dot.classList.add("bg-white/30");
      }
    });
  };

  const scrollToSection = (index: number) => {
    const el = document.getElementById(sections[index].id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main ref={containerRef} className="relative">
      {/* Sound Controller */}
      <SoundController />

      {/* Notification Bell */}
      <NotificationBell />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/10">
        <div className="progress-fill h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 origin-left" />
      </div>

      {/* Navigation Dots - Right */}
      <div
        ref={navDotsRef}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
      >
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className="nav-dot w-4 h-4 rounded-full bg-white/30 border border-white/50 transition-all duration-300 hover:scale-125 hover:bg-amber-400"
            title={section.name}
          />
        ))}
      </div>

      {/* Sections */}
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="relative min-h-screen"
        >
          <SectionWrapper id={section.id}>
            {section.component}
          </SectionWrapper>
        </section>
      ))}

      {/* Fixed Developed By */}
      <div className="fixed bottom-0 left-0 right-0 z-50 py-2 ">
        <a
          href="https://musaffar.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-[10px] md:text-xs text-red-600/30 transition-colors font-['Poppins'] tracking-wide"
        >
          Developed by musaffar
        </a>
      </div>
    </main>
  );
}
