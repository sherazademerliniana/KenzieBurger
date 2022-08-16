import { ButtonStyled } from "../../../styles/button";
import { FlexDiv } from "../../../styles/globalStyled";
import { Title } from "../../../styles/typography";
import { ProductCard } from "./style";

export function CartProduct({ cart, removeCart }) {
  return (
    <>
      {cart?.map((product) => {
        return (
          <ProductCard key={product.id}>
            <FlexDiv width="100%" justify="space-between">
              <FlexDiv width="50%" gap=".5rem">
                <img src={product.img} alt={product.name} />

                <FlexDiv flexDirection="column" gap=".3rem">
                  <Title tag="h4" titleSize="title4">
                    {product.name}
                  </Title>
                  <Title tag="small" titleSize="caption" color="#828282">
                    {product.category}
                  </Title>
                </FlexDiv>
              </FlexDiv>

              <ButtonStyled
                value={product.id}
                height="50%"
                onClick={(event) => removeCart(event.target.value)}
                typeButton="remove"
                weight="500"
              >
                Remover
              </ButtonStyled>
            </FlexDiv>
          </ProductCard>
        );
      })}
    </>
  );
}
