const partners = [
  { name: "Col. Rajiv Bharwan", title: 'Former Army Chief & Founder "Soldier Unplugged"' },
  { name: "Dr Nitika Mahajan", title: "Neurologist, Khanna" },
  { name: "Dr. Manika Saluja Parekh", title: "ENT Specialist, Mohali" },
  { name: "Dr. Pradeep Sharma", title: "Neurologist, Mohali" },
]

export function Partners() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          120+ Healthcare founders Partners in patient Trust
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                <img
                  src={`/placeholder.svg?height=96&width=96&query=doctor portrait ${partner.name}`}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-foreground">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">{partner.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
