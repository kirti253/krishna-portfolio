import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function Hero() {
  const credentials = [
    { title: "LinkedIn", subtitle: "Growth Specialist" },
    { title: "YouTube", subtitle: "Channel growth" },
    { title: "Google Business", subtitle: "Growth Expert" },
    { title: "Instagram", subtitle: "Handle Pro" },
  ]

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            {/* Credential Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {credentials.map((cred, index) => (
                <Badge key={index} variant="outline" className="bg-card border-border px-3 py-1.5">
                  <span className="text-accent font-medium">{cred.title}</span>
                  <span className="text-muted-foreground ml-1">{cred.subtitle}</span>
                </Badge>
              ))}
            </div>

            <h2 className="text-lg text-muted-foreground mb-2">Manjot Singh</h2>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-accent"># </span>
              <span className="text-foreground">Content creator</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              I help doctors turn knowledge into stories patients trust.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <Badge className="bg-card border border-border text-foreground px-4 py-2">
                <span className="font-semibold">MBA</span>
                <span className="text-muted-foreground ml-2">IMT Ghaziabad</span>
              </Badge>
              <Badge className="bg-card border border-border text-foreground px-4 py-2">
                Google Digital Marketing Certified
              </Badge>
              <Badge className="bg-card border border-border text-foreground px-4 py-2">Facebook Ads Certified</Badge>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-muted-foreground">Trusted by 120+ Healthcare Founders</span>
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground">rated excellent:</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl" />
              <img
                src="/professional-indian-man-content-creator-portrait-d.jpg"
                alt="Manjot Singh"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
