import React from "react";
import WorldCanvas from "../World/WorldCanvas";
import { motion } from "framer-motion/dist/framer-motion";
import HoverCybertruck from "../HoverCybertruck/HoverCybertruck";
import Cybertruck1 from "./Cybertruck1.avif";
import Cybertruck2 from "./Cybertruck2.avif";
import Cybertruck3 from "./Cybertruck3.avif";
import "./Cybertruck.css";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    duration: 5,
  },
};

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    duration: 5,
  },
};

export default function Cybetruck() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <WorldCanvas />
        <HoverCybertruck />
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 5 }}
          variants={imageAnimate}
        >
          <div className="cybertruck1">
            <img className="img" src={Cybertruck1}></img>
            <motion.p
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
            >
              <div className="title">
                <h2>EXOSKELETON</h2>
              </div>
              <div>
                <p>
                  Cybertruck is built with an exterior shell made for ultimate
                  durability and passenger protection. Starting with a nearly
                  <br />
                  impenetrable exoskeleton, every component is designed for
                  superior strength and endurance, from Ultra-Hard 30X
                  <br />
                  Cold-Rolled stainless-steel structural skin to Tesla armor
                  glass.
                </p>
              </div>
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 5 }}
          variants={imageAnimate}
        >
          <div className="cybertruck1">
            <img className="img" src={Cybertruck2}></img>
            <motion.p
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
            >
              <div className="title">
                <h2>ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL</h2>
              </div>
              <div>
                <p>
                  If there was something better, we’d use it. Help eliminate
                  dents, damage and long-term corrosion with a smooth monochrome
                  <br />
                  exoskeleton that puts the shell on the outside of the car and
                  provides you and your passengers maximum protection.
                </p>
              </div>
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 5 }}
          variants={imageAnimate}
        >
          <div className="cybertruck1">
            <img className="img" src={Cybertruck3}></img>
            <motion.p
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
            >
              <div className="title">
                <h2>TESLA ARMOR GLASS</h2>
              </div>
              <div>
                <p>
                  Ultra-strong glass and polymer-layered composite can absorb
                  and redirect impact force for improved performance and damage
                  tolerance.
                </p>
              </div>
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
