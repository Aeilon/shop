import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = styled.div`
  position: absolute;
  top: 5rem;
  right: -2.5rem;
  width: 14rem;
  height: 11rem;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;
export const DropdownLine = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.light};
  width: 100%;
`;

export const DropdownItem = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #f8f8f8;
  }
`;
export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  width: 75%;
  margin: auto;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const StyledP = styled.p`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  width: 75%;
  margin: auto;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
