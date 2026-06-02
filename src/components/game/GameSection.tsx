import PathGame from "./PathGame";

export default function GameSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-stone-50 via-rose-50 to-amber-50 overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l border-t border-amber-700/20 rounded-tl-lg" />
      <div className="absolute top-6 right-6 w-16 h-16 border-r border-t border-amber-700/20 rounded-tr-lg" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-amber-700/20 rounded-bl-lg" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b border-r border-amber-700/20 rounded-br-lg" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-8 flex flex-col items-center justify-center gap-4">
        <PathGame />
      </div>
    </section>
  );
}