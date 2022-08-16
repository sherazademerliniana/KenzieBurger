import { Title } from "../../styles/typography";
import { FlexResult } from "./style";

export function Result({ textSearch }) {
  return (
    <>
      {textSearch !== "" && (
        <FlexResult className="result">
          <Title tag="h1" titleSize="title1" color="#333333">
            Resultado para:
          </Title>
          <Title tag="h1" titleSize="title1" color="#828282">
            {textSearch}
          </Title>
        </FlexResult>
      )}
    </>
  );
}
