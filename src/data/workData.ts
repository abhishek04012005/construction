import { StaticImageData } from 'next/image';
import work1image from '../assets/work/warehouse.png'
import work2image from '../assets/work/commercial.png'
import work3image from '../assets/work/resedential.png'
import work4image from '../assets/work/Management.png'
import work5image from '../assets/work/Renovation.png'
import work6image from "../assets/work/paintingwork.png"


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
    description: "Building high-performance warehouses optimized for logistics, storage, and operational efficiency.",
    fullDescription: "Our warehouse construction services focus on delivering robust, scalable, and energy-efficient facilities tailored to industrial needs. From layout planning to structural execution, we ensure every warehouse maximizes space utilization, safety, and automation readiness.",
    image: work1image,
    details: {
      type: "Industrial",
      location: "Metro Industrial Park",
      year: "2023"
    },
    stats: [
      { value: "120+", label: "Warehouses Built" },
      { value: "8+", label: "Years in Industrial Construction" },
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
    description: "Designing and constructing commercial spaces that elevate business functionality and brand presence.",
    fullDescription: "We specialize in commercial construction that blends architectural elegance with operational practicality. Whether it's retail outlets, office complexes, or mixed-use developments, our team ensures every project meets modern standards of safety, accessibility, and sustainability.",
    image: work2image,
    details: {
      type: "Commercial",
      location: "Urban District",
      year: "2023"
    },
    stats: [
      { value: "200+", label: "Commercial Projects" },
      { value: "8+", label: "Years in Business" },
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
    description: "Crafting homes that blend comfort, style, and sustainability for modern living.",
    fullDescription: "Our residential construction services focus on creating homes that reflect personal taste while ensuring structural integrity and energy efficiency. From luxury villas to affordable housing, we deliver spaces that feel like home from day one.",
    image: work3image,
    details: {
      type: "Residential",
      location: "Greenfield Township",
      year: "2023"
    },
    stats: [
      { value: "300+", label: "Homes Delivered" },
      { value: "8+", label: "Years in Residential Design" },
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
    description: "End-to-end construction project management ensuring timely delivery and budget control.",
    fullDescription: "We offer comprehensive project management services that cover planning, execution, and post-construction support. Our experienced managers coordinate teams, monitor progress, and mitigate risks to ensure every project meets its goals efficiently.",
    image: work4image,
    details: {
      type: "Service",
      location: "Pan-India Operations",
      year: "2023"
    },
    stats: [
      { value: "500+", label: "Projects Managed" },
      { value: "8+", label: "Certified PM Experts" },
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
    description: "Revitalizing spaces with modern upgrades, structural improvements, and aesthetic enhancements.",
    fullDescription: "Our renovation and remodeling services breathe new life into outdated or underutilized spaces. Whether it's a residential makeover or a commercial facelift, we focus on functionality, style, and long-term value with minimal disruption.",
    image: work5image,
    details: {
      type: "Renovation",
      location: "Citywide Projects",
      year: "2023"
    },
    stats: [
      { value: "150+", label: "Spaces Transformed" },
      { value: "8+", label: "Years in Renovation" },
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
    description:
      "Revitalizing spaces with modern upgrades, structural improvements, and aesthetic enhancements.",
    fullDescription:
      "Our renovation and remodeling services breathe new life into outdated or underutilized spaces. Whether it's a residential makeover or a commercial facelift, we focus on functionality, style, and long-term value with minimal disruption.",
    image: work6image,
    details: {
      type: "Renovation",
      location: "Citywide Projects",
      year: "2023",
    },
    stats: [
      { value: "150+", label: "Spaces Transformed" },
      { value: "8+", label: "Years in Renovation" },
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
