import AnimatedSection from "./AnimatedSection"
import TextReveal from "./TextReveal"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const CASE_STUDIES = [
  {
    title: "Aumento de 300% en Conversiones para E-commerce",
    category: "E-commerce",
    image: "/placeholder.svg?height=400&width=600",
    description: "Estrategia integral de marketing digital que transformó las ventas de una tienda online de moda.",
    results: ["300% más conversiones", "150% aumento en tráfico", "ROI de 4.5x"],
  },
  {
    title: "Posicionamiento SEO para Startup B2B",
    category: "B2B",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Estrategia SEO que posicionó a una startup B2B en los primeros resultados para keywords competitivas.",
    results: ["Top 3 en Google", "245% más leads", "Reducción de 40% en CAC"],
  },
  {
    title: "Campaña Viral en Redes Sociales",
    category: "Social Media",
    image: "/placeholder.svg?height=400&width=600",
    description: "Campaña que generó engagement masivo y aumentó la comunidad de seguidores de una marca de alimentos.",
    results: ["1M+ de alcance", "500% más engagement", "200% aumento en ventas"],
  },
]

export default function CaseStudies() {
  return (
    <section id="cases" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/0 to-black/40">
      <div className="max-w-7xl mx-auto">
        <TextReveal className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Casos de <span className="text-[#ff4500]">Éxito</span>
          </h2>
        </TextReveal>

        <AnimatedSection direction="up" delay={0.2} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-300">
            Resultados reales para empresas reales. Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus
            objetivos de marketing.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, index) => (
            <AnimatedSection key={index} direction="up" delay={0.2 * index} className="h-full">
              <div className="group h-full bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-[#ff4500]/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-[#ff4500] rounded-full text-xs font-medium">{study.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff4500] transition-colors">{study.title}</h3>
                  <p className="text-gray-400 mb-6">{study.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Resultados:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff4500] mr-2"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="ghost" size="sm" className="w-fit group/btn">
                    Ver caso completo{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up" delay={0.8} className="mt-12 text-center">
          <Button className="bg-[#ff4500] hover:bg-[#ff5a1f] text-white">Explorar todos los casos</Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

