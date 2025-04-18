import { Mail, Instagram, Linkedin, ArrowRight, Facebook } from "lucide-react"
import AnimatedSection from "./AnimatedSection"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="w-full py-16 border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div id="blog" className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <AnimatedSection direction="left" className="md:col-span-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-widest">
                <span className="text-[#ff4500]">ALT</span>UUM
              </h2>
              <p className="text-gray-400 max-w-md">
                Agencia de Marketing Digital especializada en estrategias personalizadas que generan resultados medibles
                y un ROI excepcional.
              </p>
              <div className="flex space-x-4">
                {/* <a
                  href="https://www.instagram.com/altuum/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff4500]/20 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a> */}
                <a
                  href="https://www.linkedin.com/company/altuum/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff4500]/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:josepballes@altuum.com"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff4500]/20 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61571638162140"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff4500]/20 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="space-y-6">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {["Inicio", "Servicios", "Proceso", "Sobre Nosotros"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ff4500] rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4} className="space-y-6">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Barcelona, España</li>
              <li>+34 633 661 562</li>
              <li>josepballes@altuum.com</li>
            </ul>

            {/* <div className="pt-4">
              <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Tu email"
                  className="bg-white/5 border-white/10 focus:border-[#ff4500]"
                />
                <Button size="icon" className="bg-[#ff4500] hover:bg-[#ff5a1f]">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div> */}
          </AnimatedSection>
        </div>

        <AnimatedSection
          direction="up"
          delay={0.6}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Altuum. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-[#ff4500] transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#ff4500] transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#ff4500] transition-colors">
              Cookies
            </a>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}

