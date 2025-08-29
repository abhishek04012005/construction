import { MetadataRoute } from 'next';

// Add these two lines at the top level
export const dynamic = 'force-static';
export const revalidate = 3600; // revalidate every hour

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/private/'],
    },
    sitemap: 'https://sahconstructions.com/sitemap.xml',
  };
}