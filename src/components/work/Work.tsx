// src/components/work/Work.tsx
"use client";
import { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./work.module.css";
import { workData } from "../../data/workData";
import Link from "next/link";
import QuoteModal from "../popup/PopupModal";

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

const Work = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <section className={styles.workSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.title}>
              Our <span className={styles.highlight}>Work</span>
            </h2>
            <p className={styles.subtitle}>Excellence in Every Project</p>
          <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.workGrid}>
            {workData.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.workItem} ${index % 2 !== 0 ? styles.reverse : ""
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

                  <div className={styles.stats}>
                    {item.stats.map((stat) => (
                      <div key={stat.label} className={styles.statItem}>
                        <span className={styles.statValue}>{stat.value}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.bothButtons}>

                    <Link href={`/work/${item.id}`}>
                      <button className={styles.readMoreBtn}>
                        Read More
                        <svg className={styles.arrow} viewBox="0 0 24 24">
                          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                        </svg>
                      </button>
                    </Link>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};

export default Work;
