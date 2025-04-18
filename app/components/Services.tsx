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
} from "lucide-react"
import AnimatedSection from "./AnimatedSection"
import TextReveal from "./TextReveal"
import { Button } from "@/components/ui/button"

const SERVICES = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "SEO",
    description: "Optimizamos tu sitio web para los motores de búsqueda, aumentando tu visibilidad y tráfico orgánico.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "SEM / PPC",
    description: "Campañas de pago por clic altamente efectivas que generan conversiones y maximizan tu ROI.",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Social Media",
    description: "Estrategias para redes sociales que conectan con tu audiencia y fortalecen tu marca.",
    color: "from-pink-500 to-pink-700",
  },
  // {
  //   icon: <Mail className="h-6 w-6" />,
  //   title: "Email Marketing",
  //   description: "Campañas personalizadas que nutren leads y convierten prospectos en clientes fieles.",
  //   color: "from-green-500 to-green-700",
  // },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Diseño Web",
    description: "Sitios web atractivos y funcionales optimizados para conversión y experiencia de usuario.",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    icon: <BarChart2 className="h-6 w-6" />,
    title: "Analítica Digital",
    description: "Medición y análisis de datos para tomar decisiones basadas en información real.",
    color: "from-red-500 to-red-700",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Content Marketing",
    description: "Contenido estratégico que atrae, educa y convierte a tu audiencia ideal.",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Marketing",
    description: "Estrategias optimizadas para dispositivos móviles que capturan a usuarios en movimiento.",
    color: "from-teal-500 to-teal-700",
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
            Ofrecemos soluciones integrales de marketing digital adaptadas a tus necesidades específicas. Cada servicio
            está diseñado para maximizar resultados y generar crecimiento sostenible.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={index} direction="up" delay={0.1 * index} className="h-full">
              <div className="h-full group bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#ff4500]/50 transition-all duration-300 flex flex-col">
                <div
                  className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${service.color} text-white`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff4500] transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                {/* <Button variant="ghost" size="sm" className="w-fit group/btn">
                  Saber más <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button> */}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* <AnimatedSection direction="up" delay={0.8} className="mt-12 text-center">
          <Button className="bg-[#ff4500] hover:bg-[#ff5a1f] text-white">Ver todos los servicios</Button>
        </AnimatedSection> */}
      </div>
    </div>
  )
}

