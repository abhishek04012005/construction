// src/data/workData.ts
import { StaticImageData } from 'next/image';
import work1image from '../assets/work/1.jpg'
import work2image from '../assets/work/2.jpg'
import work3image from '../assets/work/3.jpg'

export interface WorkItem {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  fullDescription?: string;
  details: {
    type: string;
    location: string;
    year: string;
  };
  highlights: string[];
}

export const workData: WorkItem[] = [
  {
    id: 1,
    title: "Ware House Development",
    description: "We specialize in creating sustainable and innovative infrastructure solutions that stand the test of time.",
    fullDescription: "We specialize in creating sustainable and innovative infrastructure solutions that stand the test of time. Our expert team combines cutting-edge technology with proven construction methods to deliver exceptional results. Our warehouses are designed for maximum efficiency and durability.",
    image: work1image,
    details: {
      type: "Industrial",
      location: "Metro Industrial Park",
      year: "2023"
    },
    highlights: [
      "State-of-the-art Storage Solutions",
      "Energy Efficient Design",
      "Advanced Security Systems",
      "Smart Inventory Management"
    ]
  },
  {
    id: 2,
    title: "Road Development",
    description: "Creating sustainable transportation infrastructure with attention to detail and premium quality materials.",
    fullDescription: "Creating sustainable transportation infrastructure with attention to detail and premium quality materials. Our road development projects incorporate advanced engineering techniques and durable materials to ensure long-lasting performance and safety.",
    image: work2image,
    details: {
      type: "Infrastructure",
      location: "Urban District",
      year: "2023"
    },
    highlights: [
      "Advanced Paving Technology",
      "Sustainable Materials",
      "Traffic Flow Optimization",
      "Environmental Compliance"
    ]
  },
  {
    id: 3,
    title: "Building Constructions",
    description: "Transforming commercial spaces into productive environments with modern design and superior quality.",
    fullDescription: "Transforming commercial spaces into productive environments. We create workspaces that foster creativity and efficiency while maintaining the highest standards of construction quality. Our buildings are designed to meet both aesthetic and functional requirements.",
    image: work3image,
    details: {
      type: "Commercial",
      location: "Business District",
      year: "2023"
    },
    highlights: [
      "Modern Architecture",
      "Sustainable Design",
      "Smart Building Systems",
      "Premium Facilities"
    ]
  }
];