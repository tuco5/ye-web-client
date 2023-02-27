'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../atoms';
import styles from './navbar.module.scss';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Logo />

        <div className={styles.menu}>
          <Link href="/timetable" className={`${styles.link} ${pathname === '/timetable' && styles.active}`}>
            Horarios
          </Link>
          <Link href="/about-us" className={`${styles.link} ${pathname === '/about-us' && styles.active}`}>
            Cultura
          </Link>
          <Link href="/contact-us" className={`${styles.link} ${pathname === '/contact-us' && styles.active}`}>
            Contactanos
          </Link>
        </div>
      </div>
    </nav>
  );
}
