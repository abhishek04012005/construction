// src/components/navbar/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import QuoteModal from "../popup/PopupModal";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      if (isOpen && menu && !menu.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navItems = ["Home", "Projects", "Works", "Equipment", "About"];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleQuoteClick = () => {
    setIsOpen(false);
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLogo}>
            <Link href="/" onClick={handleNavClick}>
              <div className={styles.logoWrapper}>
                <div className={styles.logoText}>
                  <span className={styles.companyName}>
                    Sah<span className={styles.highlight}>Construction</span>
                  </span>
                  <span className={styles.tagline}>
                    Excellence in Construction
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className={styles.menuWrapper}>
            <ul
              id="mobile-menu"
              className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}
            >
              {navItems.map((item) => (
                <li
                  key={item}
                  className={`${styles.navItem} ${
                    activeItem === item ? styles.active : ""
                  }`}
                  onMouseEnter={() => setActiveItem(item)}
                  onMouseLeave={() => setActiveItem("")}
                >
                  <Link
                    href={`/${
                      item.toLowerCase() === "home" ? "" : item.toLowerCase()
                    }`}
                    className={styles.navLink}
                    onClick={handleNavClick}
                  >
                    <span className={styles.linkText}>{item}</span>
                    <span className={styles.linkHighlight}></span>
                  </Link>
                </li>
              ))}
              <li className={styles.navItem}>
                <button
                  className={styles.contactBtn}
                  onClick={handleQuoteClick}
                >
                  <span>Get Quote</span>
                  <div className={styles.btnIcon}>
                    <svg viewBox="0 0 24 24" className={styles.arrow}>
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </div>
                </button>
              </li>
            </ul>

            <button
              className={`${styles.navbarToggle} ${isOpen ? styles.active : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};

export default Navbar;