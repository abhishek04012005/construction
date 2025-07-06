import { StaticImageData } from "next/image";
import equipment1image from "../assets/equipment/1.webp"
import equipment2image from "../assets/equipment/2.jpg"
import equipment3image from "../assets/equipment/3.jpg"



// src/data/equipment.ts
export interface Equipment {
  id: number;
  name: string;
  description: string;
  image: string | StaticImageData;
  details: {
    category: string;
    manufacturer: string;
    condition: string;
  };
  specifications: string[];
}

export const equipmentData: Equipment[] = [
  {
    id: 1,
    name: "Scaffolding",
    description:
      "State-of-the-art excavator with advanced hydraulic system, perfect for large-scale construction projects. Features enhanced fuel efficiency and operator comfort.",
    image: equipment1image,
    details: {
      category: "Earth Moving",
      manufacturer: "CAT",
      condition: "New",
    },
    specifications: [
      "20-ton capacity",
      "Advanced GPS tracking",
      "Eco-friendly operation",
    ],
  },
  {
    id: 2,
    name: "Tower Crane",
    description:
      "High-performance tower crane designed for maximum stability and precision in high-rise construction. Equipped with advanced safety features and remote monitoring.",
    image: equipment2image,
    details: {
      category: "Lifting",
      manufacturer: "Liebherr",
      condition: "Excellent",
    },
    specifications: [
      "50m reach radius",
      "Digital load monitoring",
      "Wind resistance system",
    ],
  },
  {
    id: 3,
    name: "Concrete Pump Truck",
    description:
      "Modern concrete pump truck with extended boom reach and precise pour control. Ideal for large-scale concrete applications and high-rise construction.",
    image: equipment3image,
    details: {
      category: "Concrete",
      manufacturer: "Putzmeister",
      condition: "New",
    },
    specifications: [
      "42m boom length",
      "Smart pumping system",
      "High-pressure capacity",
    ],
  },
];
