"use client"
import { useState } from "react";
import styles from "./equipment.module.css";
import Image from "next/image";
import Link from "next/link";
import { equipmentData } from "@/data/equipment";
import QuoteModal from "../popup/PopupModal";


const Equipment = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);


  return (
    <>
      <section className={styles.equipmentSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.title}>
              Our <span className={styles.highlight}>Equipment</span>
            </h2>
            <p className={styles.subtitle}>Advanced Tools for Professional Results</p>
            <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.equipmentList}>
            {equipmentData.map((equipment, index) => (
              <div
                key={equipment.id}
                className={`${styles.equipmentItem} ${index % 2 !== 0 ? styles.reverse : ""
                  }`}
              >
                <div className={styles.imageWrapper}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={equipment.image}
                      alt={equipment.name}
                      height={400}
                      width={500}
                    />
                    <div className={styles.imageOverlay}>
                      <div className={styles.overlayContent}>
                        <span className={styles.equipmentNumber}>
                          0{equipment.id}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.contentWrapper}>
                  <div className={styles.equipmentCategory}>
                    {equipment.details.category}
                  </div>
                  <h3 className={styles.equipmentName}>{equipment.name}</h3>
                  <p className={styles.equipmentDescription}>
                    {equipment.description}
                  </p>

                  <div className={styles.equipmentDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Manufacturer</span>
                      <span className={styles.detailValue}>
                        {equipment.details.manufacturer}
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Condition</span>
                      <span className={styles.detailValue}>
                        {equipment.details.condition}
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Category</span>
                      <span className={styles.detailValue}>
                        {equipment.details.category}
                      </span>
                    </div>
                  </div>

                  <div className={styles.specifications}>
                    {equipment.specifications.map((spec, idx) => (
                      <div key={idx} className={styles.specItem}>
                        <span className={styles.checkIcon}>✓</span>
                        {spec}
                      </div>
                    ))}
                  </div>
                  <div className={styles.bothButtons}>
                    <Link href={`/equipment/${equipment.slug}`}>
                      <button
                        className={styles.viewDetailsBtn}
                      >
                        View Details
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

export default Equipment;