"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { SphereGeometry } from "three"
import { MeshStandardMaterial } from "three"

// Define particle data interface
interface ParticleData {
  position: number[]
  scale: number
  velocity: THREE.Vector3
  color: THREE.Color
}

function Particles({ count = 1000, mouse }: { count: number; mouse: React.MutableRefObject<number[]> }) {
  const mesh = useRef<THREE.InstancedMesh>(null)
  const light = useRef<THREE.PointLight>(null)
  const { vec, color, dummy } = useRef({
    vec: new THREE.Vector3(),
    color: new THREE.Color(),
    dummy: new THREE.Object3D(),
  }).current

  const particles = useRef<ParticleData[]>([])

  useEffect(() => {
    // Initialize particles
    particles.current = new Array(count).fill(0).map(() => ({
      position: [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5],
      scale: Math.random() * 0.5 + 0.1,
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
      ),
      color: new THREE.Color(0.5 + Math.random() * 0.5, 0.3 + Math.random() * 0.2, 0.2 + Math.random() * 0.1),
    }))
  }, [count])

  useFrame((state) => {
    if (!particles.current || !mesh.current) return

    // Update light position to follow mouse
    if (light.current) {
      light.current.position.set(mouse.current[0] * 10, mouse.current[1] * 10, 10)
    }

    // Update particles
    particles.current.forEach((particle, i) => {
      const { position, scale, velocity, color } = particle

      // Update position based on velocity
      position[0] += velocity.x
      position[1] += velocity.y
      position[2] += velocity.z

      // Boundary check and bounce
      if (Math.abs(position[0]) > 5) velocity.x *= -1
      if (Math.abs(position[1]) > 5) velocity.y *= -1
      if (Math.abs(position[2]) > 5) velocity.z *= -1

      // Mouse attraction
      const mouseInfluence = 0.001
      velocity.x += (mouse.current[0] * 5 - position[0]) * mouseInfluence
      velocity.y += (mouse.current[1] * 5 - position[1]) * mouseInfluence

      // Apply to dummy
      dummy.position.set(position[0], position[1], position[2])
      dummy.scale.set(scale, scale, scale)
      dummy.updateMatrix()

      // Apply color
      mesh.current!.setColorAt(i, color)

      // Apply matrix
      mesh.current!.setMatrixAt(i, dummy.matrix)
    })

    mesh.current!.instanceMatrix.needsUpdate = true
    if (mesh.current!.instanceColor) mesh.current!.instanceColor.needsUpdate = true
  })

  const sphereGeo = new SphereGeometry(0.05, 8, 8)
  const material = new MeshStandardMaterial({ roughness: 0.5, metalness: 0.2 })

  return (
    <>
      <pointLight ref={light} distance={10} intensity={2} color="#ff4500" />
      <instancedMesh ref={mesh} args={[sphereGeo, material, count]}></instancedMesh>
    </>
  )
}

export default function HeroParticles() {
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
    <div className="absolute top-0 left-0 w-full h-screen z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <Particles count={1000} mouse={mouse} />
      </Canvas>
    </div>
  )
}

