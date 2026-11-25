import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CLINIC_NAP } from "@/data/clinicData";
import { Navbar } from "@/components/layout/Navbar";
import { CredentialsStrip } from "@/components/home/CredentialsStrip";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: `${CLINIC_NAP.name} | Advanced Gentle Dentistry & Implants`,
  description: "Bespoke dental care in Bengaluru. Specializing in computer-guided dental implants, Invisalign, smile makeovers, and same-day emergency toothache relief. DCI registered specialists.",
  keywords: ["Dentist in Bengaluru", "Richmond Road Dental Clinic", "Dental Implants Bangalore", "Invisalign Bangalore", "Emergency Dentist Bengaluru"],
  openGraph: {
    title: `${CLINIC_NAP.name} — Calm, Pain-Free Dentistry`,
    description: "Accepting new patients. Highly qualified DCI registered faculty with international affiliations.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    "name": CLINIC_NAP.name,
    "legalName": CLINIC_NAP.legalName,
    "telephone": CLINIC_NAP.phone,
    "emergencyTelephone": CLINIC_NAP.emergencyPhone,
    "email": CLINIC_NAP.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CLINIC_NAP.addressStreet,
      "addressLocality": CLINIC_NAP.addressLocality,
      "addressRegion": CLINIC_NAP.addressRegion,
      "postalCode": CLINIC_NAP.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9667,
      "longitude": 77.6033
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": CLINIC_NAP.googleRating.toString(),
      "reviewCount": CLINIC_NAP.googleReviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "₹₹ - ₹₹₹",
    "hasMap": "https://maps.google.com/?q=Richmond+Road+Bangalore"
  };

  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FBF9F5] text-[#192231] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        {/* Credential strip permanently visible before footer across entire site */}
        <CredentialsStrip />
        <Footer />
      </body>
    </html>
  );
}
