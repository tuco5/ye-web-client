import Link from 'next/link';
import styles from './page.module.scss';
import { FeatureBox, BackgroundVideo } from '@/components/molecules';
import { Button } from '@/components/atoms';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.hero__img}>&nbsp;</div>

        <div className={styles.hero__banner}>
          <h2 className={styles.subtitle}>
            Less Talk<span className="green__500">.</span>
          </h2>
          <h2 className={styles.subtitle}>
            More Chalk<span className="green__500">.</span>
          </h2>
          <div className={styles.hero__cta}>
            <Button href="/informes" type="link" variant="main">
              Informes
            </Button>
          </div>
        </div>
      </main>

      <section className={styles.banner}>
        <h1 className={styles.maintitle}>
          El rocódromo más original en la zona de Zapopan Jalisco<span className="green__500">.</span>
        </h1>
      </section>

      <section className={styles.features}>
        <h3 className="title mt-6 mb-2">Un concepto de bienestar integral</h3>
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

      <section className={styles.shift}>
        <div className={styles.shift__container}>
          <div className={styles.shift__content}>
            <h3 className="title mt-5 mb-2">Inscripción y horario</h3>
            <div className={styles.shift__text__group}>
              <p className={styles.shift__text__1}>Lunes a Viernes</p>
              <p className={styles.shift__text__2}>10:00am - 10:30pm</p>
            </div>
            <div className={styles.shift__text__group}>
              <p className={styles.shift__text__1}>Sábados</p>
              <p className={styles.shift__text__2}>10:00am - 8:00pm</p>
            </div>
            <div className={styles.shift__text__group}>
              <p className={styles.shift__text__1}>Domingos</p>
              <p className={styles.shift__text__3}>Cerrado</p>
            </div>
            <div className={`${styles.shift__text__group} mt-3`}>
              <p className={styles.shift__text__1}>Costos</p>
              <ul className={styles.shift__menu}>
                <Button href="/info#climbing" variant="text" type="link">
                  Escalada &rarr;
                </Button>
                <Button href="/info#yoga" variant="text" type="link">
                  Yoga &rarr;
                </Button>
              </ul>
            </div>
          </div>

          <div className={styles.shift__img__container}>
            <div className={styles.shift__img}>&nbsp;</div>
          </div>
        </div>
      </section>

      <section className={styles.testimonies}>
        <div className={styles.testimonies__video}>
          <BackgroundVideo mp4="https://www.facebook.com/FacebookDevelopers/videos/10152454700553553/" />
        </div>
        <h3 className="title my-5">Historias</h3>
      </section>

      <section className={styles.location}>
        <h3 className="title my-5">Ubicación</h3>
      </section>
    </>
  );
}
