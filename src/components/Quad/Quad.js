import { Suspense } from "react";
import "./Quad.css";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { motion } from "framer-motion/dist/framer-motion";
import Cyberquad2 from "./Cyberquad2.jpg";

// import World from "../GLTF/World";
import Quad from "../GLTF/Quad";
import HoverCyberquad from "../HoverCyberquad/HoverCyberquad";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    duration: 10,
  },
};

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    duration: 10,
  },
};

export default function QuadCanvas() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0,
        transition: { duration: 0.5}
        }}
      >
        <Wrapper className="quad">
          <Canvas clasName="canvas">
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.3}
            />
            <ambientLight intensity={5} />
            <spotLight
              intensity={10}
              angle={20}
              penumbra={0.01}
              position={[-10, 20, -5]}
              castShadow
            ></spotLight>
            <directionalLight position={[-1, 5, 1]} />
            <Suspense fallback={null}>
              <Quad />
            </Suspense>
          </Canvas>
        </Wrapper>

        <HoverCyberquad />

        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 5 }}
          variants={imageAnimate}
        >
          <div className="cybertruck1">
            <img className="img" src={Cyberquad2}></img>
            <motion.p
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={textAnimate}
            >
              <div className="title">
                <h2>CYBERQUAD</h2>
              </div>
              <div>
                <p>
                  Get ready for any adventure with the all-electric Cyberquad
                  for Kids. Inspired by our iconic Cybertruck design, this
                  four-wheeler features a full steel frame, cushioned seat and<br/>
                  adjustable suspension with rear disk braking and LED light
                  bars. Powered by a lithium-ion battery with up to 15 miles of
                  range and a configurable top speed of 10 mph, Cyberquad for<br/>
                  Kids is suitable for children from 8-12 years old.
                </p>
              </div>
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;

  canvas {
    height: 500px;
    width: auto;
  }
`;
