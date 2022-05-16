import React, { useState } from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import WorldCanvas from "./components/World/WorldCanvas";


function App() {

 

  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <Router>
      <div className="App">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      <div>
        <WorldCanvas></WorldCanvas>
      </div>

      
    </Router>
  );
}

export default App;


