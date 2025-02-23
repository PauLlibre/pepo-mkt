import Image from "next/image";
import Logo from "@/common/images/logo_white.png";
import BookACallButton from "./BookACallButton";

export default function Intro() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 sm:px-6 md:px-8 gap-8">
      <div className="w-full md:w-3/4">
        <h1 className="text-2xl lg:pl-20 sm:text-justify sm:text-3xl md:text-4xl font-bold text-center md:text-left animate-slideFromLeft pt-8 sm:pt-12 md:pt-20 leading-tight">
          Soluciones estratégicas de marketing digital para destacar en el mercado español. Optimización SEO, publicidad efectiva y más para alcanzar tus objetivos online.
        </h1>
        <p className="lg:pl-20 text-center md:text-left animate-slideFromLeft mt-4 text-gray-300 font-bold pt-10">
          Impulsamos tu negocio al siguiente nivel. Con un ROI inmenso
        </p>
        <div className="lg:pl-20 pt-10">
          <BookACallButton />
        </div>
      </div>
      <div className="flex items-center justify-center pt-4 sm:pt-8 md:pt-20 w-full">
        <Image 
          src={Logo} 
          alt="Altuum logo" 
          width={800}
          height={800}
          className="animate-slideFromRight w-[800px] sm:w-[300px] md:w-[800px]"
          priority
        />
      </div>
    </div>
  );
}
