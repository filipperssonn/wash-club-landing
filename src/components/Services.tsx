"use client";

// Tjänster-sektion med 3 kort och CTA-knappar
export default function Services() {
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

  const services = [
    {
      title: "Företagskunder",
      description:
        "Vill du ha en samlingsfaktura? Eller enbart kunna tvätta förvalda program? Kontakta oss för mer information.",
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      ctaText: "Kontakta oss",
      ctaAction: () => scrollToSection("kontakt"),
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Se våra priser",
      description:
        "Välj mellan våra tre tvättprogram: Bra, Bättre eller Bäst. Allt från grundläggande tvätt till komplett rengöring. Med eller utan borstar.",
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      ctaText: "Se priser",
      ctaAction: () => scrollToSection("priser"),
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      title: "Våra platser",
      description:
        "Vi finns i Skoghall, Säffle och Åmål. Hitta den plats som passar dig bäst.",
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      ctaText: "Se platser",
      ctaAction: () => scrollToSection("platser"),
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section id="tjänster" className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sektionsrubrik */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Våra tjänster
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Vi erbjuder professionella biltvättar för alla behov
          </p>
        </div>

        {/* Tjänster-grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border border-gray-200`}
            >
              {/* Ikon */}
              <div className={`${service.iconColor} mb-6`}>{service.icon}</div>

              {/* Innehåll */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>

              {/* CTA-knapp */}
              <div className="mt-6">
                <button
                  onClick={service.ctaAction}
                  className="btn-primary w-full"
                  aria-label={`${service.ctaText} för ${service.title.toLowerCase()}`}
                >
                  {service.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Extra information */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Alla våra tvättar är miljövänliga och använder moderna tekniker.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Miljövänligt
            </span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Snabbt
            </span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Enkelt
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
