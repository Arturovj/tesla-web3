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

import { auth } from "../firebase/credenciales";
import { useUserContext } from "../contexts/userContext";
import { onAuthStateChanged } from "firebase/auth";
import UnProtectedRoutes from "./Guards/UnProtectedRoutes";
import Reset from "./Pages/Reset/Reset";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from '../../src/components/LoginNft/connector'


export default function AnimatedRoutes() {
  const location = useLocation();
  const { user, setUser } = useUserContext();
  onAuthStateChanged(auth, (firebaseUser) => {
    if(firebaseUser) setUser(firebaseUser);
    if (!firebaseUser) setUser(null);
  })


  return (
      <AnimatePresence exitBeforeEnter>
       <Web3ReactProvider getLibrary={getLibrary}> 
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />}></Route>
      <Route path="shop" element={<Shop/>}></Route>
      <Route path="producto/:id" element={<Producto/>}></Route>
      <Route path="/carrito" element={<Carrito/>}></Route>
      <Route path="perfil" element={<Perfil/>}></Route>
      <Route path="reset" element={<Reset/>}></Route>

      <Route path="login" element={<UnProtectedRoutes><Login/></UnProtectedRoutes>}></Route>

      <Route path="/cyberquad" element={<QuadCanvas />}></Route>
      <Route path="/tequila" element={<TequilaCanvas />}></Route>
      <Route path="/cybertruck" element={<Cybetruck />}></Route>
      <Route path="/robot" element={<RobotCanvas />}></Route>
      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
    </Web3ReactProvider>
    </AnimatePresence>
  );
}
