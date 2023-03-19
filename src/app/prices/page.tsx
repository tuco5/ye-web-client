import Image from 'next/image';
import { Title, Subtitle, Banner } from '@/components/atoms';
import { Grid } from '@/components/organisms';
import climbingPic from '../../../public/images/ruta-3.jpg';
import yogaPic from '../../../public/images/yoga-1.jpg';
import memberPic from '../../../public/images/boulder-3.jpg';
import familyPic from '../../../public/images/ye-family.jpg';
import styles from './page.module.scss';
import { Gradient } from '@/components/utils';

export default function InfoPage() {
  return (
    <>
      {/* CLIMBING */}
      <section className={styles.section} id="climbing">
        <div className={styles.section__content}>
          <Title variant="rainbow-blue" className={styles.section__title}>
            Escalada
          </Title>
          <Subtitle className={styles.section__subtitle}>Membresia</Subtitle>
          <Grid.Container>
            <Grid.Item price="$790" caveat="( Incluye escalada ilimitada + 2 cortesías )">
              Mensual
            </Grid.Item>
            <Grid.Item price="$720" caveat="( Paquete para parejas. Precio por persona + 1 cortesías por persona )">
              Cordada Mensual
            </Grid.Item>
            <Grid.Item price="$2,190" caveat="( Incluye escalada ilimitada + 6 cortesías )">
              Trimestral
            </Grid.Item>
            <Grid.Item price="$4,190" caveat="( Incluye escalada ilimitada + 8 cortesías )">
              Semestral
            </Grid.Item>
            <Grid.Item price="$7,900" caveat="( Incluye escalada ilimitada + 12 cortesías )">
              Anual
            </Grid.Item>
            <Grid.Item price="$100" caveat="( Incluye escalada ilimitada + 12 cortesías )">
              Visita Socio
            </Grid.Item>
            <Grid.Item price="$150" caveat="( Para usuarios no inscritos )">
              Visita Foranea
            </Grid.Item>
          </Grid.Container>

          <Subtitle className={styles.section__inscription}>
            Inscripcion <span className={styles.section__price}>$250</span>
          </Subtitle>
        </div>
        <div className={`${styles.img__1} ${styles.section__img}`}>
          <Gradient opacity={0.6} variant="rainbowBlue" />
          <Image src={climbingPic} alt="man climbing in ye center" fill style={{ objectFit: 'cover' }} sizes="(max-width:600px) 100vw, 50vw" />
        </div>
      </section>

      {/* YOGA  */}
      <section className={`${styles.section} ${styles.section__yoga}`} id="yoga">
        <div className={`${styles.img__2} ${styles.section__img}`}>
          <Gradient opacity={0.6} variant="rainbowBlue" />
          <Image src={yogaPic} alt="man climbing in ye center" fill style={{ objectFit: 'cover' }} sizes="(max-width:600px) 100vw, 50vw" />
        </div>

        <div className={styles.section__content}>
          <Title variant="rainbow-blue" className={styles.section__title}>
            Yoga
          </Title>
          <Subtitle className={styles.section__subtitle}>Membresia</Subtitle>
          <Grid.Container>
            <Grid.Item price="$380">Mensual 4 clases</Grid.Item>
            <Grid.Item price="$650">Mensual 8 clases</Grid.Item>
            <Grid.Item price="$850">Mensual 12 clases</Grid.Item>
            <Grid.Item price="$990">Ilimitado</Grid.Item>
            <Grid.Item price="$2,250">Trimestral</Grid.Item>
            <Grid.Item price="$4,300">Semestral</Grid.Item>
            <Grid.Item price="$7,600">Anual</Grid.Item>
          </Grid.Container>

          <Subtitle className={styles.section__inscription}>
            Inscripcion <span className={styles.section__price}>$250</span>
          </Subtitle>
        </div>
      </section>

      <Banner>
        Para clientes recurrentes existen los paquetes<span className="green__500">.</span>
      </Banner>

      {/* MEMBER */}
      <section className={styles.section} id="member">
        <div className={styles.section__content}>
          <Title variant="rainbow-blue" className={styles.section__title}>
            Paquete Ye Plus
          </Title>
          <Subtitle className={styles.section__subtitle}>Membresia</Subtitle>
          <Grid.Container>
            <Grid.Item price="$1,390" caveat="( Escalada ilimitado, Yoga Ilimitado, consulta nutricional mensual, uso de instalaciones )">
              Ye plus Mensual
            </Grid.Item>
            <Grid.Item price="$1,190" caveat="( Escalada ilimitado, Yoga Ilimitado, uso de instalaciones )">
              Ye Mensual
            </Grid.Item>
            <Grid.Item price="$3,360">Ye Trimestral</Grid.Item>
            <Grid.Item price="$6,594">Ye Semestral</Grid.Item>
            <Grid.Item price="$12,600">Ye Anual</Grid.Item>
          </Grid.Container>

          <Subtitle className={styles.section__inscription}>
            Inscripcion <span className={styles.section__price}>$250</span>
          </Subtitle>
        </div>
        <div className={`${styles.img__1} ${styles.section__img}`}>
          <Gradient opacity={0.6} variant="rainbowBlue" />
          <Image src={memberPic} alt="man climbing in ye center" fill style={{ objectFit: 'cover', objectPosition: 'left' }} sizes="(max-width:600px) 100vw, 50vw" />
        </div>
      </section>

      {/* FAMILY  */}
      <section className={`${styles.section} ${styles.section__yoga}`} id="yoga">
        <div className={`${styles.img__2} ${styles.section__img}`}>
          <Gradient opacity={0.6} variant="rainbowBlue" />
          <Image src={familyPic} alt="man climbing in ye center" fill style={{ objectFit: 'cover', objectPosition: 'right' }} sizes="(max-width:600px) 100vw, 50vw" />
        </div>

        <div className={styles.section__content}>
          <Title variant="rainbow-blue" className={styles.section__title}>
            Ye Family
          </Title>
          <Subtitle className={styles.section__subtitle}>Membresia</Subtitle>
          <Grid.Container>
            <Grid.Item price="$1,200" caveat="( niños YE + practica de yoga para mamá o papá 2 veces por semana o niños YE + acondicionamiento físico para mamá o papá )">
              Program Family plus
            </Grid.Item>
            <Grid.Item price="$590" caveat="( 2 clases por semana )">
              Membresía niños escalada
            </Grid.Item>
            <Grid.Item price="$680" caveat="( Escalada 2 clases por semana + Yoga 1 clase por semana )">
              Membresía niños escalada
            </Grid.Item>
            <Grid.Item price="$120">Visita boulder niños</Grid.Item>
            <Grid.Item price="$120">Clases escalada o yoga niños</Grid.Item>
          </Grid.Container>

          <Subtitle className={styles.section__inscription}>
            Inscripcion niños <span className={styles.section__price}>$60</span>
          </Subtitle>
        </div>
      </section>
    </>
  );
}
