import { useState, useEffect } from 'react';
import Link from 'next/link';
import menuData from './menu-data.json';
import styles from './mobile-menu.module.scss';
import { useScroll } from '@/hooks';

export function MobileMenu() {
  const [isActive, setIsActive] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { scrollToTop } = useScroll();

  useEffect(() => {
    setTimeout(() => {
      setAnimate(isActive);
    }, 50);
  }, [isActive]);

  const clickHandler = () => {
    scrollToTop('auto');
    setIsActive(false);
  };

  return (
    <div className={styles.container}>
      <button type="button" className={styles.hamburguerBtn} onClick={() => setIsActive((state) => !state)}>
        <span className={`${styles.hamburguerIcon} ${isActive && styles.activeIcon}`}>&nbsp;</span>
      </button>

      <div className={`${styles.background} ${animate && styles.activeBackground}`}>&nbsp;</div>

      <div className={`${styles.menu} ${animate && styles.activeMenu}`}>
        <Link href="/" className={styles.link} onClick={clickHandler}>
          Inicio
        </Link>
        {menuData.map(({ id, name, href }) => (
          <Link key={id} href={href} className={styles.link} onClick={clickHandler}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
