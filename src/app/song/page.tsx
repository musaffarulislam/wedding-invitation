"use client";

import Link from "next/link";

const LYRICS_PLACEHOLDER: { type: "verse" | "chorus" | "bridge"; text: string }[] = [
  // Add your song lyrics as objects: { type: "verse" | "chorus" | "bridge", text: "..." }
  // Example:
  // { type: "verse", text: "Line one of the verse..." },
  // { type: "chorus", text: "Chorus line one..." },
];

export default function SongPage() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-stone-100 via-rose-50 to-amber-50 overflow-hidden">
      {/* Top Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

      {/* Bottom Gold Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

      {/* Corner Ornaments */}
      <div className="absolute top-6 left-6 w-20 h-20 border-l border-t border-amber-700/30 rounded-tl-xl" />
      <div className="absolute top-6 right-6 w-20 h-20 border-r border-t border-amber-700/30 rounded-tr-xl" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-b border-l border-amber-700/30 rounded-bl-xl" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-b border-r border-amber-700/30 rounded-br-xl" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-20 flex flex-col items-center">
        <Link
          href="/"
          className="self-start mb-8 text-xs md:text-sm text-rose-700/70 hover:text-rose-800 tracking-[0.25em] uppercase inline-flex items-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Invitation
        </Link>

        <p className="text-xs md:text-sm text-rose-700/70 tracking-[0.35em] uppercase mb-2">
          Nafla &amp; Nadeer
        </p>

        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400/70" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-500/80">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400/70" />
        </div>

        <h1 className="text-4xl md:text-6xl font-['Allura'] text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-rose-900 leading-none text-center">
          Our Wedding Song
        </h1>

        <p className="text-sm text-amber-700 tracking-[0.25em] uppercase mt-3">
          06 · 06 · 2026
        </p>

        <div className="w-full mt-10 md:mt-12 bg-white/70 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg shadow-rose-200/20 border border-rose-200/40">
          {LYRICS_PLACEHOLDER.length === 0 ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rose-700/70">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </div>
              <p className="font-['Anek_Malayalam'] text-rose-800 text-lg md:text-xl font-semibold">
                സോങ്ങിന്റെ വരികളൊന്നുമില്ല. 
              </p>
              <p className="font-['Anek_Malayalam'] text-rose-700/70 md:text-base mt-2 max-w-md">
                ആരെങ്കിലും ഒന്ന് അയച്ച തരുമോ
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {LYRICS_PLACEHOLDER.map((line, i) => (
                <p
                  key={i}
                  className={`text-center leading-relaxed ${
                    line.type === "chorus"
                      ? "text-rose-800 font-['Playfair_Display'] text-lg md:text-xl font-semibold"
                      : line.type === "bridge"
                      ? "text-amber-800 italic text-base md:text-lg"
                      : "text-rose-700/90 text-base md:text-lg"
                  }`}
                >
                  {line.text}
                </p>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white text-xs md:text-sm font-medium shadow-md shadow-rose-500/30 hover:shadow-lg hover:shadow-rose-500/40 hover:from-rose-600 hover:to-rose-700 transition-all"
        >
          Back to Invitation
        </Link>
      </div>
    </main>
  );
}
