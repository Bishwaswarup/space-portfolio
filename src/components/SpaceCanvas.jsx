import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Html } from '@react-three/drei';
import CelestialBody from './CelestialBody.jsx';
import { projects, profile } from '../data/projects.js';

function CentralStar({ onSelect }) {
  const meshRef = useRef();
  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.06;
  });
  return (
    <group onClick={(e) => { e.stopPropagation(); onSelect(null); }}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 48, 48]} />
        <meshStandardMaterial
          color="#f5a623"
          emissive="#f5a623"
          emissiveIntensity={1.2}
          roughness={0.3}
        />
      </mesh>
      <pointLight color="#f5a623" intensity={4} distance={60} decay={1.5} />
      <mesh scale={1.35}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#f5a623" transparent opacity={0.12} />
      </mesh>
      <Html distanceFactor={14} position={[0, 3.1, 0]} center>
        <div className="label-tag">{profile.handle}</div>
      </Html>
    </group>
  );
}

export default function SpaceCanvas({ activeProject, onSelect }) {
  return (
    <Canvas camera={{ position: [0, 10, 24], fov: 55 }}>
      <color attach="background" args={['#05070d']} />
      <ambientLight intensity={0.15} />
      <Suspense fallback={null}>
        <Stars radius={120} depth={60} count={4000} factor={3} saturation={0} fade speed={0.4} />
        <Float speed={0.6} floatIntensity={0.4} rotationIntensity={0}>
          <CentralStar onSelect={onSelect} />
        </Float>
        {projects.map((p) => (
          <CelestialBody
            key={p.id}
            project={p}
            onSelect={onSelect}
            isActive={activeProject?.id === p.id}
          />
        ))}
      </Suspense>
      <OrbitControls
        enablePan={false}
        minDistance={8}
        maxDistance={45}
        autoRotate
        autoRotateSpeed={0.25}
      />
    </Canvas>
  );
}
