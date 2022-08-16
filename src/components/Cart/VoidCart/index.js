import { FlexDiv } from "../../../styles/globalStyled";
import { Title } from "../../../styles/typography";

export function VoidCart() {
  return (
    <FlexDiv
      flexDirection="column"
      gap=".3rem"
      align="center"
      justify="center"
      width="100%"
      backgroundColor="#F5F5F5"
      border="0 0 .5rem .5rem"
      className="cart__void"
    >
      <Title tag="h3" titleSize="title3">
        Sua sacola está vazia
      </Title>
      <Title tag="p" titleSize="body" weigth="semiBold" color="#828282">
        Adicione itens
      </Title>
    </FlexDiv>
  );
}
