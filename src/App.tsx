import React from "react";
// import logo from './logo.svg';
import { Header } from "./Components/Header/Header";
import AuroraBackgroundDemo from "./AuroraBackgroundDemo";
import { Footer } from "./Components/Footer/Footer";
import Creator from "./Pages/CreateQuest/Creator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./Pages/Explore"
import { Game } from './modules/game/containers';
import Profile from "./Pages/Profile/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuroraBackgroundDemo />} />
        <Route path="/quest-create" element={<Creator />} />
        <Route path="/explore" element={<Explore />} />
        <Route  path="/game" element={<Game setUiMode={undefined}/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
