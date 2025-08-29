import About from '@/components/about/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Sah Constructions | Building Excellence Since 2012",
  description:
    "Sah Constructions is a trusted construction company in India with 13+ years of expertise in commercial, residential, and infrastructure projects. We deliver quality, sustainability, and innovation in every build.",
  keywords: [
    "about Sah Constructions",
    "construction company India",
    "industrial construction",
    "commercial construction",
    "residential projects",
    "infrastructure development",
    "building contractors",
    "project management experts"
  ],
  authors: [{ name: "Sah Constructions" }],
  creator: "Sah Constructions",
  publisher: "Sah Constructions",
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: "https://sahconstructions.com/about",
    title: "About Sah Constructions | Building Excellence Since 2012",
    description:
      "Discover Sah Constructions' journey, values, and expertise in delivering high-quality construction services across India.",
    siteName: "Sah Constructions",
    images: [
      {
        url: "/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sah Constructions Team and Projects",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sah Constructions",
    description:
      "Learn more about Sah Constructions — 13+ years of excellence in commercial, residential, and infrastructure projects across India.",
    images: ["/images/about-twitter.jpg"],
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
    canonical: "https://sahconstructions.com/about",
  },
};


export default function AboutPage() {

  return <About />;
}