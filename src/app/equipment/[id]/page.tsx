// src/app/equipment/[id]/page.tsx
import { Metadata } from 'next';
import { equipmentData } from '@/data/equipment';
import EquipmentDetails from '../../../components/equipment/details/EquipementDetail';
import { StaticImageData } from 'next/image';

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const equipment = equipmentData.find(async e => e.id === Number((await params).id));

    if (!equipment) {
      return {
        title: 'equipment Not Found'
      };
    }
  
    // Convert StaticImageData to string URL for OpenGraph
    const imageUrl = typeof equipment.image === 'string' 
      ? equipment.image 
      : (equipment.image as StaticImageData).src;
  

  return {
    title: equipment.name,
    description: equipment.description,
    openGraph: {
      title: `${equipment.name} | Equipment Rental`,
      description: equipment.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: equipment.name
        }
      ]
    }
  };
}

export async function generateStaticParams() {
  return equipmentData.map((equipment) => ({
    id: equipment.id.toString()
  }));
}

export default async function Page({ params }: Props) {
  return <EquipmentDetails id={(await params).id} />;
}