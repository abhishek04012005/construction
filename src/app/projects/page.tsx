import Projects from '@/components/project/Project';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Construction Projects | Sah Constructions Portfolio",
  description:
    "Explore Sah Constructions' diverse portfolio of completed and ongoing projects across India, including residential, commercial, industrial, and infrastructure developments. Delivering quality, innovation, and on-time execution since 2012.",
  keywords: [
    "construction projects",
    "residential construction India",
    "commercial construction projects",
    "industrial construction",
    "infrastructure development projects",
    "building contractors portfolio",
    "Sah Constructions projects",
    "completed construction works"
  ],
  authors: [{ name: "Sah Constructions" }],
  creator: "Sah Constructions",
  publisher: "Sah Constructions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sahconstructions.com/projects",
    title: "Construction Projects | Sah Constructions Portfolio",
    description:
      "View Sah Constructions' portfolio of residential, commercial, industrial, and infrastructure projects across India.",
    siteName: "Sah Constructions",
    images: [
      {
        url: "/images/projects-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sah Constructions Project Showcase",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Projects | Sah Constructions",
    description:
      "Explore Sah Constructions' completed and ongoing projects across India, from residential to large-scale infrastructure.",
    images: ["/images/projects-twitter.jpg"],
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
    canonical: "https://sahconstructions.com/projects",
  },
};


export default function ProjectPage() {
  return <Projects />;
}