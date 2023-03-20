import { Title } from '@/components/atoms';
import { ResourcesCard } from '@/components/molecules';
import styles from './page.module.scss';

export default function ResourcesPage() {
  return (
    <section className={styles.section}>
      <Title variant="rainbow-blue" className={styles.section__title}>
        encuentra la veta
      </Title>

      <div className={styles.section__grid}>
        <ResourcesCard image="/images/el-diente.jpg" name="El Diente" resourcePath="/guias/el-diente.pdf" locationHref="https://goo.gl/maps/4iMciBzXXUeM4Uky6" />
        <ResourcesCard image="/images/el-diente.jpg" name="El Diente" resourcePath="/guias/el-diente.pdf" locationHref="https://goo.gl/maps/4iMciBzXXUeM4Uky6" />
        <ResourcesCard image="/images/el-diente.jpg" name="El Diente" resourcePath="/guias/el-diente.pdf" locationHref="https://goo.gl/maps/4iMciBzXXUeM4Uky6" />
        <ResourcesCard image="/images/el-diente.jpg" name="El Diente" resourcePath="/guias/el-diente.pdf" locationHref="https://goo.gl/maps/4iMciBzXXUeM4Uky6" />
      </div>
    </section>
  );
}
