import Hero from "./components/home/Hero";
import Empowering from "./components/home/Empowering";
import CoreValues from "./components/home/CoreValues";
import Vision from "./components/home/Vision";
import Faq from "./components/home/Faq";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Empowering />
      <CoreValues />
      <Vision />
      <Faq />
      <Footer />
    </div>
  );
}
