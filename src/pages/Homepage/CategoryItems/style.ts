import styled from "styled-components";

export const Main = styled.div`
  width: ${({ theme }) => theme.wrapperWidth};
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 4.5rem auto 0 auto;
`;

export const CategoryBox = styled.div`
  height: 6.4rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const CategoryName = styled.h2`
  font-size: 2.8rem;
`;

export const ItemsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 3.2rem;
  grid-row-gap: 1.6rem;
`;
