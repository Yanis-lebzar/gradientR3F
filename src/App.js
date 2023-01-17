import "./App.css";
import * as THREE from "three";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";

import { useRef } from "react";
import { ShaderGradient } from "./shaderGradient.js";

function App() {
  return (
    // <Canvas camera={{ position: [0, 0.0, 0] }}>
    <Canvas>
      <PerspectiveCamera position={[0.0, 0.0, 4.6]}>
        <Plane />
      </PerspectiveCamera>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight color="blue" position={[0, 0, 5]} />
    </Canvas>
  );
}

export default App;

function Plane() {
  const gradientRef = useRef();
  useFrame((state, delta) => {
    gradientRef.current.uTime += 0.00006;
  });
  return (
    <mesh position={[0, 0, 0]} scale={1.0}>
      <planeGeometry args={[2.5, 2.5, 300, 300]} />
      <shaderGradient side={THREE.DoubleSide} ref={gradientRef} />
    </mesh>
  );
}
