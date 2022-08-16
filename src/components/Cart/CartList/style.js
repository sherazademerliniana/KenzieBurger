import styled from "styled-components";

export const CartContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 300px;
  overflow: auto;

  @media (min-width: 2020) {
    max-height: 500px;
  }
`;
