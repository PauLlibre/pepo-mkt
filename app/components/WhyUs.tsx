import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedSection from "./AnimatedSection"
import TextReveal from "./TextReveal"

const CARDS = [
  {
    icon: "🎯",
    title: "Soluciones IA a tu medida",
    content: (
      <>
        <p>Entendemos que cada negocio es único, con sus propios objetivos y desafíos.</p>
        <p className="mt-4">
         Analizamos tu negocio, detectamos cuellos de botella y diseñamos automatizaciones que encajan con tus{" "}
          <span className="font-bold text-[#ff4500]">procesos reales</span> . Porque una solución genérica no sirve cuando tu{" "} 
          <span className="font-bold text-[#ff4500]">operación es única</span>. 
        </p>
        <p className="mt-4">
         Nos enfocamos en crear asistentes que se integren de forma natural en tu flujo de trabajo y mejoren la eficiencia desde el primer día.
          Cada decisión está basada en datos, no en suposiciones, y todo está pensado para <span className="font-bold text-[#ff4500]">escalar contigo</span>. 
        </p>
      </>
    ),
  },
  {
    icon: "📊",
    title: "Resultados, no teorías",
    content: (
      <>
        <p>
          Nos centramos en implementar lo que realmente{" "} <span className="font-bold text-[#ff4500]">genera valor</span>: 
          flujos automáticos, asistentes IA y sistemas que hacen el trabajo por ti. Medible, útil y sin humo.
        </p>
        <p className="mt-4">
          No te vendemos ideas,  <span className="font-bold text-[#ff4500]">te entregamos soluciones</span>
          {" "} que funcionan y se ven en los números.{" "}
        </p>
        <p className="mt-4">
          Creemos que el impacto real se construye con tecnología que hace y no solo dice.
        </p>
      </>
    ),
  },
]

export default function WhyUs() {
  return (
    <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6 sm:gap-8 md:gap-10 items-stretch">
        <TextReveal className="col-span-1 sm:col-span-2 text-center text-3xl sm:text-4xl font-bold mb-8">
          <h2>¿Por qué elegirnos?</h2>
        </TextReveal>

        {CARDS.map((card, index) => (
          <AnimatedSection
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={0.2 * index}
            className="h-full"
          >
            <Card className="h-full min-h-[370px] flex flex-col justify-between bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-white/5 p-4 sm:p-6 md:p-10 w-full shadow-xl hover:shadow-[#ff4500]/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-xl sm:text-2xl font-bold pb-2 flex items-center">
                  <span className="text-2xl mr-2">{card.icon}</span> {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="text-white/80 text-sm sm:text-base">{card.content}</div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>


    </section>
  )
}

