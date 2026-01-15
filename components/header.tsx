"use client";

import { useState, useEffect } from "react";
import { Menu, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 px-4">
      <div className="flex justify-center">
        {/* Rounded Navigation Container - Centered */}
        <div
          className={`rounded-4xl border px-3 py-1.5 flex items-center justify-center gap-3 transition-all duration-300 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-md border-gray-200 shadow-sm"
              : "bg-transparent border-transparent shadow-none"
          }`}
        >
          {/* Logo with Camera Icon and Text */}
          <a
            href="#"
            className="flex flex-col items-center gap-0.5 flex-shrink-0"
          >
            <h1 className="text-[16px] font-semibold text-gray-800 leading-tight whitespace-nowrap">
              Krishna
            </h1>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href="#home"
              className="text-gray-800 hover:text-black transition-colors font-medium text-xs"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-800 hover:text-black transition-colors font-medium text-xs"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-gray-800 hover:text-black transition-colors font-medium text-xs"
            >
              Portfolio
            </a>
            <a
              href="#faq"
              className="text-gray-800 hover:text-black transition-colors font-medium text-xs"
            >
              FAQs
            </a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block flex-shrink-0">
            <Button className="bg-black text-white hover:bg-gray-900 rounded-4xl px-4 py-1.5 text-xs font-medium">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-50 rounded-xl shadow-sm border border-gray-200 mt-2 px-4 py-3 max-w-3xl w-full mx-auto">
            <nav className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-gray-800 hover:text-black transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-800 hover:text-black transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-gray-800 hover:text-black transition-colors font-medium"
              >
                Portfolio
              </a>
              <a
                href="#faq"
                className="text-gray-800 hover:text-black transition-colors font-medium"
              >
                FAQs
              </a>
              <Button className="bg-black text-white hover:bg-gray-900 w-full rounded-lg">
                Contact
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
