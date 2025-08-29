// src/components/equipment/EquipmentDetails.tsx
"use client";
import { useMemo, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./equipmentdetail.module.css";
import { equipmentData, Equipment } from "@/data/equipment";

interface EquipmentDetailsProps {
    params: {
    slug: string
  }
}


const EquipmentDetails: FC<EquipmentDetailsProps> = ({ params }) => {
  const equipment = useMemo<Equipment | undefined>(
    () => equipmentData.find((p) => p.slug === params.slug),
    [params.slug]
  );



  if (!equipment) {
    return (
      <div className={styles.errorContainer}>
        <h1>Equipment Not Found</h1>
        <Link href="/equipment" className={styles.backLink}>
          Return to Equipment
        </Link>
      </div>
    );
  }

  return (
    <article className={styles.equipmentDetails}>
      <div className={styles.hero}>
        <Image
          src={equipment.image}
          alt={equipment.name}
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
              <Link href="/equipment">Equipment</Link>
              <span>/</span>
              <span>{equipment.name}</span>
            </nav>
            <h1 className={styles.title}>{equipment.name}</h1>
            <span className={styles.equipmentType}>
              {equipment.details.category}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.overview}>
            <h2>Equipment Overview</h2>
            <p>{equipment.description}</p>
          </section>

          <section className={styles.details}>
            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Category</span>
                <span className={styles.detailValue}>
                  {equipment.details.category}
                </span>
              </div>
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
            </div>
          </section>

          <section className={styles.highlights}>
            <h2>Technical Specifications</h2>
            <div className={styles.highlightsList}>
              {equipment.specifications.map((spec, index) => (
                <div key={index} className={styles.highlightItem}>
                  <span className={styles.checkIcon}>•</span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default EquipmentDetails;