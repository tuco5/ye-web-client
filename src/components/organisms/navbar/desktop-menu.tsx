import Link from 'next/link';
import { usePathname } from 'next/navigation';
import menuData from './menu-data.json';
import styles from './desktop-menu.module.scss';
import { useScroll } from '@/hooks';

export function DesktopMenu() {
  const pathname = usePathname();
  const { scrollToTop } = useScroll();

  return (
    <div className={styles.menu}>
      {menuData.map(({ id, name, href }) => (
        <Link key={id} href={href} className={`${styles.link} ${pathname === href && styles.active}`} onClick={() => scrollToTop('auto')}>
          {name}
        </Link>
      ))}
    </div>
  );
}
