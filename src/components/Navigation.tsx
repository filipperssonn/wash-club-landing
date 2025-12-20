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
        <div className="flex items-center justify-between relative h-28 md:h-32">
          {/* Vänster navigation-länkar */}
          <div className="hidden md:flex space-x-4 flex-1 justify-end pr-8">
            <button
              onClick={() => scrollToSection("så-fungerar-det")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 relative group"
              aria-label="Gå till sektion: Så fungerar det"
            >
              Så fungerar det
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("tjänster")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 relative group"
              aria-label="Gå till sektion: Våra tjänster"
            >
              Tjänster
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("priser")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 relative group"
              aria-label="Gå till sektion: Våra priser"
            >
              Priser
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
          </div>

          {/* Centrerad logo med klickfunktionalitet */}
          <div className="hidden md:flex items-center justify-center flex-1">
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

          {/* Mobil centrerad logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
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
              onClick={() => scrollToSection("platser")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 relative group"
              aria-label="Gå till sektion: Våra platser"
            >
              Platser
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 relative group"
              aria-label="Gå till sektion: Vanliga frågor"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 relative group"
              aria-label="Gå till sektion: Kontakta oss"
            >
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
          </div>

          {/* Mobil-meny knapp - behåller sin position till höger */}
          <div className="md:hidden flex-shrink-0 z-10 ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 transition-all duration-200 hover:scale-110"
              aria-label="Öppna/stäng mobilmeny"
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
            isMobileMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200 rounded-b-2xl mx-2 mb-2">
            <div className="px-6 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("så-fungerar-det")}
                className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 transition-all duration-200 py-3 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-xl px-4 -mx-4 group"
                aria-label="Gå till sektion: Så fungerar det"
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
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
                aria-label="Gå till sektion: Våra tjänster"
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
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
                aria-label="Gå till sektion: Våra priser"
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
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
                aria-label="Gå till sektion: Våra platser"
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
                onClick={() => scrollToSection("faq")}
                className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 transition-all duration-200 py-3 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-xl px-4 -mx-4 group"
                aria-label="Gå till sektion: Vanliga frågor"
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                FAQ
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
                aria-label="Gå till sektion: Kontakta oss"
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
