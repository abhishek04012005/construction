"use client";
import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';
import imageLoader from '../../../image-loader';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.logoWrapper}>
            <Image loader={imageLoader} className={styles.logoImage} src="./logo.svg" alt="Logo" height={60} width={60} />
          </div>
          <p className={styles.companyDesc}>
            Leading the way in innovative construction and architectural solutions,
            delivering excellence in every project.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/works">Works</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/admin/login">Admin Login</Link>
          </nav>
        </div>

        <div className={styles.footerSection}>
          <h4>Contact Info</h4>
          <div className={styles.contactInfo}>
            <p>VPO Haripur Sandholi, Baddi Road, Sandholi, Solan, Himachal Pradesh-173205</p>
            <p>Phone: 9882626050, 7018009352</p>
            <p>Email: contact@sahconstructions.com</p>
          </div>
        </div>


      </div>

      <div className={styles.footerBottom}>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Sah Constructions. All rights reserved.
        </p>
        <p className={styles.copyright}>
          Powered By <a href="https://www.anksquare.com" target="_blank" rel="noopener noreferrer">Anksquare</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;