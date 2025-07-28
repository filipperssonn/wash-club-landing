# Wash Club - Landningssida

En modern och responsiv landningssida för Wash Club, som driver automatiska biltvättar i Skoghall, Säffle och Åmål.

## 🚀 Funktioner

- **Modern design** med djupblå (#1e40af) och orange/gul (#f59e0b) färgschema
- **Responsiv layout** som anpassar sig till alla skärmstorlekar
- **Smooth scrolling** navigation som följer med när man scrollar
- **Interaktiva komponenter** med hover-effekter och animationer
- **Kontaktformulär** med validering och feedback
- **Google Maps-integration** för platserna

## 📋 Sektioner

1. **Navigation** - Fast navigation som följer med vid scrollning
2. **Hero** - Huvudsektion med CTA-knappar
3. **Så fungerar det** - Timeline med 4 steg för biltvätten
4. **Tjänster** - 3 kort med olika tjänster och CTA-knappar
5. **Priser** - 3 olika tvättprogram (Bra 149kr, Bättre 199kr, Bäst 249kr)
6. **Platser** - 3 kort som visar var Wash Club finns med Google Maps-länkar
7. **Kontaktformulär** - Formulär med namn, email, ämne och meddelande
8. **Footer** - 3 kolumner med kontaktinformation och länkar

## 🛠️ Teknisk stack

- **Next.js 15** - React framework
- **TypeScript** - Typesäker utveckling
- **Tailwind CSS 4** - Utility-first CSS framework
- **React 19** - Moderna React-hooks och funktioner

## 🚀 Kom igång

### Installation

```bash
# Installera dependencies
npm install

# Starta utvecklingsservern
npm run dev
```

### Bygga för produktion

```bash
# Bygg projektet
npm run build

# Starta produktionsservern
npm start
```

## 📁 Projektstruktur

```
src/
├── app/
│   ├── globals.css          # Globala stilar och färgschema
│   ├── layout.tsx           # Root layout med metadata
│   └── page.tsx             # Huvudsida som samlar alla komponenter
└── components/
    ├── Navigation.tsx       # Fast navigation
    ├── Hero.tsx            # Hero-sektion
    ├── HowItWorks.tsx      # Timeline-sektion
    ├── Services.tsx        # Tjänster-kort
    ├── Pricing.tsx         # Priser-sektion
    ├── Locations.tsx       # Platser-kort
    ├── ContactForm.tsx     # Kontaktformulär
    └── Footer.tsx          # Footer-komponent
```

## 🎨 Design

### Färgschema

- **Primär blå**: #1e40af (djupblå)
- **Accent orange/gul**: #f59e0b
- **Bakgrund**: Vita/ljusa bakgrunder
- **Text**: Mörkgrå för läsbarhet

### Responsiv design

- Mobil-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexibla grid-layouts som anpassar sig automatiskt

## 📞 Kontaktinformation

- **Email**: info@washclub.se
- **Telefon**: 072 742 07 00
- **Platser**: Skoghall, Säffle, Åmål

## 🔧 Utveckling

### Korta förklaringar i koden

Alla komponenter har tydliga kommentarer på svenska för att göra koden lätt att förstå, även för någon som inte kan koda.

### Version control

Projektet är konfigurerat för Git och GitHub. Använd följande kommandon:

```bash
# Lägg till ändringar
git add .

# Skapa commit
git commit -m "Beskrivning av ändringar"

# Pusha till GitHub
git push origin main
```

## 📝 Licens

© 2024 Wash Club. Alla rättigheter förbehållna.
