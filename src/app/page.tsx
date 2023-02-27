import Link from 'next/link';
import styles from './page.module.scss';
import { FeatureBox } from '@/components/molecules';

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
          <h2 className={styles.subtitle}>
            Less Talk<span className="green__500">.</span>
          </h2>
          <h2 className={styles.subtitle}>
            More Chalk<span className="green__500">.</span>
          </h2>
        </div>
      </main>

      <section className={styles.section__about}>
        <h1 className={styles.maintitle}>
          El rocódromo más grande en la zona de Zapopan Jalisco<span className="green__500">.</span>
        </h1>
      </section>

      <section className={styles.section__features}>
        <h3 className="title my-5">Un concepto de bienestar integral</h3>
        <div className={styles.features__banner}>
          <p className="text p-1 mb-2">
            A partir de una superación personal de cuerpo y mente, gracias al conjunto de los beneficios de escalar <span className="green__600">+</span> Yoga. Ambiente familiar y conexión con la
            naturaleza. Vida al aire libre.
          </p>
        </div>

        <div className={styles.features__container}>
          <FeatureBox icon="climbing" title="Escalada">
            Escalar incrementa la flexibilidad, la fuerza, al jalar con los brazos y empujar con las piernas fortalece los músculos.
          </FeatureBox>
          <FeatureBox icon="yoga" title="Yoga">
            Mejorar el nivel general de su estado físico y mejorar su postura y su flexibilidad.
          </FeatureBox>
          <FeatureBox icon="store" title="Tienda">
            Venta de equipamiento para Escalar y Montaña para tu próxima aventura.
          </FeatureBox>
          <FeatureBox icon="pet" title="Pet Friendly">
            Buscamos ser un espacio armonioso y limpio para toda la comunidad. Registra a tu perrhijo en recepción.
          </FeatureBox>
        </div>
      </section>

      <section className={styles.section__shift}></section>
      <section className={styles.section__testimonies}></section>
      <section className={styles.section__location}></section>
    </>
  );
}
