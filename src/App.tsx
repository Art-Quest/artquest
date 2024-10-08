import React from "react";
import { Header } from "./Components/Header/Header";
import AuroraBackgroundDemo from "./AuroraBackgroundDemo";
import { Footer } from "./Components/Footer/Footer";
import Creator from "./Pages/CreateQuest/Creator";
import { Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import Explore from "./Pages/Explore"
import { Game } from './modules/game/containers';
import Modal from "../src/Pages/Modal/Modal"



export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<AuroraBackgroundDemo />} />
        <Route path="/quest-create" element={<Creator />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route  path="/game" element={<Game setUiMode={undefined}/>} />
        {/* <Route path=""/> */}
      </Routes>
    </React.Fragment>
  );
}

// export default App;
