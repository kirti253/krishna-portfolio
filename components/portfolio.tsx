"use client";

import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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
      { threshold: 0.1, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (index: number) => {
    console.log(`Portfolio item ${index} clicked`);
  };

  // Portfolio placeholder items
  const portfolioItems = [
    { id: 1, label: "YouTube Documentary Edit", category: "YouTube" },
    { id: 2, label: "Instagram Reel Series", category: "Reels" },
    { id: 3, label: "Podcast Highlight Reel", category: "Podcast" },
    { id: 4, label: "Brand Promotional Video", category: "Promo" },
    { id: 5, label: "Short Form Content", category: "Shorts" },
    { id: 6, label: "Motion Graphics Showcase", category: "Graphics" }
  ];

  return (
    <section ref={sectionRef} id="portfolio" className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black text-center mb-6">
          Featured Work
        </h2>

        {/* Description Paragraph */}
        <p className="text-gray-600 text-lg md:text-xl text-center max-w-3xl mx-auto mb-8">
          From YouTube documentaries to Instagram reels and brand promos, here are some of my best edits that showcase creative storytelling and technical excellence.
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
            {[...portfolioItems, ...portfolioItems].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => handleCardClick(item.id)}
                className="flex-shrink-0 w-[300px] md:w-[400px] h-[400px] md:h-[500px] rounded-2xl border-2 border-gray-300 overflow-hidden relative group cursor-pointer hover:border-gray-400 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
              >
                <div className="text-center text-gray-500 px-4">
                  <div className="text-5xl font-bold text-gray-300 mb-4">▶</div>
                  <p className="text-gray-700 text-base font-semibold">{item.label}</p>
                  <p className="text-gray-500 text-sm mt-2">{item.category}</p>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
