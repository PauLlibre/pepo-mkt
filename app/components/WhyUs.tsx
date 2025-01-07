import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CARDS = [
  {
    icon: "🎯",
    title: "Estrategias Personalizadas",
    content: (
      <>
        <p>Entendemos que cada negocio es único, con sus propios objetivos y desafíos.</p>
        <p className="mt-4">
          Por eso, nos tomamos el tiempo de conocer tu empresa, entender a tu audiencia y analizar tu mercado en profundidad. Nuestro enfoque es diseñar <span className="font-bold text-[#ff4500]">estrategias personalizadas</span> que realmente conecten con tus metas.
        </p>
        <p className="mt-4">
          Además, creemos que la <span className="font-bold text-[#ff4500]">confianza</span> se construye con <span className="font-bold text-[#ff4500]">transparencia</span>. Por eso, te mantenemos siempre al tanto de cada paso que damos, con una comunicación clara y abierta. Porque para nosotros, el éxito solo tiene sentido si lo construimos contigo.
        </p>
      </>
    ),
  },
  {
    icon: "📊",
    title: "Enfoque Operativo", 
    content: (
      <>
        <p>Olvídate de las consultorías que facturan por reuniones sin fin y conceptos abstractos que no llevan a ningún lado.</p>
        <p className="mt-4">
          En nuestro caso, solo trabajamos en función de <span className="font-bold text-[#ff4500]">resultados concretos</span> y <span className="font-bold text-[#ff4500]">acción</span>.
        </p>
        <p className="mt-4">
          No te vendemos teorías ni te cobramos por consejos. Nos enfocamos en entregarte soluciones que <span className="font-bold text-[#ff4500]">convierten</span> y generan <span className="font-bold text-[#ff4500]">valor real</span>.
        </p>
        <p className="mt-4">
          Creemos en tres pilares fundamentales: lograr <span className="font-bold text-[#ff4500]">conversiones</span>, impulsar el <span className="font-bold text-[#ff4500]">crecimiento</span> y asegurar <span className="font-bold text-[#ff4500]">resultados sólidos</span> para tu negocio.
        </p>
      </>
    ),
  },
];

export default function WhyUs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8">
      {CARDS.map((card, index) => (
        <Card
          key={index}
          className="bg-[#1a1a1a] border-0 p-4 sm:p-6 md:p-10 w-full animate-slideUp"
        >
          <CardHeader>
            <CardTitle className="text-white text-xl sm:text-2xl font-bold pb-2">
              {card.icon} {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-white text-sm sm:text-base">
              {card.content}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
