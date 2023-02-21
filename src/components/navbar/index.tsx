import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <Image className={styles.logo} src="/logo.png" width={100} height={100} alt="logo" />
        </Link>

        <div className={styles.menu}>
          <Link href="/about-us">¿Quienes somos?</Link>
          <Link href="/activities">Actividades</Link>
          <Link href="/testimonies">Testimonios</Link>
        </div>
      </div>
    </nav>
  );
}
