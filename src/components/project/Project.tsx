/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/projects/Projects.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./project.module.css";
import Link from 'next/link';
import { projectsData } from "@/data/project";


const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section className={styles.projectSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Featured <span className={styles.highlight}>Projects</span>
          </h2>
          <p className={styles.subtitle}>Transforming Visions into Reality</p>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.projectList}>
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.projectItem} ${
                index % 2 !== 0 ? styles.reverse : ""
              }`}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    height={400}
                    width={500}
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
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.projectDetails}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Location</span>
                    <span className={styles.detailValue}>
                      {project.details.location}
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Year</span>
                    <span className={styles.detailValue}>
                      {project.details.year}
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Category</span>
                    <span className={styles.detailValue}>
                      {project.details.type}
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

                <Link href={`/projects/${project.id}`}>
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
