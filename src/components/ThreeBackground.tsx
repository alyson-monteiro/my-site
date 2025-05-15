'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function Network() {
  const group = useRef<THREE.Group>(null)
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i < 100; i++) {
      pts.push(new THREE.Vector3(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
      ))
    }
    return pts
  }, [])

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.0005
      group.current.rotation.x += 0.0003
    }
  })

  return (
    <group ref={group}>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial color="#64ffda" />
        </mesh>
      ))}
      <Line
        points={points}
        color="#64ffda"
        lineWidth={0.5}
        dashed={false}
      />
    </group>
  )
}

export default function ThreeBackground() {
  return (
    <Canvas className="fixed inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <Network />
    </Canvas>
  )
}
