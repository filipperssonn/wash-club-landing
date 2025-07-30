// Huvudsida för Wash Club - landningssida
import dynamic from "next/dynamic";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";

// Lazy load komponenter som inte syns direkt vid första intryck
const HowItWorks = dynamic(() => import("../components/HowItWorks"), {
  loading: () => <div className="py-20 bg-gray-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
});

const Services = dynamic(() => import("../components/Services"), {
  loading: () => <div className="py-20 bg-white flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
});

const Pricing = dynamic(() => import("../components/Pricing"), {
  loading: () => <div className="py-20 bg-gray-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
});

const Locations = dynamic(() => import("../components/Locations"), {
  loading: () => <div className="py-20 bg-white flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
});

const FAQ = dynamic(() => import("../components/FAQ"), {
  loading: () => <div className="py-20 bg-gray-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
});

const ContactForm = dynamic(() => import("../components/ContactForm"), {
  loading: () => <div className="py-20 bg-white flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
});

const Footer = dynamic(() => import("../components/Footer"), {
  loading: () => <div className="py-10 bg-gray-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
  </div>
});

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wash Club",
    "description": "Automatiska biltvättar i Skoghall, Säffle och Åmål",
    "url": "https://washclub.se",
    "telephone": "+46727420700",
    "email": "info@washclub.se",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Gamla Hovlandavägen 3",
        "addressLocality": "Skoghall",
        "postalCode": "663 32",
        "addressCountry": "SE"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Järnvägsgatan 14",
        "addressLocality": "Säffle",
        "postalCode": "661 30",
        "addressCountry": "SE"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Östra Åsenvägen 1",
        "addressLocality": "Åmål",
        "postalCode": "662 35",
        "addressCountry": "SE"
      }
    ],
    "openingHours": "Mo-Su 07:00-22:00",
    "priceRange": "149-249kr",
    "serviceType": "Automatisk biltvätt",
    "areaServed": ["Skoghall", "Säffle", "Åmål"],
    "sameAs": [
      "https://maps.app.goo.gl/1JiARkbwKJSg4AhU8",
      "https://maps.app.goo.gl/PoCoNftmjbb6cMVj7",
      "https://maps.app.goo.gl/1iXzAJPexTAHmipi6"
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur fungerar automatisk biltvätt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Du väljer tvättprogram, kör försiktigt in i anläggningen, och våra automatiska system tar hand om resten. Processen tar bara några minuter och din bil kommer ut ren och fräsch."
        }
      },
      {
        "@type": "Question",
        "name": "Vilka tvättprogram erbjuder ni?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vi har tre tvättprogram: Bra (149kr), Bättre (199kr) och Bäst (249kr). Alla program inkluderar grundläggande tvätt, men de dyrare programmen har fler steg som fälgtvätt, underspolning och vaxpolering."
        }
      },
      {
        "@type": "Question",
        "name": "Kan jag tvätta med eller utan borstar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "På våra tvättar Bra och Bättre kan du välja mellan tvätt med eller utan borstar utan extra kostnad. Bäst-programmet använder borstar för att vaxpoleringen ska fungera optimalt."
        }
      },
      {
        "@type": "Question",
        "name": "Vilka öppettider har ni?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vi är öppna 7-22 alla dagar, året runt. Du kan komma förbi när det passar dig bäst."
        }
      },
      {
        "@type": "Question",
        "name": "Varför ska jag tvätta hos er?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Förutom att det är otillåtet att tvätta sin bil på uppfarten (enligt miljöbalken) så erbjuder vi professionell utrustning, miljövänliga produkter och korrekt avloppshantering. Våra system är designade för att minimera vattenförbrukning och skydda miljön. Dessutom sparar du tid."
        }
      },
      {
        "@type": "Question",
        "name": "Är tvätten miljövänlig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vi använder miljövänliga produkter och våra system är designade för att minimera vattenförbrukning. Vi bryr oss om miljön precis som du."
        }
      },
      {
        "@type": "Question",
        "name": "Kan företag använda era tjänster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolut! Vi erbjuder företagslösningar med samlingsfakturor och förvalda program. Kontakta oss för mer information."
        }
      },
      {
        "@type": "Question",
        "name": "Vad händer om jag inte är nöjd med tvätten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vi vill att du ska vara helt nöjd. Om du inte är tillfreds med resultatet, kontakta oss så löser vi det tillsammans."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="min-h-screen">
        {/* Navigation som följer med när man scrollar */}
        <Navigation />

        {/* Hero-sektion */}
        <Hero />

        {/* Så fungerar det - timeline */}
        <HowItWorks />

        {/* Tjänster - 3 kort med CTA-knappar */}
        <Services />

        {/* Priser - 3 olika tvättprogram */}
        <Pricing />

        {/* Platser - var vi finns */}
        <Locations />

        {/* FAQ-sektion */}
        <FAQ />

        {/* Kontaktformulär */}
        <ContactForm />

        {/* Footer med 3 kolumner */}
        <Footer />
      </div>
    </>
  );
}
