"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
export default function About() {
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
      { threshold: 0.3 },
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
      id="about"
      className="w-full bg-gray-50 py-20 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column: Image */}
          <div
            className={`flex justify-center transition-all duration-700 ${isVisible ? "animate-zoomIn" : "opacity-0 scale-50"}`}
          >
            <div className="relative w-full max-w-md h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/80 to-teal-600/80 z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold z-20">
                <Image
                  src="/heroimage.jpeg"
                  alt="About Me"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-10"}`}
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-black mb-6">
                About Me
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I'm a video editor passionate about transforming ideas into
                engaging visual stories.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From social media reels to YouTube videos and brand promos, I
                help creators stand out with clean cuts, cinematic transitions,
                and storytelling that keeps audiences watching.
              </p>
            </div>

            {/* Skills/Expertise */}
            <div className="pt-4 space-y-4">
              <div
                className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? "animate-slideUp" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold flex-shrink-0 mt-1 animate-pulse-glow">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Expert Storyteller
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Create narratives that captivate and convert
                  </p>
                </div>
              </div>
              <div
                className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? "animate-slideUp" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold flex-shrink-0 mt-1 animate-pulse-glow">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Multi-Platform Specialist
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Optimize content for YouTube, Instagram, TikTok & more
                  </p>
                </div>
              </div>
              <div
                className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? "animate-slideUp" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold flex-shrink-0 mt-1 animate-pulse-glow">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Fast Turnaround
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Quick, professional delivery without compromising quality
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div
              className={`pt-4 transition-all duration-500 ${isVisible ? "animate-slideUp" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "500ms" }}
            >
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce-subtle">
                Let's Create Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
