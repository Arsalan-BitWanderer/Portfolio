import React, { useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// This is a simplified 3D component that displays a floating cube
// You can replace this with a more complex 3D model later
const Model = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    // @ts-ignore - Ignoring type errors for Float component
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#2563eb" 
          metalness={0.5} 
          roughness={0.2} 
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="h-64 md:h-96 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
          castShadow 
        />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Scene3D; 