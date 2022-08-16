import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }

    ul,ol{
        list-style: none;
    }

    image{
        max-width :100%;
        max-height: 100%;
    }
`;

export const FlexDiv = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.wrap};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  border-radius: ${(props) => props.border};
  background-color: ${(props) => props.backgroundColor};
  float: ${(props) => props.float};
  padding: ${(props) => props.pad};
  position: ${(props) => props.position};
`;
