import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projectsData } from '../../../data/project';
import ProjectDetails from '../../../components/project/details/ProjectDetails';



export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug
  }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectsData.find((s) => s.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: 'project Not Found',
      description: 'The requested project could not be found',
    };
  }

  return {
    title: `${project.title} | Sah Constructions`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Sah Constructions`,
      description: project.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Sah Constructions`,
      description: project.description,
    }
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((s) => s.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }
  return <ProjectDetails params={project} />
}