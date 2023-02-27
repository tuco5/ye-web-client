'use client';
import styles from './feature-box.module.scss';
import CarabinerIcon from '../../../public/icons/carabiner.svg';
import YogaIcon from '../../../public/icons/yoga.svg';
import ClimbingIcon from '../../../public/icons/climbing.svg';
import PetFriendlyIcon from '../../../public/icons/pet-friendly.svg';

interface FeatureBoxProps {
  children: React.ReactNode;
  icon: 'store' | 'yoga' | 'climbing' | 'pet';
  title: string;
}

export function FeatureBox({ children, icon, title }: FeatureBoxProps) {
  return (
    <div className={styles.container}>
      <Icon variant={icon} className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

function Icon({ variant, className }: { variant: string; className: string }) {
  if (variant === 'store') {
    return <CarabinerIcon className={className} />;
  } else if (variant === 'yoga') {
    return <YogaIcon className={className} />;
  } else if (variant === 'climbing') {
    return <ClimbingIcon className={className} />;
  } else if (variant === 'pet') {
    return <PetFriendlyIcon className={className} />;
  }
  return null;
}
