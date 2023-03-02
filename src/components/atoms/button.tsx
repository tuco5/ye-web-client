import Link from 'next/link';
import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'main' | 'text';
  type?: 'button' | 'link';
  href?: string;
  className?: string;
}

export function Button({ children, href = '#', variant, type = 'button', className }: ButtonProps) {
  className = `${className} ${styles[variant]}`;
  if (type === 'link') {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}
