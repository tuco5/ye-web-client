import styles from './page.module.scss';
import { Carousel } from '@/components/organisms';
import { FeatureBox, ReviewCard } from '@/components/molecules';
import { Button } from '@/components/atoms';
import profilePic1 from '../../public/images/user-1-min.jpg';
import profilePic2 from '../../public/images/user-2-min.jpg';
import profilePic3 from '../../public/images/user-3-min.jpg';
import profilePic4 from '../../public/images/user-4-min.jpg';
import profilePic5 from '../../public/images/user-5-min.jpg';
import profilePic6 from '../../public/images/user-6-min.jpg';

export default function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.hero__img}>&nbsp;</div>

        <div className={styles.hero__banner}>
          <h2 className={`${styles.subtitle} ${styles.subtitle__animate__1}`}>
            Less Talk<span className="green__500">.</span>
          </h2>
          <h2 className={`${styles.subtitle} ${styles.subtitle__animate__2}`}>
            More Chalk<span className="green__500">.</span>
          </h2>
          <div className={styles.hero__cta}>
            <Button href="/informes" type="link" variant="main" className={styles.hero__cta__animation}>
              Informes
            </Button>
          </div>
        </div>
      </main>

      <section className={styles.banner}>
        <p className="pb-4">
          El poderosísimo rocódromo más original en Guadalajara Jalisco<span className="green__500">.</span>
        </p>
      </section>

      <section className={styles.features}>
        <h3 className="title mt-6 mb-2">Un concepto de bienestar integral</h3>
        <div className={styles.features__banner}>
          <p className="text p-1 mb-2">
            A partir de una superación personal de cuerpo y mente, gracias al conjunto de los beneficios de escalar <span className="green__600">+</span> Yoga.
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
            <h3 className="title mt-5 mb-2">horarios</h3>
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
                <Button href="/prices#climbing" variant="text" type="link">
                  Escalada &rarr;
                </Button>
                <Button href="/prices#yoga" variant="text" type="link">
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

      <section className={styles.banner__2}>
        <p className="pb-4">
          Ambiente familiar, conexión con la naturaleza, vida al aire libre<span className="green__500">.</span>
        </p>
      </section>

      <section className={styles.testimonies}>
        <h3 className="title my-8">Historias</h3>

        <Carousel arrows={false} className={styles.testimonies__carousel} autoplay infinite>
          <ReviewCard name="James" photo={profilePic1} href="https://www.facebook.com/jimymaple/posts/4535790303104167">
            <p>Gran ambiente y pura diversión!!</p>
          </ReviewCard>
          <ReviewCard name="Gil Gofer" photo={profilePic2} href="https://www.facebook.com/gil.gofer/posts/10157797204899596">
            <p>excellent outdoor climbing gym! top level boulders and lead routes! awesome staff! Yeahhhhh!!!</p>
          </ReviewCard>
          <ReviewCard name="Barbie Dayz" photo={profilePic3} href="https://www.facebook.com/waaa12345/posts/10160755383350543">
            <p>Excelentes maestros de yoga. Muy buenas instalaciones para escalar.</p>
          </ReviewCard>
          <ReviewCard name="Nicole Basich" photo={profilePic4} href="https://www.facebook.com/nicole.basich/posts/10213912231294534">
            <p>el mejor muro de escalada en gdl</p>
          </ReviewCard>
          <ReviewCard name="Mauricio Villavicencio" photo={profilePic5} href="https://www.facebook.com/mauricio.villavicencio.12/posts/1586729591431646">
            <p>Las instalaciones y el ambiente por no dejar de decir del personal, todo excelso</p>
          </ReviewCard>
          <ReviewCard name="Ruth B Garcia Hdz" photo={profilePic6} href="https://www.facebook.com/ruth.b.hdz.3/posts/10158581476097506">
            <p>No puedo encontrar otro lugar mejor para relajarme más que este.</p>
          </ReviewCard>
        </Carousel>
      </section>

      <section className={styles.location}>
        <div className={styles.location__map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.889853241277!2d-103.43646799999999!3d20.633346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad01239c5de1%3A0x4dbf784f6c56f4b5!2sYE%20Escalada%20%2B%20Yoga%20Center!5e0!3m2!1ses-419!2smx!4v1677639047209!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
