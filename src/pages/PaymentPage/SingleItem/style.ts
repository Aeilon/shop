import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Main = styled.div`
  height: 11rem;
  width: 100%;
  margin-top: 0.5rem;
  padding: 1.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageBox = styled.div`
  border: 1px solid ${({ theme }) => theme.color.light};
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
    height: 90%;
  }
`;

export const DescriptionBox = styled.div`
  width: 15rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Category = styled(Link)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.grayLight};
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    text-decoration: underline;
  }
`;

export const Name = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 400;
  color: black;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const NumberBox = styled.div`
  height: 3.8rem;
  width: 12.7rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftButton = styled.button`
  width: 4.2rem;
  height: 100%;
  background: white;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 3rem;
  color: ${({ theme }) => theme.color.grayLight};
  transition: background 0.15s ease-in-out, border 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    background: rgb(247, 247, 247);
    border: 1px solid ${({ theme }) => theme.color.secondary};
    transition: background 0.15s ease-in-out, border 0.15s ease-in-out;
  }
`;

export const RightButton = styled(LeftButton)`
  border-radius: 0.5rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const ItemsNumber = styled.div`
  border: none;
  height: 100%;
  width: 4.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.color.light};
  border-bottom: 1px solid ${({ theme }) => theme.color.light};

  &:focus {
    box-shadow: 0 0 3px ${({ theme }) => theme.color.primaryLight};
    outline-offset: 0;
    outline: none;
    transition: box-shadow 0.15s ease-in-out;
  }

  p {
    font-size: 1.5rem;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.grayLight};
`;

export const Price = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  width: 11rem;
`;

export const RemoveBox = styled.div`
  width: 3.781rem;
  height: 3.75rem;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.15s ease-in-out, border 0.15s ease-in-out;

  &:hover {
    background: rgb(247, 247, 247);
    border: 1px solid ${({ theme }) => theme.color.secondary};
    transition: background 0.15s ease-in-out, border 0.15s ease-in-out;
  }
`;
