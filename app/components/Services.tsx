import {
  ArrowRight,
  BarChart2,
  Globe,
  Mail,
  MessageSquare,
  Search,
  Share2,
  ShoppingCart,
  Smartphone,
  Mic
} from "lucide-react"
import AnimatedSection from "./AnimatedSection"
import TextReveal from "./TextReveal"
import { Button } from "@/components/ui/button"

const SERVICES = [
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Paid Media Management",
    description: "Gestionamos tus campañas publicitarias en redes sociales con enfoque estratégico y optimización constante para maximizar tu inversión",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Social AI Content",
    description: "Textos, imágenes y videos creados por inteligencia artificial y ajustados para tu audiencia. Consistencia creativa sin esfuerzo.",
    color: "from-pink-500 to-pink-700",
  },
  {
    icon: <BarChart2 className="h-6 w-6" />,
    title: "Mail Mind",
    description: "Organiza, responde y segmenta tus correos con IA. Más conversiones, menos bandejas llenas.",
    color: "from-red-500 to-red-700",
  },
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Smart Voicebot",
    description: "Automatiza llamadas entrantes y salientes con voz natural. Perfectos para soporte, agendamiento o ventas... sin poner a nadie en espera.",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Smart Chatbot",
    description: "Atiende a tus clientes al instante, automatiza conversaciones y resuelve dudas en tiempo real. Personalizados, escalables y siempre disponibles.",
    color: "from-indigo-500 to-indigo-700",
  },
]

export default function Services() {
  return (
    <div id="services" className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <TextReveal className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Nuestros <span className="text-[#ff4500]">Servicios</span>
          </h2>
        </TextReveal>

        <AnimatedSection direction="up" delay={0.2} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-300">
            Ofrecemos soluciones integrales de automatización con inteligencia artificial, adaptadas a
            las necesidades únicas de tu negocio. Cada sistema está diseñado para optimizar procesos,
            escalar operaciones y generar crecimiento sostenible sin fricción.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 items-stretch">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={index} direction="up" delay={0.1 * index} className="h-full flex">
              <div className="flex flex-col h-full w-full bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#ff4500]/50 transition-all duration-300">
              <div
                className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${service.color} text-white`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff4500] transition-colors flex items-center justify-center">{service.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
              <div className="mt-auto">
                {/* Botón opcional */}
              </div>
            </div>

            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
