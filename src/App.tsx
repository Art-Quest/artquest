import React from 'react';
// import logo from './logo.svg';
import {Header} from "./Components/Header/Header";
import  AuroraBackgroundDemo  from './AuroraBackgroundDemo';
import { Footer } from './Components/Footer/Footer';
import { Creator } from './Pages/CreateQuest/Creator';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuroraBackgroundDemo />}>
        </Route>
        <Route path="/quest-create" element={<Creator />} >
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

// export default App;






