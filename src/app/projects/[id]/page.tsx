// src/app/projects/[id]/page.tsx
import { Metadata } from 'next';
import { projectsData } from '../../../data/project';
import ProjectDetailsPage from '../../../components/project/details/ProjectDetails';
import { StaticImageData } from 'next/image';

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find(async p => p.id === Number((await params).id));
  
  if (!project) {
    return {
      title: 'Project Not Found'
    };
  }


     const imageUrl = typeof project.image === 'string' 
        ? project.image 
        : (project.image as StaticImageData).src;

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Sah Construction Projects`,
      description: project.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title
        }
      ]
    }
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString()
  }));
}

export default async function Page({ params }: Props) {
  return <ProjectDetailsPage id={(await params).id} />;
}