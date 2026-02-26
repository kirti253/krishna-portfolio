"use client";

import { useState, useEffect, useRef } from "react";
import { videoUrl } from "@/lib/video-url";
import { Play } from "lucide-react";

export default function FeaturedEdit() {
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
      id="featured-edit"
      className="w-full bg-gradient-to-b from-gray-50 to-white py-20 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "animate-slideDown" : "opacity-0 -translate-y-6"}`}
        >
          <span
            className={`inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-500 ${isVisible ? "animate-slideUp" : "opacity-0"}`}
            style={{ transitionDelay: "100ms" }}
          >
            Featured Edit
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 transition-all duration-700 ${isVisible ? "animate-scaleUp" : "scale-90 opacity-0"}`}
            style={{ transitionDelay: "150ms" }}
          >
            Professional Editing Showcase
          </h2>
          <p
            className={`text-gray-600 text-lg md:text-xl max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "200ms" }}
          >
            Watch this complete editing example showcasing professional cuts,
            transitions, color grading, and sound design that elevates raw
            footage into compelling content.
          </p>
        </div>

        {/* Video Container */}
        <div
          className={`relative w-full max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "animate-zoomIn" : "scale-75 opacity-0"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl group hover:shadow-2xl transition-all duration-300">
            <video
              src={videoUrl("IMG_3252.MOV")}
              controls
              className="w-full h-full object-cover"
              controlsList="nodownload"
              playsInline
            />
          </div>

          {/* Info Cards Below Video */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div
              className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-teal-300 transition-all duration-300 ${isVisible ? "animate-slideUp" : "opacity-0"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-teal-600 font-bold">✂️</span>
                </div>
                <h3 className="font-bold text-gray-900">Professional Cuts</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Precision editing with seamless transitions and timing that
                keeps viewers engaged.
              </p>
            </div>

            <div
              className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-teal-300 transition-all duration-300 ${isVisible ? "animate-slideUp" : "opacity-0"}`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-teal-600 font-bold">🎨</span>
                </div>
                <h3 className="font-bold text-gray-900">Color Grading</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Cinematic color correction that creates mood and enhances visual
                storytelling.
              </p>
            </div>

            <div
              className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-teal-300 transition-all duration-300 ${isVisible ? "animate-slideUp" : "opacity-0"}`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-teal-600 font-bold">🔊</span>
                </div>
                <h3 className="font-bold text-gray-900">Sound Design</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Professional audio mixing with music and effects synchronized
                perfectly.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
          style={{ transitionDelay: "700ms" }}
        >
          <p className="text-gray-700 text-lg mb-4">
            Ready to see your content transformed like this?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Your Video Edited
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
