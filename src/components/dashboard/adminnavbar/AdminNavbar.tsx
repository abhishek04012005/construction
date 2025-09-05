"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { FaBars, FaTimes, FaSignOutAlt, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';
import styles from './AdminNavbar.module.css';
import imageLoader from '../../../../image-loader';

const AdminNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        document.cookie = 'adminAuth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
        localStorage.removeItem('adminAuth');
        router.push('/');
    };

    const navItems = [
        {
            path: '/admin/dashboard/contact',
            label: 'Contact Requests',
            icon: <FaEnvelope />
        },
        {
            path: '/admin/dashboard/enquiry',
            label: 'Enquiry',
            icon: <FaProjectDiagram />
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className={styles.adminNav}>
            <div className={styles.navContainer}>
                <div className={styles.navHeader}>
                    <Link href="/" className={styles.logoLink}>
                        <Image
                            loader={imageLoader}
                            src="./logo.png"
                            alt="Logo"
                            width={140}
                            height={45}
                            className={styles.logo}
                        />
                        <span className={styles.adminBadge}>Admin Panel</span>
                    </Link>

                    <button
                        className={styles.menuButton}
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        aria-label="Toggle menu"
                    >
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <div className={`${styles.navContent} ${isSidebarOpen ? styles.open : ''}`}>
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`${styles.navLink} ${pathname === item.path ? styles.active : ''
                                        }`}
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    <span className={styles.navIcon}>{item.icon}</span>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button onClick={handleLogout} className={styles.logoutButton}>
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;