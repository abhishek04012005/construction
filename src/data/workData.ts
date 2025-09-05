import { StaticImageData } from 'next/image';


export interface WorkItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string | StaticImageData;
  fullDescription?: string;
  details: {
    type: string;
    location: string;
    year: string;
  };
  stats: {
    value: string;
    label: string;
  }[];
  highlights: string[];
}

export const workData: WorkItem[] = [
  {
    id: 1,
    title: "Warehouse Construction",
    slug: "warehouse-construction",
    description: "Building high-performance warehouses optimized for logistics, storage, and operational efficiency.",
    fullDescription: "Our warehouse construction services focus on delivering robust, scalable, and energy-efficient facilities tailored to industrial needs. From layout planning to structural execution, we ensure every warehouse maximizes space utilization, safety, and automation readiness.",
    image: "./work/warehouse.png",
    details: {
      type: "Industrial",
      location: "Metro Industrial Park",
      year: "2023"
    },
    stats: [
      { value: "30+", label: "Warehouses Built" },
      { value: "13+", label: "Years in Industrial Construction" },
      { value: "98%", label: "Client Satisfaction" },
    ],
    highlights: [
      "Optimized Storage Layouts",
      "High Load-Bearing Structures",
      "Climate-Controlled Zones",
      "Integrated Logistics Docking"
    ]
  },
  {
    id: 2,
    title: "Commercial Construction",
    slug: "commercial-construction",
    description: "Designing and constructing commercial spaces that elevate business functionality and brand presence.",
    fullDescription: "We specialize in commercial construction that blends architectural elegance with operational practicality. Whether it's retail outlets, office complexes, or mixed-use developments, our team ensures every project meets modern standards of safety, accessibility, and sustainability.",
    image: "./work/commercial.png",
    details: {
      type: "Commercial",
      location: "Urban District",
      year: "2023"
    },
    stats: [
      { value: "20+", label: "Commercial Projects" },
      { value: "13+", label: "Years in Business" },
      { value: "100%", label: "On-Time Delivery" },
    ],
    highlights: [
      "Retail & Office Space Expertise",
      "Premium Finishing Standards",
      "Smart HVAC & Lighting Systems",
      "ADA & Fire Safety Compliance"
    ]
  },
  {
    id: 3,
    title: "Residential Construction",
    slug: "residential-construction",
    description: "Crafting homes that blend comfort, style, and sustainability for modern living.",
    fullDescription: "Our residential construction services focus on creating homes that reflect personal taste while ensuring structural integrity and energy efficiency. From luxury villas to affordable housing, we deliver spaces that feel like home from day one.",
    image: "./work/resedential.png",
    details: {
      type: "Residential",
      location: "Greenfield Township",
      year: "2023"
    },
    stats: [
      { value: "15+", label: "Homes Delivered" },
      { value: "13+", label: "Years in Residential Design" },
      { value: "95%", label: "Repeat Clients" },
    ],
    highlights: [
      "Modern & Minimalist Designs",
      "Eco-Friendly Materials",
      "Smart Home Integration",
      "Custom Floor Plans"
    ]
  },
  {
    id: 4,
    title: "Project Management",
    slug: "project-management",
    description: "End-to-end construction project management ensuring timely delivery and budget control.",
    fullDescription: "We offer comprehensive project management services that cover planning, execution, and post-construction support. Our experienced managers coordinate teams, monitor progress, and mitigate risks to ensure every project meets its goals efficiently.",
    image: "./work/Management.png",
    details: {
      type: "Service",
      location: "Pan-India Operations",
      year: "2023"
    },
    stats: [
      { value: "11+", label: "Projects Managed" },
      { value: "13+", label: "Certified PM Experts" },
      { value: "99%", label: "Budget Accuracy" },
    ],
    highlights: [
      "Agile Construction Scheduling",
      "Cost & Resource Optimization",
      "Stakeholder Coordination",
      "Real-Time Progress Tracking"
    ]
  },
  {
    id: 5,
    title: "Renovation & Remodeling",
    slug: "renovation-remodeling",
    description: "Revitalizing spaces with modern upgrades, structural improvements, and aesthetic enhancements.",
    fullDescription: "Our renovation and remodeling services breathe new life into outdated or underutilized spaces. Whether it's a residential makeover or a commercial facelift, we focus on functionality, style, and long-term value with minimal disruption.",
    image: "./work/Renovation.png",
    details: {
      type: "Renovation",
      location: "Citywide Projects",
      year: "2023"
    },
    stats: [
      { value: "34+", label: "Spaces Transformed" },
      { value: "13+", label: "Years in Renovation" },
      { value: "97%", label: "Client Retention" },
    ],
    highlights: [
      "Interior & Exterior Upgrades",
      "Structural Reinforcement",
      "Energy-Efficient Retrofitting",
      "Custom Design Solutions"
    ]
  },
  {
    id: 6,
    title: "Painting Work",
    slug: "painting-work",
    description:
      "Revitalizing spaces with modern upgrades, structural improvements, and aesthetic enhancements.",
    fullDescription:
      "Our renovation and remodeling services breathe new life into outdated or underutilized spaces. Whether it's a residential makeover or a commercial facelift, we focus on functionality, style, and long-term value with minimal disruption.",
    image: "./work/paintingwork.png",
    details: {
      type: "Renovation",
      location: "Citywide Projects",
      year: "2023",
    },
    stats: [
      { value: "34+", label: "Spaces Transformed" },
      { value: "13+", label: "Years in Renovation" },
      { value: "97%", label: "Client Retention" },
    ],
    highlights: [
      "Interior & Exterior Upgrades",
      "Structural Reinforcement",
      "Energy-Efficient Retrofitting",
      "Custom Design Solutions",
    ],
  }
];
