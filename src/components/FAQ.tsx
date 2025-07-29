"use client";

import { useState } from "react";

// FAQ-sektion med vanliga frågor
export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Hur fungerar automatisk biltvätt?",
      answer: "Du väljer tvättprogram, kör försiktigt in i anläggningen, och våra automatiska system tar hand om resten. Processen tar bara några minuter och din bil kommer ut ren och fräsch."
    },
    {
      question: "Vilka tvättprogram erbjuder ni?",
      answer: "Vi har tre tvättprogram: Bra (149kr), Bättre (199kr) och Bäst (249kr). Alla program inkluderar grundläggande tvätt, men de dyrare programmen har fler steg som fälgtvätt, underspolning och vaxpolering."
    },
    {
      question: "Kan jag tvätta med eller utan borstar?",
      answer: "På våra tvättar Bra och Bättre kan du välja mellan tvätt med eller utan borstar utan extra kostnad. Bäst-programmet använder borstar för att vaxpoleringen ska fungera optimalt."
    },
    {
      question: "Vilka öppettider har ni?",
      answer: "Vi är öppna 7-22 alla dagar, året runt. Du kan komma förbi när det passar dig bäst."
    },
    {
      question: "Varför ska jag tvätta hos er?",
      answer: "Förutom att det är otillåtet att tvätta sin bil på uppfarten (enligt miljöbalken) så erbjuder vi professionell utrustning, miljövänliga produkter och korrekt avloppshantering. Våra system är designade för att minimera vattenförbrukning och skydda miljön. Dessutom sparar du tid."
    },
    {
      question: "Är tvätten miljövänlig?",
      answer: "Ja, vi använder miljövänliga produkter och våra system är designade för att minimera vattenförbrukning. Vi bryr oss om miljön precis som du."
    },
    {
      question: "Kan företag använda era tjänster?",
      answer: "Absolut! Vi erbjuder företagslösningar med samlingsfakturor och förvalda program. Kontakta oss för mer information."
    },
    {
      question: "Vad händer om jag inte är nöjd med tvätten?",
      answer: "Vi vill att du ska vara helt nöjd. Om du inte är tillfreds med resultatet, kontakta oss så löser vi det tillsammans."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sektionsrubrik */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vanliga frågor
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Svar på de frågor vi får oftast
          </p>
        </div>

        {/* FAQ-lista */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-200 transition-colors duration-200"
                aria-label={`${openItems.includes(index) ? 'Stäng' : 'Öppna'} fråga: ${faq.question}`}
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA-sektion */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Har du fler frågor? Kontakta oss gärna!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("kontakt");
              if (element) {
                const navbarHeight = 96;
                const elementPosition = element.offsetTop - navbarHeight;
                window.scrollTo({
                  top: elementPosition,
                  behavior: "smooth",
                });
              }
            }}
            className="btn-primary"
            aria-label="Kontakta oss för fler frågor"
          >
            Kontakta oss
          </button>
        </div>
      </div>
    </section>
  );
}