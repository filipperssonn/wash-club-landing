// Footer-komponent med 3 kolumner
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Kolumn 1: Här finns vi */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-400">
              Här finns vi
            </h3>
            <div className="space-y-3">
              <a
                href="#platser"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-blue-400 mr-3"
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
                <span>Skoghall</span>
              </a>
              <a
                href="#platser"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-blue-400 mr-3"
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
                <span>Säffle</span>
              </a>
              <a
                href="#platser"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-blue-400 mr-3"
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
                <span>Åmål</span>
              </a>
            </div>
          </div>

          {/* Kolumn 2: Om oss */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-400">Om oss</h3>
            <div className="space-y-3">
              <a
                href="#priser"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Tvättprogram
              </a>
              <a
                href="/integritetspolicy"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Integritetspolicy
              </a>
            </div>
          </div>

          {/* Kolumn 3: Kontakt */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-400">
              Kontakt
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-blue-400 mr-3"
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
                <a
                  href="mailto:info@washclub.se"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  info@washclub.se
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-blue-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:0727420700"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  072 742 07 00
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center text-gray-500 text-sm">
              © 2024 Wash Club Nordic AB. Alla rättigheter förbehållna.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Villkor
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
