import { Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-6 sm:py-8 mt-12 sm:mt-16 md:mt-20 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-lg sm:text-xl font-bold tracking-widest">ALTUUM</h2>
          <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">Agencia de Marketing Digital</p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a 
            href="mailto:josepballes@altuum.com"
            className="hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>

        <div className="text-xs sm:text-sm text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Altuum. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
