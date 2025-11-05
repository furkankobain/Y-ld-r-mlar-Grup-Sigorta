import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Yıldırımlar Grup Sigorta: Trafik, Kasko, Konut/DASK, Sağlık ve daha fazlası için hızlı teklif ve güvenilir sigorta çözümleri.",
  openGraph: {
    type: "website",
    url: siteConfig.baseUrl,
    title: siteConfig.name,
    description:
      "Tüm sigorta branşlarında karşılaştırmalı teklif ve uzman acente desteği.",
    siteName: siteConfig.name,
    locale: "tr_TR",
  },
  alternates: {
    canonical: siteConfig.baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    telephone: siteConfig.phone.display,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "TR",
    },
    openingHours: siteConfig.openingHours,
    sameAs: siteConfig.sameAs,
  };

  const GA = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900`}>
        <Header />
        <main className="min-h-[calc(100vh-280px)]">{children}</main>
        <Footer />
        <FloatingCTA />
        {GA && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${GA}');`,
              }}
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
