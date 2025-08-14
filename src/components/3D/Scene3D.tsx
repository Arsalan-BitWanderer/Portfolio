import React from 'react';
import { OrbitControls } from '@react-three/drei';
import AnimatedBackground from './AnimatedBackground';
import { MotionValue } from 'framer-motion';

interface Scene3DProps {
  scrollYProgress: MotionValue<number>;
}

const Scene3D = ({ scrollYProgress }: Scene3DProps) => {
  return (
    <>
      <AnimatedBackground scrollYProgress={scrollYProgress} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
    </>
  );
};

export default Scene3D;
