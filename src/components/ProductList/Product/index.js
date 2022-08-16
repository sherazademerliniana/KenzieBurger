import { ButtonStyled } from "../../../styles/button";
import { FlexDiv } from "../../../styles/globalStyled";
import { Title } from "../../../styles/typography";
import { ProductCard } from "./style";

export function Product({ menu, addCart }) {
  return (
    <>
      {menu?.map((product) => {
        return (
          <ProductCard className="product__card" key={product.id}>
            <figure>
              <img src={product.img} alt={product.name} />
            </figure>

            <FlexDiv className="product__info">
              <Title tag="h3" titleSize="title3">
                {product.name}
              </Title>
              <Title tag="small" titleSize="caption" color="#828282">
                {product.category}
              </Title>

              <Title tag="p" titleSize="body" weigth="semiBold" color="#27AE60">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Title>

              <ButtonStyled
                typeButton="default"
                weight="600"
                onClick={(event) => addCart(event.target.value)}
                width="50%"
                value={product.id}
              >
                Adicionar
              </ButtonStyled>
            </FlexDiv>
          </ProductCard>
        );
      })}
    </>
  );
}
