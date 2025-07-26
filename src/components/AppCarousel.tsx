import React, { useState, useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh } from 'three';

const AppCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/screenshots/app-1.jpg', '/screenshots/app-2.jpg', '/screenshots/app-3.jpg'];
  const textures = images.map(img => useLoader(TextureLoader, img));
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (meshRef.current && textures[currentImage]) {
      (meshRef.current.material as any).map = textures[currentImage];
      (meshRef.current.material as any).needsUpdate = true;
    }
  }, [currentImage, textures]);

  return (
    <mesh ref={meshRef}>
      {/* @ts-ignore */}
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      {/* @ts-ignore */}
      <meshBasicMaterial attach="material" />
    </mesh>
  );
};

export default AppCarousel;