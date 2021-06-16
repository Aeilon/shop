import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Main = styled.div`
  width: ${({ theme }) => theme.wrapperWidth};
  height: 58.9rem;
  display: flex;
  margin: 3rem auto 5rem auto;
  border: 1px solid ${({ theme }) => theme.color.light};
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.color.light};
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 45rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  user-select: none;

  img {
    width: auto;
    height: 100%;
  }
`;

export const SmallImagesBox = styled.div`
  width: 100%;
  height: 13.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SmallImage = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.light};
  margin: 0 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;

  img {
    width: 90%;
    height: 90%;
  }
`;

export const ItemBox = styled.div`
  width: 50%;
  height: 100%;
  padding: 3rem 3.45rem;
`;

export const TopInfo = styled.div`
  width: 100%;
  min-height: 12rem;
  display: flex;
  padding-bottom: 1.5rem;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 1px solid ${({ theme }) => theme.color.light};
`;

export const Category = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: 1.5rem;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    text-decoration: underline;
  }
`;
export const Name = styled.h3`
  font-size: 2.75rem;
  color: ${({ theme }) => theme.color.grayDark};
`;
export const TopSpanDiv = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 1.5rem;
    padding-right: 2.5rem;
  }
`;
export const FavBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    p {
      text-decoration: underline;
    }
  }
  p {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.gray};
  }
`;
export const MidInfo = styled.div`
  width: 100%;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
`;

export const Description = styled.div`
  width: 100%;
  height: 10rem;

  p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.grayDark};
    line-height: 2.2rem;
  }
`;

export const StyledTable = styled.table`
  font-size: 1.6rem;
  height: 7rem;
  td {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.grayDark};
  }
  th {
    font-size: 1.6rem;
    display: flex;
    color: ${({ theme }) => theme.color.grayDark};
  }
`;

export const SizeDiv = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.color.grayLight};
  }
`;

export const ButtonLabel = styled.label<{
  pickedOption: string;
  value: string;
}>`
  height: 3.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background: ${({ theme }) => theme.color.white};

  ${({ pickedOption, value, theme }) =>
    pickedOption === value
      ? css`
          border: 2px solid ${theme.color.primary};

          &:hover {
            border: 2px solid ${theme.color.primary};
          }
        `
      : css`
          border: 2px solid ${theme.color.light};
          &:hover {
            border: 2px solid ${theme.color.grayLight};
          }
        `}

  span {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  input {
    display: none;
  }
`;

export const OptionsBox = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  ${ButtonLabel} {
    margin-left: 1.5rem;

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const PriceBox = styled.div`
  display: flex;
  height: 4rem;
  align-items: flex-end;
  width: 100%;

  p {
    font-weight: 500;
    font-size: 2.5rem;
  }

  p:nth-child(2) {
    margin-left: 1rem;
    color: #969696;
    font-size: 1.5rem;
    text-decoration: line-through;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: flex-end;
`;

export const BlueButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.primary};
  height: 3.75rem;
  width: 8rem;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 0.6rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.primary};
  transition: background 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
    transition: background 0.1s ease-in-out;
  }
`;

export const WhiteButton = styled.button`
  height: 3.75rem;
  width: 11.1rem;
  cursor: pointer;
  border-radius: 0.6rem;
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 1rem;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grayLight};
  transition: background 0.1s ease-in-out, border 0.1s ease-in-out,
    color 0.1s ease-in-out;
  color: ${({ theme }) => theme.color.grayDark};

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.gray};
    color: black;
    transition: background 0.1s ease-in-out, border 0.1s ease-in-out,
      color 0.1s ease-in-out;
    background: #f0f0f0;
  }
`;
export const Arrows = styled.p`
  font-size: 3.5rem;
`;
export const ArrowRight = styled(FontAwesomeIcon)`
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
`;

export const ArrowLeft = styled(ArrowRight)`
  left: 1rem;
`;
