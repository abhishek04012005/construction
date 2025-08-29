import { StaticImageData } from "next/image";
import equipment1image from "../assets/equipment/mixture-machine.png"
import equipment2image from "../assets/equipment/shutteringplates.png"
import equipment3image from "../assets/equipment/Scaffolding.png"
import equipment4image from "../assets/equipment/compactors.png"
import equipment5image from "../assets/equipment/jcb.jpg"




export interface Equipment {
  id: number;
  name: string;
  slug: string;
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
    name: "Mixture Machine",
    slug: "mixture-machine",
    description:
      "Heavy-duty concrete mixture machine designed for consistent blending of cement, sand, and aggregates. Ideal for both small and large-scale construction sites.",
    image: equipment1image,
    details: {
      category: "Concrete Equipment",
      manufacturer: "Universal",
      condition: "New",
    },
    specifications: [
      "500L drum capacity",
      "Electric and diesel variants",
      "Continuous mixing system",
    ],
  },
  {
    id: 2,
    name: "Shuttering Plates",
    slug: "shuttering-plates",
    description:
      "Durable shuttering plates used for forming concrete structures. Engineered for high load-bearing capacity and reusability across multiple construction cycles.",
    image: equipment2image,
    details: {
      category: "Formwork",
      manufacturer: "Apollo Formtech",
      condition: "Excellent",
    },
    specifications: [
      "MS sheet with reinforced edges",
      "Standard sizes: 600mm x 900mm",
      "Rust-resistant coating",
    ],
  },
  {
    id: 3,
    name: "Scaffolding",
    slug: "scaffolding",
    description:
      "Modular scaffolding system for safe and efficient access during construction, maintenance, and repair work. Designed for quick assembly and maximum stability.",
    image: equipment3image,
    details: {
      category: "Access Equipment",
      manufacturer: "Tata Structura",
      condition: "Used",
    },
    specifications: [
      "Hot-dip galvanized steel",
      "Adjustable height frames",
      "Anti-slip platforms",
    ],
  },
  {
    id: 4,
    name: "Compactors",
    slug: "compactors",
    description:
      "High-performance soil compactor used for ground leveling and surface preparation. Ensures optimal soil density for foundations and roadworks.",
    image: equipment4image,
    details: {
      category: "Earth Moving",
      manufacturer: "JCB",
      condition: "New",
    },
    specifications: [
      "10-ton operating weight",
      "Vibratory drum system",
      "Fuel-efficient diesel engine",
    ],
  },
  {
    id: 5,
    name: "JCB",
    slug: "jcb",
    description:
      "JCB's powerful soil preparation solution for efficient ground leveling and surface preparation. Ensures optimal soil density for robust foundations and durable roadworks, delivering reliable results with JCB's renowned quality and durability.", image: equipment5image,
    details: {
      category: "Earth Moving",
      manufacturer: "JCB",
      condition: "New",
    },
    specifications: [
      "10-ton operating weight",
      "Vibratory drum system",
      "Fuel-efficient diesel engine",
    ],
  }
];
