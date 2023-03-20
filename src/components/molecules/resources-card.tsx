'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Gradient } from '@/components/utils';
import { useWindowSize } from '@/hooks';
import { tabLand } from '@/constants/breakpoints';
import styles from './resources-card.module.scss';

interface ResourceCardProps {
  image: string;
  name: string;
  resourcePath: string;
  locationHref: string;
}
export function ResourcesCard({ image, name, resourcePath, locationHref }: ResourceCardProps) {
  const [hoverEffect, setHoverEffect] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setHoverEffect(width <= tabLand);
  }, [width]);

  return (
    <div className={styles.card}>
      <a className={styles.card__link} href={resourcePath}>
        <div className={styles.card__image} onMouseEnter={() => setHoverEffect(true)} onMouseLeave={() => setHoverEffect(false)}>
          <Gradient variant="manOfSteel" opacity={hoverEffect ? 0 : 0.4} />
          <Image src={image} alt="resource portrait" width={110} height={110} />
        </div>
        <p className={styles.card__text}>{name}</p>
        Descargar
      </a>
      <Link className={styles.card__maps} href={locationHref} target="_blank">
        <Image src="/icons/google-maps.png" alt="location icon" width={24} height={24} />
      </Link>
    </div>
  );
}
