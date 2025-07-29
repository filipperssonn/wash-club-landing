import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wash Club - Din automatiska biltvätt i Skoghall, Säffle & Åmål",
  description:
    "Professionella automatiska biltvättar i Skoghall, Säffle och Åmål. Snabbt, enkelt och miljövänligt. Öppet 7-22 alla dagar.",
  keywords: "biltvätt, automatisk biltvätt, Skoghall, Säffle, Åmål, car wash, tvättprogram, pris",
  authors: [{ name: "Wash Club Nordic AB" }],
  creator: "Wash Club Nordic AB",
  publisher: "Wash Club Nordic AB",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://washclub.se"),
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: "#1e40af",
  openGraph: {
    title: "Wash Club - Automatiska biltvättar i Skoghall, Säffle & Åmål",
    description: "Professionella automatiska biltvättar i Skoghall, Säffle och Åmål. Snabbt, enkelt och miljövänligt.",
    url: "https://washclub.se",
    siteName: "Wash Club",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 450,
        height: 135,
        alt: "Wash Club logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wash Club - Automatiska biltvättar",
    description: "Professionella automatiska biltvättar i Skoghall, Säffle och Åmål.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
