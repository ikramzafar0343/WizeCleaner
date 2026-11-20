import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { nourd } from "@/shared/config/fonts";
import { site } from "@/shared/config/site";
import { MotionProvider } from "@/shared/motion/MotionProvider";
import { ScrollWiper } from "@/shared/motion/ScrollWiper";
import { FloatingWhatsApp } from "@/shared/ui/FloatingWhatsApp";
import { Footer } from "@/shared/ui/Footer";
import { Header } from "@/shared/ui/Header";
import { PagePreloader } from "@/shared/ui/PagePreloader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Cleaning Services in ${site.city}`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_PK",
    title: `${site.name} — Cleaning Services in ${site.city}`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f3d2e",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HouseCleaningService",
  name: site.legalName,
  url: site.url,
  telephone: `+${site.whatsapp}`,
  email: site.email,
  address: { "@type": "PostalAddress", streetAddress: site.address, addressLocality: site.city, addressCountry: site.country },
  areaServed: site.areas.map((a) => a),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={nourd.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <MotionProvider>
          <PagePreloader />
          <Header />
          <main id="main" className="relative isolate">
            <ScrollWiper />
            <div className="relative z-10">{children}</div>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </MotionProvider>
      </body>
    </html>
  );
}
