// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getProducts, ProductInterface } from '@tele2/products/data';
import { Product } from '@tele2/products/ui';
import { useEffect, useState } from 'react';

export function App() {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const fetchProducts = async() => {
      setProducts(await getProducts())
    }
    fetchProducts()
  }, []);

  return (
    <>
    <h1>Products</h1>
    <ul>
      {products.map((product) => (
        <li className={'todo'}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  </>
  );
}

export default App;
