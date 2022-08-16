import { FlexDiv } from "../../styles/globalStyled";
import { Title } from "../../styles/typography";
import { CartList } from "./CartList";
import { CartStyled } from "./style";
import { VoidCart } from "./VoidCart";

export function Cart({ cart, removeCart }) {
  return (
    <CartStyled>
      <FlexDiv flexDirection="column" className="cart">
        <Title
          tag="h3"
          titleSize="title3"
          color="#FFFFFF"
          backgroundColor="#27AE60"
          width="100%"
          pad=".9rem"
          border=".3rem .3rem 0 0"
        >
          Carrinho de Compras
        </Title>
        {cart.length !== 0 ? (
          <CartList cart={cart} removeCart={removeCart} />
        ) : (
          <VoidCart />
        )}
      </FlexDiv>
    </CartStyled>
  );
}
