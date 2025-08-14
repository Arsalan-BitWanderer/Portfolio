import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MotionValue, useTransform } from 'framer-motion';

const Box = (props: any) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#8A2BE2'} />
    </mesh>
  );
};

const NeuralNetwork = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const group = useRef<THREE.Group>(null!);
  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = rotationY.get();
    }
  });

  const particlesRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  const { particles, lines } = useMemo(() => {
    const numParticles = 100;
    const particles = new Float32Array(numParticles * 3);
    const velocities = new Float32Array(numParticles * 3);
    const connections = [];

    for (let i = 0; i < numParticles; i++) {
      particles[i * 3] = (Math.random() - 0.5) * 10;
      particles[i * 3 + 1] = (Math.random() - 0.5) * 10;
      particles[i * 3 + 2] = (Math.random() - 0.5) * 10;
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    for (let i = 0; i < numParticles; i++) {
      for (let j = i + 1; j < numParticles; j++) {
        const dx = particles[i * 3] - particles[j * 3];
        const dy = particles[i * 3 + 1] - particles[j * 3 + 1];
        const dz = particles[i * 3 + 2] - particles[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (distance < 1.5) {
          connections.push(i, j);
        }
      }
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));
    particleGeometry.setAttribute('velocities', new THREE.BufferAttribute(velocities, 3));

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));
    lineGeometry.setIndex(connections);

    return { particles: particleGeometry, lines: lineGeometry };
  }, []);

  useFrame(() => {
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
    const velocities = particlesRef.current.geometry.attributes.velocities.array as Float32Array;

    for (let i = 0; i < positions.length / 3; i++) {
      positions[i * 3] += velocities[i * 3];
      positions[i * 3 + 1] += velocities[i * 3 + 1];
      positions[i * 3 + 2] += velocities[i * 3 + 2];

      if (positions[i * 3] > 5 || positions[i * 3] < -5) velocities[i * 3] *= -1;
      if (positions[i * 3 + 1] > 5 || positions[i * 3 + 1] < -5) velocities[i * 3 + 1] *= -1;
      if (positions[i * 3 + 2] > 5 || positions[i * 3 + 2] < -5) velocities[i * 3 + 2] *= -1;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group ref={group}>
      <points ref={particlesRef} geometry={particles}>
        <pointsMaterial color="#8A2BE2" size={0.1} />
      </points>
      <lineSegments ref={linesRef} geometry={lines}>
        <lineBasicMaterial color="#8A2BE2" transparent opacity={0.5} />
      </lineSegments>
    </group>
  );
};

const AnimatedBackground = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <NeuralNetwork scrollYProgress={scrollYProgress} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Box position={[0, -1.2, 0]} />
      <Box position={[0, 1.2, 0]} />
      <Box position={[-1.2, -1.2, 0]} />
      <Box position={[1.2, 1.2, 0]} />
      <Box position={[-1.2, 1.2, 0]} />
      <Box position={[1.2, -1.2, 0]} />
    </>
  );
};

export default AnimatedBackground;
