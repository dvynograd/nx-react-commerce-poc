import { ProductInterface } from "@tele2/products/data";

export interface ProductsProps {
  product: ProductInterface;
}
export function Product({ product }: ProductsProps) {
  return (
    <div>
      <div>{product.title}: {product.price} SEK</div>
      <div><img src={product.image} alt={product.title} /></div>
    </div>
  );
}

export default Product;
