import styles from './subtitle.module.scss';

interface TitleProps {
  variant?: 'default';
  className?: string;
  children: React.ReactNode;
}

export function Subtitle({ children, variant = 'default', className }: TitleProps) {
  return <h4 className={`${styles[variant]} ${className}`}>{children}</h4>;
}
