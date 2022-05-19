import { Suspense } from "react";
import "./World.css";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";



// import World from "../GLTF/World";
import Cyber from "../GLTF/Cyber";


export default function WorldCanvas() {
  return (
    <Wrapper className="world">
      <Canvas clasName="canvas">
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5}  />
        <ambientLight intensity={0.01} />
        <spotLight intensity={10} angle={20} penumbra={0.01} position={[-10,20,-5]} castShadow></spotLight>
        <directionalLight position={[-1, 5, 1]} />
        <Suspense fallback={null}>
          <Cyber />
        </Suspense>
        </Canvas>
    </Wrapper>
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
