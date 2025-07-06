// src/data/projectsData.ts

import { StaticImageData } from "next/image";
import project1Image from '../assets/projects/1.jpg'
import project2Image from '../assets/projects/2.jpg'
import project3Image from '../assets/projects/3.jpg'



export interface Project {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  details: {
    type: string;
    location: string;
    year: string;
  };
  highlights: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Urban Sky Tower",
    description:
      "A state-of-the-art commercial tower featuring sustainable design principles, smart building systems, and premium office spaces that redefine modern workplace standards.",
    image: project1Image,
    details: {
      type: "Commercial",
      location: "Downtown Metro",
      year: "2023",
    },
    highlights: [
      "LEED Platinum Certified",
      "Smart Building Integration",
      "Premium Office Spaces",
    ],
  },
  {
    id: 2,
    title: "Green Valley Residences",
    description:
      "Luxury residential complex harmoniously blending modern architecture with nature. Features sustainable living spaces and premium amenities for an elevated lifestyle.",
    image: project2Image,
    details: {
      type: "Residential",
      location: "Green Valley",
      year: "2023",
    },
    highlights: [
      "Eco-friendly Design",
      "Premium Amenities",
      "Smart Home Systems",
    ],
  },
  {
    id: 3,
    title: "Innovation Hub",
    description:
      "A cutting-edge research and development facility designed to foster innovation and collaboration. Features state-of-the-art laboratories and flexible workspaces.",
    image: project3Image,
    details: {
      type: "Industrial",
      location: "Tech District",
      year: "2023",
    },
    highlights: [
      "Advanced Facilities",
      "Research Labs",
      "Collaborative Spaces",
    ],
  },
];