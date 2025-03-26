"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { useFrame, Canvas } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import { gsap } from "gsap"
import type { InstancedMesh } from "three"
import { SphereGeometry, MeshStandardMaterial } from "three"
import type { JSX } from "react/jsx-runtime"

// Define a proper particle data interface
interface ParticleData {
  position: number[]
  scale: number
  rotation: number
  color: THREE.Color
}

// Animated particles that follow the mouse
function Particles({ count = 1000, mouse }: { count: number; mouse: React.MutableRefObject<number[]> }) {
  const mesh = useRef<InstancedMesh>(null)
  const dummy = new THREE.Object3D()

  // Create particles
  const particles = useRef<ParticleData[]>([])
  const colorArray = [
    new THREE.Color("#ff4500").multiplyScalar(0.6),
    new THREE.Color("#ff7e50").multiplyScalar(0.6),
    new THREE.Color("#ff9e7a").multiplyScalar(0.6),
  ]

  useEffect(() => {
    // Initialize particles - position them more to the sides and bottom
    particles.current = new Array(count).fill(0).map(() => {
      // Create a bias toward the edges
      let x = Math.random() * 20 - 10
      let y = Math.random() * 20 - 10

      // Push more particles to the sides and bottom
      if (Math.random() > 0.7) {
        x = Math.random() > 0.5 ? x + 5 : x - 5
        y = y - 5 // More particles at the bottom
      }

      return {
        position: [x, y, Math.random() * 10 - 15], // Push particles further back
        scale: Math.random() * 0.15 + 0.05, // Smaller particles
        rotation: Math.random() * Math.PI,
        color: colorArray[Math.floor(Math.random() * colorArray.length)],
      }
    })
  }, [count])

  useFrame((state) => {
    if (!particles.current || !mesh.current) return

    // Update particles
    particles.current.forEach((particle, i) => {
      const { position, scale, rotation, color } = particle

      // Move towards mouse with different speeds for parallax effect
      // Reduced mouse influence for subtler effect
      const mouseInfluence = (0.02 * ((i % 3) + 1)) / 3

      dummy.position.set(
        position[0] + mouse.current[0] * mouseInfluence,
        position[1] + mouse.current[1] * mouseInfluence,
        position[2],
      )

      dummy.scale.set(scale, scale, scale)
      dummy.rotation.set(rotation, rotation, rotation)
      dummy.updateMatrix()

      mesh.current!.setColorAt(i, color)
      mesh.current!.setMatrixAt(i, dummy.matrix)
    })

    mesh.current!.instanceMatrix.needsUpdate = true
    if (mesh.current!.instanceColor) mesh.current!.instanceColor.needsUpdate = true
  })

  const sphereGeo = new SphereGeometry(0.05, 8, 8)
  const material = new MeshStandardMaterial({ roughness: 0.5, metalness: 0.2 })

  return <instancedMesh ref={mesh} args={[sphereGeo, material, count]}></instancedMesh>
}

// Floating 3D logo - made smaller and less intrusive
function Logo(props: JSX.IntrinsicElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null)

  useEffect(() => {
    if (!mesh.current) return

    // Animate logo on mount
    gsap.from(mesh.current.position, {
      y: -2,
      duration: 2,
      ease: "elastic.out(1, 0.5)",
    })

    gsap.from(mesh.current.rotation, {
      y: Math.PI * 2,
      duration: 2.5,
      ease: "power3.out",
    })
  }, [])

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={mesh} {...props} scale={0.6}>
        <torusKnotGeometry args={[0.7, 0.3, 100, 16]} />
        <meshStandardMaterial
          color="#ff4500"
          roughness={0.3}
          metalness={0.8}
          emissive="#ff4500"
          emissiveIntensity={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  )
}

export default function ThreeBackground() {
  const mouse = useRef<number[]>([0, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates
      mouse.current = [(e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1]
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 opacity-30">
      {/* Add a gradient overlay to improve text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>

      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Particles count={800} mouse={mouse} />
        <Logo position={[3, -2, -3]} /> {/* Positioned to the side and bottom */}
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

