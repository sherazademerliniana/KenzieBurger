import styled from "styled-components";

export const ContainerProduct = styled.ul`
  display: flex;
  width: 100%;
  max-width: 500px;
  padding: 1rem 2rem 1rem 2rem;
  overflow: auto;
  gap: 0.7rem;

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid #e0e0e0;
    border-radius: 0.3rem;
    width: 100%;

    figure {
      width: 100%;
      height: 100%;
      background-color: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 300px;
        height: 150px;
        padding: 0.5rem;
        object-fit: contain;
      }
    }

    .product__info {
      flex-direction: column;
      gap: 0.7rem;
      padding: 1rem;
    }
  }

  @media (min-width: 580px) {
    max-width: 700px;
  }

  @media (min-width: 800px) {
    display: inline-flex;
    flex-direction: column;
    max-width: 800px;
    padding: 1rem 4rem 1rem 4rem;
    margin: 0 auto;
    overflow: none;

    li {
      width: calc((100% - 4rem) / 2);
      margin: 0 auto;
    }
  }

  @media (min-width: 900px) {
    display: inline-flex;
    flex-direction: row;
    max-width: 900px;
    padding: 1rem 4rem 1rem 4rem;
    margin: 0 auto;
    flex-wrap: wrap;

    li {
      width: calc((100% - 10rem) / 2);
      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 600px;
    padding: 1rem 1rem 1rem 4rem;
    flex-wrap: wrap;

    li {
      margin: 0;
      width: 48%;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 600px;
    padding: 1rem 1rem 1rem 3rem;
    flex-wrap: wrap;

    li {
      margin: 0;
      width: 48%;
    }
  }

  @media (min-width: 1240px) {
    flex-direction: row;
    max-width: 800px;
    padding: 1rem 1rem 1rem 4rem;
    flex-wrap: wrap;

    li {
      margin: 0;
      width: calc((100% - 2rem) / 3);
    }

    @media (min-width: 1500px) {
      flex-direction: row;
      max-width: 1024px;
      padding: 1rem 1rem 1rem 4rem;
      flex-wrap: wrap;

      li {
        margin: 0;
        width: calc((100% - 3rem) / 3);
      }
    }

    @media (min-width: 2040px) {
      flex-direction: row;
      max-width: 1500px;
      padding: 1rem 1rem 1rem 7rem;
      flex-wrap: wrap;

      li {
        margin: 0;
        width: calc((100% - 3rem) / 4);
      }
    }

    @media (min-width: 2500px) {
      flex-direction: row;
      max-width: 2000px;
      padding: 1rem 1rem 1rem 12rem;
      flex-wrap: wrap;

      li {
        margin: 0;
        width: calc((100% - 3rem) / 4);
      }
    }
  }
`;

// display: flex;
//   flex-direction: column;
//   border: 2px solid #e0e0e0;
//   border-radius: 0.3rem;

//   @media (min-width: 300px) {
//     width: calc(100%-3rem) / 2;
//   }

//   @media (min-width: 1024px) {
//     width: calc((100% - 4rem) / 2);
//   }

//   @media (min-width: 1280px) {
//     width: calc((100% - 3rem) / 3);
//   }

//   @media (min-width: 2050px) {
//     width: calc((100% - 3rem) / 4);
//   }

//   figure {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: #f5f5f5;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;

//     img {
//       display: flex;
//       align-items: center;
//       width: 80%;
//     }

//     @media (min-width: 720px) {
//       img {
//         width: 60%;
//       }
//     }

//     @media (min-width: 1024px) and (max-width: 1220px) {
//       img {
//         width: 70%;
//       }
//     }
//   }
