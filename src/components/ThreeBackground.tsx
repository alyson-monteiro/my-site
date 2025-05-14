// src/components/ThreeBackground.tsx
'use client'
import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'

export default function ThreeBackground() {
  return (
    <Canvas className="fixed inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <Stars radius={100} depth={50} count={5000} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
