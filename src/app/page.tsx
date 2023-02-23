import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.hero__img}>&nbsp;</div>

        <div className={styles.hero__banner}>
          <div className={styles.hero__cta}>
            <Link href="/activities" className={styles.btn__main}>
              Informes
            </Link>
          </div>
          <h1 className={styles.title}>
            Less Talk<span className={styles.span}>.</span>
          </h1>
          <h2 className={styles.subtitle}>
            More Chalk<span className={styles.span}>.</span>
          </h2>
        </div>
      </main>
      <section className={styles.section__about}>
        <p>
          El rocódromo más grande en la zona de Zapopan Jalisco<span className={styles.span}>.</span>
        </p>
      </section>
      <section className={styles.section__info}></section>
    </>
  );
}
