import Gate from "./pages/Gate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dua from "./pages/Dua";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      {/* This div applies the parchment background to the whole app */}
      <div className="min-h-screen bg-parchment selection:bg-gold selection:text-white">
        <Routes>
          <Route path="/game" element={<Gate />} />
          <Route path="/" element={<Home />} />
          <Route path="/dua" element={<Dua />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
