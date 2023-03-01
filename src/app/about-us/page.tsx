import styles from './page.module.scss';
import ClockIcon from '../../../public/icons/clock.svg';
export default function AboutUsPage() {
  return (
    <section className={styles.section}>
      <h2 className="coming_soon">
        Coming soon <span className="green__500">.</span>
      </h2>
      <ClockIcon className="coming_soon__icon" />
    </section>
  );
}
