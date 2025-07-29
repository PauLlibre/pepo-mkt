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
    title: "Análisis con IA y datos reales",
    description:
      "Combinamos datos y tecnología para entender bien tu negocio y crear una estrategia de automatización a medida que realmente funcione.",
    icon: <Lightbulb className="h-6 w-6" />,
    color: "from-orange-500 to-red-500",
    features: [
      "Recolección de datos internos",
      "Definición de objetivos SMART",
      "Análisis de riesgos y viabilidad "
    ],
  },
  {
    id: 2,
    title: "Integración Inteligente",
    description:
      "Utilizando tecnología punta en el sector, integramos la IA directamente en tu flujo de trabajo, liberando tiempo valioso y optimizando cada proceso para que trabajes más rápido y mejor.",
    icon: <Zap className="h-6 w-6" />,
    color: "from-red-500 to-purple-500",
    features: [
      "Primera toma de contacto con la IA",
      "Puesta en marcha del flujo automatizado",
      "Mantenimiento y optimización continua"
    ],
  },
  {
    id: 3,
    title: "Medición y Optimización",
    description:
      "Monitorizamos resultados en tiempo real con IA para ajustar y mejorar continuamente, asegurando el máximo rendimiento y eficiencia de tus automatizaciones.",
    icon: <LineChart className="h-6 w-6" />,
    color: "from-purple-500 to-blue-500",
    features: [
      "Análisis de flujos automatizados para detectar y corregir fallos", 
      "Optimización continua de triggers y workflows para maximizar eficiencia", 
      "Actualización constante de modelos IA para mejorar resultados"],
  },
  {
    id: 4,
    title: "Crecimiento y Escalabilidad",
    description:
      "Puntuación final del rendimiento de los asistentes y planificación para escalar y sumar más, si hace falta. La IA no tiene límites, y tus automatizaciones tampoco.",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-blue-500 to-teal-500",
    features: [
      "Exploración gratuita de nuevos asistentes",
      "Recomendación del siguiente asistente más eficiente",
      "Planificación a largo plazo para mantenerte a la vanguardia"
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
  // Puedes colocar esto justo antes del return o arriba del componente:
  const STEP_POSITIONS: { [key: number]: string } = {
    1: "-left-[80px]",         // Paso 1 sin desplazamiento
    2: "-left-[35px]",         // Paso 2: mueve 1rem a la derecha
    3: "left-[15px]",        // Paso 3: mueve 0.5rem a la izquierda
    4: "left-[80px]",    // Paso 4: mueve 20px a la derecha
  }


  return (
    <div id="process" ref={processRef} className="w-full relative scroll-mt-32 min-h-[80vh] min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/0 pointer-events-none"></div>

      {/* Fixed timeline header for desktop */}
      <div className="hidden lg:block sticky top-16 z-30 bg-black/80 backdrop-blur-md py-4 border-b border-white/10">
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
                className={`
                  relative z-10 flex flex-col items-center cursor-pointer group
                  ${STEP_POSITIONS[step.id] || ""}
                `}
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

