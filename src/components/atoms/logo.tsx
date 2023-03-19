'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from '@/hooks';

import styles from './logo.module.scss';

export function Logo({ className }: { className?: string }) {
  const { scrollToTop } = useScroll();

  return (
    <div className={className}>
      <Link href="/" className={styles.container} onClick={() => scrollToTop('smooth')} scroll={true}>
        <div className={styles.logo}>
          <Image className={styles.image} src="/images/logo.png" alt="logo" fill sizes="(max-width:600px) 75px, 100px" />
        </div>
        <h1 className={styles.text}>
          Yoga <span className={styles.plus}>+</span> Escalada
        </h1>
      </Link>
    </div>
  );
}
