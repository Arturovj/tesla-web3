import { Suspense } from "react";
import "./Perfil.css";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from 'framer-motion/dist/framer-motion'



// import World from "../GLTF/World";
import Perfil from "../GLTF/Perfil";



export default function PerfilCanvas() {
  return (
      <>
      <motion.div  initial={{ opacity : 0 }}
      animate={{ opacity : 1}}
      exit={{ opacity : 0}}>
    <Wrapper className="robot">
      <Canvas clasName="canvas">
        <OrbitControls enableZoom={false}   />
        <ambientLight intensity={2} />
        <spotLight intensity={10} angle={20}  position={[-1,30,-10]} castShadow></spotLight>
        <directionalLight position={[-5, 10, 5]} />
        <Suspense fallback={null}>
          <Perfil />
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