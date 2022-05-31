import { Suspense } from "react";

import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";



// import World from "../GLTF/World";
import Eth from "../GLTF/Eth";


export default function EthCanvas() {
  return (
    <Wrapper className="world">
      <Canvas clasName="canvas">
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3}  />
        <ambientLight intensity={0.23} />
        <spotLight intensity={10} angle={20} penumbra={0.01} position={[-10,20,-5]} castShadow></spotLight>
        <directionalLight position={[-1, 5, 1]} />
        <Suspense fallback={null}>
          <Eth />
        </Suspense>
        </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
 left: 20%;

  canvas {
    height: 500px;
    width: 500px;
    
  }
`;