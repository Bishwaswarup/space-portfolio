import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Trail } from '@react-three/drei';
import * as THREE from 'three';

export default function CelestialBody({ project, onSelect, isActive }) {
  const groupRef = useRef();
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Random phase so planets don't all start aligned
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * project.speed + phase;
    groupRef.current.position.x = Math.cos(t) * project.radius;
    groupRef.current.position.z = Math.sin(t) * project.radius;
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  // Orbit ring geometry (drawn once)
  const ringPoints = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * project.radius, 0, Math.sin(a) * project.radius));
    }
    return pts;
  }, [project.radius]);

  return (
    <group>
      {/* Orbit path */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array(ringPoints.flatMap((p) => [p.x, p.y, p.z]))}
            count={ringPoints.length}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={project.color} transparent opacity={0.15} />
      </line>

      <group ref={groupRef}>
        <mesh
          ref={meshRef}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = 'auto';
          }}
        >
          <sphereGeometry args={[project.size, 32, 32]} />
          <meshStandardMaterial
            color={project.color}
            emissive={project.color}
            emissiveIntensity={hovered || isActive ? 0.9 : 0.35}
            roughness={0.4}
            metalness={0.3}
          />
        </mesh>

        {/* Glow halo */}
        <mesh scale={1.6}>
          <sphereGeometry args={[project.size, 16, 16]} />
          <meshBasicMaterial color={project.color} transparent opacity={hovered ? 0.18 : 0.08} />
        </mesh>

        {(hovered || isActive) && (
          <Html distanceFactor={12} position={[0, project.size + 0.6, 0]} center>
            <div className="label-tag">{project.name}</div>
          </Html>
        )}
      </group>
    </group>
  );
}
