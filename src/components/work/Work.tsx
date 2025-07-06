// src/components/work/Work.tsx
import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./work.module.css";
import work1image from "../../assets/work/1.jpg";
import work2image from "../../assets/work/2.jpg";
import work3image from "../../assets/work/3.jpg";
import Link from "next/link";

interface WorkItem {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  stats: {
    value: string;
    label: string;
  }[];
}

const workData: WorkItem[] = [
  {
    id: 1,
    title: "Ware House Development",
    description:
      "We specialize in creating sustainable and innovative infrastructure solutions that stand the test of time. Our expert team combines cutting-edge technology with proven construction methods to deliver exceptional results.",
    image: work1image,
    stats: [
      { value: "250+", label: "Projects" },
      { value: "15+", label: "Years Experience" },
      { value: "100%", label: "Success Rate" },
    ],
  },
  {
    id: 2,
    title: "Road Development",
    description:
      "Creating dream homes with attention to detail and premium quality materials. Our residential projects blend modern aesthetics with functional design to create living spaces that inspire.",
    image: work2image,
    stats: [
      { value: "1.5M", label: "Sq Ft Built" },
      { value: "500+", label: "Happy Families" },
      { value: "98%", label: "Client Satisfaction" },
    ],
  },
  {
    id: 3,
    title: "Building Constructions",
    description:
      "Transforming commercial spaces into productive environments. We create workspaces that foster creativity and efficiency while maintaining the highest standards of construction quality.",
    image: work3image,
    stats: [
      { value: "300+", label: "Businesses Served" },
      { value: "2M+", label: "Sq Ft Developed" },
      { value: "95%", label: "Return Clients" },
    ],
  },
];

const Work = () => {
  return (
    <section className={styles.workSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>Work</span>
          </h2>
          <p className={styles.subtitle}>Excellence in Every Project</p>
        </div>

        <div className={styles.workGrid}>
          {workData.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.workItem} ${
                index % 2 !== 0 ? styles.reverse : ""
              }`}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={500}
                />
                <div className={styles.imageBorder}></div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <Link href={`/work/${item.id}`}>
                  <button className={styles.readMoreBtn}>
                    Read More
                    <svg className={styles.arrow} viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
