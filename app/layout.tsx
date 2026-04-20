import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alvarovillena.cl";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Álvaro Villena | Asesor senior de tecnología y producto",
    template: "%s | Álvaro Villena",
  },
  description:
    "Acompaño a empresas medianas chilenas a ordenar sus procesos, implementar tecnología que su equipo sí usa y preparar la operación para la siguiente generación.",
  keywords: [
    "asesor tecnologia chile",
    "consultor producto chile",
    "empresa familiar chile",
    "modernizacion empresas medianas",
    "fractional CTO chile",
    "fractional CPO chile",
    "diagnostico tecnologia empresa",
    "consultoria senior producto",
    "VilleLab",
    "Álvaro Villena",
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
    title: "Álvaro Villena | Asesor senior de tecnología y producto",
    description:
      "Acompaño a empresas medianas chilenas a modernizarse sin estrellarse. Ex-LATAM, ex-PepsiCo, consultor Toptal.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Álvaro Villena — asesor senior de tecnología y producto",
      },
      { url: "/icono.png", width: 512, height: 512, alt: "Álvaro Villena" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Álvaro Villena | Asesor senior de tecnología y producto",
    description:
      "Acompaño a empresas medianas chilenas a ordenar procesos e implementar tecnología que el equipo sí usa.",
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
    "msapplication-TileColor": "#ffffff",
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
      name: "Álvaro Villena | Asesor senior de tecnología y producto",
      description:
        "Acompaño a empresas medianas chilenas a ordenar sus procesos, implementar tecnología que su equipo sí usa y preparar la operación para la siguiente generación.",
      inLanguage: "es",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Álvaro Villena | Asesor senior de tecnología y producto",
      description:
        "Acompaño a empresas medianas chilenas a modernizarse sin estrellarse.",
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
      jobTitle: "Asesor senior de tecnología y producto",
      description:
        "Ayudo a empresas medianas chilenas a ordenar procesos, tomar mejores decisiones tecnológicas y preparar su operación para crecer.",
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
      name: "Diagnóstico de tecnología y producto",
      description:
        "Diagnóstico de dos semanas para empresas medianas chilenas que necesitan ordenar procesos, sistemas y prioridades tecnológicas.",
      provider: { "@id": `${siteUrl}/#person` },
      serviceType: "Technology and Product Advisory",
      areaServed: {
        "@type": "Place",
        name: "Chile y Latinoamérica",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de consultoría senior",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Diagnóstico de tecnología y producto",
              description:
                "Revisión ejecutiva de operación, sistemas, procesos y hoja de ruta de 90 días.",
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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PBTHC5VK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}

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
        <Script
          id="gclid-capture"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var p=new URLSearchParams(window.location.search);var g=p.get('gclid');if(g){localStorage.setItem('gclid',g);var e=new Date();e.setDate(e.getDate()+90);document.cookie='gclid='+encodeURIComponent(g)+'; expires='+e.toUTCString()+'; path=/; Secure; SameSite=Lax';}})();`,
          }}
        />
      </body>
    </html>
  );
}
