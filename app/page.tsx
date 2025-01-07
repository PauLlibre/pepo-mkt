import Header from "./components/header";
import Intro from "./components/intro";
import Statistics from "./components/statistics";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import CalendlyScheduler from "./components/Calendly";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-20">
      <Header />
      <Intro />
      <Statistics />
      <WhyUs />
      <div className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-10">
        Que puedes esperar de nosotros
      </div>
      <div className="hidden lg:block w-full">
        <Process />
      </div>
      <CalendlyScheduler />
      <Footer />
    </div>
  );
}
