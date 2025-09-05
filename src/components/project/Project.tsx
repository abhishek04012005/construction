/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/projects/Projects.tsx
"use client";
import Image from "next/image";
import styles from "./project.module.css";
import Link from 'next/link';
import { projectsData } from "@/data/project";
import imageLoader from "../../../image-loader";


const Projects = () => {

  return (
    <section className={styles.projectSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>Projects</span>
          </h2>
          <p className={styles.subtitle}>Transforming Visions into Reality</p>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.projectList}>
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.projectItem} ${index % 2 !== 0 ? styles.reverse : ""
                }`}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  <Image
                    loader={imageLoader}
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                    objectFit="contain"
                    width={1920}
                    height={1080}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <span className={styles.projectNumber}>
                        0{project.id}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.contentWrapper}>
                <div className={styles.projectType}>{project.details.type}</div>
                <div className={styles.projectTitleWrapper}>
                  <div className={styles.titleLogo}>
                    <Image
                      loader={imageLoader}
                      src={project.logo}
                      alt={project.title}
                      height={40}
                      width={40}
                    />
                  </div>
                  <div className={styles.titleText}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>

                </div>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.projectDetails}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Industry</span>
                    <span className={styles.detailValue}>
                      {project.details.industry}
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Headquarters</span>
                    <span className={styles.detailValue}>
                      {project.details.headquarters}
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Established</span>
                    <span className={styles.detailValue}>
                      {project.details.established}
                    </span>
                  </div>
                </div>

                <div className={styles.highlights}>
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className={styles.highlightItem}>
                      <span className={styles.checkIcon}>✓</span>
                      {highlight}
                    </div>
                  ))}
                </div>

                <Link href={`/projects/${project.slug}`}>
                  <button className={styles.viewProjectBtn}>
                    View Project
                    <svg
                      className={styles.btnArrow}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
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

export default Projects;
