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
        "https://orpi-chronicle-api-v3.onrender.com/api/messages/random",
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
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#d4af37]/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl w-full bg-white/[0.02] backdrop-blur-3xl p-12 md:p-24 border border-white/10 rounded-[50px] shadow-2xl relative z-10">
        {loading ? (
          <div className="flex flex-col items-center gap-6 py-20">
            <div className="h-1 w-48 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-[#d4af37] animate-pulse w-full shadow-[0_0_15px_#d4af37]"></div>
            </div>
          </div>
        ) : (
          <div className="space-y-16 animate-in fade-in zoom-in duration-1000">
            {/* Header */}
            <div>
              <span className="text-[#d4af37] tracking-[0.6em] uppercase text-[10px] font-bold block mb-6 opacity-80">
                Data Stream // A Prayer for You
              </span>
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mx-auto"></div>
            </div>

            {/* Main Message - Forced White & Large */}
            <div className="px-4">
              <p
                style={{
                  color: "#ffffff",
                  textShadow: "0 0 20px rgba(255,255,255,0.2)",
                }}
                className="text-4xl md:text-6xl italic leading-tight font-light !text-white"
              >
                "{message?.text}"
              </p>
            </div>

            {/* Love Line - Pure White */}
            <div className="py-10 border-y border-white/5 mx-4 md:mx-12">
              <p
                style={{ color: "#ffffff" }}
                className="text-xl md:text-3xl font-light tracking-wide italic !text-white"
              >
                {message?.loveLine}
              </p>
            </div>

            {/* Reflection - Gold */}
            <div className="pt-4">
              <p className="text-[#d4af37] text-[11px] tracking-[0.8em] uppercase font-bold opacity-60">
                — {message?.reflection} —
              </p>
            </div>

            {/* Close Link - Forced Spacing */}
            <div className="pt-24 mt-10">
              <Link
                to="/"
                style={{ color: "rgba(212, 175, 55, 0.5)" }}
                className="inline-block hover:!text-[#d4af37] transition-all duration-500 uppercase tracking-[0.4em] text-[11px] border-b border-white/10 pb-2 hover:border-[#d4af37]/30"
              >
                ← Close the Chronicle
              </Link>
            </div>
          </div>
        )}

        {/* Refresh Button */}
        <button
          onClick={fetchRandomMessage}
          className="mt-16 group transition-transform active:scale-90"
        >
          <div className="text-3xl text-white/10 group-hover:text-[#d4af37] group-hover:rotate-180 transition-all duration-700">
            ↻
          </div>
        </button>
      </div>
    </div>
  );
}
