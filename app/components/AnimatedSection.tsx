"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  triggerPosition?: string
  stagger?: number
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  triggerPosition = "top 80%",
  stagger = 0.1,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const childrenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !childrenRef.current) return

    // Set initial state based on direction
    const xFrom = direction === "left" ? -50 : direction === "right" ? 50 : 0
    const yFrom = direction === "up" ? 50 : direction === "down" ? -50 : 0

    // Get all direct children of the childrenRef
    const elements = childrenRef.current.children

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: triggerPosition,
        toggleActions: "play none none none",
      },
    })

    // Animate each child with stagger
    tl.fromTo(
      elements,
      {
        autoAlpha: 0,
        x: xFrom,
        y: yFrom,
      },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        duration: duration,
        stagger: stagger,
        ease: "power3.out",
        delay: delay,
        clearProps: "all",
      },
    )

    return () => {
      // Clean up ScrollTrigger
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
    }
  }, [delay, direction, duration, triggerPosition, stagger])

  return (
    <div ref={sectionRef} className={className}>
      <div ref={childrenRef}>{children}</div>
    </div>
  )
}

