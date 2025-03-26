"use client"

import { useEffect, useState } from "react"

export default function BackgroundOverlay() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate opacity based on scroll position
  // More opaque at the top sections to improve text readability
  const topOpacity = Math.min(0.7, 0.4 + scrollY / 1000)

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      {/* Top gradient for better text readability in hero section */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent h-[70vh]"
        style={{ opacity: topOpacity }}
      ></div>

      {/* Side gradients for better contrast with particles */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-black/40 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-black/40 to-transparent"></div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
  )
}

