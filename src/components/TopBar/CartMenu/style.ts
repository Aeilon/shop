import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Menu = styled.div<{
  cartActive: boolean;
  cartItems: SingleItem[];
}>`
  position: absolute;
  cursor: auto;
  top: 5rem;
  z-index: 2;
  right: -2.5rem;

  min-height: 5rem;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  flex-direction: column;
  display: ${({ cartActive }) => (cartActive ? "flex" : "none")};

  ${({ cartItems }) =>
    cartItems.length === 0
      ? css`
          justify-content: center;
          align-items: center;
          width: 20rem;
        `
      : css`
          justify-content: space-evenly;
          align-items: flex-start;
          width: 40rem;
        `}

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.gray};
  }
`;
export const DropdownLine = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.light};
  width: 100%;
`;

export const ButtonDiv = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;

  &:hover {
    background: #f7f7f7;
    p {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  p {
    font-size: 1.5rem;
  }
`;
