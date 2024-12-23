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
      <div className="hidden lg:block w-full">
        <Process />
      </div>
      <CalendlyScheduler />
      <Footer />
    </div>
  );
}
