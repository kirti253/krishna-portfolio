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
  const [scrollProgress, setScrollProgress] = useState<Map<number, number>>(
    new Map()
  );
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
    <section
      ref={sectionRef}
      id="services"
      className="w-full bg-white relative"
    >
      {/* Background Text - Sticky */}
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-gray-900 uppercase tracking-tighter select-none">
          OUR SERVICES
        </h2>
      </div>

      {/* Content Container */}
      <div className="relative z-10 -mt-[100vh]">
        <div className="container mx-auto px-2 md:px-4 lg:px-6 max-w-full py-20 md:py-32">
          <div className="space-y-8 md:space-y-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isLeftAligned = index % 2 === 0; // Alternating: left, right, left, right
              const isVisible = visibleCards.has(index);
              const progress = scrollProgress.get(index) || 0;

              // Calculate scroll-based transforms
              const scale = 0.9 + progress * 0.1; // Scale from 0.9 to 1.0
              const rotateY = isLeftAligned
                ? (1 - progress) * -5
                : (1 - progress) * 5; // 3D rotation
              const translateY = (1 - progress) * 30; // Parallax effect

              return (
                <div
                  key={service.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={`flex ${
                    isLeftAligned ? "justify-start" : "justify-end"
                  } perspective-1000`}
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className={`w-full max-w-4xl bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-700 border border-gray-100 ${
                      isVisible
                        ? isLeftAligned
                          ? "animate-flipInLeft"
                          : "animate-flipInRight"
                        : ""
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      transform: isVisible
                        ? `perspective(1000px) translateY(${translateY}px) scale(${scale}) rotateY(${
                            rotateY * 0.3
                          }deg)`
                        : `perspective(1000px) rotateY(${
                            isLeftAligned ? "-90deg" : "90deg"
                          }) translateX(${isLeftAligned ? "-50px" : "50px"})`,
                      opacity: isVisible ? Math.max(0.7, progress) : 0,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                      {/* Image Container */}
                      <div
                        className={`relative w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[450px] flex-shrink-0 border-[4px] border-[#2F5C5B] rounded-[30px_30px_15px_15px] overflow-hidden shadow-md hover:scale-105 transition-all duration-300 ${
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
                          <div className="text-gray-500 text-base md:text-lg font-medium text-center px-2">
                            {service.imagePlaceholder}
                          </div>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="relative flex-1 w-full md:w-1/2">
                        {/* Icon */}
                        <div
                          className={`absolute -top-2 -right-2 w-14 h-14 md:w-16 md:h-18 lg:w-20 lg:h-20 bg-[#F8E7BF] rounded-lg flex items-center justify-center z-10 shadow-md hover:scale-110 hover:rotate-6 transition-all duration-500 ${
                            isVisible
                              ? "opacity-100 scale-100 rotate-0"
                              : "opacity-0 scale-0 rotate-180"
                          }`}
                          style={{ transitionDelay: `${index * 100 + 300}ms` }}
                        >
                          <IconComponent className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[#8B6914]" />
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 pr-16 md:pr-20 transition-all duration-700 ${
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
                          className={`text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed transition-all duration-700 ${
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
