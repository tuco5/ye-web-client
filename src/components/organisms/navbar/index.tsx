'use client';
import { useEffect, useState } from 'react';
import { Logo } from '../../atoms';
import { useScroll, useWindowSize } from '@/hooks';
import { DesktopMenu } from './desktop-menu';
import { tabLand } from '@/constants/breakpoints';
import styles from './navbar.module.scss';
import { MobileMenu } from './mobile-menu';

export function Navbar() {
  const [top, setTop]: any = useState(0);
  const { scrollY, scrollingUp } = useScroll();
  const { width } = useWindowSize();

  useEffect(() => {
    if (scrollY > 110) {
      setTop(-110);
    }
    if (scrollingUp) {
      setTop(0);
    }
  }, [scrollY, scrollingUp]);

  return (
    <nav className={styles.navbar} id="nav" style={{ top: top }}>
      <div className={styles.container}>
        <Logo className="p-2" />
        {width > tabLand ? <DesktopMenu /> : <MobileMenu />}
      </div>
    </nav>
  );
}
