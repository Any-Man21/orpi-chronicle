import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Gate() {
  const [answer, setAnswer] = useState("");
  const [step, setStep] = useState(1);
  const [isShaking, setIsShaking] = useState(false);
  const navigate = useNavigate();

  const trials = [
    {
      id: 1,
      question: "Who is the soul this Chronicle was written for?",
      correct: "Orpi",
    },
    {
      id: 2,
      question: "On which day did the stars align for us?",
      correct: "12 March",
    },
    {
      id: 3,
      question: "The final seal... What is the whisper of our joy?",
      correct: "hehe",
    },
  ];

  const handleVerify = (e) => {
    e.preventDefault();
    const currentCorrect = trials[step - 1].correct.toLowerCase().trim();
    const userinput = answer.toLowerCase().trim();

    if (userinput === currentCorrect) {
      if (step < 3) {
        setStep(step + 1);
        setAnswer("");
      } else {
        navigate("/dua");
      }
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setAnswer("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] px-8 text-center select-none overflow-hidden relative font-serif">
      {/* GLOW EFFECTS */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#d4af37]/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full"></div>

      {/* BOX CONTAINER */}
      <div
        className={`max-w-xl w-full bg-white/[0.03] backdrop-blur-3xl p-12 md:p-20 border border-white/10 rounded-[40px] shadow-2xl transition-all duration-700 relative z-10 ${isShaking ? "animate-bounce" : ""}`}
      >
        {/* PROGRESS BARS */}
        <div className="flex justify-center gap-6 mb-16">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1.5 w-12 rounded-full transition-all duration-1000 ${
                step >= i
                  ? "bg-[#d4af37] shadow-[0_0_15px_#d4af37]"
                  : "bg-white/10"
              }`}
            ></div>
          ))}
        </div>

        {/* SUBTITLE (GOLD) */}
        <h2
          style={{ color: "#d4af37" }}
          className="tracking-[0.6em] uppercase text-[11px] mb-10 font-bold opacity-90"
        >
          Trial of Protection // Phase 0{step}
        </h2>

        {/* THE RIDDLE */}
        <div className="mb-16 min-h-[140px] flex items-center justify-center">
          <p
            style={{
              color: "#ffffff",
              textShadow: "0 0 20px rgba(255,255,255,0.5)",
            }}
            className="text-4xl md:text-5xl italic leading-tight font-medium"
          >
            "{trials[step - 1].question}"
          </p>
        </div>

        {/* INPUT FORM - SPACE-Y-32 FOR THE BIG GAP */}
        <form onSubmit={handleVerify} className="space-y-32">
          <div className="relative group">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer..."
              style={{ color: "#ffffff" }}
              // PY-10 FOR EXTRA PADDING
              className="w-full bg-transparent border-b-2 border-white/20 py-10 text-center text-3xl md:text-5xl focus:outline-none focus:border-[#d4af37] transition-all duration-500 placeholder:text-white/10 tracking-[0.05em]"
              autoFocus
            />
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4af37] group-focus-within:w-full transition-all duration-1000 shadow-[0_0_20px_#d4af37]"></div>
          </div>

          <button
            type="submit"
            style={{ borderColor: "#d4af37", color: "#d4af37" }}
            // PY-8 FOR MORE BUTTON PADDING
            className="w-full py-8 bg-transparent border-2 uppercase tracking-[0.5em] text-xs font-black hover:bg-[#d4af37] hover:text-[#020617] hover:shadow-[0_0_40px_#d4af37] transition-all duration-700 rounded-full active:scale-90 shadow-2xl"
          >
            Break the Seal
          </button>
        </form>
      </div>

      {/* FOOTER */}
      <div className="mt-20 opacity-30">
        <p
          style={{ color: "#ffffff" }}
          className="text-[10px] tracking-[1em] uppercase"
        >
          Genesis II // Secure Terminal
        </p>
      </div>
    </div>
  );
}
