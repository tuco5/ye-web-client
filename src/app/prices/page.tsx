import { Title, Subtitle } from '@/components/atoms';
import { Grid } from '@/components/organisms';
import styles from './page.module.scss';

export default function InfoPage() {
  return (
    <>
      {/* CLIMBING */}
      <section className={`${styles.section} mt-8`} id="climbing">
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

          <Subtitle className={styles.section__subtitle}>
            Inscripcion <span className={styles.section__price}>$250</span>
          </Subtitle>
        </div>
        <div className={`${styles.climbing__img} ${styles.section__img}`}>&nbsp;</div>
      </section>

      {/* YOGA  */}
      <section className={styles.section} id="yoga">
        <div className={`${styles.yoga__img} ${styles.section__img}`}>&nbsp;</div>

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

          <Subtitle className={styles.section__subtitle}>
            Inscripcion <span className={styles.section__price}>$250</span>
          </Subtitle>
        </div>
      </section>
    </>
  );
}
