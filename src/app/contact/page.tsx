import Contact from '@/components/contact/Contact';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Contact Sah Constructions | Get in Touch for Your Next Project",
  description:
    "Reach out to Sah Constructions for expert construction services, project consultations, and partnership opportunities across India. Let's build something extraordinary together.",
  keywords: [
    "contact Sah Constructions",
    "construction company contact India",
    "get a construction quote",
    "building contractors India",
    "project consultation",
    "construction services inquiry",
    "infrastructure development contact",
    "commercial and residential construction India"
  ],
  authors: [{ name: "Sah Constructions" }],
  creator: "Sah Constructions",
  publisher: "Sah Constructions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sahconstructions.com/contact",
    title: "Contact Sah Constructions | Let's Build Together",
    description:
      "Get in touch with Sah Constructions for inquiries, project discussions, and expert construction solutions across India.",
    siteName: "Sah Constructions",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Sah Constructions Office",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sah Constructions",
    description:
      "Reach out to Sah Constructions for expert construction services and project consultations across India.",
    images: ["/images/contact-twitter.jpg"],
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
    canonical: "https://sahconstructions.com/contact",
  },
};


export default function ContactPage() {
  return <Contact />;
}