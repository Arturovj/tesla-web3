import React, { useState } from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

import WorldCanvas from "./components/World/WorldCanvas";
import Menu from "./components/Menu/Menu";
import Hover from "./components/Hover/Hover";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}
      <Routes></Routes>

      <WorldCanvas></WorldCanvas>
     
     <Hover></Hover>
    </div>
  );
}

export default App;
