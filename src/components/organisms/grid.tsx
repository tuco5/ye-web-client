import styles from './grid.module.scss';

interface ContainerProps {
  children: React.ReactElement<ItemProps> | Array<React.ReactElement<ItemProps>>;
}
export function Container({ children }: ContainerProps) {
  return <div className={styles.grid}>{children}</div>;
}

interface ItemProps {
  children: React.ReactNode;
  caveat?: string;
  price?: string;
}
export function Item({ children, caveat, price }: ItemProps) {
  return (
    <>
      <div className={styles.item}>
        <p className={styles.item__description}>{children}</p>
        <p className={styles.item__caveat}>{caveat}</p>
      </div>
      <div className={styles.item}>
        <p className={styles.item__price}>{price}</p>
      </div>
    </>
  );
}
