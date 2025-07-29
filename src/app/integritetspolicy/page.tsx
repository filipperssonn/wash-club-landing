import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integritetspolicy - Wash Club",
  description:
    "Wash Club's integritetspolicy för hantering av personuppgifter enligt GDPR.",
};

export default function Integritetspolicy() {
  return (
    <div className="min-h-screen bg-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Integritetspolicy
          </h1>
          <p className="text-lg text-gray-700">
            Wash Club Nordic AB, 559132-1277, Drottninggatan 1, 652 24 Karlstad
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8 border border-gray-200">
          {/* Introduction */}
          <div>
            <p className="text-gray-700 leading-relaxed">
              Wash Club Nordic AB, 559132-1277, Drottninggatan 1, 652 24
              Karlstad, är ansvarigt för behandlingen av din personliga
              information och för att hålla den säker. Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina
              personuppgifter på bästa sätt, som exempelvis brandväggar,
              kryptering och åtkomstkontroll till våra lokaler och filer. Wash
              Club värnar om din personliga integritet och arbetar utifrån
              gällande lagar och regler för personuppgiftsskydd.
            </p>
          </div>

          {/* GDPR Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Om GDPR
            </h2>
            <p className="text-gray-700 mb-4">
              Den 25 maj 2018 började dataskyddsförordningen (GDPR) att gälla.
            </p>
            <p className="text-gray-700 mb-4">Den innebär i korthet:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                en stärkning av din integritet, skydd och tillgång till dina
                uppgifter
              </li>
              <li>ett ökat krav på gallring av uppgifter</li>
              <li>skärpta krav på medgivande för minderåriga</li>
              <li>fri rörlighet av personuppgifter inom EU</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Det viktigaste med den nya lagen är att du får ökade rättigheter
              till dina personuppgifter.
            </p>
          </div>

          {/* Personuppgift Definition */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Vad är en personuppgift?
            </h2>
            <p className="text-gray-700">
              En personuppgift är en uppgift som kan
              identifiera en individ, som till exempel namn, personnummer,
              telefonnummer, e-postadress, lokaliseringsuppgift,
              nätidentifierare, bilder eller videofilmer.
            </p>
          </div>

          {/* Behandling Definition */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Vad är en behandling av en personuppgift?
            </h2>
            <p className="text-gray-700">
              Varje åtgärd eller kombination av åtgärder som utförs med
              personuppgifter är att anse som en behandling. Exempel på
              behandlingar av personuppgifter som vi på Wash Club gör är
              insamling, registrering, organisering, strukturering, lagring,
              bearbetning, ändring, läsning samt användning. Begränsning,
              radering eller förstöring är andra exempel som också utgör
              behandlingar.
            </p>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Vilka delar vi personuppgifter med?
            </h2>
            <p className="text-gray-700 mb-4">
              Dina personuppgifter behandlas konfidentiellt och delas endast med
              tredje part om du gett oss tillåtelse att göra det, alternativt av
              juridiska skäl. Exempel på tredje part är underleverantörer som
              utvecklare av webbplats och kundsystem. Vi hänvisar till vår
              utvecklare av vårt kundsystem, Logos Payment Solutions, för mer
              information om hur dina personuppgifter hanteras:{" "}
              <Link
                href="https://www.logospayments.com"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                www.logospayments.com
              </Link>
              .
            </p>
            <p className="text-gray-700">
              Dessa tredje parter som vi delar dina uppgifter med är skyldiga
              och bundna till samma lagar och förordningar som Wash Club. Detta
              för att hålla dina uppgifter säkra samt för att endast använda
              dessa uppgifter för att uppfylla den tjänst de tillhandahåller
              genom oss. Vi säljer aldrig vidare dina personuppgifter.
            </p>
          </div>

          {/* Data Protection */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Hur skyddar vi dina personuppgifter?
            </h2>
            <p className="text-gray-700 mb-4">
              Vi har inrättat säkerhetsrutiner, tekniska och organisatoriska
              åtgärder för att skydda dina personuppgifter. Vidare har vi
              brandväggar och antivirusprogram för att förhindra intrång.
              Tillgång till de utrymmen där personuppgifterna lagras är
              begränsad.
            </p>
            <p className="text-gray-700">
              Wash Clubs webbplats använder SSL (Secure Socket Layer)
              som är ett protokoll för säker överföring av data via Internet
              (eller andra nätverk). Du behöver kontrollera att SSL inte är
              avstängt i inställningarna för webbläsaren. Det gör att den
              information du skickar via vårt kontaktformulär krypteras och
              förblir privat.
            </p>
          </div>

          {/* Data Collection */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Vilken data vi samlar in och hur den används:
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Kontaktformulär på washclub.se:
                </h3>
                <p className="text-gray-700">
                  Via kontaktformuläret på washclub.se samlar vi in personlig
                  data om du vill kontakta oss (namn, e-post). Vi använder de här uppgifterna för att svara på
                  din förfrågan. Uppgifterna från kontaktformuläret lämnas
                  aldrig vidare till tredje part utan ditt medgivande.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Kunduppgifter:
                </h3>
                <p className="text-gray-700">
                  När du är kund hos oss behöver vi namn, e-post, adress,
                  telefonnummer och registreringsnummer för att kunna kontakta
                  dig och använda de tjänster vi tillhandahåller. Vi hänvisar
                  till vårt kundsystem Logos Payment Solutions för mer information om hur dina
                  kunduppgifter hanteras,{" "}
                  <Link
                    href="https://www.logospayments.com"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    www.logospayments.com
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Dina rättigheter
            </h2>
            <p className="text-gray-700 mb-4">
              Enligt GDPR har du följande rättigheter om vi behandlar dina
              personuppgifter:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Rätt att få tillgång till dina personuppgifter</li>
              <li>
                Rätt att få rättat till felaktiga personuppgifter i våra system
              </li>
              <li>
                Rätt att få raderat dina personuppgifter från våra system,
                såvida vi inte har berättigade intressen eller rättslig
                förpliktelse att fortsätta behandla dem
              </li>
              <li>Rätt att invända mot behandlingen av dina personuppgifter</li>
              <li>Rätt att begränsa behandlingen av dina personuppgifter</li>
              <li>
                Rätt att återkalla ditt samtycke till att vi får använda dina
                personuppgifter
              </li>
              <li>
                Rätt till dataportabilitet (att få ut dina personuppgifter i ett
                maskinläsbart format)
              </li>
              <li>
                Rätt att klaga till Datainspektionen, som är tillsynsmyndighet
              </li>
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Policy för cookies
            </h2>
            <p className="text-gray-700 mb-4">
              En cookie är en liten textfil som lagrar information på din dator.
              Detta används på många webbplatser för att ge dig som besökare
              tillgång till olika funktioner, såsom inloggning och att minnas
              vad du gjorde senast du besökte webbplatsen. På denna webbplats
              använder vi cookies för att förbättra din användarupplevelse.
              Du kan inaktivera cookies genom att justera inställningarna i din
              webbläsare.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Facebook
                </h3>
                <p className="text-gray-700">
                  På washclub.se används en Facebook-pixel för att mäta
                  besöksstatistik och annonsresultat. Den används för att rapportera
                  statistik om personer som sett och interagerat med våra
                  annonser på Facebook. Pixeln kan också användas för att skapa
                  anpassade målgrupper för en viss annonskampanj.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Google Analytics
                </h3>
                <p className="text-gray-700">
                  På washclub.se används cookies från Google Analytics för att
                  mäta besöksstatistik. Google Analytics är en webbanalystjänst
                  tillhandahållen av Google, Inc. (&quot;Google&quot;). Google Analytics
                  använder &quot;cookies&quot;, vilket är textfiler placerade på din
                  dator, för att hjälpa webbplatsen analysera hur användare
                  använder sidan. Informationen som genereras av cookien
                  angående ditt användande av webbplatsen kommer överföras till
                  och lagras av Google på servrar i USA.
                </p>
                <p className="text-gray-700 mt-2">
                  På washclub.se är IP-anonymiseringen aktiverad. Det innebär
                  att din IP-adress kommer avkortas inom arean för
                  medlemsstaterna av den Europeiska Unionen eller andra parter
                  till Agreement on the European Economic Area. Endast i
                  undantagsfall kommer hela IP-adressen först överföras till en
                  Google-server i USA och avkortas där.
                </p>
                <p className="text-gray-700 mt-2">
                  Du kan också välja bort att spåras av Google Analytics i
                  framtiden genom att ladda ned och installera Google Analytics
                  Opt-out Browser Add-on för din nuvarande webbläsare:{" "}
                  <Link
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    tools.google.com/dlpage/gaoptout
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ändringar i integritetspolicy
            </h2>
            <p className="text-gray-700">
              Vi förbehåller oss rätten att göra ändringar i denna
              integritetspolicy när som helst i den utsträckning ändringarna är
              nödvändiga för att åtgärda störningar eller för att uppfylla nya
              legala eller tekniska krav. Alla ändringar kommer att publiceras
              på denna sida.
            </p>
          </div>
        </div>

        {/* Back to home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Tillbaka till startsidan
          </Link>
        </div>
      </div>
    </div>
  );
}
