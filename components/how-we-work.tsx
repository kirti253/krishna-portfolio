"use client";

import { useState, useEffect, useRef } from "react";

const processSteps = [
  {
    id: 1,
    number: 1,
    title: "Consult & Strategize",
    description:
      "Align your goals and audience - the foundation for 10M+ trusted views.",
  },
  {
    id: 2,
    number: 2,
    title: "Script & Storyboard",
    description:
      "Transform complex facts into simple, relatable stories with 3x higher engagement.",
  },
  {
    id: 3,
    number: 3,
    title: "Produce & Edit",
    description:
      "High-precision visuals and sound - built for 500+ doctor brands and hospitals.",
  },
  {
    id: 4,
    number: 4,
    title: "Publish & Engage",
    description:
      "Content optimized for reach and recall across YouTube, Instagram, and Reels.",
  },
  {
    id: 5,
    number: 5,
    title: "Measure & Grow",
    description:
      "Track results, refine performance, and sustain long-term patient trust.",
  },
];

export default function HowWeWork() {
  const [activeSteps, setActiveSteps] = useState<Set<number>>(new Set([1]));
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate scroll progress through the section (0 to 1)
      const sectionStart = sectionTop - windowHeight * 0.5;
      const sectionEnd = sectionTop + sectionHeight - windowHeight * 0.5;
      const scrollProgress = Math.max(
        0,
        Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart))
      );

      // Determine which steps should be active based on scroll progress
      const newActiveSteps = new Set<number>();
      const totalSteps = processSteps.length;

      // Calculate how many steps should be active
      const activeStepCount = Math.ceil(scrollProgress * totalSteps);

      for (let i = 1; i <= activeStepCount; i++) {
        newActiveSteps.add(i);
      }

      // Always have at least step 1 active
      if (newActiveSteps.size === 0) {
        newActiveSteps.add(1);
      }

      setActiveSteps(newActiveSteps);
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
      id="how-we-work"
      className="w-full bg-white py-20 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column: Heading and Image Collage */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-teal-500 rounded-sm"></div>
              <span className="text-gray-600 text-sm md:text-base font-medium uppercase tracking-wide">
                How We Work
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
              TURNING IDEAS INTO PATIENT IMPACT
            </h2>

            {/* Image Collage */}
            <div className="relative w-full h-[500px] md:h-[600px] grid grid-cols-2 gap-3 md:gap-4">
              {/* Top Left Image */}
              <div className="relative rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
              </div>

              {/* Top Right Image */}
              <div className="relative rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
              </div>

              {/* Bottom Left - Larger Image */}
              <div className="relative rounded-lg overflow-hidden col-span-1">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
              </div>

              {/* Bottom Right - Medical Setting Image */}
              <div className="relative rounded-lg overflow-hidden col-span-1">
                <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <div className="text-gray-600 text-sm font-medium">
                    Medical Setting
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="relative">
            <div className="space-y-8 md:space-y-10">
              {processSteps.map((step, index) => {
                const isActive = activeSteps.has(step.number);
                const isLineActive =
                  activeSteps.has(step.number + 1) || isActive;

                return (
                  <div
                    key={step.id}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Timeline Line and Node */}
                    <div className="flex flex-col items-center">
                      {/* Node */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                          isActive
                            ? "bg-teal-500 border-white shadow-lg"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        {isActive && (
                          <span className="text-white text-xs font-bold">
                            {step.number}
                          </span>
                        )}
                      </div>

                      {/* Line */}
                      {index < processSteps.length - 1 && (
                        <div
                          className={`w-1 flex-1 mt-2 transition-all duration-500 ${
                            isLineActive ? "bg-teal-500" : "bg-gray-200"
                          }`}
                          style={{ minHeight: "80px" }}
                        ></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span
                          className={`text-4xl md:text-5xl font-black transition-all duration-500 ${
                            isActive ? "text-teal-500" : "text-gray-300"
                          }`}
                        >
                          {step.number}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-black">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-base md:text-lg ml-20 md:ml-24">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
