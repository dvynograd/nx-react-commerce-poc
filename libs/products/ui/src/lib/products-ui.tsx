import styles from './products-ui.module.css';

/* eslint-disable-next-line */
export interface ProductsUiProps {}

export function ProductsUi(props: ProductsUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProductsUi!</h1>
    </div>
  );
}

export default ProductsUi;
