import Hero from "./components/home/Hero";
import Empowering from "./components/home/Empowering";
import CoreValues from "./components/home/CoreValues";
import Vision from "./components/home/Vision";
import Faq from "./components/home/Faq";
import Footer from "./components/home/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import PreLoader from "./components/common/PreLoader";
import Gsap from "./components/common/Gsap";

export default function Home() {
  return (
    <div className="overflow-hidden py-1">
      <Gsap />
      <Hero />
      <Empowering />
      <CoreValues />
      <Vision />
      <Faq />
      <Footer />
      <ScrollToTop />
      <PreLoader />
    </div>
  );
}
