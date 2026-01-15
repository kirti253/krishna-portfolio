import { ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    name: "Col. Rajiv Bharwan",
    title: 'Former Army Chief & Founder "Soldier Unplugged"',
    image: "/before-after-video-edit-transformation-man-speakin.jpg",
  },
  {
    name: "Dr Nitika Mahajan",
    title: "Neurologist, Khanna",
    image: "/before-after-video-edit-transformation-woman-docto.jpg",
  },
  {
    name: "Dr. Manika Saluja Parekh",
    title: "ENT Specialist, Mohali",
    image: "/before-after-video-edit-transformation-female-doct.jpg",
  },
  {
    name: "Dr. Pradeep Sharma",
    title: "Neurologist, Mohali",
    image: "/before-after-video-edit-transformation-male-doctor.jpg",
  },
  {
    name: "Dr. Arun Kumar",
    title: "Cardiologist, Delhi",
    image: "/before-after-video-edit-transformation-doctor-card.jpg",
  },
  {
    name: "Dr. Sunita Verma",
    title: "Dermatologist, Chandigarh",
    image: "/before-after-video-edit-transformation-female-derm.jpg",
  },
]

const partnerLogos = [
  { name: "MediSyn", subtitle: "IVF & Gynae Centre" },
  { name: "COSNIK", subtitle: "Plastic & Aesthetic Clinic" },
  { name: "THE HEARTZMATE", subtitle: "HEALTH CLINIC" },
  { name: "VISH", subtitle: "SKIN CLINIC" },
  { name: "MedCare", subtitle: "Hospital" },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">My Featured Portfolio</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            My portfolio reflects more than just technical skill - it shows how storytelling transforms ordinary doctor
            videos into meaningful, patient-focused experiences trusted by leading hospitals.
          </p>

          <button className="inline-flex items-center gap-3 bg-transparent border border-border rounded-full pl-1 pr-6 py-1 hover:bg-muted/50 transition-colors">
            <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-accent-foreground" />
            </span>
            <span className="font-medium text-foreground">Get Quote</span>
          </button>
        </div>

        <p className="text-center text-muted-foreground mb-8">120+ Healthcare founders Partners in patient Trust</p>

        <div className="flex items-center justify-center gap-8 md:gap-16 mb-16 overflow-x-auto pb-4">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">{logo.name.charAt(0)}</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground text-sm leading-tight">{logo.name}</p>
                <p className="text-xs text-muted-foreground leading-tight">{logo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group">
              {/* Portfolio card with before/after image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-4 border-border bg-muted mb-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.name} portfolio`}
                  className="w-full h-full object-cover"
                />
                {/* Before label */}
                <div className="absolute top-4 left-4">
                  <span className="text-white text-sm font-medium drop-shadow-lg">Before edits/RAW</span>
                </div>
                {/* After label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg text-center block">
                    After
                    <br />
                    SunMac
                    <br />
                    Edits
                  </span>
                </div>
                {/* Yellow arrow */}
                <div className="absolute top-1/3 right-1/3">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-yellow-400 drop-shadow-lg">
                    <path
                      d="M5 35 L30 10 M30 10 L30 25 M30 10 L15 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {/* Client info */}
              <h3 className="font-bold text-foreground text-lg">{item.name}</h3>
              <p className="text-muted-foreground text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
