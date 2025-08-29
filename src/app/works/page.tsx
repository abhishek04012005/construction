import Work from '@/components/work/Work';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Construction Works | Sah Constructions Expertise",
  description:
    "Discover Sah Constructions' wide range of construction works, from residential and commercial builds to industrial and infrastructure developments. Showcasing quality craftsmanship, innovation, and timely delivery across India.",
  keywords: [
    "construction works",
    "residential construction works",
    "commercial building works",
    "industrial construction services",
    "infrastructure development works",
    "building contractors India",
    "Sah Constructions works",
    "completed construction services"
  ],
  authors: [{ name: "Sah Constructions" }],
  creator: "Sah Constructions",
  publisher: "Sah Constructions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sahconstructions.com/works",
    title: "Construction Works | Sah Constructions Expertise",
    description:
      "Explore Sah Constructions' portfolio of residential, commercial, industrial, and infrastructure works across India.",
    siteName: "Sah Constructions",
    images: [
      {
        url: "/images/works-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sah Constructions Works Showcase",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Works | Sah Constructions",
    description:
      "View Sah Constructions' completed and ongoing works across India, from residential to large-scale infrastructure.",
    images: ["/images/works-twitter.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://sahconstructions.com/works",
  },
};


export default function WorkPage() {
  return <Work />;
}