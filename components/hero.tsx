import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function Hero() {
  const skills = [
    { text: "LinkedIn Growth Specialist", color: "bg-blue-500" },
    { text: "YouTube Channel growth", color: "bg-red-500" },
    { text: "Google Business Growth Expert", color: "bg-lime-500" },
    { text: "Instagram Handle Pro", color: "bg-black" },
  ]

  const qualifications = [
    { text: "MBA IMT Ghaziabad", color: "bg-orange-500" },
    { text: "Google Digital Marketing Certified", color: "bg-blue-500" },
  ]

  return (
    <section className="pt-32 pb-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Main Three-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column - Name and Skills */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">MANJOT SINGH</h2>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-black mb-8 leading-none tracking-tight">
              DIGITAL
            </h1>
            
            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`${skill.color} text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap`}
                >
                  {skill.text}
                </span>
              ))}
            </div>
          </div>

          {/* Center Column - Portrait */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative w-64 h-80 md:w-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500 to-red-500 rounded-2xl" />
              <img
                src="/professional-indian-man-content-creator-portrait-d.jpg"
                alt="Manjot Singh"
                className="relative w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column - Title and Qualifications */}
          <div className="lg:col-span-1">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-black mb-6 leading-none tracking-tight">
              CONTENT CREATOR
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-md">
              I help doctors turn knowledge into stories patients trust.
            </p>
            
            {/* Qualification Tags */}
            <div className="flex flex-wrap gap-3">
              {qualifications.map((qual, index) => (
                <span
                  key={index}
                  className={`${qual.color} text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap`}
                >
                  {qual.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Proof */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-gray-200">
          {/* Trusted By Section */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 border-2 border-white"
                />
              ))}
            </div>
            <span className="text-gray-700 font-medium">Trusted by 120+ Healthcare Founders</span>
          </div>

          {/* Rating Section */}
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">RATED EXCELLENT:</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
