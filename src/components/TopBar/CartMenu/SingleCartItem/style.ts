import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ItemDiv = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: ${({ theme }) => theme.color.grayDark};
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 400;
  }

  img {
    height: 90%;
  }
`;

export const DropdownItem = styled.div`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #f7f7f7;
  }
`;

export const StyledP = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  color: red;
`;

export const MinusIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.6rem;
  height: 1.6rem;
`;
