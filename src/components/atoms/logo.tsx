import Image from 'next/image';
import Link from 'next/link';

import styles from './logo.module.scss';

export function Logo({ className }: { className?: string }) {
  // TODO: make logo on hover to shrink and text grow
  return (
    <div className={className}>
      <Link href="/" className={styles.container}>
        <div className={styles.logo}>
          <Image className={styles.image} src="/images/logo.png" fill alt="logo" />
        </div>
        <h1 className={styles.text}>
          Yoga <span className={styles.plus}>+</span> Escalada
        </h1>
      </Link>
    </div>
  );
}
