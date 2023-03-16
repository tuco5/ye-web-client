'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../atoms';
import styles from './navbar.module.scss';
import { useScroll } from '@/hooks';

export function Navbar() {
  const pathname = usePathname();
  const { scrollY, scrollToTop } = useScroll();
  const [top, setTop]: any = useState(0);

  useEffect(() => {
    if (scrollY > 0) {
      setTop(-110);
    }
    if (scrollToTop) {
      setTop(0);
    }
  }, [scrollY, scrollToTop]);

  return (
    <nav className={styles.navbar} id="nav" style={{ top: top }}>
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
