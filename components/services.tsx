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
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [scrollProgress, setScrollProgress] = useState<Map<number, number>>(new Map());
  const [scrollY, setScrollY] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Scroll-based animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (!sectionRef.current) return;

      const windowHeight = window.innerHeight;
      const currentScrollY = window.scrollY;

      cardRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const cardTop = ref.offsetTop;
        const cardHeight = ref.offsetHeight;
        const cardCenter = cardTop + cardHeight / 2;
        const viewportCenter = currentScrollY + windowHeight / 2;

        // Calculate scroll progress for this card (0 to 1)
        const distance = Math.abs(cardCenter - viewportCenter);
        const maxDistance = windowHeight;
        const progress = Math.max(0, Math.min(1, 1 - distance / maxDistance));

        setScrollProgress((prev) => {
          const newMap = new Map(prev);
          newMap.set(index, progress);
          return newMap;
        });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="w-full bg-white relative">
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
            const isVisible = visibleCards.has(index);
            const progress = scrollProgress.get(index) || 0;
            
            // Calculate scroll-based transforms
            const scale = 0.9 + progress * 0.1; // Scale from 0.9 to 1.0
            const rotateY = isLeftAligned ? (1 - progress) * -5 : (1 - progress) * 5; // 3D rotation
            const translateY = (1 - progress) * 30; // Parallax effect
            
            return (
              <div
                key={service.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`flex ${isLeftAligned ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`w-full max-w-md bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${
                    isVisible
                      ? isLeftAligned
                        ? "opacity-100 translate-x-0"
                        : "opacity-100 translate-x-0"
                      : isLeftAligned
                      ? "opacity-0 -translate-x-10"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transform: `translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity: isVisible ? Math.max(0.7, progress) : 0,
                  }}
                >
                  {/* Image Container */}
                  <div
                    className={`relative w-full h-[250px] md:h-[300px] border-[4px] border-[#2F5C5B] rounded-[30px_30px_15px_15px] overflow-hidden shadow-md mb-4 hover:scale-105 transition-all duration-300 ${
                      isVisible
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                    style={{
                      transitionDelay: `${index * 100 + 200}ms`,
                      transform: `scale(${0.95 + progress * 0.05})`,
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-gray-500 text-sm font-medium text-center px-2">
                        {service.imagePlaceholder}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-[#F8E7BF] rounded-lg flex items-center justify-center z-10 shadow-md hover:scale-110 hover:rotate-6 transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 scale-100 rotate-0"
                          : "opacity-0 scale-0 rotate-180"
                      }`}
                      style={{ transitionDelay: `${index * 100 + 300}ms` }}
                    >
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-[#8B6914]" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl md:text-2xl font-bold text-gray-900 mb-2 pr-12 md:pr-14 transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }`}
                      style={{ transitionDelay: `${index * 100 + 400}ms` }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-gray-600 text-sm md:text-base leading-relaxed transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }`}
                      style={{ transitionDelay: `${index * 100 + 500}ms` }}
                    >
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
