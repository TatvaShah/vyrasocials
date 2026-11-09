import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Anton, Inter, Instrument_Serif } from "next/font/google";
import { MotionRoot } from "@/components/motion-root";
import { EVENTBRITE_URL, IG_URL, NAME, SEO, SITE_URL } from "@/lib/content";
import "./globals.css";

const display = Anton({ subsets: ["latin"], weight: "400", display: "swap", variable: "--f-display" });
const body = Inter({ subsets: ["latin"], display: "swap", variable: "--f-body" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], display: "swap", variable: "--f-serif" });

const og = { url: `${SITE_URL}/og.jpg`, width: 1200, height: 630, type: "image/jpeg", alt: "VYRA Socials: Enter the next frame" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO.title,
  description: SEO.description,
  applicationName: NAME,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_CA", url: SITE_URL, siteName: NAME, title: SEO.title, description: SEO.description, images: [og] },
  twitter: { card: "summary_large_image", title: SEO.title, description: SEO.description, images: [{ url: og.url, alt: og.alt }] },
};

export const viewport: Viewport = { themeColor: "#0A0A0B" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  areaServed: "Toronto, ON",
  sameAs: [IG_URL, EVENTBRITE_URL],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        {children}
        <MotionRoot settings={{ enabled: true, smoothScroll: true, intensity: "medium", pin: true }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
