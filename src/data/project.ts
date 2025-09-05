import { StaticImageData } from "next/image";

export interface WorkHistory {
  year: string;
  location: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string | StaticImageData;
  logo: string | StaticImageData;
  details: {
    type: string;
    industry: string;
    headquarters: string;
    established: string;
  };
  highlights: string[];
  workHistory: {
    year: string;
    location: string;
    description: string;
  }[]
}


export const projectsData: Project[] = [
  {
    id: 1,
    title: "Alkem",
    slug: "alkem",
    description:
      "A pharmaceutical manufacturing and R&D facility built to meet global standards. Designed for operational efficiency, regulatory compliance, and innovation in healthcare.",
    image: "./projects/1.jpg",
    logo: "./client/alkem.png",
    details: {
      type: "Pharmaceutical",
      industry: "Pharmaceuticals",
      headquarters: "Mumbai, India",
      established: "1973",
    },
    highlights: [
      "GMP-Compliant Infrastructure",
      "Temperature-Controlled Zones",
      "Advanced Waste Management",
    ],
    workHistory: [
      {
        year: "2012-2014",
        location: "Sikkim",
        description: "Construction of pharmaceutical manufacturing facility"
      },
      {
        year: "2014",
        location: "Taloja, Navi Mumbai",
        description: "Boundary Wall Building Work"
      },
      {
        year: "2016",
        location: "Baddi, Himachal Pradesh",
        description: "Boundary Wall Construction"
      },
      {
        year: "2016-2017",
        location: "Baddi, Himachal Pradesh",
        description: "Road Work Development"
      }
    ]
  },
  {
    id: 2,
    title: "Lupin",
    slug: "lupin",
    logo: "./client/lupin.png",

    description:
      "A cutting-edge pharmaceutical campus featuring research labs, clean rooms, and sustainable production units. Built to support innovation and scalability in drug development.",
    image: "./projects/lupin.jpg",
    details: {
      type: "Pharmaceutical",
      industry: "Pharmaceuticals & Biotech",
      headquarters: "Mumbai, India",
      established: "1968",
    },
    highlights: [
      "ISO-Certified Labs",
      "Energy-Efficient Systems",
      "Modular Expansion Capability",
    ],
    workHistory: [
      {
        year: "2016-2017",
        location: "Mumbai",
        description: "Formulation Plant Work"
      },
    ]
  },
  {
    id: 3,
    title: "Scorpion",
    slug: "scorpion",
    logo: "./client/scorpion.png",

    description:
      "A high-security defense-grade facility designed for precision engineering and tactical research. Combines robust architecture with advanced surveillance and control systems.",
    image: "./projects/3.jpg",
    details: {
      type: "Defense",
      industry: "Defense Technology",
      headquarters: "Hyderabad, India",
      established: "2010",
    },
    highlights: [
      "Secure Perimeter Design",
      "R&D Bunkers",
      "AI-Driven Monitoring",
    ],
    workHistory: [
      {
        year: "2021-2022",
        location: "Bihar",
        description: "Construction of Warehous"
      },
      {
        year: "2022-2023",
        location: "Siliguri",
        description: "Warehouse & Boundary Wall"
      },
    ]
  },
  {
    id: 4,
    title: "NR Lab",
    slug: "nr-lab",
    logo: "./client/nr-lab.png",

    description:
      "A next-gen research lab focused on nanotechnology and material sciences. Built with flexible lab modules, collaborative zones, and high-spec equipment integration.",
    image: "./projects/4.png",
    details: {
      type: "Research",
      industry: "Nanotech Research",
      headquarters: "Bangalore, India",
      established: "2017",
    },
    highlights: [
      "Cleanroom Environments",
      "Modular Lab Design",
      "Collaborative Research Pods",
    ],
    workHistory: [
      {
        year: "2012-2014",
        location: "Kathua",
        description: "Beta Formulation Plant"
      },
      {
        year: "2021-Till",
        location: "Venus Remedies",
        description: "Annual Maintenance Work of Pharmaceutical Plant"
      },
    ]
  },
];


