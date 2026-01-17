"use client";

const processSteps = [
  {
    id: 1,
    number: 1,
    title: "Consult & Strategize",
    description:
      "Align your goals and audience - the foundation for 10M+ trusted views.",
    isActive: true,
  },
  {
    id: 2,
    number: 2,
    title: "Script & Storyboard",
    description:
      "Transform complex facts into simple, relatable stories with 3x higher engagement.",
    isActive: false,
  },
  {
    id: 3,
    number: 3,
    title: "Produce & Edit",
    description:
      "High-precision visuals and sound - built for 500+ doctor brands and hospitals.",
    isActive: false,
  },
  {
    id: 4,
    number: 4,
    title: "Publish & Engage",
    description:
      "Content optimized for reach and recall across YouTube, Instagram, and Reels.",
    isActive: false,
  },
  {
    id: 5,
    number: 5,
    title: "Measure & Grow",
    description:
      "Track results, refine performance, and sustain long-term patient trust.",
    isActive: false,
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column: Heading and Image Collage */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
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
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
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
              {processSteps.map((step, index) => (
                <div key={step.id} className="relative flex items-start gap-6">
                  {/* Timeline Line and Node */}
                  <div className="flex flex-col items-center">
                    {/* Node */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                        step.isActive
                          ? "bg-orange-500 border-white shadow-lg"
                          : "bg-white border-gray-300"
                      }`}
                    >
                      {step.isActive && (
                        <span className="text-white text-xs font-bold">
                          {step.number}
                        </span>
                      )}
                    </div>

                    {/* Line */}
                    {index < processSteps.length - 1 && (
                      <div
                        className={`w-1 flex-1 mt-2 ${
                          index === 0 ? "bg-orange-500" : "bg-gray-200"
                        }`}
                        style={{ minHeight: "80px" }}
                      ></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span
                        className={`text-4xl md:text-5xl font-black ${
                          step.isActive ? "text-orange-500" : "text-gray-300"
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
