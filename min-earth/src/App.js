import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import {OrbitControls, Stars} from '@react-three/drei';
import { TextureLoader } from 'three';
import './App.css';

const Sphere = () => {
  const sphereRef = useRef();
  const texture= useLoader(TextureLoader, '/textures/earth-texture-10k.jpg');

  //Simple UseFrame Rotation Animation
  useFrame(() => {
    sphereRef.current.rotation.y += 0.001;
  });
  return (
    <mesh
    ref={sphereRef}
    position={[0,0,0]}>
      <sphereGeometry args={[15,64,32]} attach="geometry" />
      <meshBasicMaterial map={texture} attach="material" />
    </mesh>
  );
}

function App() {
  return (
   <Canvas style={{background: 'black', position: 'fixed', margin: 0}}>  
   <ambientLight intensity={0.5} />
   <directionalLight position={[10, 10, 10]} intensity={2} />
    <Sphere/>
    <Stars />
    <OrbitControls />
   </Canvas>
  );
}

export default App;
