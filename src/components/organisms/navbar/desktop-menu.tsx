import Link from 'next/link';
import { usePathname } from 'next/navigation';
import menuData from './menu-data.json';
import styles from './desktop-menu.module.scss';

export function DesktopMenu() {
  const pathname = usePathname();
  return (
    <div className={styles.menu}>
      {menuData.map(({ id, name, href }) => (
        <Link key={id} href={href} className={`${styles.link} ${pathname === '/prices' && styles.active}`}>
          {name}
        </Link>
      ))}
    </div>
  );
}
