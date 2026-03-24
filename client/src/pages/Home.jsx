import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 select-none bg-[#fcf8ef] py-20">
      <div className="mb-12 opacity-30 text-[#1a1a1a] text-2xl animate-pulse tracking-[0.6em]">
        ❧ ——— ⏳ ——— ☙
      </div>

      <h1 className="text-[#d4af37] text-5xl md:text-8xl mb-12 font-serif italic tracking-tight leading-tight drop-shadow-md">
        Chronicle of the <br className="hidden md:block" /> Quiet Light
      </h1>

      <p className="text-[#1a1a1a]/70 max-w-md leading-relaxed mb-24 font-serif italic text-lg md:text-xl border-x border-[#d4af37]/20 px-8 mx-auto">
        "Some stories are written in ink, others are whispered in the heart."
      </p>

      <div className="w-full max-w-sm mx-auto flex flex-col items-stretch gap-8">
        {/* BUTTON 1 - Direct to Dua */}
        <Link
          to="/dua"
          className="no-underline group relative block px-6 py-10 transition-all duration-500 active:scale-95 touch-manipulation shadow-lg"
        >
          <div className="absolute inset-0 bg-[#f4ead5] border-2 border-[#1a1a1a]/20 shadow-[10px_10px_25px_rgba(0,0,0,0.1)] group-hover:bg-[#efe4cb] transition-all duration-500 rounded-xl"></div>
          <span className="relative z-10 flex items-center justify-center gap-6 text-[#1a1a1a] font-serif tracking-[0.35em] uppercase text-base font-black">
            <span className="text-4xl">📜</span> Read a Prayer
          </span>
        </Link>

        {/* BUTTON 2 - Direct to the Riddle Gate */}
        <Link
          to="/gate"
          className="no-underline group relative block px-6 py-10 transition-all duration-500 active:scale-95 touch-manipulation shadow-lg"
        >
          <div className="absolute inset-0 bg-[#d4af37]/15 border-2 border-[#d4af37]/50 shadow-[10px_10px_25px_rgba(212,175,55,0.2)] group-hover:bg-[#d4af37]/25 transition-all duration-500 rounded-xl"></div>
          <span className="relative z-10 flex items-center justify-center gap-6 text-[#d4af37] font-serif tracking-[0.35em] uppercase text-base font-black">
            <span className="text-4xl">⚔️</span> Begin the Trial
          </span>
        </Link>
      </div>

      <div className="mt-32 flex items-center justify-center gap-8 opacity-20 w-full">
        <div className="h-[1px] w-16 bg-[#1a1a1a]"></div>
        <span className="font-serif italic text-[12px] text-[#1a1a1a] tracking-[0.5em] uppercase whitespace-nowrap">
          ESTD. 1600s
        </span>
        <div className="h-[1px] w-16 bg-[#1a1a1a]"></div>
      </div>
    </div>
  );
}
