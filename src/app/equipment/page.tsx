import Equipment from '@/components/equipment/Equipment';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Construction Equipment | Sah Constructions",
  description:
    "Explore Sah Constructions' range of high-performance construction equipment, including earthmoving machinery, material handling tools, and roadwork solutions. Designed for efficiency, durability, and optimal project performance.",
  keywords: [
    "construction equipment",
    "earthmoving machinery",
    "material handling equipment",
    "roadwork machines",
    "industrial construction tools",
    "heavy equipment India",
    "building machinery",
    "Sah Constructions equipment"
  ],
  authors: [{ name: "Sah Constructions" }],
  creator: "Sah Constructions",
  publisher: "Sah Constructions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sahconstructions.com/equipment",
    title: "Construction Equipment | Sah Constructions",
    description:
      "Discover Sah Constructions' advanced construction equipment for earthmoving, material handling, and roadwork projects across India.",
    siteName: "Sah Constructions",
    images: [
      {
        url: "/images/equipment-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sah Constructions Equipment Fleet",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Equipment | Sah Constructions",
    description:
      "Explore Sah Constructions' range of high-performance construction equipment for projects across India.",
    images: ["/images/equipment-twitter.jpg"],
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
    canonical: "https://sahconstructions.com/equipment",
  },
};


export default function ProjectPage() {
  return <Equipment />;
}