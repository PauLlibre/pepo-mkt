"use client"

import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedSection from "./AnimatedSection"

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Statistics() {
  const [activeClients, setActiveClients] = useState(0)
  const [adSpend, setAdSpend] = useState(0)
  const [roi, setRoi] = useState(0)
  const statsRef = useRef(null)

  useEffect(() => {
    if (!statsRef.current) return

    // Create scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    // Animate numbers
    tl.to(
      { activeClients: 0, adSpend: 0, roi: 0 },
      {
        activeClients: 3,
        adSpend: 4000,
        roi: 3,
        duration: 2,
        ease: "power2.out",
        onUpdate: function () {
          setActiveClients(this.targets()[0].activeClients)
          setAdSpend(this.targets()[0].adSpend)
          setRoi(this.targets()[0].roi)
        },
      },
    )

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
    }
  }, [])

  return (
    <div
      ref={statsRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6"
    >
      <AnimatedSection
        direction="left"
        className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 shadow-xl"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-[#ff4500]">
          {Math.round(activeClients)}
        </h2>
        <p className="text-white/80 text-center text-sm sm:text-base">Clientes activos</p>
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        delay={0.2}
        className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 shadow-xl"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-[#ff4500]">
          {Math.round(adSpend)}€
        </h2>
        <p className="text-white/80 text-center text-sm sm:text-base">Gasto en publicidad mensual</p>
      </AnimatedSection>

      <AnimatedSection
        direction="right"
        delay={0.4}
        className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 shadow-xl sm:col-span-2 md:col-span-1"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-[#ff4500]">{roi.toFixed(1)}x</h2>
        <p className="text-white/80 text-center text-sm sm:text-base">ROI promedio</p>
      </AnimatedSection>
    </div>
  )
}

