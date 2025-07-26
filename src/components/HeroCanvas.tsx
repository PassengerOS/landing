import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSystem = () => {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors, geometry } = useMemo(() => {
    const count = 500;
    const positionsArray = new Float32Array(count * 3);
    const colorsArray = new Float32Array(count * 3);

    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const r = Math.random() * 4;
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;

      positionsArray[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      positionsArray[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positionsArray[i * 3 + 2] = r * Math.cos(theta);

      color.setHSL(i / count, 0.7, 0.7);
      colorsArray[i * 3] = color.r;
      colorsArray[i * 3 + 1] = color.g;
      colorsArray[i * 3 + 2] = color.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    geo.computeBoundingSphere();
    return { positions: positionsArray, colors: colorsArray, geometry: geo };
  }, []);

  useFrame(({ clock }) => {
    // Ensure ref.current and geometry are available before proceeding
    if (ref.current && ref.current.geometry && ref.current.geometry.attributes) {
      const elapsedTime = clock.getElapsedTime();
      ref.current.rotation.x = elapsedTime * 0.05;
      ref.current.rotation.y = elapsedTime * 0.03;

      const positionAttribute = ref.current.geometry.attributes.position;
      // Ensure positionAttribute is defined and has an array before accessing
      if (positionAttribute && positionAttribute.array) {
        for (let i = 0; i < positionAttribute.count; i++) {
          const xIndex = i * 3;
          const yIndex = i * 3 + 1;
          const zIndex = i * 3 + 2;

          // Simplified animation for stability
          positionAttribute.array[xIndex] += Math.sin(elapsedTime * 1 + i * 0.05) * 0.001;
          positionAttribute.array[yIndex] += Math.cos(elapsedTime * 1 + i * 0.05) * 0.001;
          positionAttribute.array[zIndex] += Math.sin(elapsedTime * 0.8 + i * 0.1) * 0.0005;
        }
        positionAttribute.needsUpdate = true;
      }
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial attach="material" vertexColors size={0.02} sizeAttenuation={true} transparent opacity={0.7} />
    </points>
  );
};

const HeroCanvas = () => (
  <div className="w-full h-96">
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <ParticleSystem />
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  </div>
);

export default HeroCanvas;