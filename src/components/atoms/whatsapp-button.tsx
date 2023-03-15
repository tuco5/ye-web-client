import Image from 'next/image';
import Link from 'next/link';
import whatsappIcon from '../../../public/images/whatsapp-icon.png';
import styles from './whatsapp-button.module.scss';

interface WhatsappButtonProps {
  phone: string;
  initMsg?: string;
}

export function WhatsappButton({ phone, initMsg = '' }: WhatsappButtonProps) {
  return (
    <div className={styles.container}>
      <Link className={styles.link} target="_blank" href={`https://api.whatsapp.com/send?phone=+521${phone}&text=${initMsg}`}>
        <Image src={whatsappIcon} alt="whatsapp" className={styles.icon} />
      </Link>
    </div>
  );
}
