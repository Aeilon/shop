import styled from "styled-components";

export const Main = styled.div`
  width: ${({ theme }) => theme.wrapperWidth};
  height: 18rem;
  display: flex;
  flex-direction: column;
  margin: 4.5rem auto 4.5rem auto;
`;

export const TitleBox = styled.div`
  height: 5.4rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
`;

export const BrandsBox = styled.div`
  display: flex;
  width: auto;
  height: 12.6rem;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  filter: grayscale(100%);
  opacity: 0.7;
  transition: filter 2s ease-in-out, opacity 2s ease-in-out;

  &:hover {
    filter: grayscale(0);
    opacity: 1;
    transition: filter 0.15s ease-in-out, opacity 0.1s ease-in-out;
  }
`;
