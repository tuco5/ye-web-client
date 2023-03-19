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
        <div className={`${styles.section__content} mt-8`}>
          <Title variant="rainbow-blue" className={styles.section__title}>
            Membresía Escalada
          </Title>
          <Grid.Container>
            <Grid.Item price="$1,100" caveat="(Costo mensual. Entrenos martes, jueves y sábados)">
              Equipo YE 3 sesiones
            </Grid.Item>
            <Grid.Item price="$690" caveat="(Costo mensual. Entrenos martes y jueves)">
              Equipo YE 2 sesiones
            </Grid.Item>
            <Grid.Item price="$790" caveat="(Incluye escalada ilimitada + 2 cortesías)">
              Mes por Mono 🐒
            </Grid.Item>
            <Grid.Item price="$720" caveat="(Paquete para parejas. Precio por persona + 1 cortesías por persona)">
              Mes por Cordada 🐵 🐵
            </Grid.Item>
            <Grid.Item>---</Grid.Item>
            <Grid.Item price="$2,190" caveat="(Incluye escalada ilimitada + 6 cortesías)">
              Trimestral
            </Grid.Item>
            <Grid.Item price="$4,190" caveat="(Incluye escalada ilimitada + 8 cortesías)">
              Semestral
            </Grid.Item>
            <Grid.Item price="$7,900" caveat="(Incluye escalada ilimitada + 12 cortesías)">
              Anual
            </Grid.Item>
            <Grid.Item>---</Grid.Item>
            <Grid.Item price="$100" caveat="(Incluye escalada ilimitada + 12 cortesías)">
              Visita Socio
            </Grid.Item>
            <Grid.Item price="$150" caveat="(Para usuarios no inscritos)">
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
            Membresía Yoga
          </Title>
          <Grid.Container>
            <Grid.Item price="$99">1 clase suelta</Grid.Item>
            <Grid.Item price="$380">4 clases por mes</Grid.Item>
            <Grid.Item price="$650">8 clases por mes</Grid.Item>
            <Grid.Item price="$850">12 clases por mes</Grid.Item>
            <Grid.Item>---</Grid.Item>
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
        Para clientes recurrentes tenemos paquetes<span className="green__500">.</span>
      </Banner>

      {/* MEMBER */}
      <section className={styles.section} id="member">
        <div className={styles.section__content}>
          <Title variant="rainbow-blue" className={styles.section__title}>
            Paquete Membresía Ye Plus
          </Title>
          <Grid.Container>
            <Grid.Item price="$1,390" caveat="(Escalada y Yoga ilimitado, consulta nutricional mensual + 2 cortesías)">
              Ye plus Mensual
            </Grid.Item>
            <Grid.Item price="$1,190" caveat="(Escalada y Yoga ilimitado + 2 cortesías)">
              Ye Mensual
            </Grid.Item>
            <Grid.Item price="$3,360" caveat="(Escalada y Yoga ilimitado + 6 cortesías)">
              Ye Trimestral
            </Grid.Item>
            <Grid.Item price="$6,594" caveat="(Escalada y Yoga ilimitado + 8 cortesías)">
              Ye Semestral
            </Grid.Item>
            <Grid.Item price="$12,600" caveat="(Escalada y Yoga ilimitado + 12 cortesías)">
              Ye Anual
            </Grid.Item>
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
      <section className={`${styles.section} ${styles.section__yoga}`} id="family">
        <div className={`${styles.img__2} ${styles.section__img}`}>
          <Gradient opacity={0.6} variant="rainbowBlue" />
          <Image src={familyPic} alt="man climbing in ye center" fill style={{ objectFit: 'cover', objectPosition: 'right' }} sizes="(max-width:600px) 100vw, 50vw" />
        </div>

        <div className={styles.section__content}>
          <Title variant="rainbow-blue" className={styles.section__title}>
            Ye Family
          </Title>
          <Grid.Container>
            <Grid.Item price="$1,350" caveat="(niños YE + practica de yoga para mamá o papá 2 veces por semana o niños YE + acondicionamiento físico para mamá o papá)">
              Program Family plus
            </Grid.Item>
            <Grid.Item>---</Grid.Item>
            <Grid.Item price="$690" caveat="(2 clases por semana)">
              Membresía niños escalada
            </Grid.Item>
            <Grid.Item price="$1,180" caveat="(Escalada 2 clases por semana + 1 clase arte marcial)">
              Membresía niños YE bird
            </Grid.Item>
            <Grid.Item>---</Grid.Item>
            <Grid.Item price="$80">Visita boulder niños</Grid.Item>
            <Grid.Item price="$150">Clases escalada niños</Grid.Item>
          </Grid.Container>

          <Subtitle className={styles.section__inscription}>
            Inscripcion niños <span className={styles.section__price}>$250</span>
          </Subtitle>
        </div>
      </section>
    </>
  );
}
