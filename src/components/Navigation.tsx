"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Navigation-komponent som följer med när man scrollar
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Kollar om användaren har scrollat för att ändra navigationens utseende
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll till sektioner
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 96; // Navbarens höjd (h-24 = 96px)
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    // Stäng mobil-menyn efter klick
    setIsMobileMenuOpen(false);
  };

  // Scroll till toppen när man klickar på logotypen
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Vänster navigation-länkar */}
          <div className="hidden md:flex space-x-4 flex-1 justify-end pr-8">
            <button
              onClick={() => scrollToSection("så-fungerar-det")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 relative group"
            >
              Så fungerar det
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("tjänster")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 relative group"
            >
              Tjänster
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
          </div>

          {/* Centrerad logo med klickfunktionalitet */}
          <div className="flex items-center justify-center flex-1 md:flex-none">
            <button
              onClick={scrollToTop}
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src="/logo.png"
                alt="Wash Club"
                width={450}
                height={135}
                className="h-36 w-auto"
                priority
              />
            </button>
          </div>

          {/* Höger navigation-länkar */}
          <div className="hidden md:flex space-x-4 flex-1 justify-start pl-8">
            <button
              onClick={() => scrollToSection("priser")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 relative group"
            >
              Priser
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("platser")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 relative group"
            >
              Platser
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 relative group"
            >
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
          </div>

          {/* Mobil-meny knapp */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 transition-all duration-200 hover:scale-110"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobil dropdown-meny med animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200 rounded-b-2xl mx-2 mb-2">
            <div className="px-6 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("så-fungerar-det")}
                className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 transition-all duration-200 py-3 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-xl px-4 -mx-4 group"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Så fungerar det
                <svg
                  className="w-4 h-4 ml-auto text-gray-300 group-hover:text-blue-600 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection("tjänster")}
                className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 transition-all duration-200 py-3 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-xl px-4 -mx-4 group"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
                Tjänster
                <svg
                  className="w-4 h-4 ml-auto text-gray-300 group-hover:text-blue-600 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection("priser")}
                className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 transition-all duration-200 py-3 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-xl px-4 -mx-4 group"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
                Priser
                <svg
                  className="w-4 h-4 ml-auto text-gray-300 group-hover:text-blue-600 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection("platser")}
                className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 transition-all duration-200 py-3 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-xl px-4 -mx-4 group"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Platser
                <svg
                  className="w-4 h-4 ml-auto text-gray-300 group-hover:text-blue-600 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 transition-all duration-200 py-3 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-xl px-4 -mx-4 group"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Kontakt
                <svg
                  className="w-4 h-4 ml-auto text-gray-300 group-hover:text-blue-600 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            {/* Extra utrymme längst ner */}
            <div className="px-6 pb-6">
              <div className="h-4"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
