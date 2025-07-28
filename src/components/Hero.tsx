"use client";

// Hero-sektion med huvudbudskap och CTA-knappar
export default function Hero() {
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
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      {/* Bakgrundsdekor */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100 rounded-full opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Huvudrubrik */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Automatiska <span className="text-blue-600">biltvättar</span>
            <br />
            för personbilar
          </h1>

          {/* Underrubrik */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Snabbt, enkelt och miljövänligt. Vi finns i Skoghall, Säffle och
            Åmål.
          </p>

          {/* Öppettider */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
              <svg
                className="w-5 h-5 text-blue-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-700 font-medium">
                Öppet 7-22 alla dagar
              </span>
            </div>
          </div>

          {/* CTA-knappar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("priser")}
              className="btn-accent text-lg px-8 py-4"
            >
              Se våra priser
            </button>
            <button
              onClick={() => scrollToSection("så-fungerar-det")}
              className="btn-primary text-lg px-8 py-4"
            >
              Så fungerar det
            </button>
          </div>

          {/* Platser */}
          <div className="mt-12">
            <p className="text-gray-500 mb-4">Vi finns i:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Skoghall", "Säffle", "Åmål"].map((plats) => (
                <span
                  key={plats}
                  className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm border border-gray-200"
                >
                  {plats}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-indikator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection("så-fungerar-det")}
          className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-200 p-2 rounded-full hover:bg-white/20"
        >
          <svg
            className="w-6 h-6 text-gray-400 hover:text-blue-600 transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
