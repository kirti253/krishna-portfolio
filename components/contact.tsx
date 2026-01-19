"use client";

import Image from "next/image";
import { Mail, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Header */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
              Ready to Tell Your Story
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Because in healthcare, trust is the real metric.
            </p>

            {/* Profile Card */}
            <div className="bg-black rounded-2xl p-8 md:p-10 space-y-6">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 bg-gradient-to-b from-teal-400 to-teal-600 rounded-full"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-teal-500">
                    <Image
                      src="/professional-indian-man-content-creator-portrait-d.jpg"
                      alt="Krishna Bhatt"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  From 10M+ Views to One Call Away.
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Let's turn your expertise into content that educates,
                  inspires, and builds lasting patient trust.
                </p>
                <Button
                  asChild
                  className="bg-black border-2 border-white text-white px-6 py-6 text-base md:text-lg font-medium rounded-full mt-6 hover:bg-gray-900"
                >
                  <a href="#portfolio">
                    <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mr-2">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    View Portfolio
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Options */}
          <div className="bg-stone-100 rounded-2xl p-6 md:p-8 lg:p-10 mt-8 md:mt-12">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {/* Email Contact */}
              <a
                href="mailto:kirti25032007@gmail.com"
                className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-teal-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 transition-colors">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-black mb-1">
                    Email Us
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    kirti25032007@gmail.com
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors" />
              </a>

              {/* Instagram Contact */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-teal-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 transition-colors">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-black mb-1">
                    Follow on Instagram
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    Connect with us on social media
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors" />
              </a>

              {/* Additional Info */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  We typically respond within 24 hours. Looking forward to
                  hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
