export function VideoShowcase() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          500+ Doctor Stories. 10M+ Views. Countless Patients Reached
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
          Every frame here began with a doctor&apos;s purpose - to help, to heal, to educate.
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="aspect-[9/16] bg-muted rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src={`/doctor-medical-video-thumbnail-.jpg?height=400&width=225&query=doctor medical video thumbnail ${i + 1}`}
                alt={`Video thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
