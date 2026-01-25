import Hero from "@/components/hero";
import Services from "../components/services";
import Niches from "@/components/niches";
import Portfolio from "@/components/portfolio";
import HowWeWork from "@/components/how-we-work";
import Reviews from "@/components/reviews";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Services />
      <Niches />
      <Portfolio />
      <HowWeWork />
      {/* <Reviews /> */}
      <Contact />
      <Footer />
    </div>
  );
}
