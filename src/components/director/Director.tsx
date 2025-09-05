"use client";
import Image, { StaticImageData } from "next/image";
import styles from "./director.module.css";
import imageLoader from "../../../image-loader";




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
    title: "Mr. Ashok Kumar Sah",
    role: "Proprietorship",
    description:
      "With over 13+ years of experience in construction management and development.",
    image: "./director/director1.jpeg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/johnsmith",
      email: "contact@sahconstructions.com",
    },
  }
];

const Director = () => {
  return (
    <section className={styles.directorSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Our <span className={styles.highlight}>Team</span>
          </h1>
          <p className={styles.subtitle}>Building Excellence Since 2012</p>
          <div className={styles.decorativeLine}></div>

        </div>
        <div className={styles.grid}>
          {directorData.map((director, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  loader={imageLoader}
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
