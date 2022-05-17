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
        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1.5}  />
        <ambientLight intensity={0.01} />
        <spotLight intensity={10} angle={20} penumbra={0.1} position={[10,20,10]} castShadow></spotLight>
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

  canvas {
    height: 720px;
    width: 500px;
    
  }
`;
