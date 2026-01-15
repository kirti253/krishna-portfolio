const steps = [
  {
    number: 1,
    title: "Consult & Strategize",
    description: "Align your goals and audience - the foundation for 10M+ trusted views.",
  },
  {
    number: 2,
    title: "Script & Storyboard",
    description: "Transform complex facts into simple, relatable stories with 3× higher engagement.",
  },
  {
    number: 3,
    title: "Produce & Edit",
    description: "High-precision visuals and sound - built for 500+ doctor brands and hospitals.",
  },
  {
    number: 4,
    title: "Publish & Engage",
    description: "Content optimized for reach and recall across YouTube, Instagram, and Reels.",
  },
  {
    number: 5,
    title: "Measure & Grow",
    description: "Track results, refine performance, and sustain long-term patient trust.",
  },
]

export function HowWeWork() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-accent text-sm uppercase tracking-wider">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Turning Ideas into Patient Impact</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number circle */}
                <div className="absolute left-8 md:left-1/2 w-10 h-10 -translate-x-1/2 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold z-10">
                  {step.number}
                </div>

                {/* Content */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20"}`}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
