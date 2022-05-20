import { Suspense } from "react";
import "./Quad.css";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { motion } from "framer-motion/dist/framer-motion";

// import World from "../GLTF/World";
import Quad from "../GLTF/Quad";
import Hover from "../Hover/Hover";

export default function QuadCanvas() {
  return (
    <>
    <motion.div  initial={{ opacity : 0 }}
      animate={{ opacity : 1}}
      exit={{ opacity : 0}}>
      <Wrapper className="quad">
        <Canvas clasName="canvas">
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
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

      <Hover />
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
