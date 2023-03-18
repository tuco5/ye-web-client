import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './desktop-menu.module.scss';

export function DesktopMenu() {
  const pathname = usePathname();
  return (
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
  );
}
