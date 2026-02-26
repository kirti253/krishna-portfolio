"use client";

import { Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    id: 1,
    rating: 5,
    text: "Amazing storytelling and fast delivery.",
    name: "Creative Creator",
    location: "Content Creator",
    avatar: "CC",
  },
  {
    id: 2,
    rating: 5,
    text: "My engagement doubled after working with them.",
    name: "Growth Hacker",
    location: "Digital Marketer",
    avatar: "GH",
  },
  {
    id: 3,
    rating: 5,
    text: "Professional, creative, and reliable.",
    name: "Brand Owner",
    location: "Business Owner",
    avatar: "BO",
  },
  {
    id: 4,
    rating: 5,
    text: "Exceptional video quality and turnaround time.",
    name: "YouTube Creator",
    location: "Influencer",
    avatar: "YC",
  },
  {
    id: 5,
    rating: 5,
    text: "Transformed my content into viral hits!",
    name: "Social Media Pro",
    location: "Digital Agency",
    avatar: "SM",
  },
  {
    id: 6,
    rating: 5,
    text: "Best editor I've worked with. Highly recommended!",
    name: "Podcaster",
    location: "Podcast Network",
    avatar: "PD",
  },
];

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="w-full bg-gray-900 py-20 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Reviews Label */}
        <div
          className={`flex justify-center mb-4 transition-all duration-500 ${isVisible ? "animate-slideDown" : "opacity-0 -translate-y-4"}`}
        >
          <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors">
            Reviews
          </span>
        </div>

        {/* Main Heading */}
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-black text-white text-center mb-16 transition-all duration-700 ${isVisible ? "animate-scaleUp" : "opacity-0 scale-90"}`}
          style={{ transitionDelay: "100ms" }}
        >
          Real Stories, Real Results
        </h2>

        {/* Reviews Carousel */}
        <div
          className={`relative overflow-hidden reviews-carousel-container transition-all duration-700 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex animate-scroll-niches gap-6 md:gap-8">
            {/* First set of reviews */}
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ${isVisible ? "animate-scaleUp" : "scale-75 opacity-0"}`}
                style={{ transitionDelay: `${300 + index * 50}ms` }}
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 animate-pulse-glow">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-base">
                      {review.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {review.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {reviews.map((review) => (
              <div
                key={`duplicate-${review.id}`}
                className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-base">
                      {review.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {review.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
