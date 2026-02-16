"use client";

// Priser-sektion med 3 olika tvättprogram
export default function Pricing() {
  const pricingPlans = [
    {
      name: "Bra",
      price: "149kr",
      description: "Med eller utan borstar",
      features: [
        "Förtvätt",
        "Högtrycksspolning",
        "Schamponering",
        "Högtrycksspolning / Borsttvätt",
        "Torkning",
      ],
      popular: false,
      bgColor: "bg-white",
      borderColor: "border-gray-200",
    },
    {
      name: "Bättre",
      price: "199kr",
      description: "Med eller utan borstar",
      features: [
        "Förtvätt",
        "Högtrycksspolning",
        "Fälgtvätt",
        "Schamponering",
        "Högtrycksspolning / Borsttvätt",
        "Underspolning",
        "Torkning",
      ],
      popular: false,
      bgColor: "bg-white",
      borderColor: "border-gray-200",
    },
    {
      name: "Bäst",
      price: "249kr",
      description: "Endast med borstar",
      features: [
        "Förtvätt",
        "Högtrycksspolning",
        "Fälgtvätt",
        "Schamponering",
        "Borsttvätt",
        "Underspolning",
        "Vaxpolering",
        "Torkning",
      ],
      popular: true,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
    },
  ];

  return (
    <section id="priser" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sektionsrubrik */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Våra priser</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vi har tvättprogram för alla behov.
          </p>
        </div>

        {/* Priser-grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.bgColor} ${
                plan.borderColor
              } border-2 rounded-xl p-8 relative ${
                plan.popular ? "transform scale-105 shadow-2xl" : "shadow-xl"
              } hover:shadow-2xl transition-all duration-300`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mest populär
                  </span>
                </div>
              )}

              {/* Plan namn och pris */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Extra val */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-100 via-white to-amber-100 rounded-2xl p-8 border border-blue-300 shadow-xl relative overflow-hidden">
            {/* Dekorativ bakgrund */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-200 to-transparent rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Extra tillval
                </h3>
                <p className="text-gray-600">
                  Komplettera din tvätt med våra extra tillval
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <div className="flex items-start flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        Extra skumavfettning / Insektsmedel
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Avlägsnar tuffa fläckar eller används som insektsmedel
                        beroende på årstid.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-blue-600">
                      40kr
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      Populärt
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative">
                  <div className="flex items-start flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
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
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        Välj med eller utan borstar
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Välj om du vill tvätta med eller utan borstar på våra
                        tvättar Bra och Bättre.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-blue-600">
                      0kr
                    </span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      Valfritt
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra information */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Alla priser visas inklusive moms.
          </p>
        </div>
      </div>
    </section>
  );
}
