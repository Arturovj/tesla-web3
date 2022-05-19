import React, { useState } from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";


import Menu from "./components/Menu/Menu";


import Home from "./components/Pages/Home";
import QuadCanvas from "./components/Quad/Quad";
import TequilaCanvas from "./components/Tequila/Tequila";
import Cybetruck from "./components/Cybertruck/Cybetruck";
import RobotCanvas from "./components/Robot/Robot";
import { FooterContainer } from "./containers/footer";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}


      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cyberquad" element={<QuadCanvas/>}></Route>
        <Route path="/tequila" element={<TequilaCanvas/>}></Route>
        <Route path="/cybertruck" element={<Cybetruck/>}></Route>
        <Route path="/robot" element={<RobotCanvas/>}></Route>

      </Routes>

      <FooterContainer />
    </div>
  );
}

export default App;
