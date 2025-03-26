"use client"

import { Calendar } from "lucide-react"
import AnimatedButton from "./AnimatedButton"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useCallback } from "react"

// Register ScrollToPlugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin)
}

interface BookACallButtonProps {
  className?: string
}

export default function BookACallButton({ className }: BookACallButtonProps) {
  const handleClick = useCallback(() => {
    // Find the Calendly section
    const calendlySection = document.getElementById("calendly")
    
    if (calendlySection) {
      // Animate scroll to the calendly section
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: calendlySection,
          offsetY: 100 // Add offset to account for header height
        },
        ease: "power3.inOut",
        onComplete: () => {
          // Optional: add a highlight effect to the calendly section
          gsap.fromTo(
            calendlySection,
            { boxShadow: "0 0 0 4px rgba(255,69,0,0.5)" },
            { 
              boxShadow: "0 0 0 0px rgba(255,69,0,0)",
              duration: 1.5,
              ease: "power2.out" 
            }
          )
        }
      })
    }
  }, [])

  return (
    <AnimatedButton 
      className={`bg-primary hover:bg-[#ff4500] rounded-full w-full sm:w-auto text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 max-w-48 p-2 ${className || ""}`}
      onClick={handleClick}
    >
      <Calendar className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
      <span className="whitespace-nowrap">Pide una reunión</span>
    </AnimatedButton>
  )
}

