import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gate from "./pages/Gate";
import Home from "./pages/Home";
import Dua from "./pages/Dua";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      {/* This div applies the parchment background to the whole app.
        Added 'overflow-x-hidden' to prevent any accidental side-scrolling on mobile.
      */}
      <div className="min-h-screen bg-parchment selection:bg-gold selection:text-white overflow-x-hidden">
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Home />} />

          {/* Spiritual/Dua Section */}
          <Route path="/dua" element={<Dua />} />

          {/* The Entrance to the Game */}
          <Route path="/gate" element={<Gate />} />

          {/* The Actual Gameplay/Chronicle Experience */}
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
