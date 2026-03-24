import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Dua() {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomMessage = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/api/messages/random",
      );
      if (response.data) {
        setMessage(response.data);
      }
    } catch (error) {
      console.error("The ink faded...", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMessage();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] px-8 text-center select-none overflow-hidden relative font-serif">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#d4af37]/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full"></div>

      {/* Back Button - Cyber Style */}
      <Link
        to="/"
        className="absolute top-10 left-10 text-white/20 hover:text-[#d4af37] transition-all duration-500 uppercase tracking-[0.3em] text-[10px] z-20"
      >
        ← Close the Chronicle
      </Link>

      {/* THE SCROLL CARD */}
      <div className="max-w-3xl w-full bg-white/[0.02] backdrop-blur-3xl p-16 md:p-24 border border-white/10 rounded-[50px] shadow-[0_0_100px_rgba(0,0,0,0.6)] relative z-10">
        {/* Decorative Tech Ornaments */}
        <div className="absolute top-8 left-12 h-[1px] w-12 bg-[#d4af37]/30"></div>
        <div className="absolute top-8 right-12 h-[1px] w-12 bg-[#d4af37]/30"></div>

        {loading ? (
          <div className="flex flex-col items-center gap-6 py-20">
            <div className="h-2 w-48 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-[#d4af37] animate-progress w-full shadow-[0_0_15px_#d4af37]"></div>
            </div>
            <p className="text-white/20 italic tracking-[0.2em] text-xs uppercase animate-pulse">
              Decrypted by AnyMan...
            </p>
          </div>
        ) : (
          <div className="space-y-16 animate-in fade-in zoom-in duration-1000">
            {/* 1. Header Section */}
            <div>
              <span className="text-[#d4af37] tracking-[0.6em] uppercase text-[10px] font-bold block mb-8 opacity-80">
                Data Stream // A Prayer for You
              </span>
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mx-auto"></div>
            </div>

            {/* 2. Main Message - HUGE WHITE TEXT */}
            <div className="px-4">
              <p
                style={{
                  color: "#ffffff",
                  textShadow: "0 0 30px rgba(255,255,255,0.2)",
                }}
                className="text-4xl md:text-6xl italic leading-tight font-light"
              >
                "{message?.text}"
              </p>
            </div>

            {/* 3. Love Line Section */}
            <div className="py-4 border-y border-white/5 mx-12">
              <p className="text-xl md:text-2xl text-white/80 italic font-light tracking-wide">
                {message?.loveLine}
              </p>
            </div>

            {/* 4. Reflection - The Final Seal */}
            <div className="pt-4 opacity-40">
              <p className="text-[#d4af37] text-[11px] tracking-[0.8em] uppercase font-bold">
                — {message?.reflection} —
              </p>
            </div>
          </div>
        )}

        {/* Refresh Button - Professional Cyber Look */}
        <button
          onClick={fetchRandomMessage}
          className="mt-20 group relative"
          title="Draw another scroll"
        >
          <div className="text-3xl text-white/10 group-hover:text-[#d4af37] group-hover:rotate-180 transition-all duration-700 ease-in-out cursor-pointer">
            ↻
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#d4af37]/50 group-hover:w-8 transition-all duration-500"></div>
        </button>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-12 opacity-10 flex flex-col items-center gap-4">
        <p className="text-white text-[9px] tracking-[1.5em] uppercase font-mono">
          ORPI.DATA.CHRONICLE // STABLE_REL_2.0
        </p>
      </div>
    </div>
  );
}
