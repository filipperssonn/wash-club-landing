import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = GeistSans;
const geistMono = GeistMono;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: 'Wash Club - Din lokala biltvätt',
  description: 'Wash Club erbjuder professionell biltvätt i Skoghall, Säffle och Åmål. Miljövänlig och effektiv biltvätt med moderna tvätthallar.',
  keywords: 'biltvätt, wash club, automatisk biltvätt, miljövänlig biltvätt, skoghall, säffle, åmål',
  authors: [{ name: 'Wash Club' }],
  creator: 'Wash Club',
  publisher: 'Wash Club',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Wash Club - Din lokala biltvätt',
    description: 'Wash Club erbjuder professionell biltvätt i Skoghall, Säffle och Åmål. Miljövänlig och effektiv biltvätt med moderna tvätthallar.',
    url: 'https://washclub.se',
    siteName: 'Wash Club',
    locale: 'sv_SE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}