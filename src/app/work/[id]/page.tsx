// src/app/work/[id]/page.tsx
import { Metadata } from 'next';
import { workData } from '@/data/workData';
import WorkDetails from '../../../components/work/details/WorkDetail';
import { StaticImageData } from 'next/image';

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = workData.find(async w => w.id === Number((await params).id));
  
  if (!work) {
    return {
      title: 'Work Not Found'
    };
  }

  // Convert StaticImageData to string URL for OpenGraph
  const imageUrl = typeof work.image === 'string' 
    ? work.image 
    : (work.image as StaticImageData).src;

  return {
    title: work.title,
    description: work.description,
    openGraph: {
      title: `${work.title} | Our Work`,
      description: work.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: work.title
        }
      ]
    }
  };
}

export function generateStaticParams() {
  return workData.map((work) => ({
    id: work.id.toString()
  }));
}

export default async function Page({ params }: Props) {
  return <WorkDetails id={(await params).id} />;
}