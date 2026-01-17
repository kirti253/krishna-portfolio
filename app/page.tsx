import Hero from "@/components/hero";
import Services from "@/components/services";
import Niches from "@/components/niches";
import Portfolio from "@/components/portfolio";
import HowWeWork from "@/components/how-we-work";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Niches />
      <Portfolio />
      <HowWeWork />
      <Reviews />
    </>
  );
}
