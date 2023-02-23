import Image from 'next/image';
import Link from 'next/link';

import styles from './logo.module.scss';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className}>
      <Image src="/logo-min.png" width={120} height={60} alt="logo" />
      <p className={styles.text}>
        Yoga <span className={styles.plus}>+</span> Escalada
      </p>
    </Link>
  );
}
