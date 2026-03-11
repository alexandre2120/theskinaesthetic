import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const GA_ID = "AW-18008215319";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://theskinaesthetic.pt";

export const metadata: Metadata = {
  // --- Core Meta ---
  title: "The Skin Aesthetic | Jessica Jaques — Massagens e Tratamentos Corporais em Lisboa e Setúbal",
  description:
    "Massagens terapêuticas e tratamentos corporais ao domicílio em Lisboa e Setúbal. Massagem relaxante, terapêutica, drenagem linfática, redutora, gestantes e tratamento de estrias. Mais de 8 anos de experiência e 500+ clientes satisfeitas. Consulta de avaliação gratuita.",
  keywords: [
    "massagem relaxante Lisboa",
    "massagem terapêutica ao domicílio",
    "drenagem linfática Lisboa",
    "drenagem linfática Setúbal",
    "massagem redutora modeladora",
    "massagem para gestantes",
    "tratamento de estrias",
    "microderme regenerativa",
    "massagem ao domicílio Lisboa",
    "massagem ao domicílio Setúbal",
    "massoterapeuta ao domicílio",
    "Jessica Jaques",
    "The Skin Aesthetic",
    "massagens ao domicílio",
  ],

  // --- Canonical URL ---
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },

  // --- OpenGraph (Facebook, LinkedIn, AI systems) ---
  openGraph: {
    title: "The Skin Aesthetic | Jessica Jaques — Massagens e Bem-Estar ao Domicílio",
    description:
      "Massagens terapêuticas e tratamentos corporais personalizados ao domicílio em Lisboa e Setúbal. Relaxante, terapêutica, drenagem linfática e tratamento de estrias. 500+ clientes satisfeitas. Consulta gratuita.",
    type: "website",
    locale: "pt_PT",
    alternateLocale: ["en_US", "es_ES"],
    url: SITE_URL,
    siteName: "The Skin Aesthetic",
    images: [
      {
        url: `${SITE_URL}/jessica-jaques.png`,
        width: 1200,
        height: 630,
        alt: "Jessica Jaques — Massoterapeuta e Esteticista em Lisboa e Setúbal",
        type: "image/png",
      },
    ],
  },

  // --- Twitter / X Card ---
  twitter: {
    card: "summary_large_image",
    title: "The Skin Aesthetic | Massagens e Tratamentos Corporais ao Domicílio",
    description:
      "Massagem relaxante, terapêutica, drenagem linfática e tratamento de estrias. Ao domicílio em Lisboa e Setúbal. Consulta gratuita.",
    images: [`${SITE_URL}/jessica-jaques.png`],
  },

  // --- Robots ---
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

  // --- Other ---
  category: "beauty",
  creator: "Jessica Jaques",
  publisher: "The Skin Aesthetic",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    "geo.region": "PT-11",
    "geo.placename": "Lisboa",
    "geo.position": "38.7223;-9.1393",
    "ICBM": "38.7223, -9.1393",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${cormorant.variable} ${raleway.variable} antialiased`}
      >
        {/* Google Ads tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
