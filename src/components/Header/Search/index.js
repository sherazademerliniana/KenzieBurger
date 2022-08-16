import { useState } from "react";
import { ButtonStyled } from "../../../styles/button";
import { FlexDiv } from "../../../styles/globalStyled";
import { InputStyled } from "./style";

function Search({ search }) {
  const [textSearch, setTextSearch] = useState("");

  return (
    <FlexDiv
      align="center"
      justify="flex-end"
      position="relative"
      className="header__search"
    >
      <InputStyled
        placeholder="Digitar Pesquisa"
        onChange={(event) => setTextSearch(event.target.value)}
      ></InputStyled>

      <ButtonStyled
        typeButton="default"
        weight="500"
        position="absolute"
        right=".3rem"
        onClick={() => search(textSearch)}
      >
        Pesquisar
      </ButtonStyled>
    </FlexDiv>
  );
}

export default Search;
