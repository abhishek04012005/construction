"use client";
import styles from "./about.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            About <span className={styles.highlight}>Sah Constructions</span>
          </h1>
          <p className={styles.subtitle}>Building Excellence Since 2015</p>
          <div className={styles.decorativeLine}></div>

        </div>

        <div className={styles.content}>
          <div className={styles.storySection}>
            <h2>Our Story</h2>
            <p>
              Founded in 2015, Sah Constructions has established itself as a leading name in the construction industry.
              With over 10 years of experience, we&apos;ve successfully delivered countless projects across commercial,
              residential, and industrial sectors, earning a reputation for excellence and reliability.
            </p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className={styles.statCard}>
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statCard}>
              <h3>100+</h3>
              <p>Expert Team</p>
            </div>
            <div className={styles.statCard}>
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional construction services that exceed client expectations through innovation,
                quality craftsmanship, and unwavering commitment to excellence.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and respected construction company, known for our integrity,
                innovation, and dedication to building sustainable futures.
              </p>
            </div>
          </div>

          <div className={styles.valuesSection}>
            <h2>Our Core Values</h2>
            <div className={styles.valuesList}>
              <div className={styles.valueItem}>
                <h4>Quality</h4>
                <p>Delivering excellence in every project, no matter the size</p>
              </div>
              <div className={styles.valueItem}>
                <h4>Safety</h4>
                <p>Maintaining the highest standards of workplace safety</p>
              </div>
              <div className={styles.valueItem}>
                <h4>Innovation</h4>
                <p>Embracing new technologies and construction methods</p>
              </div>
              <div className={styles.valueItem}>
                <h4>Integrity</h4>
                <p>Operating with honesty and transparency in all dealings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;