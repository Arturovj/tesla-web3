import React, { useState } from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header/Header";

import Menu from "./components/Menu/Menu";

import { FooterContainer } from "./containers/footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}

      <AnimatedRoutes />

      <FooterContainer />
    </div>
  );
}

export default App;
