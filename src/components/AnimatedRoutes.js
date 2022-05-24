import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Cybetruck from "./Cybertruck/Cybetruck";
import Home from "./Pages/Home";
import QuadCanvas from "./Quad/Quad";
import RobotCanvas from "./Robot/Robot";
import TequilaCanvas from "./Tequila/Tequila";

import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import Carrito from "./Pages/Carrito/Carrito";
import Producto from "./Pages/Producto/Producto";
import Perfil from "./Pages/Perfil/Perfil";
import Login from "./Pages/Login/Login";
import Shop from "./Pages/Shop/Shop";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";


export default function AnimatedRoutes() {
  const location = useLocation();
  return (
      <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />}></Route>
      <Route path="carrito" element={<Carrito/>}></Route>
      <Route path="shop" element={<Shop/>}></Route>
      <Route path="producto/:id" element={<Producto/>}></Route>
      <Route path="carrito" element={<Carrito/>}></Route>
      <Route path="perfil" element={<Perfil/>}></Route>
      <Route path="login" element={<Login/>}></Route>

      <Route path="/cyberquad" element={<QuadCanvas />}></Route>
      <Route path="/tequila" element={<TequilaCanvas />}></Route>
      <Route path="/cybertruck" element={<Cybetruck />}></Route>
      <Route path="/robot" element={<RobotCanvas />}></Route>
      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
    </AnimatePresence>
  );
}
