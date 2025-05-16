'use client'

import { Canvas } from '@react-three/fiber'
import { Text3D, Center, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

export default function Logo3D() {
  return (
    <div className="w-16 h-16"> {/* ajuste o tamanho como desejar */}
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Center>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={1}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.03}
              bevelSize={0.02}
            >
              AM {/* AM */}
              <meshStandardMaterial color="#64ffda" />
            </Text3D>
          </Center>
        </Suspense>
        {/* opcional: controles para girar o logo */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  )
}
