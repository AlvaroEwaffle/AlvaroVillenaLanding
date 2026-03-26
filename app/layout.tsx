import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alvarovillena.cl";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Álvaro Villena | Operaciones, sistemas e IA para negocios",
    template: "%s | Álvaro Villena",
  },
  description:
    "Ayudo a empresas y emprendedores a ordenar su operación, mejorar sus procesos y usar IA donde realmente genera impacto.",
  keywords: [
    "operaciones con IA",
    "mejora de procesos chile",
    "consultor operaciones chile",
    "consultoría IA LATAM",
    "implementar IA empresa",
    "diagnóstico de operaciones",
    "automatización para negocios",
    "VilleLab",
    "Álvaro Villena",
    "sistemas para negocios",
    "IA para emprendedores LATAM",
  ],
  authors: [{ name: "Álvaro Villena", url: siteUrl }],
  creator: "Álvaro Villena",
  publisher: "Álvaro Villena",
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
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Álvaro Villena",
    title: "Álvaro Villena | Operaciones, sistemas e IA para negocios",
    description:
      "Ayudo a empresas y emprendedores a ordenar su operación, mejorar sus procesos y usar IA donde realmente genera impacto.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Álvaro Villena — operaciones, sistemas e IA para negocios",
      },
      { url: "/icono.png", width: 512, height: 512, alt: "Álvaro Villena" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Álvaro Villena | Operaciones, sistemas e IA para negocios",
    description:
      "Ayudo a empresas y emprendedores a ordenar su operación y usar IA donde sí genera impacto.",
    creator: "@chokovillena",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-CL": siteUrl,
    },
  },
  icons: {
    icon: [
      { url: "/icono.png", type: "image/png", sizes: "any" },
      { url: "/icono.png", type: "image/png", sizes: "32x32" },
      { url: "/icono.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/icono.png", type: "image/png", sizes: "180x180" }],
    shortcut: "/icono.png",
  },
  other: {
    "msapplication-TileColor": "#0f172a",
    "msapplication-TileImage": "/icono.png",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Álvaro Villena",
  },
};

/* ─── Structured Data (JSON-LD) — server-rendered ─── */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Álvaro Villena | Operaciones, sistemas e IA para negocios",
      description:
        "Ayudo a empresas y emprendedores a ordenar su operación, mejorar sus procesos y usar IA donde realmente genera impacto.",
      inLanguage: "es",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Álvaro Villena | Operaciones, sistemas e IA para negocios",
      description:
        "Ayudo a empresas y emprendedores a ordenar su operación, mejorar sus procesos y usar IA donde realmente genera impacto.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "es",
      dateModified: "2026-03-04",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Álvaro Villena",
      url: siteUrl,
      image: `${siteUrl}/gallery/StandingLookingAtCamera.JPG`,
      jobTitle: "Consultor en operaciones, sistemas e implementación de IA",
      description:
        "Ayudo a empresas y emprendedores a ordenar su operación, mejorar sus procesos y usar IA de forma práctica.",
      knowsAbout: [
        "Agile Project Management",
        "Product Management",
        "AI Implementation",
        "Digital Operations",
        "LATAM Business Strategy",
        "Shape Up Methodology",
        "SaaS Platforms",
        "Process Automation with AI",
      ],
      worksFor: { "@id": `${siteUrl}/#organization` },
      sameAs: [
        "https://www.instagram.com/chokovillena",
        "https://www.linkedin.com/in/alvarovillena",
        "https://x.com/chokovillena",
        "https://www.toptal.com/project-managers/resume/alvaro-villena#B3Zxo1",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Villelabs",
      url: "https://villelab.com",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icono.png`,
        width: 512,
        height: 512,
      },
      founder: { "@id": `${siteUrl}/#person` },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+56920115198",
        email: "alvaro.villena@gmail.com",
        availableLanguage: ["Spanish", "English"],
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Diagnóstico de Operaciones con IA",
      description:
        "Diagnóstico y diseño inicial para empresas y emprendedores que quieren ordenar su operación y usar IA donde realmente hace sentido.",
      provider: { "@id": `${siteUrl}/#person` },
      serviceType: "AI Operations Diagnosis & Business Systems Consulting",
      areaServed: {
        "@type": "Place",
        name: "Chile y Latinoamérica",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de diagnóstico y diseño inicial",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Diagnóstico de Operaciones con IA",
              description:
                "Filtro de fit y diagnóstico inicial para detectar el mejor punto de partida en operaciones, propuestas, follow-up o sistemas con IA.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <head>
        {/* Structured Data — server-rendered JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PBTHC5VK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <AmbientBackground />
        <div className="relative z-10">
          {children}
        </div>

        <WhatsAppFloatButton />
        <ExitIntentPopup />

        {/* Google Tag Manager — deferred to after interactive */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PBTHC5VK');`,
          }}
        />
      </body>
    </html>
  );
}
