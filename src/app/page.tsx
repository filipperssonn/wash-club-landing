// Huvudsida för Wash Club - landningssida
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Locations from "../components/Locations";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
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

      {/* Kontaktformulär */}
      <ContactForm />

      {/* Footer med 3 kolumner */}
      <Footer />
    </div>
  );
}
