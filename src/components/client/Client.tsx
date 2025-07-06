"use client";
import React, { useState, useEffect } from "react";
import styles from "./client.module.css";

const ClientPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <section className={styles.reviewSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>Clients</span>
          </h2>
          <p className={styles.subtitle}>Transforming Visions into Reality</p>
          <div className={styles.decorativeLine}></div>
        </div>
        <div className={styles.carouselContainer}>
          <button
            className={`${styles.carouselButton} ${styles.prevButton}`}
            onClick={handlePrevClick}
          >
            ‹
          </button>

          <div className={styles.reviewCard}>
            <div className={styles.reviewRating}>★★★★★</div>
            <p className={styles.reviewText}>{reviews[currentIndex].text}</p>
            <div className={styles.reviewAuthor}>
              <div className={styles.authorAvatar}>
                {reviews[currentIndex].name[0]}
              </div>
              <div className={styles.authorInfo}>
                <strong>{reviews[currentIndex].name}</strong>
                <span>{reviews[currentIndex].role}</span>
              </div>
            </div>
          </div>

          <button
            className={`${styles.carouselButton} ${styles.nextButton}`}
            onClick={handleNextClick}
          >
            ›
          </button>
        </div>

        <div className={styles.dotIndicators}>
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const reviews = [
  {
    text: "The best resume builder I've ever used. Got 3 interviews in my first week!",
    name: "Alex Chen",
    role: "Software Developer",
  },
  {
    text: "Simple, professional, and effective. Highly recommended!",
    name: "Sarah Miller",
    role: "Marketing Manager",
  },
  {
    text: "Outstanding templates and excellent customer support.",
    name: "James Wilson",
    role: "Product Designer",
  },
];

export default ClientPage;
