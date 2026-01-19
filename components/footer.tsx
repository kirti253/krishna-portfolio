"use client";

import { ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Top Section - Contact, Copyright, Back To Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left - Contact */}
          <div>
            <h4 className="text-white text-lg md:text-xl font-semibold mb-2">
              Say Hi 👋
            </h4>
            <a
              href="mailto:kirti25032007@gmail.com"
              className="text-gray-300 hover:text-teal-400 transition-colors text-sm md:text-base"
            >
              kirti25032007@gmail.com
            </a>
          </div>

          {/* Center - Copyright */}
          <div className="flex items-start justify-center md:justify-center">
            <p className="text-gray-300 text-sm md:text-base text-center">
              All rights reserved Sunmac® 2025
            </p>
          </div>

          {/* Right - Back To Top */}
          <div className="flex flex-col items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors mb-2"
            >
              <ArrowUp className="w-6 h-6 text-black" />
            </button>
            <span className="text-gray-300 text-sm">Back To Top</span>
          </div>
        </div>

        {/* Horizontal Lines */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom - Brand Name */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white">
            SunMac Edits
          </h2>
        </div>
      </div>
    </footer>
  );
}
