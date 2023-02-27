import Image from 'next/image';
import Link from 'next/link';

import styles from './logo.module.scss';

export function Logo({ className }: { className?: string }) {
  // TODO: make logo on hover to shrink and text grow
  return (
    <div className={className}>
      <Link href="/" className={styles.logo}>
        <Image className={styles.image} src="/images/logo.png" width={100} height={50} alt="logo" />
        <p className={styles.text}>
          Yoga <span className={styles.plus}>+</span> Escalada
        </p>
      </Link>
    </div>
  );
}
