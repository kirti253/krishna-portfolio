import { Badge } from "@/components/ui/badge"

const specialties = ["Neurosurgeon", "Gynaec", "Medical tech", "IVF Experts", "Dermatologists & Skin Clinics"]

const contentTypes = [
  "IVF Awareness Videos",
  "Hospital Promo Films",
  "Dental Patient Stories",
  "Skin Clinic Reels",
  "Explainer Videos",
  "Treatment Awareness Campaigns",
  "Webinar",
  "Medical Podcast Production",
  "Social Media Reels & Shorts",
  "Medical Animations (3D / 2D)",
]

export function Niches() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <span className="text-accent text-sm uppercase tracking-wider">Niches</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 max-w-2xl">
          Each specialty is distinct. I speak your Expertise&apos;s language.
        </h2>
        <p className="text-muted-foreground mb-12 max-w-3xl">
          No matter your field, our experience spans multiple niches, ensuring we understand your specific needs and
          challenges.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty, index) => (
                <Badge key={index} variant="outline" className="bg-background border-border px-4 py-2 text-foreground">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Content Types</h3>
            <div className="flex flex-wrap gap-2">
              {contentTypes.map((content, index) => (
                <Badge key={index} variant="outline" className="bg-background border-border px-4 py-2 text-foreground">
                  {content}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
