import Link from 'next/link';
import { SocialmediaButton, Logo } from '../atoms';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.container}>
      <Logo className={styles.logo} />

      <div className={styles.social}>
        <SocialmediaButton variant="facebook" href="https://www.facebook.com/punto.muerto.1" />
        <SocialmediaButton variant="instagram" href="https://www.instagram.com/ye_center" />
      </div>

      <div className={styles.menu}>
        <Link className={styles.link} href="#">
          Terminos y condiciones
        </Link>
        <Link className={styles.link} href="#">
          Politicas de privacidad
        </Link>
      </div>

      <p className={styles.copyright}>© Copy Right 2023</p>
    </footer>
  );
}
