const services = [
  {
    title: "Visual Production",
    description:
      "Bringing stories to life with professional photoshoots and video shoots tailored for healthcare brands, ensuring every frame reflects trust.",
    image: "/medical-video-production-interview-healthcare-prof.jpg",
  },
  {
    title: "Professional Photoshoots",
    description:
      "High-quality medical photos that build trust, showcase real expertise, and elevate your brand instantly.",
    image: "/surgeons-operating-room-medical-surgery-profession.jpg",
  },
  {
    title: "Modern Websites for Doctors",
    description:
      "We design fast, SEO-friendly, and patient-focused websites that build trust, showcase expertise, and turn visitors into appointments.",
    image: "/medical-website-design-doctor-healthcare-modern.jpg",
  },
  {
    title: "Videos & Social Media Content",
    description:
      "From YouTube explainers to Insta reels and educational posts, we create engaging content that connects with patients.",
    image: "/social-media-content-creation-healthcare-video.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-20 px-4 bg-[#f5f0e8] overflow-hidden">
      {/* Large background watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-bold text-[#e8e3db] whitespace-nowrap select-none">Services</span>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="space-y-20 md:space-y-32">
          {services.map((service, index) => (
            <div key={service.title} className={`flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
              <div className={`w-full max-w-[700px] ${index % 2 === 1 ? "md:mt-20" : ""}`}>
                <div className="overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-[300px] md:h-[450px] object-cover rounded-sm"
                  />
                </div>
                <div className="mt-4 max-w-xl">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.description}</p>
                </div>
                {/* Orange accent line only on left-aligned cards */}
                {index % 2 === 0 && (
                  <div className="mt-6 w-full max-w-xl h-[3px] bg-gradient-to-r from-orange-500 to-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
