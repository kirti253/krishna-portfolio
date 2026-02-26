"use client";

import { ArrowUp, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Footer() {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={sectionRef} className="w-full bg-black py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Top Section - Contact, Copyright, Back To Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left - Contact */}
          <div
            className={`transition-all duration-700 ${isVisible ? "animate-slideUp" : "opacity-0 translate-y-6"}`}
          >
            <h4 className="text-white text-lg md:text-xl font-semibold mb-2">
              Say Hi 👋
            </h4>
            <a
              href="mailto:kirti25032007@gmail.com"
              className="text-gray-300 hover:text-teal-400 transition-colors text-sm md:text-base hover:underline"
            >
              krishnabhatt4545@gmail.com
            </a>
          </div>

          {/* Center - Copyright */}
          <div
            className={`flex items-start justify-center md:justify-center transition-all duration-700 ${isVisible ? "animate-scaleUp" : "scale-75 opacity-0"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <p className="text-gray-300 text-sm md:text-base text-center">
              All rights reserved krishna® 2026
            </p>
          </div>

          {/* Right - Back To Top */}
          <div
            className={`flex flex-col items-start md:items-end transition-all duration-700 ${isVisible ? "animate-slideUp" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all duration-300 mb-2 hover:scale-110 hover:shadow-lg"
            >
              <ArrowUp className="w-6 h-6 text-black" />
            </button>
            <span className="text-gray-300 text-sm">Back To Top</span>
          </div>
        </div>

        {/* Horizontal Lines */}
        <div
          className={`border-t border-gray-700 mb-8 transition-all duration-700 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}
          style={{ transitionDelay: "300ms" }}
        ></div>

        {/* Bottom - Brand Name */}
        <div
          className={`text-center transition-all duration-700 ${isVisible ? "animate-scaleUp" : "scale-75 opacity-0"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white hover:text-teal-400 transition-colors duration-300">
            Krishna Edits
          </h2>
        </div>
      </div>
    </footer>
  );
}
