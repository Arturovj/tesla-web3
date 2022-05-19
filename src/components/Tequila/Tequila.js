import { Suspense } from "react";
import "./Tequila.css";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";



// import World from "../GLTF/World";
import Tequila from "../GLTF/Tequila";
import Hover from "../Hover/Hover";


export default function TequilaCanvas() {
  return (
      <>
    <Wrapper className="tequila">
      <Canvas clasName="canvas">
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5}  />
        <ambientLight intensity={5} />
        <spotLight intensity={10} angle={20} penumbra={0.01} position={[-10,20,-5]} castShadow></spotLight>
        <directionalLight position={[-1, 5, 1]} />
        <Suspense fallback={null}>
          <Tequila />
        </Suspense>
        </Canvas>
    </Wrapper>

    <Hover/>
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
