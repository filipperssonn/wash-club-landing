// Platser-sektion med 3 kort som visar var Wash Club finns
export default function Locations() {
  const locations = [
    {
      name: "Skoghall",
      address: "Skoghall, Sverige",
      description:
        "Vår första plats i Skoghall. Enkelt att hitta och alltid öppet.",
      coordinates: "59.2667,13.4333", // Ungefärliga koordinater för Skoghall
      mapUrl: "https://maps.app.goo.gl/1JiARkbwKJSg4AhU8",
    },
    {
      name: "Säffle",
      address: "Säffle, Sverige",
      description:
        "Strategiskt placerad i Säffle för enkel åtkomst från hela området.",
      coordinates: "59.0333,12.9333", // Ungefärliga koordinater för Säffle
      mapUrl: "https://maps.app.goo.gl/PoCoNftmjbb6cMVj7",
    },
    {
      name: "Åmål",
      address: "Åmål, Sverige",
      description:
        "Vår senaste tillägg i Åmål. Modern anläggning med allt du behöver.",
      coordinates: "59.0500,12.7000", // Ungefärliga koordinater för Åmål
      mapUrl: "https://maps.app.goo.gl/1iXzAJPexTAHmipi6",
    },
  ];

  return (
    <section id="platser" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sektionsrubrik */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Våra platser
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vi finns i tre strategiskt placerade platser för din bekvämlighet
          </p>
        </div>

        {/* Platser-grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Plats-bild (placeholder) eller karta för Säffle */}
              {location.name === "Säffle" ? (
                <div className="h-48 relative rounded-t-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2047.1249201152525!2d12.915197535378724!3d59.130310225006404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4644a7ae75505daf%3A0xe8ae3946de1b8a24!2sWash%20Club!5e0!3m2!1ssv!2sse!4v1753734530738!5m2!1ssv!2sse"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              ) : location.name === "Skoghall" ? (
                <div className="h-48 relative rounded-t-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.5093097030033!2d13.47376727781784!3d59.32445031141063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465cb3d60e03340b%3A0xfbd67e163c2cfcfb!2sWash%20Club!5e0!3m2!1ssv!2sse!4v1753734906266!5m2!1ssv!2sse"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              ) : location.name === "Åmål" ? (
                <div className="h-48 relative rounded-t-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2051.5914749422554!2d12.673380677807938!3d59.05555283290443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4644a3aba00b8fe1%3A0x27f7ea6736506d2!2sWash%20Club!5e0!3m2!1ssv!2sse!4v1753734978493!5m2!1ssv!2sse"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-xl flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-blue-600"
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
                </div>
              )}

              {/* Plats-information */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {location.name}
                </h3>
                <p className="text-gray-600 mb-4">{location.description}</p>

                {/* Adress */}
                <div className="flex items-center mb-4">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2"
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
                  <span className="text-gray-700">{location.address}</span>
                </div>

                {/* Öppettider */}
                <div className="flex items-center mb-6">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2"
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
                  <span className="text-gray-700">7-22 alla dagar</span>
                </div>

                {/* Google Maps-knapp */}
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Visa på karta
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Extra information */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Alla våra platser är utrustade med moderna automatiska tvättsystem
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
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
              Automatiska system
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
              Enkel åtkomst
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
              Gratis parkering
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
