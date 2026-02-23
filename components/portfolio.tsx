"use client";

import { ArrowRight } from "lucide-react";
import { useDriveVideos } from "@/hooks/use-drive-videos";

const partners = [
  {
    id: 1,
    name: "HEARTZMATE HEALTH CLINIC",
    logo: "HE",
    color: "text-pink-600",
  },
  {
    id: 2,
    name: "VISH SKIN CLINIC",
    logo: "VISH",
    color: "text-teal-600",
  },
  {
    id: 3,
    name: "DANDY BRAIN AND SPINE INSTITUTE",
    logo: "DANDY",
    color: "text-teal-700",
  },
  {
    id: 4,
    name: "MediSyn Neuro & Gynae Centre",
    logo: "MediSyn",
    color: "text-teal-600",
  },
];

export default function Portfolio() {
  const { videos, loading, error } = useDriveVideos();

  const handleCardClick = (videoId: string) => {
    console.log(`Portfolio video ${videoId} clicked`);
  };

  // Build carousel items: use drive videos, duplicate set for seamless loop
  const displayVideos = loading ? [] : videos.length > 0 ? videos : [];

  return (
    <section id="portfolio" className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black text-center mb-6">
          My Featured Portfolio
        </h2>

        {/* Description Paragraph */}
        <p className="text-gray-600 text-lg md:text-xl text-center max-w-3xl mx-auto mb-8">
          My portfolio reflects more than just technical skill - it shows how
          storytelling transforms ordinary doctor videos into meaningful,
          patient-focused experiences trusted by leading hospitals.
        </p>

        {/* Get Quote Button */}
        <div className="flex justify-center mb-8">
          <button className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
            <span>Get Quote</span>
          </button>
        </div>

        {/* Trust Statement */}
        <p className="text-gray-500 text-sm md:text-base text-center mb-12">
          120+ Healthcare founders Partners in patient Trust
        </p>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center gap-2">
              <div
                className={`text-3xl md:text-4xl font-bold ${partner.color}`}
              >
                {partner.logo}
              </div>
              <div className="text-xs md:text-sm text-gray-600 text-center max-w-[150px]">
                {partner.name}
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Items Carousel - videos from Google Drive */}
        <div className="relative overflow-hidden portfolio-carousel-container">
          {error && (
            <p className="text-center text-amber-600 mb-4 text-sm">
              Could not load videos. Check Google Drive setup.
            </p>
          )}
          <div className="flex animate-scroll-niches gap-4 md:gap-6">
            {/* First set of videos */}
            {displayVideos.length > 0
              ? [...displayVideos, ...displayVideos].map((video, idx) => (
                  <div
                    key={`${video.id}-${idx}`}
                    onClick={() => handleCardClick(video.id)}
                    className="flex-shrink-0 w-[300px] md:w-[400px] h-[400px] md:h-[500px] rounded-2xl border-2 border-gray-300 overflow-hidden relative group cursor-pointer hover:border-gray-400 hover:shadow-xl transition-all duration-300"
                  >
                    <iframe
                      src={`${video.embedUrl}?autoplay=1&mute=1`}
                      title={video.name}
                      className="w-full h-full pointer-events-none"
                      allow="autoplay"
                      allowFullScreen
                    />
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Before edits/RAW
                    </div>
                  </div>
                ))
              : Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={`placeholder-${i}`}
                    className="flex-shrink-0 w-[300px] md:w-[400px] h-[400px] md:h-[500px] rounded-2xl border-2 border-gray-300 overflow-hidden relative bg-gray-200 flex items-center justify-center"
                  >
                    {loading ? (
                      <span className="text-gray-500 text-sm">Loading videos…</span>
                    ) : (
                      <span className="text-gray-500 text-sm text-center px-2">Add NEXT_PUBLIC_DRIVE_VIDEO_IDS in .env</span>
                    )}
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
