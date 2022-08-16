import styled, { css } from "styled-components";
import { BaseTypography } from "../components/BaseTypography";

export const Title = styled(BaseTypography)`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.pad};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.border};

  ${(props) => {
    switch (props.titleSize) {
      case "title1":
        return css`
          font-size: 1.6rem;
        `;
      case "title2":
        return css`
          font-size: 1.3rem;
        `;

      case "title3":
        return css`
          font-size: 1.1rem;
        `;

      case "title4":
        return css`
          font-size: 0.9rem;
        `;

      case "title5":
        return css`
          font-size: 1rem;
          font-weight: ${(props) => props.weigth};
        `;

      case "body":
        return css`
          font-size: 0.9rem;
          font-weight: ${(props) => {
            switch (props.weigth) {
              case "semiBold":
                return 600;
              default:
                return 400;
            }
          }};
        `;

      case "caption":
        return css`
          font-weight: ${(props) => props.weigth};
          font-size: 0.75rem;
        `;

      default:
        return false;
    }
  }}
`;
