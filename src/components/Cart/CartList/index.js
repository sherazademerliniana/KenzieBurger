import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";
import { CartContainer } from "./style";
import { FlexDiv } from "../../../styles/globalStyled";

export function CartList({ cart, removeCart }) {
  return (
    <>
      <CartContainer flexDirection="column">
        <CartProduct cart={cart} removeCart={removeCart} />
      </CartContainer>

      <FlexDiv
        width="100%"
        height=".3rem"
        backgroundColor="#f5f5f5  "
      ></FlexDiv>
      <FlexDiv width="100%" height=".3rem" backgroundColor="#E0E0E0"></FlexDiv>

      <CartTotal cart={cart} removeCart={removeCart} />
    </>
  );
}
