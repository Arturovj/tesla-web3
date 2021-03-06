import { Suspense } from "react";

import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { motion } from "framer-motion/dist/framer-motion";

// import World from "../GLTF/World";
import Redtesla from "../GLTF/Redtesla";


export default function RedTeslaCanvas() {

    
  return (
    <>
    <motion.div  initial={{ opacity : 0 }}
      animate={{ opacity : 1}}
      exit={{ opacity : 0}}>
      <Wrapper className="quad">
        <Canvas clasName="canvas">
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
          <ambientLight intensity={1.5} />
          <spotLight
            intensity={3}
            angle={20}
            penumbra={0.01}
            position={[-10, 20, -5]}
            castShadow
          ></spotLight>
          <directionalLight position={[-1, 5, 1]} />
          <Suspense fallback={null}>
            <Redtesla />
          </Suspense>
        </Canvas>
      </Wrapper>

     
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
