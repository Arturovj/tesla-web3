import React, { useState } from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";


import Menu from "./components/Menu/Menu";

import Tequila from "./components/Tequila/Tequila";
import Home from "./components/Pages/Home";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}


      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cyberquad" element={""}></Route>
        <Route path="/tequila" element={<Tequila/>}></Route>
        <Route path="/cybertruck" element={""}></Route>
        <Route path="/robot" element={""}></Route>

      </Routes>

     
    </div>
  );
}

export default App;
