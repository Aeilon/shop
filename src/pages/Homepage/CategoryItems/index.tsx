import React from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";

const Main = styled.div`
  width: ${({ theme }) => theme.wrapperWidth};
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 4.5rem auto 0 auto;
  cursor: pointer;
`;

const CategoryBox = styled.div`
  height: 6.4rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

const CategoryName = styled.h2`
  font-size: 2.8rem;
`;

const ItemsBox = styled.div`
  display: flex;
  width: auto;
  min-height: 30.8rem;
  flex-wrap: wrap;
`;

interface Props {
  categoryName: string;
}

const CategoryItems: React.FC<Props> = (props) => {
  return (
    <Main>
      <CategoryBox>
        <CategoryName>{props.categoryName}</CategoryName>
      </CategoryBox>
      <ItemsBox>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </ItemsBox>
    </Main>
  );
};

export default CategoryItems;
