import Image from 'next/image';
import Link from 'next/link';

import styles from './logo.module.scss';

export function Logo({ className }: { className?: string }) {
  // TODO: make logo on hover to shrink and text grow
  return (
    <div className={className}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo-min.png" width={120} height={60} alt="logo" />
        <p className={styles.text}>
          Yoga <span className={styles.plus}>+</span> Escalada
        </p>
      </Link>
    </div>
  );
}
