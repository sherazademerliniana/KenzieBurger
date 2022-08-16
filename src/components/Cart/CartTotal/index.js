import { ButtonStyled } from "../../../styles/button";
import { FlexDiv } from "../../../styles/globalStyled";
import { Title } from "../../../styles/typography";

export function CartTotal({ cart, removeCart }) {
  const totalItens = () => {
    const totalValue = cart.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

    return totalValue;
  };

  return (
    <FlexDiv
      flexDirection="column"
      pad="1rem"
      gap="1rem"
      backgroundColor="#F5F5F5;"
      width="100%"
      border="0 0 .5rem .5rem"
    >
      <FlexDiv justify="space-between" pad=".5rem">
        <Title tag="h5" titleSize="title5" weigth="600">
          Total
        </Title>

        <Title tag="p" titleSize="body" weigth="semiBold" color="#828282">
          {totalItens().toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Title>
      </FlexDiv>
      <ButtonStyled
        typeButton="cartRemove"
        weight="600"
        onClick={(event) => removeCart(event.target.innerText)}
      >
        Remover Todos
      </ButtonStyled>
    </FlexDiv>
  );
}
