"use client";

import { Users } from "lucide-react";

const niches = [
  // Industry Niches
  { id: 1, label: "YouTubers & Creators", highlighted: true },
  { id: 2, label: "Coaches & Educators", highlighted: false },
  { id: 3, label: "Startups & Brands", highlighted: true },
  { id: 4, label: "Influencers & Personal Brands", highlighted: true },
  { id: 5, label: "Real Estate Videos", highlighted: false },
  { id: 6, label: "Fitness & Lifestyle Creators", highlighted: false },
  { id: 7, label: "Podcast Creators", highlighted: false },
  { id: 8, label: "E-commerce Brands", highlighted: false },
  // Video Types
  { id: 9, label: "YouTube Long-form Edits", highlighted: true },
  { id: 10, label: "Short-form Reels & Shorts", highlighted: true },
  { id: 11, label: "Podcast Video Editing", highlighted: false },
  { id: 12, label: "Talking Head Videos", highlighted: false },
  { id: 13, label: "Vlogs & Travel Films", highlighted: false },
  { id: 14, label: "Gaming Highlights", highlighted: false },
  { id: 15, label: "Corporate Videos", highlighted: false },
  { id: 16, label: "Webinar Recordings", highlighted: false },
  // Growth & Marketing Content
  { id: 17, label: "Social Media Ads", highlighted: true },
  { id: 18, label: "Product Promo Videos", highlighted: false },
  { id: 19, label: "Explainer Videos", highlighted: false },
  { id: 20, label: "Brand Story Videos", highlighted: false },
  { id: 21, label: "Launch Campaign Videos", highlighted: false },
  { id: 22, label: "Course Content Editing", highlighted: false },
  { id: 23, label: "Client Testimonial Videos", highlighted: false },
  { id: 24, label: "Funnel Videos", highlighted: false },
  // Creative / Advanced
  { id: 25, label: "Motion Graphics Videos", highlighted: true },
  { id: 26, label: "Cinematic Edits", highlighted: true },
  { id: 27, label: "Color Grading Projects", highlighted: false },
  { id: 28, label: "Sound Design Edits", highlighted: false },
  { id: 29, label: "AI-enhanced Edits", highlighted: false },
  { id: 30, label: "Documentary Style Edits", highlighted: false },
  { id: 31, label: "Event Highlights", highlighted: false },
  { id: 32, label: "Wedding Films", highlighted: false },
  { id: 33, label: "icon", isIcon: true, highlighted: false },
];

export default function Niches() {
  return (
    <section
      id="niches"
      className="w-full bg-gray-900 py-20 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Niches Label */}
        <div className="flex justify-center mb-6">
          <span className="bg-gray-700 text-gray-300 px-4 py-1.5 rounded-full text-sm font-medium">
            Niches
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 leading-tight">
          Each niche has a story. I craft visuals that speak your{" "}
          <span className="font-black">brand's language.</span>
        </h2>

        {/* Supporting Paragraph */}
        <p className="text-gray-300 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 md:mb-16">
          No matter your industry, my editing expertise spans multiple content
          styles — ensuring your videos connect, engage, and convert.
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
                    ? "bg-teal-500 text-white"
                    : "bg-white text-gray-900"
                } ${
                  niche.isIcon
                    ? "flex items-center justify-center w-12 h-12 p-0"
                    : ""
                }`}
              >
                {niche.isIcon ? (
                  <Users className="w-6 h-6 text-gray-300" />
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
                    ? "bg-teal-500 text-white"
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
