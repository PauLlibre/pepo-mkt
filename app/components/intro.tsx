import Image from "next/image";
import phone from "@/common/images/phone.png";

export default function Intro() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 sm:px-6 md:px-8 gap-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left animate-slideFromLeft pt-8 sm:pt-12 md:pt-20 w-full md:w-3/4 leading-tight">
        Soluciones estratégicas de marketing digital para destacar en el mercado español. Optimización SEO, publicidad efectiva y más para alcanzar tus objetivos online.
      </h1>
      <div className="flex items-center justify-center pt-4 sm:pt-8 md:pt-20 w-full">
        <Image 
          src={phone} 
          alt="phone" 
          width={300}
          height={300}
          className="animate-slideFromRight w-[250px] sm:w-[300px] md:w-[400px]"
          priority
        />
      </div>
    </div>
  );
}
