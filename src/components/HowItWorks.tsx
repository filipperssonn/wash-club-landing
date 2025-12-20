"use client";

// Timeline-sektion som visar hur biltvätten fungerar
export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Välj program",
      description:
        "Välj mellan våra olika tvättprogram beroende på vad din bil behöver.",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
    },
    {
      id: 2,
      title: "Kör in",
      description: "Kör försiktigt in i anläggningen enligt anvisningarna.",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
    },
    {
      id: 3,
      title: "Vi tvättar",
      description:
        "Våra automatiska system tar hand om resten - snabbt och noggrant.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Kör ut",
      description: "När tvätten är klar kör du ut med en ren och fräsch bil.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="så-fungerar-det" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sektionsrubrik */}
        <div className="text-center mb-16 lg:mb-32">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Så fungerar det
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enkelt och snabbt - efter några minuter är din bil ren och fräsch!
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Kontinuerlig horisontell linje */}
          <div className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-blue-200 w-full hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className={`relative ${index % 2 === 0 ? 'lg:flex lg:items-start lg:justify-center' : 'lg:flex lg:items-end lg:justify-center'}`}>
                {/* Ikon och innehåll */}
                <div className={`text-center ${index % 2 === 0 ? 'lg:pb-8' : 'lg:pt-8'} ${index % 2 === 0 ? 'lg:transform lg:-translate-y-24' : 'lg:transform lg:translate-y-24'}`}>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 relative z-10">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Siffra på linjen */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gray-100 border border-blue-200 text-gray-500 rounded-full flex items-center justify-center text-center text-base font-bold z-20">
                  <div className="flex items-center justify-center w-full h-full">
                    {step.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA-sektion */}
        <div className="text-center mt-16 lg:mt-32">
          <p className="text-gray-600 mb-6">
            Redo att testa? Se våra priser!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("priser");
              if (element) {
                const navbarHeight = 96; // Navbarens höjd (h-24 = 96px)
                const elementPosition = element.offsetTop - navbarHeight;
                window.scrollTo({
                  top: elementPosition,
                  behavior: "smooth",
                });
              }
            }}
            className="btn-accent"
            aria-label="Se våra priser för automatisk biltvätt"
          >
            Se våra priser
          </button>
        </div>
      </div>
    </section>
  );
}
