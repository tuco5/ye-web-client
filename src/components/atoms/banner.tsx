import styles from './banner.module.scss';

interface BannerProps {
  className?: string;
  children: React.ReactNode;
}

export function Banner({ children, className }: BannerProps) {
  return (
    <section className={`${styles.banner} ${className}`}>
      <p className="p-4">{children}</p>
    </section>
  );
}
