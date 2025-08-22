
"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import Logo from '../../assets/logo.png';

interface NavItem {
  id: number;
  title: string;
  path: string;
}

const navItems: NavItem[] = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'About Us', path: '/about' },
  { id: 3, title: 'Projects', path: '/projects' },
  { id: 4, title: 'Works', path: '/works' },
  { id: 5, title: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const menuRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image className={styles.logoImage} src={Logo} alt="Sharma Interiors" width={150} height={50} />
        </Link>

        <div
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.hamburgerIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul ref={menuRef} className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <Link
                href={item.path}
                className={styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;