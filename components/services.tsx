"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Film, Youtube, Podcast, Sparkles, Zap } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Short Form Content Editing",
    description:
      "Reels, Shorts, TikTok videos optimized for retention and virality. I craft punchy edits with fast pacing and engaging transitions that keep viewers watching and sharing.",
    icon: Zap,
    image: "/shortformcontent.jpeg",
    imagePlaceholder: "Short Form Content",
    imageOnLeft: true,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "YouTube Video Editing",
    description:
      "Long-form storytelling, pacing, motion graphics, and engagement edits. From vlogs to documentaries, I create compelling YouTube content that keeps audiences engaged.",
    icon: Youtube,
    image: "/youtubevideo.jpeg",
    imagePlaceholder: "YouTube Editing",
    imageOnLeft: false,
    color: "from-red-500 to-orange-500",
  },
  {
    id: 3,
    title: "Brand & Promo Videos",
    description:
      "Professional promotional edits that elevate your brand identity. Create stunning brand videos that tell your story and convert viewers into customers.",
    icon: Film,
    image: "/brandpromo.jpeg",
    imagePlaceholder: "Brand & Promo",
    imageOnLeft: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Podcast Editing",
    description:
      "Multi-cam edits, audio cleanup, highlights & shorts creation. Transform your podcast episodes into engaging video content across all platforms.",
    icon: Podcast,
    image: "/podcastediting.jpeg",
    imagePlaceholder: "Podcast Editing",
    imageOnLeft: false,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "Motion Graphics & Subtitles",
    description:
      "Captions, animations, callouts, and branded overlays. Add visual flair to your content with professional motion graphics and perfectly timed subtitles.",
    icon: Sparkles,
    image: "/motiongraphihc.jpeg",
    imagePlaceholder: "Motion Graphics",
    imageOnLeft: true,
    color: "from-indigo-500 to-violet-500",
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [scrollProgress, setScrollProgress] = useState<Map<number, number>>(
    new Map(),
  );
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
        },
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

  // Add custom CSS for enhanced animations
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-100px) rotateY(30deg);
        }
        to {
          opacity: 1;
          transform: translateX(0) rotateY(0deg);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(100px) rotateY(-30deg);
        }
        to {
          opacity: 1;
          transform: translateX(0) rotateY(0deg);
        }
      }

      @keyframes bounce-in {
        0% {
          opacity: 0;
          transform: scale(0.3);
        }
        50% {
          opacity: 1;
          transform: scale(1.05);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      .animate-slideInLeft {
        animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .animate-slideInRight {
        animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .animate-bounce-in {
        animation: bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
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
              const isLeftAligned = index % 2 === 0;
              const isVisible = visibleCards.has(index);
              const progress = scrollProgress.get(index) || 0;
              const isHovered = hoveredCard === index;

              // Enhanced scroll-based transforms with easing
              const scale = 0.85 + progress * 0.15;
              const rotateX = (1 - progress) * (isLeftAligned ? -8 : 8);
              const rotateY = isLeftAligned
                ? (1 - progress) * -8
                : (1 - progress) * 8;
              const translateY = (1 - progress) * 50;
              const skewY = (1 - progress) * -3;

              return (
                <div
                  key={service.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={`flex ${
                    isLeftAligned ? "justify-start" : "justify-end"
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-10 lg:p-12 shadow-lg border border-gray-100 transition-all duration-500 cursor-pointer group ${
                      isVisible
                        ? isLeftAligned
                          ? "animate-slideInLeft"
                          : "animate-slideInRight"
                        : ""
                    } ${isHovered ? "shadow-2xl border-teal-300" : ""}`}
                    style={{
                      transitionDelay: `${index * 150}ms`,
                      transform: isVisible
                        ? `perspective(1200px) translateY(${
                            translateY * (1 - progress)
                          }px) scale(${scale}) rotateX(${rotateX * 0.4}deg) rotateY(${
                            rotateY * 0.4
                          }deg) skewY(${skewY * 0.2}deg)`
                        : `perspective(1200px) rotateX(${
                            isLeftAligned ? -20 : 20
                          }deg) rotateY(${
                            isLeftAligned ? 30 : -30
                          }deg) translateY(50px) scale(0.8)`,
                      opacity: isVisible ? Math.max(0.6, progress) : 0,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      className={`flex flex-col ${
                        service.imageOnLeft
                          ? "md:flex-row"
                          : "md:flex-row-reverse"
                      } gap-6 md:gap-8 items-start`}
                    >
                      {/* Image Container */}
                      <div
                        className={`relative w-full md:w-1/2 h-[260px] md:h-[340px] lg:h-[380px] flex-shrink-0 border-[3px] border-teal-500/80 rounded-[26px_26px_18px_18px] overflow-hidden shadow-md group ${
                          isVisible
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-75"
                        } transition-all duration-700`}
                        style={{
                          transitionDelay: `${index * 150 + 200}ms`,
                          transform: `${
                            isHovered
                              ? "scale(1.08) translateZ(30px)"
                              : "scale(1) translateZ(0)"
                          }`,
                        }}
                      >
                        <Image
                          src={service.image}
                          alt={service.imagePlaceholder}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
                          {service.imagePlaceholder}
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="relative flex-1 w-full md:w-1/2">
                        {/* Icon */}
                        <div
                          className={`absolute -top-4 -right-4 w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center z-20 shadow-lg transition-all duration-500 ${
                            isVisible
                              ? "opacity-100 scale-100 rotate-0"
                              : "opacity-0 scale-0 -rotate-180"
                          } ${
                            isHovered ? "scale-110 -rotate-12 shadow-xl" : ""
                          }`}
                          style={{
                            transitionDelay: `${index * 150 + 300}ms`,
                          }}
                        >
                          <IconComponent className="w-8 md:w-10 lg:w-12 text-white animate-float" />
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 pr-20 md:pr-24 transition-all duration-700 ${
                            isVisible
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-10"
                          } ${isHovered ? "text-teal-600" : ""}`}
                          style={{
                            transitionDelay: `${index * 150 + 400}ms`,
                          }}
                        >
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p
                          className={`text-gray-600 text-base md:text-lg lg:text-lg leading-relaxed transition-all duration-700 ${
                            isVisible
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-10"
                          }`}
                          style={{
                            transitionDelay: `${index * 150 + 500}ms`,
                          }}
                        >
                          {service.description}
                        </p>

                        {/* Hover CTA */}
                        <div
                          className={`mt-6 inline-flex items-center gap-2 text-teal-600 font-semibold transition-all duration-300 transform ${
                            isHovered
                              ? "translate-x-2 opacity-100"
                              : "translate-x-0 opacity-0"
                          }`}
                        >
                          <span>Learn More</span>
                          <span className="text-lg transform transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </div>
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
