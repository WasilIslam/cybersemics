import type { Metadata } from "next";
import { Dancing_Script, Inter } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Cybersemics.com - Premium Domain | Digital Meaning Systems | Cybernetics + Semiotics",
  description: "Cybersemics.com - Where cybernetics meets semiotics. Study of digital communication, meaning systems, and cyber-physical interactions. Premium domain for sale $5,000 USD.",
  keywords: "cybersemics, cybernetics, semiotics, digital communication, meaning systems, cyber-physical, premium domain, domain for sale, computational semiotics, digital semiotics, information theory, communication theory, artificial intelligence, machine learning, human-computer interaction, digital humanities, media studies, technology philosophy",
  authors: [{ name: "Wasil Islam" }],
  creator: "Wasil Islam",
  publisher: "Cybersemics",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Cybersemics.com - Premium Domain for Digital Meaning Systems",
    description: "Where cybernetics meets semiotics. Study digital communication and meaning systems. Premium domain available for $5,000 USD.",
    url: "https://cybersemics.com",
    siteName: "Cybersemics",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cybersemics - Digital Meaning Systems"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersemics.com - Premium Domain for Digital Meaning Systems",
    description: "Where cybernetics meets semiotics. Premium domain available for $5,000 USD.",
    creator: "@wasilislam456",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://cybersemics.com"
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#000000",
  category: "Technology",
  classification: "Technology, Education, Domain Sales",
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    "DC.title": "Cybersemics - Digital Meaning Systems",
    "DC.creator": "Wasil Islam",
    "DC.subject": "Cybernetics, Semiotics, Digital Communication",
    "DC.description": "Study of digital meaning systems combining cybernetics and semiotics",
    "DC.language": "en",
    "DC.format": "text/html",
    "DC.type": "Interactive Resource"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://cybersemics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Cybersemics",
                "description": "Digital meaning systems - where cybernetics meets semiotics",
                "url": "https://cybersemics.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://cybersemics.com/?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                },
                "author": {
                  "@type": "Person",
                  "name": "Wasil Islam",
                  "email": "wasilislam456@gmail.com",
                  "url": "https://cuthours.com"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Cybersemics",
                  "url": "https://cybersemics.com"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Cybersemics.com Domain",
                "description": "Premium domain name for digital meaning systems, cybernetics, and semiotics research",
                "brand": {
                  "@type": "Brand",
                  "name": "Cybersemics"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "5000",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Person",
                    "name": "Wasil Islam",
                    "email": "wasilislam456@gmail.com"
                  }
                },
                "category": "Domain Names"
              },
              {
                "@context": "https://schema.org",
                "@type": "DefinedTerm",
                "name": "Cybersemics",
                "description": "The interdisciplinary study combining cybernetics and semiotics to understand digital meaning systems",
                "inDefinedTermSet": {
                  "@type": "DefinedTermSet",
                  "name": "Digital Communication Terms"
                }
              }
            ])
          }}
        />
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
      </head>
      <body className={`${dancingScript.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
