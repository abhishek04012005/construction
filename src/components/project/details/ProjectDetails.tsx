// src/components/project/ProjectDetails.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import QuoteModal from "../../../components/popup/PopupModal";
import styles from "./projectdetails.module.css";
import { projectsData } from "@/data/project";



interface ProjectDetailsProps {
  id: string;
}

const ProjectDetails = ({ id }: ProjectDetailsProps) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const project = projectsData.find(p => p.id === Number(id));
  
  if (!project) {
    return (
      <div className={styles.errorContainer}>
        <h1>Project Not Found</h1>
        <Link href="/projects" className={styles.backLink}>
          Return to Projects
        </Link>
      </div>
    );
  }



  return (
    <>
      <article className={styles.projectDetails}>
        <div className={styles.hero}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.container}>
              <nav className={styles.breadcrumbs}>
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/projects">Projects</Link>
                <span>/</span>
                <span>{project.title}</span>
              </nav>
              <h1 className={styles.title}>{project.title}</h1>
              <span className={styles.projectType}>{project.details.type}</span>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
            <section className={styles.overview}>
              <h2>Project Overview</h2>
              <p>{project.description}</p>
            </section>

            <section className={styles.details}>
              <div className={styles.detailsGrid}>
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
            </section>

            <section className={styles.highlights}>
              <h2>Project Highlights</h2>
              <div className={styles.highlightsList}>
                {project.highlights.map((highlight, index) => (
                  <div key={index} className={styles.highlightItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.cta}>
              <h2>Interested in a Similar Project?</h2>
              <p>Contact us to discuss your construction needs</p>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className={styles.ctaButton}
              >
                Get a Quote
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
            </section>

      
          </div>
        </div>
      </article>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};

export default ProjectDetails;