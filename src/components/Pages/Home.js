import React from "react";
import GridLoader from "react-spinners/GridLoader";
import "./Home.css";

import Hover from "../Hover/Hover";
// import WorldCanvas from "../World/WorldCanvas";
import { useState, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";
// import TeslaCanvas from "../Tesla/Tesla";
import Feature from "./Feature";
import RedTeslaCanvas from "../Redtesla/Redtesla";
import EthCanvas from "../Eth/Eth";
import EthereumFeature from "./EthereumFeature";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    duration: 1,
  },
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* <TeslaCanvas /> */}
        <RedTeslaCanvas />
        <Hover />
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
          variants={imageAnimate}
        >
          <Feature />

          
        </motion.div>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
          variants={imageAnimate}
        >

        <EthCanvas/>
        <EthereumFeature/>
        </motion.div>


      </motion.div>
      
    </>
  );
}
