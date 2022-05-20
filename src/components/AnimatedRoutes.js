import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Cybetruck from "./Cybertruck/Cybetruck";
import Home from "./Pages/Home";
import QuadCanvas from "./Quad/Quad";
import RobotCanvas from "./Robot/Robot";
import TequilaCanvas from "./Tequila/Tequila";

import { AnimatePresence } from 'framer-motion/dist/framer-motion'


export default function AnimatedRoutes() {
  const location = useLocation();
  return (
      <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cyberquad" element={<QuadCanvas />}></Route>
      <Route path="/tequila" element={<TequilaCanvas />}></Route>
      <Route path="/cybertruck" element={<Cybetruck />}></Route>
      <Route path="/robot" element={<RobotCanvas />}></Route>
    </Routes>
    </AnimatePresence>
  );
}
