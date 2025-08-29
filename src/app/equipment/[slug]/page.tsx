import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { equipmentData } from '@/data/equipment';
import EquipmentDetails from '../../../components/equipment/details/EquipementDetail';




export async function generateStaticParams() {
  return equipmentData.map((equipment) => ({
    slug: equipment.slug
  }))
}


export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const equipment = equipmentData.find((s) => s.slug === resolvedParams.slug);

  if (!equipment) {
    return {
      title: 'equipment Not Found',
      description: 'The requested equipment could not be found',
    };
  }

  return {
    title: `${equipment.name} | Sah Constructions`,
    description: equipment.description,
    openGraph: {
      title: `${equipment.name} | Sah Constructions`,
      description: equipment.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${equipment.name} | Sah Constructions`,
      description: equipment.description,
    }
  };
}


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const equipment = equipmentData.find((s) => s.slug === resolvedParams.slug);

  if (!equipment) {
    notFound();
  }
  return <EquipmentDetails params={equipment} />
}