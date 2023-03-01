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
          <Link href="/prices" className={`${styles.link} ${pathname === '/prices' && styles.active}`}>
            Precios
          </Link>
          <Link href="/about-us" className={`${styles.link} ${pathname === '/about-us' && styles.active}`}>
            Cultura
          </Link>
          <Link href="/resources" className={`${styles.link} ${pathname === '/resources' && styles.active}`}>
            Recursos
          </Link>
        </div>
      </div>
    </nav>
  );
}
