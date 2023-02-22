'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './navbar.module.scss';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo-min.png" width={120} height={60} alt="logo" />
          <p className={styles.logoText}>
            Yoga <span className={styles.plus}>+</span> Escalada
          </p>
        </Link>

        <div className={styles.menu}>
          <Link href="/about-us" className={`${styles.link} ${pathname === '/about-us' && styles.active}`}>
            ¿Quienes somos?
          </Link>
          <Link href="/activities" className={`${styles.link} ${pathname === '/activities' && styles.active}`}>
            Actividades
          </Link>
          <Link href="/testimonies" className={`${styles.link} ${pathname === '/testimonies' && styles.active}`}>
            Testimonios
          </Link>
        </div>
      </div>
    </nav>
  );
}
