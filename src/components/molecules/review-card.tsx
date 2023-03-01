import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import QuotesIcon from '../../../public/icons/double-quotes.svg';
import styles from './review-card.module.scss';

interface ReviewCardProps {
  photo: StaticImageData;
  name: string;
  href?: string;
  children: React.ReactNode;
}

export function ReviewCard({ photo, name, href = '#', children }: ReviewCardProps) {
  return (
    <div>
      <Link className={styles.card} href={href} target="_blank">
        <div className={styles.icon}>
          <QuotesIcon />
        </div>
        <div className={styles.photo}>
          <Image src={photo} alt="review avatar" fill />
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.name}>{name}</div>
      </Link>
    </div>
  );
}
