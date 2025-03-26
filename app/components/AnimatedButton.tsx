"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function AnimatedButton({ children, className = "", onClick }: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!buttonRef.current) return

    // Define event handler functions
    const handleMouseEnter = () => {
      if (!buttonRef.current) return
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power1.out"
      })
    }

    const handleMouseLeave = () => {
      if (!buttonRef.current) return
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power1.out"
      })
    }

    const handleMouseDown = () => {
      if (!buttonRef.current) return
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        ease: "power1.out"
      })
    }

    const handleMouseUp = () => {
      if (!buttonRef.current) return
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.1,
        ease: "power1.out"
      })
    }

    // Add event listeners
    buttonRef.current.addEventListener("mouseenter", handleMouseEnter)
    buttonRef.current.addEventListener("mouseleave", handleMouseLeave)
    buttonRef.current.addEventListener("mousedown", handleMouseDown)
    buttonRef.current.addEventListener("mouseup", handleMouseUp)

    // Clean up event listeners
    return () => {
      if (!buttonRef.current) return
      buttonRef.current.removeEventListener("mouseenter", handleMouseEnter)
      buttonRef.current.removeEventListener("mouseleave", handleMouseLeave)
      buttonRef.current.removeEventListener("mousedown", handleMouseDown)
      buttonRef.current.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <Button ref={buttonRef} className={`transition-all ${className}`} onClick={onClick}>
      {children}
    </Button>
  )
}

