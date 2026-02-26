"use client";

import Image from "next/image";
import { Star, Menu } from "lucide-react";
import { useState } from "react";
import { videoUrl } from "@/lib/video-url";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen pt-14 bg-white font-[var(--font-poppins)] overflow-x-hidden">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 w-full px-4 md:px-6 py-3 md:py-4 flex justify-center z-50">
        {/* Mobile Navbar */}
        <nav className="md:hidden flex items-center justify-between w-full px-4 py-2.5 bg-white/95 backdrop-blur-md rounded-full shadow-sm">
          {/* Profile Icon */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-b from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">KB</span>
          </div>

          {/* Available for work text with status */}
          <div className="flex items-center gap-2 flex-1 justify-center">
            <span className="text-gray-800 text-sm font-medium">
              Available for work
            </span>
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-teal-500 hover:bg-teal-600 flex items-center justify-center flex-shrink-0 transition-colors"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </nav>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-6 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full shadow-sm">
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
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors text-lg"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-2xl shadow-xl border border-gray-100 py-4">
            <a
              href="#home"
              className="block px-6 py-3 text-gray-800 hover:bg-gray-50 transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-6 py-3 text-gray-800 hover:bg-gray-50 transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="block px-6 py-3 text-gray-800 hover:bg-gray-50 transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#faqs"
              className="block px-6 py-3 text-gray-800 hover:bg-gray-50 transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQs
            </a>
            <div className="px-6 pt-2">
              <a
                href="#contact"
                className="block w-full bg-teal-500 text-white px-6 py-4 rounded-full hover:bg-teal-600 transition-colors text-base font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Hero Content */}
      <div className="container mx-auto px-6 py-16 pt-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* Left Column - I TURN RAW FOOTAGE INTO / SCROLL-STOPPING STORIES */}
          <div className="space-y-8">
            <h1
              className="text-gray-700 text-lg md:text-xl font-semibold uppercase tracking-wide font-[var(--font-poppins)] animate-slideInLeft"
              style={{ animationDelay: "0.2s" }}
            >
              I TURN RAW FOOTAGE INTO
            </h1>
            <h2
              className="text-6xl md:text-7xl lg:text-8xl font-black text-black uppercase leading-none font-[var(--font-anton)] animate-slideInLeft break-words"
              style={{ animationDelay: "0.4s" }}
            >
              SCROLL-STOPPING STORIES
            </h2>

            <div className="flex flex-col gap-4 pt-4">
              <div
                className="flex items-center gap-3 animate-fadeInUp"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-2xl">🎬</span>
                <span className="text-black font-semibold">
                  200+ videos edited
                </span>
              </div>
              <div
                className="flex items-center gap-3 animate-fadeInUp"
                style={{ animationDelay: "0.6s" }}
              >
                <span className="text-2xl">🚀</span>
                <span className="text-black font-semibold">
                  5M+ views generated
                </span>
              </div>
              <div
                className="flex items-center gap-3 animate-fadeInUp"
                style={{ animationDelay: "0.7s" }}
              >
                <span className="text-2xl">⭐</span>
                <span className="text-black font-semibold">
                  Trusted by creators & startups
                </span>
              </div>
            </div>
          </div>

          {/* Center Column: Image with Gradient */}
          <div className="flex justify-center">
            <div
              className="relative w-80 h-96 rounded-3xl overflow-hidden animate-popUp shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #ff9500 0%, #ff6b6b 50%, #ff4757 100%)",
              }}
            >
              <Image
                src="/heroimage.jpeg"
                alt="Video Editor"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Video Editor Title & Description */}
          <div className="space-y-6">
            <div>
              <h2
                className="text-6xl md:text-7xl lg:text-8xl font-black text-black uppercase leading-none font-[var(--font-anton)] animate-slideInRight"
                style={{ animationDelay: "0.3s" }}
              >
                VIDEO
                <br />
                EDITOR
              </h2>
              <p
                className="text-gray-600 text-base leading-relaxed mt-4 max-w-sm animate-fadeInUp"
                style={{ animationDelay: "0.5s" }}
              >
                I help creators, brands, and businesses turn footage into
                scroll-stopping stories.
              </p>
            </div>

            {/* Certifications/Stats */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div
                className="flex items-center gap-2 animate-fadeInUp"
                style={{ animationDelay: "0.6s" }}
              >
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  200+
                </span>
                <span className="text-gray-700 text-sm font-medium">
                  Videos Edited
                </span>
              </div>
              <div
                className="flex items-center gap-2 animate-fadeInUp"
                style={{ animationDelay: "0.7s" }}
              >
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  5M+
                </span>
                <span className="text-gray-700 text-sm font-medium">
                  Views Generated
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3 pt-4 animate-fadeInUp"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="#portfolio"
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                Get Your Video Edited
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Showcase Section */}
      <div className="w-full bg-black py-20 mt-20 overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Video Carousel */}
          <div className="relative overflow-hidden mb-12">
            <div className="flex animate-scroll gap-4">
              {[
                {
                  title: "Short Form Content",
                  subtitle: "Reels & TikToks",
                  videoUrl:
                    "/videos/WhatsApp Video 2026-02-22 at 10.42.29 PM.mp4",
                },
                {
                  title: "YouTube Editing",
                  subtitle: "Long-form videos",
                  videoUrl: "/videos/IMG_3177.MP4",
                },
                {
                  title: "Podcast Highlights",
                  subtitle: "Multi-cam edits",
                  videoUrl: "/videos/IMG_3252.MOV",
                },
                {
                  title: "Brand Promos",
                  subtitle: "Professional videos",
                  videoUrl: "/videos/IMG_3282.MOV",
                },
                {
                  title: "Interview Edits",
                  subtitle: "Dynamic storytelling",
                  videoUrl: "/videos/IMG_3361.MOV",
                },
                {
                  title: "Creative Sequence",
                  subtitle: "Unique visuals",
                  videoUrl:
                    "/videos/WhatsApp Video 2026-02-22 at 10.42.33 PM.mp4",
                },
                {
                  title: "Product Showcase",
                  subtitle: "Commercial style",
                  videoUrl:
                    "/videos/WhatsApp Video 2026-02-22 at 10.42.34 PM.mp4",
                },
                {
                  title: "Promotional Edit",
                  subtitle: "High impact",
                  videoUrl:
                    "/videos/WhatsApp Video 2026-02-22 at 10.42.35 PM.mp4",
                },
                {
                  title: "Visual Storytelling",
                  subtitle: "Cinematic approach",
                  videoUrl:
                    "/videos/WhatsApp Video 2026-02-22 at 10.42.45 PM.mp4",
                },
                {
                  title: "Dynamic Cuts",
                  subtitle: "Fast pacing",
                  videoUrl:
                    "/videos/WhatsApp Video 2026-02-22 at 10.42.51 PM (1).mp4",
                },
                {
                  title: "Smooth Transitions",
                  subtitle: "Professional polish",
                  videoUrl:
                    "/videos/WhatsApp Video 2026-02-22 at 10.42.51 PM.mp4",
                },
                {
                  title: "Audio Synced",
                  subtitle: "Perfect timing",
                  videoUrl:
                    "/videos/WhatsApp Video 2026-02-23 at 1.19.54 AM.mp4",
                },
                {
                  title: "Motion Edit",
                  subtitle: "Visual effects",
                  videoUrl:
                    "/videos/WhatsApp Video 2026-02-22 at 11.13.04 PM.mp4",
                },
                {
                  title: "Short Form Content",
                  subtitle: "Reels & TikToks",
                  videoUrl:
                    "/videos/WhatsApp Video 2026-02-22 at 10.42.29 PM.mp4",
                },
              ].map((video, idx) => (
                <div
                  key={`showcase-${idx}`}
                  className="flex-shrink-0 w-[280px] h-[420px] md:w-[320px] md:h-[480px] mx-2 rounded-lg overflow-hidden bg-gray-900 relative group hover:shadow-2xl transition-all duration-300"
                >
                  <video
                    src={videoUrl(video.videoUrl)}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="text-white text-xs font-semibold bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                      {video.subtitle}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-white font-semibold text-base mb-1 group-hover:text-teal-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-xs">{video.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center space-y-4">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
              200+ Videos Edited. 5M+ Views. Countless Happy Clients
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Every frame begins with purpose - to engage, to inspire, and to
              deliver results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
