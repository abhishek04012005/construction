// src/components/work/details/WorkDetails.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { workData } from "@/data/workData";
import QuoteModal from "@/components/popup/PopupModal";
import styles from "./workdetail.module.css";

interface WorkDetailsProps {
  id: string;
}

const WorkDetails = ({ id }: WorkDetailsProps) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const work = workData.find(w => w.id === Number(id));

  if (!work) {
    return (
      <div className={styles.errorContainer}>
        <h1>Work Not Found</h1>
        <Link href="/work" className={styles.backLink}>
          Return to Work
        </Link>
      </div>
    );
  }

  return (
    <>
      <article className={styles.projectDetails}>
        <div className={styles.hero}>
          <Image
            src={work.image}
            alt={work.title}
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
                <Link href="/work">Work</Link>
                <span>/</span>
                <span>{work.title}</span>
              </nav>
              <h1 className={styles.title}>{work.title}</h1>
              <span className={styles.projectType}>{work.details.type}</span>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
            <section className={styles.overview}>
              <h2>Overview</h2>
              <p>{work.fullDescription}</p>
            </section>


            <section className={styles.details}>
              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Location</span>
                  <span className={styles.detailValue}>
                    {work.details.location}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Year</span>
                  <span className={styles.detailValue}>
                    {work.details.year}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Category</span>
                  <span className={styles.detailValue}>
                    {work.details.type}
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.highlights}>
              <h2>Key Features</h2>
              <div className={styles.highlightsList}>
                {work.highlights.map((highlight, index) => (
                  <div key={index} className={styles.highlightItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.cta}>
              <h2>Start Your Project</h2>
              <p>Interested in working with us? Let&apos;s discuss your project</p>
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

            <nav className={styles.projectNav}>
              <div className={styles.navLinks}>
                {workData.find(w => w.id === work.id - 1) && (
                  <Link
                    href={`/work/${work.id - 1}`}
                    className={styles.prevLink}
                  >
                    ← Previous Project
                  </Link>
                )}
                {workData.find(w => w.id === work.id + 1) && (
                  <Link
                    href={`/work/${work.id + 1}`}
                    className={styles.nextLink}
                  >
                    Next Project →
                  </Link>
                )}
              </div>
            </nav>
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

export default WorkDetails;