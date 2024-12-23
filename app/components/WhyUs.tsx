import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CARDS = [
  {
    icon: "🌟",
    title: "Experiencia Probada",
    content: "Nuestro equipo está compuesto por especialistas con años de experiencia en el mundo del marketing digital. Hemos trabajado con empresas de diversos sectores, ayudándolas a superar desafíos específicos y a destacar en mercados altamente competitivos. Conocemos las mejores prácticas y las últimas tendencias para garantizar que tu negocio esté siempre un paso adelante."
  },
  {
    icon: "🎯",
    title: "Estrategias Personalizadas", 
    content: "Creemos que cada negocio tiene su propia identidad y necesidades. Por eso, analizamos a fondo tu empresa, tu público objetivo y tu mercado para crear estrategias diseñadas exclusivamente para ti. Desde campañas publicitarias hasta optimización SEO, cada paso está pensado para obtener resultados alineados con tus metas."
  },
  {
    icon: "📊",
    title: "Resultados Medibles",
    content: "Enfocamos nuestro trabajo en la transparencia y los datos. Medimos el impacto de cada acción mediante herramientas avanzadas, lo que nos permite optimizar continuamente las estrategias y maximizar los resultados. Además, recibirás informes claros y detallados para que puedas visualizar el retorno de tu inversión y el crecimiento constante de tu negocio."
  }
];

export default function WhyUs() {
  return (
    <div className="flex flex-col items-center w-full gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8">
      {CARDS.map((card, index) => (
        <Card key={index} className="bg-[#1a1a1a] border-0 p-4 sm:p-6 md:p-10 w-full sm:w-3/4 md:w-1/2 animate-slideUp">
          <CardHeader>
            <CardTitle className="text-white text-xl sm:text-2xl font-bold pb-2">
              {card.icon} {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white text-sm sm:text-base">
              {card.content}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
