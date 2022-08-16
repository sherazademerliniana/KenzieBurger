import { FlexDiv } from "../../../styles/globalStyled";
import { Title } from "../../../styles/typography";

function Logo() {
  return (
    <FlexDiv align="flex-end" gap=".4rem" className="header__logo">
      <Title tag="h1" titleSize="title1" color="#333333">
        Burguer
      </Title>
      <Title tag="h3" titleSize="title3" color="#EB5757">
        Kenzie
      </Title>
    </FlexDiv>
  );
}

export default Logo;
