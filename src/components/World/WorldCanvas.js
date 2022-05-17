import { Suspense } from "react";
import "./World.css";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";



// import World from "../GLTF/World";
import Quadra from "../GLTF/Quadra";


export default function WorldCanvas() {
  return (
    <Wrapper className="world">
      <Canvas clasName="canvas">
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5}  />
        <ambientLight intensity={1} />
        <spotLight intensity={2.5} angle={0.1} penumbra={1} position={[10,15,10]} castShadow></spotLight>
        <directionalLight position={[-5, 10, 5]} />
        <Suspense fallback={null}>
          <Quadra />
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
