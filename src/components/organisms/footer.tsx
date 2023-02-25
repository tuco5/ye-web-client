import Logo from '../atoms/logo';

import styles from './footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import FacebookIcon from '../../../public/icons/fb-icon.svg';
import InstagramIcon from '../../../public/icons/instagram-icon.svg';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo className={styles.footer__logo} />

      <div className={styles.footer__social}>
        <Link href="https://www.facebook.com/punto.muerto.1">
          <Image className={`${styles.icon} ${styles.icon__fb}`} src={FacebookIcon} alt="facebook" height={30} width={30} />
        </Link>
        <Link href="https://www.instagram.com/ye_center">
          <Image className={`${styles.icon} ${styles.icon__instagram}`} src={InstagramIcon} alt="instagram" height={30} width={30} />
        </Link>
      </div>

      <div className={styles.footer__menu}>
        <Link className={styles.footer__link} href="#">
          Terminos y condiciones
        </Link>
        <Link className={styles.footer__link} href="#">
          Politicas de privacidad
        </Link>
        <Link className={styles.footer__link} href="#">
          Bolsa de trabajo
        </Link>
      </div>
      <p className={styles.footer__copyright}>© Copy Right 2023</p>
    </footer>
  );
}
