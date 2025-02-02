"use client"

import { useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

interface MorphingLinesProps {
  count?: number;
  separation?: number;
  lineWidth?: number;
  color?: string | THREE.Color;
  opacity?: number;
  speed?: number;
  amplitude?: number;
}

function MorphingLines({ 
  count = 40, 
  separation = 1, 
  lineWidth = 0.5, 
  color, 
  opacity = 0.3, 
  speed = 0.2, 
  amplitude = 1 
}: MorphingLinesProps) {
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i < count; i++) {
      const x = (i - count / 2) * separation
      pts.push(new THREE.Vector3(x, -15, 0))
      pts.push(new THREE.Vector3(x, 15, 0))
    }
    return pts
  }, [count, separation])

  const lineRef = useRef<THREE.Line<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>(null)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    if (!lineRef.current) return
    const positions = lineRef.current.geometry.attributes.position
    
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i)
      const z = Math.sin(time * speed + x * 0.2) * amplitude
      positions.setZ(i, z)
      
      const y = positions.getY(i)
      const waveFactor = Math.sin(time * speed * 0.8 + x * 0.15)
      positions.setY(i, y + waveFactor * 0.5)
    }
    
    positions.needsUpdate = true
  })

  return (
    <primitive object={new THREE.Line()} ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} linewidth={lineWidth} transparent opacity={opacity} />
    </primitive>
  )
}

function Scene() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const primaryColor = isDark ? '#ffffff' : '#000000'
  const secondaryColor = isDark ? '#666666' : '#cccccc'
  const tertiaryColor = isDark ? '#444444' : '#eeeeee'

  return (
    <>
      <group position={[0, 0, -8]}>
        {/* Background layer */}
        <group position={[0, 0, -4]}>
          <MorphingLines 
            color={tertiaryColor} 
            count={60} 
            separation={0.8} 
            lineWidth={0.3} 
            opacity={0.15} 
            speed={0.15}
            amplitude={0.8}
          />
        </group>

        {/* Middle layer */}
        <group position={[0.5, 0, -2]}>
          <MorphingLines 
            color={secondaryColor} 
            count={40} 
            separation={1.2} 
            lineWidth={0.4} 
            opacity={0.2}
            speed={0.2}
            amplitude={1.2}
          />
        </group>

        {/* Foreground layer */}
        <MorphingLines 
          color={primaryColor} 
          count={30} 
          separation={1.5} 
          lineWidth={0.5} 
          opacity={0.25}
          speed={0.25}
          amplitude={1.5}
        />
      </group>

      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  )
}

export function ThreeScene() {
  const { theme } = useTheme()
  const bgColor = theme === 'dark' ? '#000000' : '#ffffff'

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={[bgColor]} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}