import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
// import logo from './logo.svg';
=======
>>>>>>> 10ebfdb2f00dd12f86c6a4e1693214c374ad7993
=======
>>>>>>> 10ebfdb2f00dd12f86c6a4e1693214c374ad7993
import { Header } from "./Components/Header/Header";
import AuroraBackgroundDemo from "./AuroraBackgroundDemo";
import { Footer } from "./Components/Footer/Footer";
import Creator from "./Pages/CreateQuest/Creator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import Explore from "./Pages/Explore"
import { Game } from './modules/game/containers';
<<<<<<< HEAD
<<<<<<< HEAD
import Profile from "./Pages/Profile/Profile";
=======
=======

>>>>>>> 10ebfdb2f00dd12f86c6a4e1693214c374ad7993


>>>>>>> 10ebfdb2f00dd12f86c6a4e1693214c374ad7993

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuroraBackgroundDemo />} />
        <Route path="/quest-create" element={<Creator />} />
        <Route path="/explore" element={<Explore />} />
<<<<<<< HEAD
<<<<<<< HEAD
        <Route  path="/game" element={<Game setUiMode={undefined}/>} />
        <Route path="/profile" element={<Profile />} />
=======
=======
>>>>>>> 10ebfdb2f00dd12f86c6a4e1693214c374ad7993
        <Route path="/profile" element={<Profile />} />
        <Route  path="/game" element={<Game setUiMode={undefined}/>} />

>>>>>>> 10ebfdb2f00dd12f86c6a4e1693214c374ad7993
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
