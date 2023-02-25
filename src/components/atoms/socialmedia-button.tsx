'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './socialmedia-button.module.scss';
import InstagramIcon from '../../../public/icons/instagram-icon.svg';
import FacebookIcon from '../../../public/icons/fb-icon.svg';

interface SocialmediaButtonProps {
  href: string;
  variant: 'facebook' | 'instagram';
}

export function SocialmediaButton({ href, variant }: SocialmediaButtonProps) {
  return (
    <Link href={href} className={styles.container} target="_blank">
      <div className={styles[variant]}>
        <Icon variant={variant} className={styles.icon} />
      </div>
    </Link>
  );
}

function Icon({ variant, className }: { variant: string; className: string }) {
  if (variant === 'facebook') {
    return <FacebookIcon className={className} />;
  } else if (variant === 'instagram') {
    return <InstagramIcon className={className} />;
  }
  return null;
}
