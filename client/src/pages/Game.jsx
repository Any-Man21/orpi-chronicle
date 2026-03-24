import { Link } from "react-router-dom";

export default function Game() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-[#fcf8ef]">
      <div className="mb-8 opacity-30 text-[#1a1a1a] text-xl animate-pulse">
        ⚔️ ——— 🛡️ ——— ⚔️
      </div>

      <h2 className="text-[#d4af37] text-4xl md:text-6xl mb-6 font-serif italic drop-shadow-sm">
        The Trial of Protection
      </h2>

      <p className="text-[#1a1a1a]/60 max-w-sm leading-relaxed mb-12 font-serif italic text-lg">
        The archive is currently sealed by ancient magic. Petter is preparing
        the scrolls for your arrival.
      </p>

      <Link
        to="/"
        className="text-[#d4af37] font-serif tracking-widest uppercase text-sm border-b border-[#d4af37]/30 pb-1 hover:opacity-70 transition-all"
      >
        Return to the Quiet Light
      </Link>
    </div>
  );
}
