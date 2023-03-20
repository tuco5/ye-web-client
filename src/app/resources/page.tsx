import { Subtitle, Title } from '@/components/atoms';
import { ResourcesCard } from '@/components/molecules';
import styles from './page.module.scss';

export default function ResourcesPage() {
  return (
    <section className={styles.section} title="Guias">
      <Title variant="rainbow-blue" className={styles.section__title}>
        Guías
      </Title>
      <Subtitle className={styles.section__subtitle}>Encuentra la veta</Subtitle>

      <div className={styles.section__grid}>
        <ResourcesCard image="/images/el-diente.jpg" name="El Diente" resourcePath="/guias/el-diente.pdf" locationHref="https://goo.gl/maps/4iMciBzXXUeM4Uky6" />
        <ResourcesCard image="/images/el-cuajo.jpeg" name="El Cuajo" resourcePath="/guias/el-cuajo.pdf" locationHref="https://goo.gl/maps/ccoAxugsruuWqwsHA" />
        <ResourcesCard image="/images/ixcatan.jpg" name="Ixcatan" resourcePath="/guias/ixcatan.pdf" locationHref="https://goo.gl/maps/mMrWfm1ViGYy9TgXA" />
        <ResourcesCard image="/images/bernal.jpg" name="Bernal" resourcePath="/guias/bernal.pdf" locationHref="https://goo.gl/maps/Mpp4QL97fzZgBui89" />
      </div>
    </section>
  );
}
