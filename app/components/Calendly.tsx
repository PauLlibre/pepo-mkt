"use client"

import { useEffect, useRef } from "react"
import { InlineWidget } from "react-calendly"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TextReveal from "./TextReveal"

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CalendlyScheduler() {
  const calendarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!calendarRef.current) return

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: calendarRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    tl.fromTo(
      calendarRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
    )

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
    }
  }, [])

  return (
    <section id="calendly" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <TextReveal className="text-center text-3xl sm:text-4xl font-bold mb-8">
        <h2>Agenda una reunión con nosotros</h2>
      </TextReveal>

      <div ref={calendarRef} className="my-4 sm:my-6 md:my-8 w-full flex justify-center px-4 sm:px-6 md:px-8">
        <div className="h-[500px] sm:h-[600px] md:h-[700px] w-full max-w-4xl bg-white/5 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 overflow-hidden">
          <InlineWidget
            url="https://calendly.com/josepbelles-altuum/30min"
            styles={{
              height: "100%",
              minHeight: "500px",
              width: "100%",
            }}
            pageSettings={{
              backgroundColor: "121212",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "ff4500",
              textColor: "ffffff",
            }}
            prefill={{
              email: "test@example.com",
              name: "John Doe",
            }}
          />
        </div>
      </div>
    </section>
  )
}

