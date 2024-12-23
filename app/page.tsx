import Header from "./components/header";
import Intro from "./components/intro";
import Statistics from "./components/statistics";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import CalendlyScheduler from "./components/Calendly";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-20 gap-20">
      <Header />
      <Intro />
      <Statistics />
      <WhyUs />
      <Process />
      <CalendlyScheduler />
      <Footer />
    </div>
  );
}
