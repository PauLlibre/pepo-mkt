"use client"

import React, { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type * as THREE from "three"

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

function Model({ scrollY }: { scrollY: number }) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF("/models/rocket.glb")

  useEffect(() => {
    if (!group.current) return

    // Create animation based on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })

    tl.to(group.current.rotation, {
      y: Math.PI * 2,
      ease: "none",
    })

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
    }
  }, [])

  // Gentle floating animation
  useFrame((state) => {
    if (!group.current) return
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  return (
    <group ref={group} dispose={null} scale={0.5}>
      {/* This is a placeholder for the 3D model */}
      <mesh castShadow receiveShadow>
        <capsuleGeometry args={[0.5, 2, 16, 32]} />
        <meshStandardMaterial color="#ff4500" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, -1.5, 0]}>
        <coneGeometry args={[1, 1, 16]} />
        <meshStandardMaterial color="#ff7e50" roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.5, 0.6]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
      </mesh>
    </group>
  )
}

export default function ThreeModel() {
  const [scrollY, setScrollY] = React.useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div id="model-section" className="h-[50vh] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Model scrollY={scrollY} />
        <ContactShadows opacity={0.5} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}

