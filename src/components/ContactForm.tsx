"use client";

import { useState } from "react";

// Kontaktformulär-komponent
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Hantera input-ändringar
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Hantera formulär-submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Här skulle normalt skickas data till en server
      // För nu simulerar vi en lyckad submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sektionsrubrik */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kontakta oss
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Har du frågor eller vill boka en tid? Fyll i formuläret nedan så
            återkommer vi så snart som möjligt.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Kontaktinformation */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Kontaktinformation
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
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
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Email</p>
                  <a
                    href="mailto:info@washclub.se"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    info@washclub.se
                  </a>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
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
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Telefon</p>
                  <a
                    href="tel:0727420700"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    072 742 07 00
                  </a>
                </div>
              </div>

              {/* Platser */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
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
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">
                    Våra platser
                  </p>
                  <div className="text-gray-700 space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">Skoghall</p>
                      <p className="text-sm text-gray-700">
                        Gamla Hovlandavägen 3, 663 32 Skoghall
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Säffle</p>
                      <p className="text-sm text-gray-700">
                        Järnvägsgatan 14, 661 30 Säffle
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Åmål</p>
                      <p className="text-sm text-gray-700">
                        Östra Åsenvägen 1, 662 35 Åmål
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kontaktformulär */}
          <div className="bg-gray-200 rounded-xl p-8 shadow-lg border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Namn */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Namn *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Ditt namn"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email-adress *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500"
                  placeholder="din.email@example.com"
                />
              </div>

              {/* Ämne */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Ämne *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Vad gäller din fråga?"
                />
              </div>

              {/* Meddelande */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Meddelande *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Skriv ditt meddelande här..."
                />
              </div>

              {/* Submit-knapp */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={isSubmitting ? "Skickar meddelande..." : "Skicka kontaktformulär"}
              >
                {isSubmitting ? "Skickar..." : "Skicka meddelande"}
              </button>

              {/* Status-meddelanden */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Tack för ditt meddelande! Vi återkommer så snart som
                    möjligt.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    Ett fel uppstod. Försök igen eller kontakta oss direkt.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
