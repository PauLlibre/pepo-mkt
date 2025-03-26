"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const smoothWrapperRef = useRef<HTMLDivElement>(null)
  const smoothContentRef = useRef<HTMLDivElement>(null)
  const smootherRef = useRef<any>(null)

  useEffect(() => {
    // Create smooth scroller
    if (smoothWrapperRef.current && smoothContentRef.current) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: smoothWrapperRef.current,
        content: smoothContentRef.current,
        smooth: 1.5, // Adjust smoothness (higher = smoother)
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
      })
    }

    return () => {
      // Clean up
      if (smootherRef.current) {
        smootherRef.current.kill()
      }
    }
  }, [])

  return (
    <div ref={smoothWrapperRef} className="smooth-wrapper">
      <div ref={smoothContentRef} className="smooth-content">
        {children}
      </div>
    </div>
  )
}

