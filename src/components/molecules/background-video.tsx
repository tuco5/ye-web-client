import styles from './background-video.module.scss';

interface BackgroundVideoProps {
  mp4: string;
  webm?: string;
}

export function BackgroundVideo({ mp4, webm }: BackgroundVideoProps) {
  return (
    <div className={styles.container}>
      <video className={styles.content} autoPlay muted loop>
        <source src={mp4} type="video/mp4" />
        <source src={webm} type="video/webm" />
        Your browser is not supported!
      </video>
    </div>
  );
}
