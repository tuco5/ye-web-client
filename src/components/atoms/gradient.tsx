import styles from './gradient.module.scss';

interface GradientProps {
  opacity: number;
  variant: 'rainbowBlue' | 'manOfSteel';
}

export function Gradient({ opacity, variant }: GradientProps) {
  return (
    <div className={`${styles.gradient} ${styles[variant]}`} style={{ opacity: opacity }}>
      &nbsp;
    </div>
  );
}
