'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../atoms/logo';
import styles from './navbar.module.scss';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Logo />

        <div className={styles.menu}>
          <Link href="/activities" className={`${styles.link} ${pathname === '/activities' && styles.active}`}>
            Actividades
          </Link>
          <Link href="/about-us" className={`${styles.link} ${pathname === '/about-us' && styles.active}`}>
            Cultura
          </Link>
          <Link href="/testimonies" className={`${styles.link} ${pathname === '/testimonies' && styles.active}`}>
            Testimonios
          </Link>
        </div>
      </div>
    </nav>
  );
}