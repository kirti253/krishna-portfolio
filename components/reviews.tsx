"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    rating: 5,
    text: "Working with this team has been exceptional. Their editing skill and efficient, hardworking personality have transformed our content. Highly recommended!",
    name: "Ankita Sharma",
    location: "Cosnik Clinic, Kharar",
    avatar: "AS",
  },
  {
    id: 2,
    rating: 5,
    text: "Excellent craftsmanship and extremely diligent work. Their unique campaign ideas have significantly boosted our digital marketing efforts.",
    name: "Dr. Rajesh Kumar",
    location: "MediCare Hospital, Delhi",
    avatar: "RK",
  },
  {
    id: 3,
    rating: 5,
    text: "The team's attention to detail and creative approach has helped us reach a wider audience. Our patient engagement has increased dramatically.",
    name: "Priya Patel",
    location: "HealthFirst Clinic, Mumbai",
    avatar: "PP",
  },
  {
    id: 4,
    rating: 5,
    text: "Outstanding service and professional approach. They understand healthcare content and deliver results that exceed expectations every time.",
    name: "Dr. Amit Singh",
    location: "Wellness Center, Bangalore",
    avatar: "AS",
  },
  {
    id: 5,
    rating: 5,
    text: "Their video editing expertise has elevated our brand presence. The quality and turnaround time are impressive. Truly a game-changer!",
    name: "Neha Verma",
    location: "CarePlus Clinic, Pune",
    avatar: "NV",
  },
  {
    id: 6,
    rating: 5,
    text: "Professional, reliable, and creative. They've helped us create content that resonates with our patients and builds trust in our services.",
    name: "Dr. Vikram Mehta",
    location: "LifeCare Hospital, Chennai",
    avatar: "VM",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="w-full bg-gray-900 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Reviews Label */}
        <div className="flex justify-center mb-4">
          <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm font-medium">
            Reviews
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white text-center mb-16">
          Real Stories, Real Results
        </h2>

        {/* Reviews Carousel */}
        <div className="relative overflow-hidden reviews-carousel-container">
          <div className="flex animate-scroll-niches gap-6 md:gap-8">
            {/* First set of reviews */}
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-2xl p-6 md:p-8 shadow-lg"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
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
                className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-2xl p-6 md:p-8 shadow-lg"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
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
