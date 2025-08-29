import { workData } from '@/data/workData';
import WorkDetails from '../../../components/work/details/WorkDetail';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';



export async function generateStaticParams() {
  return workData.map((work) => ({
    slug: work.slug 
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const work = workData.find((s) => s.slug === resolvedParams.slug);

  if (!work) {
    return {
      title: 'Work Not Found',
      description: 'The requested work could not be found',
    };
  }

  return {
    title: `${work.title} | Sah Constructions`,
    description: work.description,
    openGraph: {
      title: `${work.title} | Sah Constructions`,
      description: work.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${work.title} | Sah Constructions`,
      description: work.description,
    }
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const work = workData.find((s) => s.slug === resolvedParams.slug);

  if (!work) {
    notFound();
  }

  return <WorkDetails params={work} />;
}

