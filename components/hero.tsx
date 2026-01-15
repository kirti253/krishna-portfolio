"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-white font-[var(--font-poppins)]">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 w-full px-6 py-4 flex justify-center z-50">
        <nav className="flex items-center gap-6 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full shadow-sm">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-black font-semibold text-base">KRISHNA</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className="text-gray-800 hover:text-black transition-colors text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-800 hover:text-black transition-colors text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-gray-800 hover:text-black transition-colors text-sm font-medium"
            >
              Portfolio
            </a>
            <a
              href="#faqs"
              className="text-gray-800 hover:text-black transition-colors text-sm font-medium"
            >
              FAQs
            </a>
          </div>

          {/* Contact Button */}
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors text-lg">
            Contact
          </button>
        </nav>
      </header>

      {/* Main Hero Content */}
      <div className="container mx-auto px-6 py-16 pt-24 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.5fr] gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1
              className="text-gray-700 text-4xl font-semibold uppercase tracking-wide font-[var(--font-poppins)] animate-slideInLeft"
              style={{ animationDelay: "0.2s" }}
            >
              KRISHNA BHATT
            </h1>
            <h1
              className="text-8xl lg:text-9xl font-black text-black uppercase leading-none font-[var(--font-anton)] animate-slideInLeft"
              style={{ animationDelay: "0.4s" }}
            >
              DIGITAL
            </h1>
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div
                className="flex items-center gap-2 animate-fadeInUp"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                  LinkedIn
                </span>
                <span className="text-black text-sm font-normal">
                  Growth Specialist
                </span>
              </div>
              <div
                className="flex items-center gap-2 animate-fadeInUp"
                style={{ animationDelay: "0.6s" }}
              >
                <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                  YouTube
                </span>
                <span className="text-black text-sm font-normal">
                  Channel growth
                </span>
              </div>
              <div
                className="flex items-center gap-2 animate-fadeInUp"
                style={{ animationDelay: "0.7s" }}
              >
                <span className="bg-lime-400 text-black px-4 py-1.5 rounded-full text-sm font-medium">
                  Google Business
                </span>
                <span className="text-black text-sm font-normal">
                  Growth Expert
                </span>
              </div>
              <div
                className="flex items-center gap-2 animate-fadeInUp"
                style={{ animationDelay: "0.8s" }}
              >
                <span className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium">
                  Instagram
                </span>
                <span className="text-black text-sm font-normal">
                  Handle Pro
                </span>
              </div>
            </div>
          </div>

          {/* Center Column: Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-96 rounded-3xl overflow-hidden animate-popUp">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-red-600" />
              <Image
                src="/professional-indian-man-content-creator-portrait-d.jpg"
                alt="Manjot Singh"
                fill
                className="object-cover relative z-10"
                priority
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-7 overflow-visible">
            <h1
              className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mt-10 text-black uppercase leading-none whitespace-nowrap animate-slideInRight"
              style={{ animationDelay: "0.3s" }}
            >
              VIDEO EDITOR
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed  max-w-xs">
              I help doctors turn knowledge into stories patients trust.
            </p>
            <div
              className="flex gap-3 justify-start mt-6 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                MBA
              </span>
              <span className="text-gray-700 text-sm py-2">IMT Ghaziabad</span>
            </div>
            <div
              className="flex flex-wrap gap-3 justify-start animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Google Digital Marketing
              </span>
              <span className="text-gray-700 text-sm py-2">Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Social Proof */}
      <div className="container mx-auto px-6 pb-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left: Trusted By */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white" />
            </div>
            <span className="text-gray-600 font-bold text-sm">
              Trusted by 120+ Healthcare Founders
            </span>
          </div>

          {/* Right: Rating */}
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium text-sm">
              RATED EXCELLENT:
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Showcase Section */}
      <div className="w-full bg-black py-20 mt-20">
        <div className="container mx-auto px-6">
          {/* Video Carousel */}
          <div className="relative overflow-hidden mb-12">
            <div className="flex animate-scroll">
              {/* First set of videos */}
              {[
                {
                  id: 1,
                  title: "COSNIK PLASTIC SURGERY",
                  subtitle: "How to reach us",
                  logo: "COSNIK",
                },
                {
                  id: 2,
                  title: "MediSyn Neuro & Gynae Centr",
                  subtitle: "Medical Consultation",
                  logo: "MediSyn",
                },
                {
                  id: 3,
                  title: "Livasa We care for life",
                  subtitle: "Healthcare Services",
                  logo: "Livasa",
                },
                {
                  id: 4,
                  title: "BP Monitoring",
                  subtitle: "सब जानते हैं अगर किसी को बीपी है",
                  logo: "HealthCare",
                },
                {
                  id: 5,
                  title: "Livasa We care for life",
                  subtitle: "Medical Services",
                  logo: "Livasa",
                },
                {
                  id: 6,
                  title: "COSNIK",
                  subtitle: "similar to insulin",
                  logo: "COSNIK",
                },
              ].map((video) => (
                <div
                  key={video.id}
                  className="flex-shrink-0 w-[320px] h-[480px] mx-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="text-white text-xs font-semibold bg-black/50 px-3 py-1 rounded-full">
                      {video.logo}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{video.subtitle}</p>
                  </div>
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                {
                  id: 7,
                  title: "COSNIK PLASTIC SURGERY",
                  subtitle: "How to reach us",
                  logo: "COSNIK",
                },
                {
                  id: 8,
                  title: "MediSyn Neuro & Gynae Centr",
                  subtitle: "Medical Consultation",
                  logo: "MediSyn",
                },
                {
                  id: 9,
                  title: "Livasa We care for life",
                  subtitle: "Healthcare Services",
                  logo: "Livasa",
                },
                {
                  id: 10,
                  title: "BP Monitoring",
                  subtitle: "सब जानते हैं अगर किसी को बीपी है",
                  logo: "HealthCare",
                },
                {
                  id: 11,
                  title: "Livasa We care for life",
                  subtitle: "Medical Services",
                  logo: "Livasa",
                },
                {
                  id: 12,
                  title: "COSNIK",
                  subtitle: "similar to insulin",
                  logo: "COSNIK",
                },
              ].map((video) => (
                <div
                  key={video.id}
                  className="flex-shrink-0 w-[320px] h-[480px] mx-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="text-white text-xs font-semibold bg-black/50 px-3 py-1 rounded-full">
                      {video.logo}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{video.subtitle}</p>
                  </div>
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center space-y-4">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
              500+ Doctor Stories. 10M+ Views. Countless Patients Reached
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Every frame here began with a doctor's purpose - to help, to heal,
              to educate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
