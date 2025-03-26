import Header from "./components/header"
import Intro from "./components/intro"
import Statistics from "./components/statistics"
import Process from "./components/Process"
import WhyUs from "./components/WhyUs"
import CalendlyScheduler from "./components/Calendly"
import Footer from "./components/Footer"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
// import CaseStudies from "./components/CaseStudies"
import ThreeBackground from "./components/ThreeBackground"
import BackgroundOverlay from "./components/BackgroundOverlay"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <ThreeBackground />
      <BackgroundOverlay />
      <Header />
      <Intro />
      <Statistics />
      <Services />
      <Process />
      <WhyUs />
      {/* <CaseStudies /> */}
      <Testimonials />
      <CalendlyScheduler />
      <Footer />
    </main>
  )
}

