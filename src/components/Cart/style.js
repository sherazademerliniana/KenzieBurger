import styled from "styled-components";

export const CartStyled = styled.div`
  padding: 0.5rem;
  .cart__void {
    padding: 4rem 1.5rem 4rem 1.5rem;
  }

  @media (min-width: 800px) {
    padding: 3rem 3rem 0.5rem 3rem;
  }

  @media (min-width: 1020px) {
    float: right;
    width: 32%;
    padding: 1rem 3rem 0 0;

    .cart__void {
      padding: 3rem 1.5rem 3rem 1.5rem;
    }
  }

  @media (min-width: 1220px) {
    float: right;
    width: 30%;
    padding: 1rem 5rem 0 0;

    .cart__void {
      padding: 3rem 1.5rem 3rem 1.5rem;
    }
  }

  @media (min-width: 1500px) {
    float: right;
    width: 29%;
    padding: 1rem 5rem 0 0;

    .cart__void {
      padding: 4rem 1.5rem 4rem 1.5rem;
    }
  }

  @media (min-width: 2040px) {
    float: right;
    width: 25%;
    padding: 1rem 7rem 0 0;

    .cart__void {
      padding: 4rem 1.5rem 4rem 1.5rem;
    }
  }

  @media (min-width: 2500px) {
    float: right;
    width: 28%;
    padding: 1rem 12rem 0 0;

    .cart__void {
      padding: 4rem 1.5rem 4rem 1.5rem;
    }
  }
`;
