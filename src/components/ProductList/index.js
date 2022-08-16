import { Product } from "./Product";
import { ContainerProduct } from "./style";

export function ProductList({ menu, addCart }) {
  return (
    <ContainerProduct>
      <Product menu={menu} addCart={addCart} />
    </ContainerProduct>
  );
}
