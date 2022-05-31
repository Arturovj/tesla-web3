import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";

import Menu from "./components/Menu/Menu";

import { FooterContainer } from "./containers/footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CookieConsent, { Cookies } from "react-cookie-consent";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* <Web3ReactProvider getLibrary={getLibrary}></Web3ReactProvider> */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}

      <AnimatedRoutes />

      <FooterContainer />
      <ToastContainer/>
      
      <CookieConsent
  location="bottom"
  buttonText="X"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>If you continue to use this site, you consent to our use of cookies</span>
</CookieConsent>
    </div>
  );
}

export default App;
