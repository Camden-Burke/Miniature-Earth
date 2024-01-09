import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import {OrbitControls, Stars} from '@react-three/drei';
import { TextureLoader } from 'three';

const Sphere = () => {
  const sphereRef = useRef();
  const texture= useLoader(TextureLoader, '/textures/earth-texture-10k.jpg');

  //Simple UseFrame Rotation Animation
  useFrame(() => {
    sphereRef.current.rotation.y += 0.005;
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
   <Canvas style={{background: 'black', position: 'fixed', margin: 0}} camera={{ position: [0,0,75], fov: 75}}>  
   <ambientLight intensity={0.2} />
   <directionalLight color='white' position={[5, 3, 5]} intensity={1} />
    <Sphere/>
    <OrbitControls />
    <Stars />
   </Canvas>
  );
}

export default App;
