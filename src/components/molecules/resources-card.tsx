'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Gradient } from '@/components/utils';
import styles from './resources-card.module.scss';

interface ResourceCardProps {
  image: string;
  name: string;
  resourcePath: string;
  locationHref: string;
}
export function ResourcesCard({ image, name, resourcePath, locationHref }: ResourceCardProps) {
  const [hoverEffect, setHoverEffect] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.card__image} onMouseEnter={() => setHoverEffect(true)} onMouseLeave={() => setHoverEffect(false)}>
        <Gradient variant="manOfSteel" opacity={hoverEffect ? 0.6 : 0} />
        <Image src={image} alt="resource portrait" fill sizes="100px" />
      </div>
      <p className={styles.card__text}>{name}</p>
      <a className={styles.card__link} download href={resourcePath}>
        Descarga guía
      </a>
      <Link className={styles.card__maps} href={locationHref} target="_blank">
        <Image src="/icons/google-maps.png" alt="location icon" fill />
      </Link>
    </div>
  );
}
