import React from "react";
import { Route, Routes, HashRouter } from 'react-router-dom';


import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Hunt from "./pages/Hunt";

function App() {
  return (
    <div>
      <div>
        <div>
          <HashRouter basename="/">
            <Routes>
              <Route path="/" element={<Home />}/>
            </Routes>
            <Routes>
              <Route path="/hunt" element={<Hunt />}/>
            </Routes>
            <Routes>
              <Route path="/leaderboard" element={<Leaderboard />}/>
            </Routes>
          </HashRouter>
        </div>
      </div>
    </div>
  );
}

export default App;