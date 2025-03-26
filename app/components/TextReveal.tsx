"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface TextRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  staggerAmount?: number
  triggerPosition?: string
  type?: "chars" | "words" | "lines"
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  staggerAmount = 0.03,
  triggerPosition = "top 85%",
  type = "words",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [elements, setElements] = useState<HTMLElement[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    setElements([])

    const container = containerRef.current
    const content = container.textContent || ""
    container.innerHTML = ""

    const wrapper = document.createElement("div")
    wrapper.className = "text-reveal-wrapper"

    if (type === "chars") {
      Array.from(content).forEach((char) => {
        const charSpan = document.createElement("span")
        charSpan.className = "text-reveal-char"
        charSpan.textContent = char
        wrapper.appendChild(charSpan)
      })
    } else if (type === "words") {
      content.split(/\s+/).forEach((word) => {
        const wordSpan = document.createElement("span")
        wordSpan.className = "text-reveal-word"
        wordSpan.textContent = word + " "
        wrapper.appendChild(wordSpan)
      })
    } else {
      const lineDiv = document.createElement("div")
      lineDiv.className = "text-reveal-line"
      lineDiv.textContent = content
      wrapper.appendChild(lineDiv)
    }

    container.appendChild(wrapper)

    const els = Array.from(wrapper.children) as HTMLElement[]
    setElements(els)
  }, [type])

  useEffect(() => {
    if (elements.length === 0) return

    gsap.set(elements, {
      y: 50,
      opacity: 0,
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: triggerPosition,
        toggleActions: "play none none none",
      },
    })

    tl.to(elements, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: staggerAmount,
      ease: "power3.out",
      delay: delay,
    })

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
    }
  }, [elements, delay, staggerAmount, triggerPosition])

  return (
    <div ref={containerRef} className={className} style={{ position: "relative" }}>
      {children}
    </div>
  )
}

