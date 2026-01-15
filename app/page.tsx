import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VideoShowcase } from "@/components/video-showcase"
import { Services } from "@/components/services"
import { Niches } from "@/components/niches"
import { Portfolio } from "@/components/portfolio"
import { Partners } from "@/components/partners"
import { HowWeWork } from "@/components/how-we-work"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <VideoShowcase />
      <Services />
      <Niches />
      <Portfolio />
      <Partners />
      <HowWeWork />
      <Reviews />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  )
}
