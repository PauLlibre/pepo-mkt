"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedSection from "./AnimatedSection"
import TextReveal from "./TextReveal"
import { Star } from "lucide-react"

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const TESTIMONIALS = [
  {
    name: "Carlos Rodríguez",
    position: "CEO, TechSolutions",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Altuum transformó nuestra presencia digital por completo. En solo 3 meses, nuestro tráfico orgánico aumentó un 200% y las conversiones se duplicaron. Su enfoque estratégico y atención personalizada marcan la diferencia.",
    stars: 5,
  },
  {
    name: "María González",
    position: "Directora de Marketing, Retail Innovación",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Después de trabajar con varias agencias, finalmente encontramos a Altuum. Su capacidad para entender nuestro mercado y crear campañas que realmente conectan con nuestra audiencia es excepcional. Los resultados hablan por sí solos.",
    stars: 5,
  },
  {
    name: "Javier Martínez",
    position: "Fundador, StartupHub",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Como startup, necesitábamos una estrategia de marketing efectiva pero con presupuesto limitado. Altuum no solo entendió nuestras necesidades, sino que superó todas nuestras expectativas. Ahora somos líderes en nuestro nicho.",
    stars: 5,
  },
  {
    name: "Laura Sánchez",
    position: "Directora General, Moda Express",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "La capacidad analítica de Altuum es impresionante. Cada decisión está respaldada por datos, lo que nos ha permitido optimizar nuestro presupuesto y maximizar resultados. Nuestra inversión en marketing ahora genera un ROI 3 veces mayor.",
    stars: 4,
  },
]

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sliderRef.current) return

    const testimonials = sliderRef.current.querySelectorAll(".testimonial")

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    })

    // Animate testimonials horizontally
    tl.to(testimonials, {
      xPercent: -100 * (testimonials.length - 1),
      ease: "none",
      duration: testimonials.length,
    })

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
    }
  }, [])

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <TextReveal className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Lo Que Dicen <span className="text-[#ff4500]">Nuestros Clientes</span>
          </h2>
        </TextReveal>

        <AnimatedSection direction="up" delay={0.2} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-300">
            Nuestro éxito se mide por los resultados que generamos para nuestros clientes. Estas son algunas de las
            experiencias de quienes han confiado en nosotros.
          </p>
        </AnimatedSection>
      </div>

      <div className="relative w-full mt-12">
        {/* Gradient fades on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Testimonial slider */}
        <div ref={sliderRef} className="flex space-x-6 w-[400%] sm:w-[200%] lg:w-[150%]">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="testimonial w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#ff4500]">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.stars ? "text-[#ff4500] fill-[#ff4500]" : "text-gray-500"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-300 italic">"{testimonial.quote}"</blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 flex justify-center items-center space-x-2">
          <div className="text-sm text-gray-400">Desliza para ver más</div>
          <div className="flex space-x-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#ff4500]" : "bg-gray-600"}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

