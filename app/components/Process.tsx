"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedSection from "./AnimatedSection"
import { Check, ChevronRight, LineChart, Lightbulb, Target, TrendingUp, Zap } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Process steps data
const PROCESS_STEPS = [
  {
    id: 1,
    title: "Análisis y Estrategia",
    description:
      "Estudiamos tu negocio, mercado y competencia para diseñar una estrategia personalizada que maximice resultados.",
    icon: <Lightbulb className="h-6 w-6" />,
    color: "from-orange-500 to-red-500",
    features: [
      "Análisis de mercado y competencia",
      "Definición de objetivos SMART",
      "Investigación de palabras clave",
      "Auditoría digital completa",
    ],
  },
  {
    id: 2,
    title: "Implementación",
    description:
      "Ejecutamos la estrategia con precisión, optimizando cada canal para alcanzar a tu audiencia ideal y generar conversiones.",
    icon: <Zap className="h-6 w-6" />,
    color: "from-red-500 to-purple-500",
    features: [
      "Campañas personalizadas",
      "Optimización SEO/SEM",
      "Gestión de redes sociales",
      "Desarrollo de contenido estratégico",
    ],
  },
  {
    id: 3,
    title: "Medición y Optimización",
    description:
      "Analizamos los resultados en tiempo real para optimizar continuamente y maximizar el retorno de inversión.",
    icon: <LineChart className="h-6 w-6" />,
    color: "from-purple-500 to-blue-500",
    features: ["Monitoreo en tiempo real", "Informes detallados", "Optimización continua", "Análisis de ROI"],
  },
  {
    id: 4,
    title: "Crecimiento y Escalabilidad",
    description:
      "Ampliamos las estrategias exitosas para escalar tus resultados y mantener un crecimiento sostenible a largo plazo.",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-blue-500 to-teal-500",
    features: [
      "Escalado de campañas exitosas",
      "Exploración de nuevos canales",
      "Estrategias de retención",
      "Planificación a largo plazo",
    ],
  },
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(1)
  const processRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const progressRef = useRef<HTMLDivElement>(null)

  // Initialize stepsRef array
  useEffect(() => {
    stepsRef.current = stepsRef.current.slice(0, PROCESS_STEPS.length);
    while (stepsRef.current.length < PROCESS_STEPS.length) {
      stepsRef.current.push(null);
    }
  }, []);

  // Set initial progress bar state
  useEffect(() => {
    if (progressRef.current) {
      // Set initial progress based on active step
      const progress = (activeStep - 1) / (PROCESS_STEPS.length - 1)
      gsap.set(progressRef.current, {
        width: `${progress * 100}%`
      })
    }
  }, [activeStep]);

  // Handle step selection
  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId)

    // Update progress bar
    if (progressRef.current) {
      const progress = (stepId - 1) / (PROCESS_STEPS.length - 1)
      gsap.to(progressRef.current, {
        width: `${progress * 100}%`,
        duration: 0.3,
        ease: "power1.out",
      })
    }

    // Scroll to the selected step
    const stepElement = stepsRef.current[stepId - 1]
    if (stepElement) {
      stepElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Set up observers and animations
  useEffect(() => {
    if (!processRef.current) return

    // Create intersection observers for each step
    const observers = PROCESS_STEPS.map((_, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveStep(index + 1)

              // Update progress bar
              if (progressRef.current) {
                const progress = index / (PROCESS_STEPS.length - 1)
                gsap.to(progressRef.current, {
                  width: `${progress * 100}%`,
                  duration: 0.3,
                  ease: "power1.out",
                })
              }
            }
          })
        },
        { threshold: 0.5 },
      )

      const stepRef = stepsRef.current[index]
      if (stepRef) {
        observer.observe(stepRef)
      }

      return observer
    })

    // Clean up observers
    return () => {
      observers.forEach((observer, index) => {
        const stepRef = stepsRef.current[index]
        if (stepRef) {
          observer.unobserve(stepRef)
        }
      })
    }
  }, [])

  // Mobile step refs setup
  const setStepRef = (el: HTMLDivElement | null, index: number) => {
    stepsRef.current[index] = el;
    return undefined; // Return void to satisfy the LegacyRef type
  }

  return (
    <div id="process" ref={processRef} className="w-full relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/0 pointer-events-none"></div>

      {/* Fixed timeline header for desktop */}
      <div className="hidden lg:block sticky top-20 z-30 bg-black/80 backdrop-blur-md py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between" id="timeline-header">
            {/* Background line */}
            <div className="absolute top-5 left-0 w-full h-1 bg-gray-700 rounded-full"></div>

            {/* Filled progress line */}
            <div
              ref={progressRef}
              className="absolute top-5 left-0 h-1 bg-gradient-to-r from-[#ff4500] to-[#ff7e50] rounded-full w-0"
            ></div>

            {/* Step indicators */}
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center cursor-pointer group"
                onClick={() => handleStepClick(step.id)}
              >
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center mb-3
                  transition-all duration-300 border-2
                  ${
                    activeStep >= step.id
                      ? "bg-gradient-to-br " + step.color + " border-white"
                      : "bg-gray-800 border-gray-600 group-hover:border-gray-400"
                  }
                `}
                >
                  {step.icon}
                </div>
                <div
                  className={`
                  text-sm font-medium transition-colors duration-300
                  ${activeStep >= step.id ? "text-white" : "text-gray-400 group-hover:text-gray-300"}
                `}
                >
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-16">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#ff4500] to-[#ff7e50]">
          Nuestro Proceso de Trabajo
        </h2>

        {/* Mobile Process View */}
        <div className="lg:hidden space-y-24">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.id} ref={(el) => setStepRef(el, index)} className="scroll-mt-20">
              <AnimatedSection direction="up" delay={0.1} className="w-full">
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm">
                  <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${step.color}`}></div>

                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`
                        w-10 h-10 rounded-full flex items-center justify-center mr-4
                        bg-gradient-to-br ${step.color} text-white
                      `}
                      >
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold">
                        {step.id}. {step.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 mb-4">{step.description}</p>

                    <ul className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-[#ff4500] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>

        {/* Desktop Process View */}
        <div className="hidden lg:block">
          <div className="space-y-40">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => setStepRef(el, index)}
                className="scroll-mt-32 min-h-[60vh] flex items-center"
              >
                <AnimatedSection direction="up" className="w-full">
                  <div className="grid grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <div
                        className={`
                        w-16 h-16 rounded-xl flex items-center justify-center
                        bg-gradient-to-br ${step.color}
                      `}
                      >
                        {step.icon}
                      </div>

                      <h3 className="text-3xl font-bold">
                        {step.id}. {step.title}
                      </h3>

                      <p className="text-xl text-gray-300">{step.description}</p>

                      <div className="pt-4">
                        <button className="flex items-center text-[#ff4500] font-medium group">
                          Saber más sobre este paso
                          <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-8">
                      <h4 className="text-xl font-semibold mb-6">Qué incluye este paso:</h4>

                      <ul className="space-y-4">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-[#ff4500]/20 flex items-center justify-center mr-4 flex-shrink-0">
                              <Check className="h-5 w-5 text-[#ff4500]" />
                            </div>
                            <div>
                              <p className="font-medium">{feature}</p>
                            </div>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 pt-8 border-t border-white/10">
                        <div className="flex items-center">
                          <Target className="h-6 w-6 text-[#ff4500] mr-3" />
                          <span className="text-sm">
                            Este paso es crucial para{" "}
                            {step.id === 1
                              ? "establecer las bases de tu estrategia"
                              : step.id === 2
                                ? "ejecutar acciones efectivas"
                                : step.id === 3
                                  ? "asegurar resultados óptimos"
                                  : "mantener el crecimiento a largo plazo"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed navigation indicator for mobile */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50 bg-black/50 backdrop-blur-md rounded-full p-2 border border-white/10">
        <div className="flex items-center space-x-1">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.id}
              className={`
                w-2 h-2 rounded-full cursor-pointer transition-all duration-300
                ${activeStep >= step.id ? "bg-[#ff4500]" : "bg-gray-600 hover:bg-gray-400"}
              `}
              onClick={() => handleStepClick(step.id)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

