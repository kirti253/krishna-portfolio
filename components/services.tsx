"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Hand, Trophy, BarChart3, Globe, TrendingUp } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Visual Production",
    description:
      "Professional photoshoots and video shoots that bring stories to life. We create compelling visual content tailored for healthcare brands, ensuring every frame reflects trust and professionalism.",
    icon: Hand,
    imagePlaceholder: "Visual Production Image",
    imageOnLeft: true,
  },
  {
    id: 2,
    title: "Professional Photoshoots",
    description:
      "High-quality photos to elevate your brand instantly. Our expert photographers capture the essence of your practice, creating images that build trust and showcase real expertise.",
    icon: Trophy,
    imagePlaceholder: "Professional Photoshoots Image",
    imageOnLeft: false,
  },
  {
    id: 3,
    title: "Modern Websites for Doctors",
    description:
      "We design fast, SEO-friendly, and patient-focused websites that build trust, showcase expertise, and turn visitors into appointments. Your digital presence matters.",
    icon: BarChart3,
    imagePlaceholder: "Modern Websites Image",
    imageOnLeft: true,
  },
  {
    id: 4,
    title: "Videos & Social Media Content",
    description:
      "Engaging content for YouTube, Instagram, and Reels. From educational explainers to patient testimonials, we create content that connects with your audience and drives engagement.",
    icon: Globe,
    imagePlaceholder: "Social Media Content Image",
    imageOnLeft: false,
  },
  {
    id: 5,
    title: "Digital Marketing Strategy",
    description:
      "Comprehensive digital marketing solutions that grow your practice. We combine data-driven insights with creative storytelling to reach more patients and build lasting relationships.",
    icon: TrendingUp,
    imagePlaceholder: "Digital Marketing Image",
    imageOnLeft: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-white relative">
      {/* Background Text - Sticky */}
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-gray-100 uppercase tracking-tighter select-none">
          OUR SERVICES
        </h2>
      </div>

      {/* Content Container */}
      <div className="relative z-10 -mt-[100vh]">
        <div className="container mx-auto px-6 max-w-6xl py-20 md:py-32">
          <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isLeftAligned = index % 2 === 0; // Alternating: left, right, left, right
            
            return (
              <div
                key={service.id}
                className={`flex ${isLeftAligned ? "justify-start" : "justify-end"}`}
              >
                <div className="w-full max-w-md bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100">
                  {/* Image Container */}
                  <div className="relative w-full h-[250px] md:h-[300px] border-[4px] border-[#2F5C5B] rounded-[30px_30px_15px_15px] overflow-hidden shadow-md mb-4 hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-gray-500 text-sm font-medium text-center px-2">
                        {service.imagePlaceholder}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-[#F8E7BF] rounded-lg flex items-center justify-center z-10 shadow-md hover:scale-110 hover:rotate-6 transition-all duration-300">
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-[#8B6914]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 pr-12 md:pr-14">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
