import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  font-size: 1rem;
  font-weight: ${(props) => props.weight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  background-color: transparent;
  border: none;

  ${(props) => {
    switch (props.typeButton) {
      case "default":
        return css`
          color: #ffffff;
          background-color: #27ae60;
          border: 2px solid #27ae60;

          :disabled {
            background-color: #93d7af;
            border: 2px solid #93d7af;
          }

          :hover {
            background: #828282;
            border: 2px solid #828282;
          }
        `;

      case "cartRemove":
        return css`
          color: #828282;
          background-color: #e0e0e0;
          border: 2px solid #e0e0e0;
          :hover {
            color: #e0e0e0;
            background-color: #828282;
            border: 2px solid #828282;
          }
        `;

      case "remove":
        return css`
          color: #828282;
          font-size: 0.75rem;
          padding: 0;
          :hover {
            color: #333333;
            text-decoration-line: underline;
            background: transparent;
            border: none;
          }
        `;

      default:
        return false;
    }
  }}
`;
