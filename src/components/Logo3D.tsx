'use client'

import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three'
import * as THREE from 'three'
import { Suspense } from 'react'

function LogoPlane() {
  const texture = useLoader(TextureLoader, '/images/logoSemBack.png')

  return (
    <mesh>
      <planeGeometry args={[3, 3]} /> {/* menor plano */}
      <meshStandardMaterial
        map={texture}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default function Logo3D() {
  return (
    <div className="w-8 h-8"> {/* tamanho fixo da logo */}
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        {/* luz ambiente mais forte */}
        <ambientLight intensity={1} />
        {/* luz oposta pra iluminar dos dois lados */}
        <directionalLight position={[-5, -5, -5]} intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />

        <Suspense fallback={null}>
          <LogoPlane />
        </Suspense>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  )
}
