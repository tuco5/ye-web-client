import Link from 'next/link';
import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'main' | 'text';
  type?: 'button' | 'link';
  href?: string;
}

export function Button({ children, href = '#', variant, type = 'button' }: ButtonProps) {
  if (type === 'link') {
    return (
      <Link href={href} className={styles[variant]}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles[variant]}>
      {children}
    </button>
  );
}
