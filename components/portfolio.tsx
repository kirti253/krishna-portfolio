"use client";

import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { videoUrl } from "@/lib/video-url";

export default function Portfolio() {
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.target === el) setSectionInView(e.isIntersecting);
        }
      },
      { threshold: 0.1, rootMargin: "0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (index: number) => {
    console.log(`Portfolio item ${index} clicked`);
  };

  // Portfolio items from videos folder
  const portfolioItems = [
    {
      id: 1,
      label: "Behind the Scenes",
      category: "BTS",
      videoUrl: "/videos/IMG_3177.MP4",
    },
    {
      id: 2,
      label: "Content Showcase",
      category: "Reel",
      videoUrl: "",
    },
    {
      id: 3,
      label: "Project Footage",
      category: "Video",
      videoUrl: "",
    },
    {
      id: 4,
      label: "Interview Highlights",
      category: "Interview",
      videoUrl: "",
    },
    {
      id: 5,
      label: "Short Form Edit",
      category: "Shorts",
      videoUrl: "/videos/WhatsApp Video 2026-02-22 at 10.42.29 PM.mp4",
    },
    {
      id: 6,
      label: "Creative Sequence",
      category: "Creative",
      videoUrl: "/videos/WhatsApp Video 2026-02-22 at 10.42.33 PM.mp4",
    },
    {
      id: 7,
      label: "Product Showcase",
      category: "Product",
      videoUrl: "/videos/WhatsApp Video 2026-02-22 at 10.42.34 PM.mp4",
    },
    {
      id: 8,
      label: "Promotional Edit",
      category: "Promo",
      videoUrl: "/videos/WhatsApp Video 2026-02-22 at 10.42.35 PM.mp4",
    },
    {
      id: 9,
      label: "Visual Storytelling",
      category: "Story",
      videoUrl: "/videos/WhatsApp Video 2026-02-22 at 10.42.45 PM.mp4",
    },
    {
      id: 10,
      label: "Dynamic Cuts",
      category: "Cuts",
      videoUrl: "/videos/WhatsApp Video 2026-02-22 at 10.42.51 PM (1).mp4",
    },
    {
      id: 11,
      label: "Smooth Transitions",
      category: "Transitions",
      videoUrl: "/videos/WhatsApp Video 2026-02-22 at 10.42.51 PM.mp4",
    },
    {
      id: 12,
      label: "Audio Synced Edit",
      category: "Audio",
      videoUrl: "/videos/WhatsApp Video 2026-02-23 at 1.19.54 AM.mp4",
    },
    {
      id: 13,
      label: "Motion Edit",
      category: "Motion",
      videoUrl: "/videos/WhatsApp Video 2026-02-22 at 11.13.04 PM.mp4",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="w-full bg-white py-20 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black text-center mb-6">
          Featured Work
        </h2>

        {/* Description Paragraph */}
        <p className="text-gray-600 text-lg md:text-xl text-center max-w-3xl mx-auto mb-8">
          From YouTube documentaries to Instagram reels and brand promos, here
          are some of my best edits that showcase creative storytelling and
          technical excellence.
        </p>

        {/* Get Quote Button */}
        <div className="flex justify-center mb-8">
          <button className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
            <span>View All Projects</span>
          </button>
        </div>

        {/* Trust Statement */}
        <p className="text-gray-500 text-sm md:text-base text-center mb-12">
          Work samples from various projects
        </p>

        {/* Portfolio Items Carousel */}
        <div className="relative overflow-hidden portfolio-carousel-container">
          <div className="flex animate-scroll-niches gap-4 md:gap-6">
            {/* Portfolio items - duplicated for seamless loop */}
            {[...portfolioItems, ...portfolioItems].map((item, idx) => {
              const finalVideoUrl = videoUrl(item.videoUrl);
              return (
                <div
                  key={`${item.id}-${idx}`}
                  onClick={() => handleCardClick(item.id)}
                  className="flex-shrink-0 w-[300px] md:w-[400px] h-[400px] md:h-[500px] rounded-2xl border-2 border-gray-300 overflow-hidden relative group cursor-pointer hover:border-gray-400 hover:shadow-xl transition-all duration-300 bg-black flex items-center justify-center"
                >
                  {finalVideoUrl && (
                    <video
                      src={finalVideoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white/100 transition-all duration-300">
                      <div className="text-black text-3xl font-bold ml-1">
                        ▶
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-500/90 transition-all duration-300">
                    {item.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.label}
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
