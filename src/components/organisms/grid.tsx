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
  price: string;
}
export function Item({ children, caveat, price }: ItemProps) {
  return (
    <>
      <div className={styles.item}>
        <div className={styles.item__description}>{children}</div>
        <div className={styles.item__caveat}>{caveat}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.item__price}>{price}</div>
      </div>
    </>
  );
}
