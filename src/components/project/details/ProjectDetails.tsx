"use client";
import { useState, useMemo, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import QuoteModal from "../../../components/popup/PopupModal";
import styles from "./projectdetails.module.css";
import { projectsData, Project } from "@/data/project";
import imageLoader from "../../../../image-loader";

interface ProjectDetailsProps {
  params: {
    slug: string
  }
}

const ProjectDetails: FC<ProjectDetailsProps> = ({ params }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const project = useMemo<Project | undefined>(
    () => projectsData.find((p) => p.slug === params.slug),
    [params.slug]
  );

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
            loader={imageLoader}
            src={project.image}
            alt={project.title}
            priority
            sizes="100vw"
            className={styles.heroImage}
            width={1920}
            height={1080}
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
                  <h3 className={styles.title}>{project.title}</h3>
                </div>
              </div>
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

            {project.workHistory && project.workHistory.length > 0 && (
              <section className={styles.workHistory}>
                <h2>Work History</h2>
                <div className={styles.workGrid}>
                  {project.workHistory.map((work, index) => (
                    <div key={index} className={styles.workCard}>
                      <div className={styles.workYear}>{work.year}</div>
                      <div className={styles.workContent}>
                        <div className={styles.workLocation}>
                          <svg
                            className={styles.locationIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {work.location}
                        </div>
                        <p className={styles.workDescription}>
                          {work.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
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
