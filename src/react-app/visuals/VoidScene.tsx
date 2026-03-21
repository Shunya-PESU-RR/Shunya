import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Main rotating icosahedron with wireframe
function VoidCore() {
    const meshRef = useRef<THREE.Mesh>(null);
    const wireframeRef = useRef<THREE.LineSegments>(null);
    const { mouse } = useThree();
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    useFrame((state, delta) => {
        if (prefersReduced) return;
        if (meshRef.current && wireframeRef.current) {
            // Slow auto-rotation
            meshRef.current.rotation.x += delta * 0.1;
            meshRef.current.rotation.y += delta * 0.15;
            wireframeRef.current.rotation.x = meshRef.current.rotation.x;
            wireframeRef.current.rotation.y = meshRef.current.rotation.y;

            // Mouse parallax - subtle follow effect
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 0.5, 0.05);
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 0.3, 0.05);
            wireframeRef.current.position.x = meshRef.current.position.x;
            wireframeRef.current.position.y = meshRef.current.position.y;
        }
    });

    const wireframeGeometry = useMemo(() => {
        const geo = new THREE.IcosahedronGeometry(2.5, 1);
        const edges = new THREE.EdgesGeometry(geo);
        return edges;
    }, []);

    return (
        <group>
            {/* Inner glowing core */}
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[2, 1]} />
                <MeshDistortMaterial
                    color="#7c3aed"
                    transparent
                    opacity={0.15}
                    distort={0.2}
                    speed={2}
                />
            </mesh>

            {/* Outer wireframe */}
            <lineSegments ref={wireframeRef} geometry={wireframeGeometry}>
                <lineBasicMaterial color="#a78bfa" transparent opacity={0.6} />
            </lineSegments>
        </group>
    );
}

// Floating small geometric accents
function FloatingAccents() {
    const groupRef = useRef<THREE.Group>(null);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    useFrame((state) => {
        if (prefersReduced) return;
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    const accents = useMemo(() => {
        const items = [];
        for (let i = 0; i < 75; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 3 + Math.random() * 10; // Spread out more (3 to 11 units)
            items.push({
                // Randomize position more
                position: [
                    Math.cos(angle) * radius,
                    (Math.random() - 0.75) * 8, // Wider vertical spread
                    Math.sin(angle) * radius
                ] as [number, number, number],
                scale: 0.05 + Math.random() * 0.3, // Smaller scale
                speed: 0.2 + Math.random() * 0.6, // Varies speed
            });
        }
        return items;
    }, []);

    return (
        <group ref={groupRef}>
            {accents.map((accent, i) => (
                <Float key={i} speed={accent.speed} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh position={accent.position} scale={accent.scale}>
                        <octahedronGeometry args={[1, 0]} />
                        <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.5} />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

// Main scene component
export default function VoidScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />

                <VoidCore />
                <FloatingAccents />
            </Canvas>
        </div>
    );
}
