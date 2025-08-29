import { workData } from '@/data/workData';
import { projectsData } from '@/data/project';
import { MetadataRoute } from 'next';
import { equipmentData } from '@/data/equipment';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sahconstructions.com'; // Replace with your domain
  const lastModified = new Date().toISOString();

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/works',
    '/projects',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic work routes
  const workRoutes = workData.map((work) => ({
    url: `${baseUrl}/works/${work.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic project routes
  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

    const equipmentRoutes = equipmentData.map((equipment) => ({
    url: `${baseUrl}/equipment/${equipment.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes, ...projectRoutes, ...equipmentRoutes];
}