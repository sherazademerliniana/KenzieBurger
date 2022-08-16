import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 0.7rem 7rem 0.7rem 0.7rem;
  color: #e0e0e0;
  border: 2px solid #e0e0e0;
  border-radius: 0.5rem;
  font-size: 1rem;
  width: 100%;

  ::placeholder {
    color: #e0e0e0;
  }

  :focus {
    color: #828282;
    border: 2px solid #333333;
    ::placeholder {
      color: #828282;
    }
  }
`;
