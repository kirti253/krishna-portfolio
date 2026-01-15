"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

const reviews = [
  {
    text: "Your skill in editing is evident in every project, bringing a professional and polished feel to all your videos. Nice experience with you, thank you",
    name: "Dr Ankita Sharma",
    title: "Cosnik Clinic, Kharar",
  },
  {
    text: "He is the most efficient and hardworking personality I have ever met in this digital market",
    name: "Dr Pradeep Sharma",
    title: "Neurologist, Mohali",
  },
  {
    text: "Excellent craftsmanship and extremely diligent. Highly recommended.",
    name: "Dr Manika Saluja",
    title: "Infertility specialist, CLAGS",
  },
  {
    text: "Manjot gives a personal touch to everything he does. Very passionate about his work and equally professional. Highly recommended",
    name: "Dr Sandeep Parekh",
    title: "Cardiologist, Mohali",
  },
  {
    text: "Very detailed and meticulous work. Dedicated approach. Kudos to the team behind.",
    name: "Dr Ankit Amar Gupta",
    title: "Neuro Surgeon, Nawanshahr",
  },
  {
    text: "SunMac Edits is a game-changer for doctors. They create engaging, high-quality content with a personalised touch.",
    name: "Sneha Singh",
    title: "Clags Clinic, Mohali",
  },
]

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="reviews" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-accent text-sm uppercase tracking-wider">Reviews</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Real Stories, Real Results</h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-background border border-border rounded-2xl p-8 max-w-2xl mx-auto text-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 text-foreground">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                      <img
                        src={`/placeholder.svg?height=48&width=48&query=doctor portrait ${review.name}`}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-accent" : "bg-muted"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
