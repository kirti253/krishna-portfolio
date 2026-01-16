"use client";

import { Users } from "lucide-react";

const niches = [
  { id: 1, label: "Neurosurgeon", highlighted: false },
  { id: 2, label: "Gynaec", highlighted: false },
  { id: 3, label: "Medical tech", highlighted: false },
  { id: 4, label: "IVF Experts", highlighted: false },
  { id: 5, label: "Dermatologists & Skin Clinics", highlighted: true },
  { id: 6, label: "IVF Awareness Videos", highlighted: false },
  { id: 7, label: "Hospital Promo Films", highlighted: true },
  { id: 8, label: "Dental Patient Stories", highlighted: false },
  { id: 9, label: "Skin Clinic Reels", highlighted: false },
  { id: 10, label: "Explainer Videos", highlighted: false },
  { id: 11, label: "Treatment Awareness Campaigns", highlighted: false },
  { id: 12, label: "Webinar", highlighted: false },
  { id: 13, label: "Medical Podcast Production", highlighted: true },
  { id: 14, label: "Social Media Reels & Shorts", highlighted: false },
  { id: 15, label: "Medical Animations (3D / 2D)", highlighted: false },
  { id: 16, label: "icon", isIcon: true, highlighted: false },
  { id: 17, label: "Cardiologist", highlighted: false },
  { id: 18, label: "Pediatric Care", highlighted: false },
  { id: 19, label: "Mental Health Awareness", highlighted: false },
];

export default function Niches() {
  return (
    <section id="niches" className="w-full bg-gray-900 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Niches Label */}
        <div className="flex justify-center mb-6">
          <span className="bg-gray-700 text-gray-300 px-4 py-1.5 rounded-full text-sm font-medium">
            Niches
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 leading-tight">
          Each specialty is distinct. I speak your{" "}
          <span className="font-black">Expertise's</span> language.
        </h2>

        {/* Supporting Paragraph */}
        <p className="text-gray-300 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 md:mb-16">
          No matter your field, our experience spans multiple niches, ensuring
          we understand your specific needs and challenges.
        </p>

        {/* Horizontal Scrolling Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-niches gap-3 md:gap-4">
            {/* First set of niches */}
            {niches.map((niche) => (
              <div
                key={niche.id}
                className={`flex-shrink-0 px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 ${
                  niche.highlighted
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-900"
                } ${
                  niche.isIcon
                    ? "flex items-center justify-center w-12 h-12 p-0"
                    : ""
                }`}
              >
                {niche.isIcon ? (
                  <Users className="w-6 h-6 text-gray-900" />
                ) : (
                  niche.label
                )}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {niches.map((niche) => (
              <div
                key={`duplicate-${niche.id}`}
                className={`flex-shrink-0 px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 ${
                  niche.highlighted
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-900"
                } ${
                  niche.isIcon
                    ? "flex items-center justify-center w-12 h-12 p-0"
                    : ""
                }`}
              >
                {niche.isIcon ? (
                  <Users className="w-6 h-6 text-gray-900" />
                ) : (
                  niche.label
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
