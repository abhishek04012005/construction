// src/components/hero/Hero.tsx
"use client"
import { useRouter } from 'next/navigation';
import styles from './hero.module.css';



const Hero = () => {
  const router = useRouter();
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
             <span className={styles.highlight}>Building</span> Tomorrow
            <br />Today
          </h1>
          <p className={styles.subtitle}>
            Transform your vision into reality with our expert construction services. 
            Quality craftsmanship, innovative solutions, and reliable execution.
          </p>
          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn} onClick={() => router.push('/projects ')}>
              Start Your Project
              <svg className={styles.arrow} viewBox="0 0 24 24">
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
              </svg>
            </button>
            <button className={styles.secondaryBtn} onClick={() => router.push('/works')}>
              View Our Work
              <span className={styles.underline}></span>
            </button>
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>13+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>150+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;