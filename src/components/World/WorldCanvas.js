import { Suspense } from "react";
import "./World.css";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";



// import World from "../GLTF/World";
import Tequila from "../GLTF/Tequila";


export default function WorldCanvas() {
  return (
    <Wrapper className="world">
      <Canvas clasName="canvas">
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={15} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Tequila />
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
