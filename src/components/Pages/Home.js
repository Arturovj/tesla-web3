import React from "react";
import GridLoader from "react-spinners/GridLoader";
import "./Home.css";

import Hover from "../Hover/Hover";
import WorldCanvas from "../World/WorldCanvas";
import { useState, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";

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
    <motion.div  initial={{ opacity : 0 }}
   animate={{ opacity : 1}}
   exit={{ opacity : 0}}>
 <WorldCanvas/>
 <Hover/>
 </motion.div>
 </>
    
  );
}
