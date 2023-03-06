import styles from './title.module.scss';

interface TitleProps {
  variant?: 'rainbow-blue' | 'default';
  className?: string;
  children: React.ReactNode;
}

export function Title({ children, variant = 'default', className }: TitleProps) {
  return <h3 className={`${styles[variant]} ${className}`}>{children}</h3>;
}
