// src/components/director/Director.tsx
import Image, { StaticImageData } from "next/image";
import styles from "./director.module.css";
import Director1Image from '../../assets/director/1.jpg'
import Director2Image from '../../assets/director/2.jpg'
import Director3Image from '../../assets/director/3.jpg'



interface DirectorItem {
  title: string;
  role: string;
  description: string;
  image: string | StaticImageData;
  socialLinks: {
    linkedin?: string;
    email?: string;
  };
}

const directorData: DirectorItem[] = [
  {
    title: "Ashok Kumar",
    role: "Managing Director",
    description:
      "With over 20 years of experience in construction management and development.",
    image: Director1Image,
    socialLinks: {
      linkedin: "https://linkedin.com/in/johnsmith",
      email: "ashokkumarsah638@gmail.com",
    },
  },
  {
    title: "Tarun Roy",
    role: "Technical Director",
    description:
      "Specializing in architectural design and sustainable construction practices.",
    image: Director2Image,
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      email: "sarah@example.com",
    },
  },
  {
    title: "Tanishk Singh",
    role: "Operations Director",
    description:
      "Expert in project management and construction operations optimization.",
    image: Director3Image,
    socialLinks: {
      linkedin: "https://linkedin.com/in/michaelchen",
      email: "michael@example.com",
    },
  },
];

const Director = () => {
  return (
    <section className={styles.directorSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Our <span className={styles.highlight}>Directors</span>
        </h2>
        <div className={styles.grid}>
          {directorData.map((director, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={director.image}
                  alt={director.title}
                  className={styles.image}
                  width={300}
                  height={500}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.directorName}>{director.title}</h3>
                <span className={styles.role}>{director.role}</span>
                <p className={styles.description}>{director.description}</p>
                <div className={styles.socialLinks}>
                  {director.socialLinks.linkedin && (
                    <a
                      href={director.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      LinkedIn
                    </a>
                  )}
                  {director.socialLinks.email && (
                    <a
                      href={`mailto:${director.socialLinks.email}`}
                      className={styles.socialLink}
                    >
                      Email
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Director;
