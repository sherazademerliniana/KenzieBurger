import styled from "styled-components";

export const Head = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  width: 100%;
  padding: 0.5rem;

  .header__logo {
    padding: 0.5rem;
  }

  .header__search {
    width: 90%;
  }

  @media (min-width: 800px) {
    .header__search {
      width: 60%;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 3rem 1rem 3rem;

    .header__search {
      width: 30%;
    }
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 5rem 1rem 5rem;

    .header__search {
      width: 27%;
    }
  }

  @media (min-width: 2040px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 7rem 1rem 7rem;

    .header__search {
      width: 22%;
    }
  }

  @media (min-width: 2500px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 12rem 1rem 12rem;

    .header__search {
      width: 25%;
    }
  }
`;
