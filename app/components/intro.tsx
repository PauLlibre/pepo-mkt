import BookACallButton from "./BookACallButton"
import AnimatedSection from "./AnimatedSection"
import TextReveal from "./TextReveal"
import { ArrowRight, BarChart2, Search, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Intro() {
  return (
    <div id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ff4500]/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#ff4500]/10 rounded-full filter blur-3xl -z-10"></div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimatedSection direction="left" className="order-2 lg:order-1">
          <div className="space-y-6 relative z-10">
            {/* Add subtle background for better text readability */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-2xl -z-10"></div>
            <div className="p-6">
              {/* <div className="inline-block px-4 py-2 bg-[#ff4500]/10 backdrop-blur-sm rounded-full text-sm font-medium text-[#ff4500] mb-4">
                Agencia de Marketing Digital Líder en España
              </div> */}

              <TextReveal className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <h1>
                  Activa el <span className="text-[#ff4500]">Modo futuro</span>: Automatiza tu negocio con IA
                </h1>
              </TextReveal>

              <AnimatedSection direction="up" delay={0.3} className="text-xl text-gray-300 mt-6">
                <p>
                  Deja que la IA haga el trabajo pesado: Automatizamos tareas, decisiones y flujos para
                  que tu negocio crezca en piloto automático, con métricas que hablan por sí solas.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.5} className="flex flex-col sm:flex-row gap-4 pt-8">
                <BookACallButton />
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.7} className="pt-12 grid grid-cols-1 gap-6">
                <div className="flex items-center gap-3 pb-[5px]">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff4500]/20">
                    <TrendingUp className="h-5 w-5 text-[#ff4500]" />
                  </div>
                  <span className="text-sm font-medium">Resultados Medibles</span>
                </div>
                
                <div className="flex items-center gap-3 pb-[5px]">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff4500]/20">
                    <Search className="h-5 w-5 text-[#ff4500]" />
                  </div>
                  <span className="text-sm font-medium">Procesos Inteligentes</span>
                </div>
                
                <div className="flex items-center gap-3 pb-[5px]">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff4500]/20">
                    <BarChart2 className="h-5 w-5 text-[#ff4500]" />
                  </div>
                  <span className="text-sm font-medium">Análisis Potenciado por IA</span>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </AnimatedSection>

        
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="text-sm font-medium text-gray-400 mb-2">Descubre Más</div>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2 animate-[slideUp_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  )
}

